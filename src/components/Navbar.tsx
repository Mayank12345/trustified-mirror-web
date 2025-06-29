import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GlobalSearch from '@/components/ui/enhanced-search';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 xl:px-8">
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <span className="text-2xl md:text-3xl font-extrabold text-gray-900">Trustified</span>
            </Link>
          </div>

          {/* Global Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 font-semibold">
            <li>
              <Link
                to="/"
                className="text-base text-gray-900 opacity-80 px-2 py-2 rounded transition-colors duration-150 hover:text-green-600 focus:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/passandfail"
                className="text-base text-gray-900 opacity-80 px-2 py-2 rounded transition-colors duration-150 hover:text-green-600 focus:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                PASS/FAIL
              </Link>
            </li>
            <li>
              <Link
                to="/gold"
                className="text-base text-gray-900 opacity-80 px-2 py-2 rounded transition-colors duration-150 hover:text-green-600 focus:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                GOLD
              </Link>
            </li>
            <li>
              <Link
                to="/get-certified"
                className="text-base text-gray-900 opacity-80 px-2 py-2 rounded transition-colors duration-150 hover:text-green-600 focus:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                GET CERTIFIED
              </Link>
            </li>
            <li>
              <Link
                to="/nmr-reports"
                className="text-base text-gray-900 opacity-80 px-2 py-2 rounded transition-colors duration-150 hover:text-green-600 focus:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                NMR REPORTS
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            style={{ minWidth: '44px', minHeight: '44px' }} // Ensure 44px touch target
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 border-t shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 max-w-md">
            {/* Mobile Search */}
            <div className="mb-4">
              <GlobalSearch />
            </div>
            
            <Link
              to="/"
              className="px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-green-50 rounded focus:bg-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={toggleMobileMenu}
              tabIndex={0}
              style={{ minHeight: '44px' }} // Ensure 44px touch target
            >
              ABOUT
            </Link>
            <Link
              to="/passandfail"
              className="px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-green-50 rounded focus:bg-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={toggleMobileMenu}
              tabIndex={0}
              style={{ minHeight: '44px' }}
            >
              PASS/FAIL
            </Link>
            <Link
              to="/gold"
              className="px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-green-50 rounded focus:bg-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={toggleMobileMenu}
              tabIndex={0}
              style={{ minHeight: '44px' }}
            >
              GOLD
            </Link>
            <Link
              to="/get-certified"
              className="px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-green-50 rounded focus:bg-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={toggleMobileMenu}
              tabIndex={0}
              style={{ minHeight: '44px' }}
            >
              GET CERTIFIED
            </Link>
            <Link
              to="/nmr-reports"
              className="px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-green-50 rounded focus:bg-green-100 transition-colors focus-visible:ring-2 focus-visible:ring-green-500"
              onClick={toggleMobileMenu}
              tabIndex={0}
              style={{ minHeight: '44px' }}
            >
              NMR REPORTS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;