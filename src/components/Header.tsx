import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClasses = (isMobile: boolean = false) => ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = isMobile ? 'block px-3 py-2 rounded-md text-base font-medium' : 'px-3 py-2 rounded-md text-sm font-medium';
    const activeClasses = 'bg-gray-800 text-white';
    const inactiveClasses = 'text-gray-600 hover:bg-gray-200 hover:text-gray-800';
    return `${baseClasses} transition-colors ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold text-gray-900 tracking-tight">
                AI Strategy
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getNavLinkClasses()}>
                Home
              </NavLink>
              <NavLink to="/aitools" className={getNavLinkClasses()}>
                AI Tools
              </NavLink>
              <NavLink to="/about" className={getNavLinkClasses()}>
                About
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={getNavLinkClasses(true)} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/aitools" className={getNavLinkClasses(true)} onClick={() => setIsMenuOpen(false)}>
              AI Tools
            </NavLink>
            <NavLink to="/about" className={getNavLinkClasses(true)} onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
