import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 p-10 text-base-content">
      <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & Slogan */}
        <div className="text-xl font-bold flex items-center gap-2 text-primary flex-col">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <FaGraduationCap className="text-3xl" />
            Academix
          </h2>
          <p className="mt-2 text-gray-600">Empowering Learning, Everywhere</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <span className=" text-2xl font-bold text-primary">Explore</span>
          <Link
            to="/about"
            className="link link-hover  text-md text-gray-800 hover:text-primary"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="link link-hover  text-md text-gray-800 hover:text-primary"
          >
            Courses
          </Link>
          <Link
            to="/addCourse"
            className="link link-hover  text-md text-gray-600 hover:text-primary"
          >
            Add Course
          </Link>
          <Link
            to="/myPopularCourse"
            className="link link-hover  text-md text-gray-600 hover:text-primary"
          >
            My Popular Course
          </Link>
        </div>

        {/* Column 3: Support + Social Icons */}
        <div>
          <span className="text-2xl font-bold text-primary">Support</span>
          <Link
            to="/my-enrollments"
            className="link link-hover text-md text-gray-700 hover:text-primary"
          >
            My Enrollments
          </Link>
          <Link
            to="/contactUs"
            className="link link-hover  text-md text-gray-700 hover:text-primary"
          >
            Contact Us
          </Link>
          <Link
            to="/faq"
            className="link link-hover  text-md text-gray-700 hover:text-primary"
          >
            FAQ
          </Link>

          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-gray-700 hover:text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl text-gray-700 hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-gray-700 hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
