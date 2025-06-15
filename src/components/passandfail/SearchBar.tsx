
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import EnhancedSearchInput from '@/components/ui/enhanced-input';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex gap-2 w-full max-w-md">
      <EnhancedSearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search products..."
      />
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
