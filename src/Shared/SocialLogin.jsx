import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContexts } from "../contexts/AuthContexts";

const SocialLogin = ({ from }) => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContexts);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from || '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result);
        navigate(from || '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
      <div className="divider">OR</div>

      <button
        onClick={handleGitHubSignIn}
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <img
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt="GitHub"
          className="w-5 h-5 mr-2"
        />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
