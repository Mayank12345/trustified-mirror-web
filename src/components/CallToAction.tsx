
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-lg bg-hero-gradient p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50"></div>
          <div className="relative grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Start issuing blockchain-verified credentials today
              </h2>
              <p className="mt-4 text-white/80 md:text-lg">
                Join thousands of organizations using Trustified to issue secure, verifiable digital credentials.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white p-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Secure & Trusted</h3>
                    <p className="text-white/80">
                      Backed by blockchain technology
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-white" />
                    <span className="text-white">No technical knowledge required</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <ArrowRight className="h-4 w-4 text-white" />
                    <span className="text-white">Get started in minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <ArrowRight className="h-4 w-4 text-white" />
                    <span className="text-white">30-day free trial</span>
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
