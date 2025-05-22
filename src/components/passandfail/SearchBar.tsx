
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex gap-2 w-full max-w-md">
      <div className="relative flex-1">
        <Input 
          type="text" 
          placeholder="Search products..." 
          className="w-full h-12 pr-12 rounded-md border-gray-300 focus:border-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button 
        variant="default" 
        size="icon"
        className="h-12 w-12 bg-primary hover:bg-primary/90"
        aria-label="Search"
      >
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
