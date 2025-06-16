import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-base-200 p-10 text-base-content">
      <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold text-primary">Academix</h2>
          <p className="mt-2">Empowering Learning, Everywhere</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <span className="footer-title">Explore</span>
          <Link to="/about" className="link link-hover">About Us</Link>
          <Link to="/courses" className="link link-hover">Courses</Link>
          <Link to="/addCourse" className="link link-hover">Add Course</Link>
        </div>

        {/* Column 3: Support + Social Icons */}
        <div>
          <span className="footer-title">Support</span>
          <Link to="/enrolled" className="link link-hover">My Enrollments</Link>
          <Link to="/contactUs" className="link link-hover">Contact Us</Link>
          <Link to="/faq" className="link link-hover">FAQ</Link>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-sky-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
