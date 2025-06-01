
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
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Product callouts */}
          <div className="hidden lg:block absolute -top-16 left-20">
            <div className="bg-amber-500 text-black px-6 py-3 rounded-lg speech-bubble font-bold text-sm">
              "I AM CREATINE BUT FILLED WITH TALC"
            </div>
          </div>
          <div className="hidden lg:block absolute -top-16 right-20">
            <div className="bg-amber-500 text-black px-6 py-3 rounded-lg speech-bubble font-bold text-sm">
              "I AM AMINO SPIKED"
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-tight tracking-tight">
            100% Blind Testing
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-16 font-medium">
            Choose Safe. Be Safe
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-3xl mx-auto mb-16">
            <input
              type="text"
              placeholder="Search our certified products"
              className="flex-1 px-8 py-5 text-gray-900 text-lg rounded-l-xl focus:outline-none focus:ring-4 focus:ring-green-500/50 shadow-lg"
            />
            <Button className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-r-xl rounded-l-none text-lg shadow-lg">
              <Search className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom section with process preview and app downloads */}
      <div className="relative z-10 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Process preview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How our certification <span className="text-green-600">process works?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a rigorous 4-step process to ensure your supplements are safe and authentic
            </p>
          </div>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-16"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-16"
              />
            </a>
          </div>
          
          {/* Process icons preview with steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-green-600 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Purchase Products</h3>
              <p className="text-sm text-gray-600">We buy products anonymously from retail stores</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-green-600 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lab Testing</h3>
              <p className="text-sm text-gray-600">Independent laboratory analysis for safety</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-green-600 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Generate Reports</h3>
              <p className="text-sm text-gray-600">Detailed lab reports with complete analysis</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-4 relative">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-green-600 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Publish Results</h3>
              <p className="text-sm text-gray-600">Transparent results to help consumers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
