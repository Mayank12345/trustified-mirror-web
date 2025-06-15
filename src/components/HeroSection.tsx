import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate('/passandfail');
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background with product images and overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/24be5b58-aad2-43d0-8879-621be7dbdcab.png"
          alt="Supplement testing background"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-16 md:py-20">
        <div className="text-center px-2 md:px-4 max-w-5xl w-full mx-auto relative">
          {/* Product callouts */}
          <div className="hidden lg:block absolute -top-10 left-5">
            <div className="bg-amber-500 text-black px-5 py-2 rounded-lg speech-bubble font-bold text-sm shadow">
              "I AM CREATINE BUT FILLED WITH TALC"
            </div>
          </div>
          <div className="hidden lg:block absolute -top-10 right-5">
            <div className="bg-amber-500 text-black px-5 py-2 rounded-lg speech-bubble font-bold text-sm shadow">
              "I AM AMINO SPIKED"
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-7 leading-tight tracking-tight">
            100% Blind Testing
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white mb-12 font-medium">
            Choose Safe. Be Safe
          </p>
          
          {/* View Products Button */}
          <div className="mb-10">
            <Button 
              className="bg-green-500 hover:bg-green-600 px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-all rounded-2xl focus-visible:ring-2 focus-visible:ring-green-400"
              onClick={handleViewProducts}
              aria-label="View tested products"
            >
              View Tested Products
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom section with process preview and app downloads */}
      <div className="relative z-10 bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-2 md:px-4 max-w-6xl">
          {/* Process preview */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How our certification <span className="text-green-600">process works?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 md:mb-12">
              We follow a rigorous 4-step process to ensure your supplements are safe and authentic
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center mb-8 md:mb-16">
              <a 
                href="https://play.google.com/store/apps/details?id=com.trustified.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 rounded-lg"
                aria-label="Download Trustified app from Google Play Store"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 md:h-16"
                  loading="lazy"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/trustified/id6473800943" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 rounded-lg"
                aria-label="Download Trustified app from Apple App Store"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12 md:h-16"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          
          {/* Process steps preview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center mb-5 md:mb-6 relative shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-3 border-green-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-green-600 font-bold text-base md:text-lg shadow-md">
                  1
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">Purchase Products</h3>
              <p className="text-gray-600 text-sm md:text-base">We buy products anonymously from retail stores</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center mb-5 md:mb-6 relative shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-3 border-green-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-green-600 font-bold text-base md:text-lg shadow-md">
                  2
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">Lab Testing</h3>
              <p className="text-gray-600 text-sm md:text-base">Independent laboratory analysis for safety</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center mb-5 md:mb-6 relative shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-3 border-green-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-green-600 font-bold text-base md:text-lg shadow-md">
                  3
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">Generate Reports</h3>
              <p className="text-gray-600 text-sm md:text-base">Detailed lab reports with complete analysis</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-full flex items-center justify-center mb-5 md:mb-6 relative shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-600 rounded"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-3 border-green-600 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-green-600 font-bold text-base md:text-lg shadow-md">
                  4
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">Publish Results</h3>
              <p className="text-gray-600 text-sm md:text-base">Transparent results to help consumers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
