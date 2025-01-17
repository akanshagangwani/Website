import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current route location

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
    setIsMobileMenuOpen(false);
  };

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    const start = window.scrollY;
    const end = document.documentElement.scrollHeight;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      window.scrollTo(0, start + (end - start) * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-black py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50 h-16 sm:h-15 md:h-15">
      {/* Logo and Navbar Items */}
      <div className="flex items-center gap-2">
        <img 
          src="/src/assets/logo.png" 
          alt="GameCraftor Logo" 
          className="h-12 w-12 object-contain"
        />
        <span className="text-white text-xl font-semibold">GameCraftor</span>
      </div>

      {/* Centered Download Button (hidden on mobile) */}
      <button className="bg-pink-500 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
        Download App
      </button>

      {/* Desktop/Tablet View (Links) */}
      <div className="hidden sm:flex items-center gap-8">
        <div className="flex items-center gap-6">
          
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
            onClick={scrollToTop}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
            onClick={scrollToTop}
          >
            About Us
          </Link>

          <button
            onClick={scrollToBottom}
            className="text-white hover:text-pink-400 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile View (Hamburger Icon) */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden absolute top-16 left-0 w-full bg-black p-6 transition-all ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center gap-4">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
            onClick={() => {
              scrollToTop();
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
            onClick={() => {
              scrollToTop();
              setIsMobileMenuOpen(false);
            }}
          >
            About Us
          </Link>

          <Link 
            to="/contact" 
            className="text-white hover:text-pink-400 transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          
          <button 
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;