
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
    <div className="flex gap-2">
      <div className="flex-1">
        <Input 
          type="text" 
          placeholder="Search product or brand" 
          className="h-12"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button variant="default" className="bg-green-500 hover:bg-green-600 h-12 px-4">
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
