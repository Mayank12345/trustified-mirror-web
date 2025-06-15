
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleCheckProducts = () => {
    navigate('/passandfail');
  };

  const handleDownloadApp = () => {
    window.open('https://play.google.com/store/apps/details?id=com.trustified.app', '_blank');
  };

  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-10 md:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div className="relative grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Start checking supplement safety today
              </h2>
              <p className="text-xl text-white/90 md:text-2xl mb-8 leading-relaxed">
                Join thousands of consumers using Trustified to verify supplement safety and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-gray-100 focus:ring-4 focus:ring-white/30 font-bold px-10 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={handleCheckProducts}
                  aria-label="Check products now - view testing results"
                >
                  Check Products Now
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/10 backdrop-blur text-white hover:bg-white/20 border-2 border-white/30 focus:ring-4 focus:ring-white/30 font-bold px-10 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={handleDownloadApp}
                  aria-label="Download Trustified mobile app"
                  variant="outline"
                >
                  Download App
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 shadow-2xl border border-white/20">
                <div className="flex items-center gap-6 mb-6">
                  <div className="rounded-2xl bg-white p-4 shadow-lg">
                    <Shield className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Safe & Trusted</h3>
                    <p className="text-white/90 text-lg">
                      Independent lab testing
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-green-300" />
                    <span className="text-white text-lg">100% blind testing process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-green-300" />
                    <span className="text-white text-lg">Detailed lab reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="h-5 w-5 text-green-300" />
                    <span className="text-white text-lg">Free to search our database</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
