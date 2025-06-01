
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Connect with us.</h2>
        
        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row max-w-md mx-auto mb-8">
          <input
            type="email"
            placeholder="email@example.com"
            className="flex-1 px-4 py-3 text-gray-700 bg-white border-0 rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="bg-black text-white px-8 py-3 rounded-r-lg sm:rounded-l-none hover:bg-gray-800 transition-colors font-semibold">
            Join
          </button>
        </div>
        
        {/* Contact Email and Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <p className="text-lg">
            Email us at: support@trustified.in
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/trustified.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.youtube.com/@Trustified-Certification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/Trustified.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            © 2024 ARPIT TRUSTIFIED CERTIFICATION PRIVATE LIMITED All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
