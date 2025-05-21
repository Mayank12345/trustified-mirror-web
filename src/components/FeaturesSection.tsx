
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
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
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
      icon: <Lock className="h-6 w-6" />,
      title: "Blockchain Secured",
      description: "All credentials are secured using blockchain technology for tamper-proof verification."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Instant Verification",
      description: "Verify credentials instantly with a single click or QR code scan."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Custom Certificates",
      description: "Design beautiful custom certificates and badges for your organization."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bulk Issuance",
      description: "Issue hundreds of credentials in seconds with our bulk issuance feature."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Collaborate with your team to create and manage credentials efficiently."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Access",
      description: "Recipients can access and share their credentials from any mobile device."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Anti-fraud",
      description: "Advanced anti-fraud features to ensure certificate authenticity and integrity."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lifetime Access",
      description: "Recipients have lifetime access to their verified credentials."
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Everything you need to create, issue, and verify digital credentials on the blockchain.
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
