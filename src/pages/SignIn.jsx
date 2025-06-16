import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log('Sign in with:', { email, password });
    // এখানে তোমার sign-in logic যোগ করো
  };

  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold mt-4">
            Welcome back to <span className="text-primary">Acadex</span>!
          </h2>
          <p className="text-gray-600 mt-2">Access your courses and learning dashboard</p>
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>

            {/* Email Field */}
            <div className="form-control mb-4">
              <label className="label mb-1 block">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control mt-2 mb-4">
              <label className="label mb-1 block">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                </span>
              </div>
              <label className="label">
                <a href="/forgot-password" className="label-text-alt link link-hover text-sm text-blue-500">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
