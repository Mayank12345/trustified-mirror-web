
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Trustified</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              ABOUT
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              CERTIFIED BRANDS
            </Link>
            <Link to="/passandfail" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              PASS/FAIL
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              GOLD
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              GET CERTIFIED
            </Link>
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              NMR REPORTS
            </Link>
          </nav>
          
          {/* Shop Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium">
              SHOP →
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              CERTIFIED BRANDS
            </Link>
            <Link 
              to="/passandfail" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              PASS/FAIL
            </Link>
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              GOLD
            </Link>
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              GET CERTIFIED
            </Link>
            <Link 
              to="/" 
              className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              NMR REPORTS
            </Link>
            
            <div className="pt-4 border-t">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full font-medium">
                SHOP →
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
