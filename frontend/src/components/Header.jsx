import React, { useState } from "react";
import { Link } from "react-router-dom";
import FB from "../assets/fb.png";
import IG from "../assets/ig.png";
import "../App.css";

const Header = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-brown-306 text-white p-6 font-futura">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl hover:text-gray-200">
            <h1>Personal Page</h1>
          </Link>
          {/* Hamburger menu button for mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* Desktop Menu */}
          <nav className={`mobile sm:flex items-center`}>
            <Link
              to="/about"
              className="text-lg text-white p-2 hover:text-gray-200"
            >
              About
            </Link>
            <a
              href="https://www.instagram.com/eevolution.ntu/"
              className="text-white p-2 hover:grayscale"
            >
              <img src={IG} alt="Instagram icon" className="h-11 w-8" />
            </a>
            <a
              href="https://www.facebook.com/ntuee.org"
              className="text-white p-2 hover:grayscale"
            >
              <img src={FB} alt="Facebook icon" className="h-9 w-7" />
            </a>
          </nav>
        </div>
      </header>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-brown-306 text-white p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className="text-4xl mb-8 hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-4xl mb-8 hover:text-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex justify-between items-center">
              <a
                href="https://www.instagram.com/eevolution.ntu/"
                className="text-white p-2 hover:grayscale"
              >
                <img src={IG} alt="Instagram icon" className="h-11 w-8" />
              </a>
              <a
                href="https://www.facebook.com/ntuee.org"
                className="text-white p-2 hover:grayscale"
              >
                <img src={FB} alt="Facebook icon" className="h-9 w-7" />
              </a>
            </div>
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              {/* Close Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
