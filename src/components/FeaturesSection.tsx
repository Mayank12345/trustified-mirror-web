
import React from 'react';
import { Award, CheckCircle, Clock, Database, Lock, Shield, Smartphone, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-2">
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 text-green-600 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Independent Testing",
      description: "All products are tested by our independent laboratory to ensure unbiased results."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Certified Lab Reports",
      description: "Get detailed lab reports with complete ingredient analysis and purity verification."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "We verify product claims and check for harmful contaminants and adulterants."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Database",
      description: "Access thousands of tested supplement products with detailed safety information."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consumer Protection",
      description: "Helping consumers make informed decisions about supplement safety and quality."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Access",
      description: "Check product safety and lab results on-the-go with our mobile app."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secure Results",
      description: "All test results are securely stored and verified for authenticity."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Regular Updates",
      description: "Our database is continuously updated with new product tests and safety information."
    }
  ];

  return (
    <section id="features" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-2 md:px-6 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Why We Test <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Your Supplements</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Protecting consumers through independent laboratory testing and transparent reporting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
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
