
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      )}
      size="icon"
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;
