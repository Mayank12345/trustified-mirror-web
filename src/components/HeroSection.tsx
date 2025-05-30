
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/24be5b58-aad2-43d0-8879-621be7dbdcab.png"
          alt="Supplement testing background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          100% Blind Testing
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Choose Safe. Be Safe
        </p>
        
        {/* Search Bar */}
        <div className="flex max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search our certified products"
            className="flex-1 px-4 py-3 text-black rounded-l-lg focus:outline-none"
          />
          <Button className="bg-green-500 hover:bg-green-600 px-6 rounded-r-lg rounded-l-none">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
