
import React from 'react';
import { ArrowRight, Award, CheckCircle, PenTool, Upload } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <PenTool className="h-10 w-10 text-white" />,
      title: "Design Your Credentials",
      description: "Create beautiful digital certificates or badges using our customizable templates or design from scratch."
    },
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Issue on Blockchain",
      description: "Issue your credentials securely on the blockchain with just a few clicks."
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Share with Recipients",
      description: "Recipients receive their credentials via email and can share them on social media."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Verify Anytime",
      description: "Anyone can verify the authenticity of credentials instantly using our verification portal."
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            A simple four-step process to issue and verify digital credentials on blockchain.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-12 lg:grid-cols-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                  {step.icon}
                </div>
                <div className="absolute top-1/2 left-full hidden -translate-y-1/2 lg:block">
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-8 w-8 text-primary/30" />
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
