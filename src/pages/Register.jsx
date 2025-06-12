import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import registerLottie from '../assets/register.json';
import { useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContexts } from '../contexts/AuthContexts';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContexts);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    setError('');
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo)
          .then(() => {
            console.log('User profile updated');
            navigate('/');
          })
          .catch(err => console.error('Profile update error:', err));
      })
      .catch((error) => {
        console.error('Registration error:', error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '300px' }} animationData={registerLottie} loop />
          <h2 className="text-3xl font-semibold mt-4">Join <span className="text-primary">Acadex</span> Today!</h2>
          <p className="text-gray-600 mt-2">Create an account to start exploring top-rated courses</p>
        </div>

        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl font-bold text-center mb-4">Register</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input name="name" type="text" placeholder="Your full name" className="input input-bordered" required />
            </div>

            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input name="photo" type="text" placeholder="Link to your profile photo" className="input input-bordered" required />
            </div>

            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
            </div>

            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input name="password" type="password" placeholder="Create a password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <input name="confirmPassword" type="password" placeholder="Confirm your password" className="input input-bordered" required />
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account? <a href="/signIn" className="link">Sign In</a>
            </p>

            <div className="divider">OR</div>
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
