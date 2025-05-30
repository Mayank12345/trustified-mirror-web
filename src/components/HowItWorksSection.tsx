
import React from 'react';
import { ArrowRight, Package, FlaskConical, FileCheck, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Package className="h-10 w-10 text-white" />,
      title: "We Purchase Products",
      description: "We purchase products anonymously from retail stores, just like regular consumers do."
    },
    {
      icon: <FlaskConical className="h-10 w-10 text-white" />,
      title: "Independent Lab Testing",
      description: "Products are sent to our certified laboratories for comprehensive analysis and testing."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-white" />,
      title: "Generate Lab Reports",
      description: "Detailed reports are generated showing ingredient analysis, purity, and safety results."
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Publish Results",
      description: "Test results are published transparently to help consumers make informed decisions."
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How Our Certification <span className="text-green-600">Process Works</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            A transparent four-step process to ensure supplement safety and quality.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-12 lg:grid-cols-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-white border-2 border-green-600 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-bold text-sm">
                  {index + 1}
                </div>
                <div className="absolute top-1/2 left-full hidden -translate-y-1/2 lg:block">
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-green-600/30" />
                  )}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
