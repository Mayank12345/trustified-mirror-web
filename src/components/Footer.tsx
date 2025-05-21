
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Trustified</span>
            </a>
            <p className="mt-2 text-gray-500 max-w-xs">
              Blockchain-powered digital credentials for the modern world. Secure, verifiable, and always accessible.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Templates</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">API</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Integration</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Webinars</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trustified. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
