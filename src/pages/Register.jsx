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
      .then(() => {
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
        {/* Left side animation & text */}
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '300px' }} animationData={registerLottie} loop />
          <h2 className="text-3xl font-semibold mt-4">
            Join <span className="text-primary">Acadex</span> Today!
          </h2>
          <p className="text-gray-600 mt-2">
            Create an account to start exploring top-rated courses
          </p>
        </div>

        {/* Form Card */}
        <div className="card w-full max-w-md shadow-2xl bg-base-100 rounded-lg">
          <form
            onSubmit={handleRegister}
            className="card-body px-10 py-8 bg-base-100 rounded-lg"
          >
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-400">Register</h1>

            {/* Name Field */}
            <div className="form-control mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-control mb-5">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-400 mb-1">
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                placeholder="Link to your profile photo"
                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control mb-5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control mb-5">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none text-lg"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-center text-sm mb-6 font-medium">{error}</p>
            )}

            {/* Register Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-xl font-bold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Register
              </button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?{' '}
              <a href="/signIn" className="link link-primary font-semibold hover:underline">
                Sign In
              </a>
            </p>

            {/* Divider */}
            <div className="divider mt-8 mb-4">OR</div>

            {/* Social Login Buttons */}
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
