
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-16 md:py-20">
        <div className="text-center px-2 md:px-4 max-w-5xl w-full mx-auto relative">
          {/* Product callouts with improved styling */}
          <div className="hidden lg:block absolute -top-10 left-5">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl speech-bubble font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
              "I AM CREATINE BUT FILLED WITH TALC"
            </div>
          </div>
          <div className="hidden lg:block absolute -top-10 right-5">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-xl speech-bubble font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
              "I AM AMINO SPIKED"
            </div>
          </div>
          
          {/* Main heading with enhanced styling */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-7 leading-tight tracking-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-white to-green-200 bg-clip-text text-transparent">
              100% Blind Testing
            </span>
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-green-100 mb-12 font-medium drop-shadow-lg">
            Choose Safe. Be Safe
          </p>
          
          {/* Enhanced View Products Button */}
          <div className="mb-10">
            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-12 py-6 md:px-16 md:py-8 text-lg md:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl focus-visible:ring-2 focus-visible:ring-green-400 transform hover:scale-105 hover:-translate-y-1"
              onClick={handleViewProducts}
              aria-label="View tested products"
            >
              View Tested Products
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom section with enhanced styling */}
      <div className="relative z-10 bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
        <div className="container mx-auto px-2 md:px-4 max-w-6xl">
          {/* Process preview with better typography */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How our certification <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">process works?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
              We follow a rigorous 4-step process to ensure your supplements are safe and authentic
            </p>
            
            {/* Enhanced App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-20">
              <a 
                href="https://play.google.com/store/apps/details?id=com.trustified.app" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30 rounded-lg shadow-lg hover:shadow-xl"
                aria-label="Download Trustified app from Google Play Store"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 md:h-18"
                  loading="lazy"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/trustified/id6473800943" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30 rounded-lg shadow-lg hover:shadow-xl"
                aria-label="Download Trustified app from Apple App Store"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-14 md:h-18"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          
          {/* Enhanced process steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white border-4 border-green-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl shadow-lg">
                  1
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Purchase Products</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">We buy products anonymously from retail stores</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white border-4 border-green-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl shadow-lg">
                  2
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Lab Testing</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">Independent laboratory analysis for safety</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white border-4 border-green-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl shadow-lg">
                  3
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Generate Reports</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">Detailed lab reports with complete analysis</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-inner">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg"></div>
                </div>
                <div className="absolute -top-3 -right-3 bg-white border-4 border-green-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl shadow-lg">
                  4
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-lg md:text-xl">Publish Results</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">Transparent results to help consumers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
