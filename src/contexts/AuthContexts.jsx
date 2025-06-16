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

  // Create account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email/password (renamed to match usage)
  const signInWithEmailPassword = (email, password) => {
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
    signInWithEmailPassword,  
    signOutUser,
    signInWithGoogle,
    updateUserProfile
  };

  return (
    <AuthContexts.Provider value={authInfo}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
