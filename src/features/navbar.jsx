import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">WEB BLOG</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links and Buttons (Visible on large screens) */}
        <div className="hidden lg:flex items-center justify-center flex-grow space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </div>
        <div className="hidden lg:flex justify-between">
          <button className="mr-3 border border-gray-400 rounded-md px-2 py-2 transition duration-300 hover:bg-gray-600 hover:text-white">
            Sign up
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-800">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on small screens when open) */}
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <Link to="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="block hover:text-gray-400">
            About
          </Link>

          {/* Buttons inside the mobile menu */}
          <button className="block w-full border border-gray-400 rounded-md px-2 py-2 transition duration-300 hover:bg-gray-600 hover:text-white">
            Sign up
          </button>
          <button className="block w-full bg-blue-600 text-white rounded-md px-4 py-2 transition duration-300 hover:bg-blue-800">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
