import React, { useState } from 'react';
import Logo from '../assets/CheveningLogo.png';
import './Navbar.css';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={Logo} 
            alt="Chevening Logo" 
            className="h-12"
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="hidden max-[648px]:block z-20" 
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links */}
        <div className={`links flex items-center space-x-8
          max-[648px]:fixed max-[648px]:inset-0 max-[648px]:bg-white 
          max-[648px]:flex-col max-[648px]:justify-center max-[648px]:space-x-0 max-[648px]:space-y-8
          max-[648px]:transition-transform max-[648px]:duration-300
          ${isOpen ? 'max-[648px]:translate-x-0' : 'max-[648px]:translate-x-full'}`}>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="/events" className="text-gray-600 hover:text-gray-900">Events</a>
          <button className="bg-neutral-950 text-white px-6 py-2 rounded">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;