
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const EnhancedSearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Search products...",
  className 
}: EnhancedSearchInputProps) => {
  const clearSearch = () => {
    onChange('');
  };

  return (
    <div className={cn("relative flex-1 max-w-md", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input 
          type="text" 
          placeholder={placeholder}
          className="w-full h-12 pl-10 pr-10 rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default EnhancedSearchInput;
