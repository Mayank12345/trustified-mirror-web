
import React, { useState } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
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
    <footer className="bg-green-500 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Connect with us.</h2>
        {/* Email Subscription */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row max-w-md mx-auto mb-8"
        >
          <div className="flex-1 sm:mr-2 mb-2 sm:mb-0">
            <SecureInput
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="email@example.com"
              required
              maxLength={254}
              disabled={loading || isLimited}
              className="px-4 py-3 text-gray-700 bg-white border-0 rounded-l-lg sm:rounded-r-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading || isLimited}
            className="bg-black text-white px-8 py-3 rounded-r-lg sm:rounded-l-none hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : isLimited ? "Wait..." : "Join"}
          </button>
        </form>
        
        {/* Rate limit indicator */}
        {isLimited && (
          <p className="text-sm text-red-200 mb-4">
            Rate limit reached. Please wait before submitting again.
          </p>
        )}
        
        {/* Contact Email and Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <p className="text-lg">
            Email us at: support@trustified.in
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/trustified.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.youtube.com/@Trustified-Certification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/Trustified.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-green-200 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-black py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            © 2024 ARPIT TRUSTIFIED CERTIFICATION PRIVATE LIMITED All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
