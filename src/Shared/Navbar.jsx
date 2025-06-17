import React, { useContext, useState } from "react";
import { NavLink } from "react-router"; 
import { AuthContexts } from "../contexts/AuthContexts";
import ThemeToggle from "../components/ThemeToggle";
import { FaGraduationCap } from "react-icons/fa"; 

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContexts);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        setShowProfile(false);
        console.log("Signed out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/my-enrollments">My Enrollment Course</NavLink></li>
          <li><NavLink to="/addCourse">Add Course</NavLink></li>
          <li><NavLink to="/manageCourse">Manage Course</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 font-semibold relative w-11/12 mx-auto">
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

        {/* ✅ Logo and Text */}
        <NavLink to="/" className="btn btn-ghost text-xl font-bold flex items-center gap-2">
          <FaGraduationCap className="text-2xl text-primary" />
          Academix
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end space-x-2 relative">
        <ThemeToggle />
        {user ? (
          <div className="relative">
            <img
              src={user?.photoURL}
              onClick={() => setShowProfile(!showProfile)}
              alt="profile"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            />

            {showProfile && (
              <div className="absolute top-12 right-0 w-64 bg-white p-4 rounded-lg shadow-lg border z-50">
                <div className="text-center">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-12 h-12 mx-auto rounded-full mb-2 border"
                  />
                  <p className="font-bold">{user?.displayName || "User"}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm w-full mt-3"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/register" className="btn btn-outline btn-sm">
              Register
            </NavLink>
            <NavLink to="/signIn" className="btn btn-primary btn-sm">
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
