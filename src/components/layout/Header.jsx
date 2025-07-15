import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinkClasses = "text-gray-700 hover:text-purple-600 transition-colors font-medium";
  const activeNavLinkClasses = "text-purple-600 font-semibold";
  const mobileNavLinkClasses = "block text-gray-700 hover:text-purple-600 transition-colors font-medium py-3 px-4 border-b border-gray-100";
  const mobileActiveNavLinkClasses = "text-purple-600 font-semibold";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/903f55aa-d7cb-404b-9401-efbbcd490653/77b4d75948ad207d0f5e3fc2f26b63f8.jpg" 
                alt="Serene Touch Care Services Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-purple-700">Serene Touch</h1>
                <p className="text-sm text-green-600 font-medium">Care Services</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>About</NavLink>
            <a href="/#services" className={navLinkClasses}>Services</a>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>Contact</NavLink>
            <Link to="/contact">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-4"
            >
              <nav className="py-2">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? `${mobileNavLinkClasses} ${mobileActiveNavLinkClasses}` : mobileNavLinkClasses}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? `${mobileNavLinkClasses} ${mobileActiveNavLinkClasses}` : mobileNavLinkClasses}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
                <a 
                  href="/#services" 
                  className={mobileNavLinkClasses}
                  onClick={closeMenu}
                >
                  Services
                </a>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? `${mobileNavLinkClasses} ${mobileActiveNavLinkClasses}` : mobileNavLinkClasses}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
                <div className="px-4 py-3">
                  <Link to="/contact" onClick={closeMenu}>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;