
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import SecureInput from '@/components/ui/secure-input';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex gap-2 w-full max-w-md">
      <div className="flex-1">
        <SecureInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search products..."
          maxLength={100}
          className="h-12 rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
        />
      </div>
      <Button 
        variant="default" 
        size="icon"
        className="h-12 w-12 bg-green-500 hover:bg-green-600 transition-all duration-200 hover:scale-105"
        aria-label="Search"
      >
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
