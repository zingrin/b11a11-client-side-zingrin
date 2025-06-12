import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import app from '../firebase.config';

const auth = getAuth(app);

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email/password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  // Google login
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub login
  const signInWithGitHub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Update user profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    signIn,
    signOutUser,
    signInWithGoogle,
    signInWithGitHub,
    updateUserProfile
  };

  return (
    <AuthContexts.Provider value={authInfo}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
