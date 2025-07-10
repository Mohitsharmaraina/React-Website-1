import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "/vite.svg"; // Corrected path assumption for Vite projects
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Timer", to: "/timer" },
    { name: "ToDoList", to: "/todo" },
    { name: "Counter", to: "/counter" },
  ];

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Always visible */}
        <div className="flex-shrink-0">
          <NavLink
            to="/"
            className="text-white text-2xl font-bold flex items-center"
          >
            <img src={logo} alt="Your Logo" className="h-8 w-8 mr-2" />{" "}
            <span className="hidden sm:block">My App</span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-gray-300 hover:text-white transition duration-200 ${
                  isActive ? "text-white font-bold" : "" // Active link styling
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" /> // Close icon
            ) : (
              <FaBars className="h-6 w-6" /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-700 rounded-md py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name} // Added key prop
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-2 transition duration-200 ${
                  isActive
                    ? "bg-gray-600 text-white font-bold" // Active link styling
                    : "text-gray-300 hover:bg-gray-600 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
