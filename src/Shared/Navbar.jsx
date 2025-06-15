import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContexts } from '../contexts/AuthContexts';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContexts);

  const handleSingOut = () => {
    signOutUser()
      .then(() => {
        console.log('signed out user');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/contactUs">Contact Us</NavLink></li>

    {user && <>
      <li><NavLink to="/my-enrollments">My Enrollment Course</NavLink></li>
      <li><NavLink to="/addCourse">Add Course</NavLink></li>
    </>}
  </>;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">Academix</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <button onClick={handleSingOut} className="btn btn-outline btn-sm">Sign Out</button>
        ) : (
          <>
            <NavLink to="/register" className="btn btn-outline btn-sm">Register</NavLink>
            <NavLink to="/signIn" className="btn btn-primary btn-sm">Sign In</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
