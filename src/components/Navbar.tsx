
import React, { useState } from 'react';
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
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Trustified</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Get Started</Button>
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
            <a 
              href="#features" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              How it works
            </a>
            <a 
              href="#testimonials" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button variant="outline" className="w-full">Log in</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
