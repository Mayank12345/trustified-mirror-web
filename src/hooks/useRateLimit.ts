
import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  errorMessage?: string;
}

export const useRateLimit = ({ 
  maxAttempts, 
  windowMs, 
  errorMessage = "Too many attempts. Please wait before trying again." 
}: RateLimitConfig) => {
  const [attempts, setAttempts] = useState<number[]>([]);
  const [isLimited, setIsLimited] = useState(false);

  const checkRateLimit = useCallback((): boolean => {
    const now = Date.now();
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      setIsLimited(true);
      toast({
        title: "Rate limit exceeded",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Reset after window expires
      setTimeout(() => setIsLimited(false), windowMs);
      return false;
    }
    
    setAttempts([...recentAttempts, now]);
    setIsLimited(false);
    return true;
  }, [attempts, maxAttempts, windowMs, errorMessage]);

  return { checkRateLimit, isLimited };
};
