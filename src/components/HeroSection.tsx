
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Issue <span className="gradient-text">Digital Credentials</span> on Blockchain
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Securely issue and verify digital certificates, badges, and rewards on the blockchain.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="btn-gradient gap-2">
                Get Started 
                <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm">Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Tamper-proof</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-purple-100 blur-3xl dark:bg-purple-900/30"></div>
              <div className="absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30"></div>
              <div className="relative rounded-lg border bg-background p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1618044619888-009e412ff12a?q=80&w=1000"
                  alt="Digital credential example"
                  className="rounded-md w-full object-cover aspect-video"
                />
              </div>
              <div className="absolute -right-4 bottom-4 rounded-lg border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Certificate Verified</p>
                    <p className="text-xs text-gray-500">Blockchain secured</p>
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

export default HeroSection;
