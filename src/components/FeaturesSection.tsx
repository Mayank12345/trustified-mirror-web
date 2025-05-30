
import React from 'react';
import { Award, CheckCircle, Clock, Database, Lock, Shield, Smartphone, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <div className="mb-4 p-3 rounded-full bg-green-500/10 text-green-600">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Independent Testing",
      description: "All products are tested by our independent laboratory to ensure unbiased results."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Certified Lab Reports",
      description: "Get detailed lab reports with complete ingredient analysis and purity verification."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "We verify product claims and check for harmful contaminants and adulterants."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Comprehensive Database",
      description: "Access thousands of tested supplement products with detailed safety information."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consumer Protection",
      description: "Helping consumers make informed decisions about supplement safety and quality."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Access",
      description: "Check product safety and lab results on-the-go with our mobile app."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Results",
      description: "All test results are securely stored and verified for authenticity."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Regular Updates",
      description: "Our database is continuously updated with new product tests and safety information."
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why We Test <span className="text-green-600">Your Supplements</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Protecting consumers through independent laboratory testing and transparent reporting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
