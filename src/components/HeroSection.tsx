
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background with product images and overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/24be5b58-aad2-43d0-8879-621be7dbdcab.png"
          alt="Supplement testing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Product callouts */}
          <div className="hidden md:block absolute top-20 left-10">
            <div className="bg-amber-600 text-white px-4 py-2 rounded speech-bubble">
              "I AM CREATINE BUT FILLED WITH TALC"
            </div>
          </div>
          <div className="hidden md:block absolute top-20 right-10">
            <div className="bg-amber-600 text-white px-4 py-2 rounded speech-bubble">
              "I AM AMINO SPIKED"
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            100% Blind Testing
          </h1>
          <p className="text-xl md:text-3xl text-white mb-12 font-medium">
            Choose Safe. Be Safe
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search our certified products"
              className="flex-1 px-6 py-4 text-gray-900 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-r-lg rounded-l-none">
              <Search className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom section with process preview and app downloads */}
      <div className="relative z-10 bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Process preview */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              How our certification <span className="text-green-600">process works?</span>
            </h2>
          </div>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-16 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-16 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
          
          {/* Process icons preview */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <div className="w-8 h-1 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <div className="w-8 h-1 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
              <div className="w-8 h-1 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-white rounded opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
