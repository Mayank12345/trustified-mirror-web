
import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { useRateLimit } from '@/hooks/useRateLimit';
import SecureInput from '@/components/ui/secure-input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Rate limiting: max 3 attempts per 5 minutes
  const { checkRateLimit, isLimited } = useRateLimit({
    maxAttempts: 3,
    windowMs: 5 * 60 * 1000, // 5 minutes
    errorMessage: "Too many newsletter signup attempts. Please wait 5 minutes before trying again."
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limit first
    if (!checkRateLimit()) {
      return;
    }
    
    if (!email.trim()) {
      toast({
        title: "Please enter an email address.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([{ email }]);
      if (error) {
        toast({
          title: "Submission failed",
          description: "There was a problem signing up. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Thank you!",
          description: "You've successfully signed up for our newsletter."
        });
        setEmail('');
      }
    } catch (err) {
      toast({
        title: "Unexpected error",
        description: "Please check your connection.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Connected
            </h2>
          </div>
          <p className="text-green-100 text-lg mb-8 leading-relaxed">
            Get the latest updates on product certifications and industry insights delivered to your inbox.
          </p>
          
          {/* Enhanced Email Subscription Form */}
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 max-w-md mx-auto shadow-2xl border border-white/20">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <div className="relative">
                    <SecureInput
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="Enter your email address"
                      required
                      maxLength={254}
                      disabled={loading || isLimited}
                      className="w-full px-6 py-4 text-gray-800 bg-white border-0 rounded-xl placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 transition-all duration-200 text-lg"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading || isLimited}
                  className="group bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : isLimited ? (
                    "Wait..."
                  ) : (
                    <>
                      Join Now
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* Rate limit indicator */}
            {isLimited && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-red-100">
                  Rate limit reached. Please wait before submitting again.
                </p>
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Information & Social Media */}
        <div className="border-t border-white/20 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Contact Email */}
            <div className="flex items-center gap-3 text-white">
              <Mail className="h-5 w-5" />
              <span className="text-lg font-medium">support@trustified.in</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <span className="text-white/80 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/trustified.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
                </a>
                <a 
                  href="https://www.youtube.com/@Trustified-Certification" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-5 w-5 text-white group-hover:text-red-300 transition-colors duration-200" />
                </a>
                <a 
                  href="https://www.instagram.com/Trustified.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-white group-hover:text-pink-300 transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-black/30 backdrop-blur-sm mt-12 py-6 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90 text-sm leading-relaxed">
            © 2024 <span className="font-semibold">ARPIT TRUSTIFIED CERTIFICATION PRIVATE LIMITED</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline mx-2">•</span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
