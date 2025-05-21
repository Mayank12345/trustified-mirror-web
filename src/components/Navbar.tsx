
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">Trustified</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">ABOUT</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">CERTIFIED BRANDS</Link>
            <Link to="/passandfail" className="text-sm font-medium hover:text-primary transition-colors">PASS/FAIL</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">GOLD</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">GET CERTIFIED</Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">NMR REPORTS</Link>
          </nav>
          
          <div className="hidden md:flex items-center">
            <Button className="bg-green-500 hover:bg-green-600 rounded-full">SHOP →</Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              CERTIFIED BRANDS
            </Link>
            <Link 
              to="/passandfail" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              PASS/FAIL
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              GOLD
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              GET CERTIFIED
            </Link>
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              NMR REPORTS
            </Link>
            
            <div className="pt-4 border-t">
              <Button className="w-full bg-green-500 hover:bg-green-600 rounded-full">SHOP →</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
