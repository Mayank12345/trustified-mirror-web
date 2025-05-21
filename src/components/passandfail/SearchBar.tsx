
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
    <div className="flex w-full gap-2 relative">
      <Input 
        type="text" 
        placeholder="Search products, brands, categories..." 
        className="h-12 pl-4 pr-10 rounded-l-md flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button 
        variant="default" 
        className="bg-green-500 hover:bg-green-600 h-12 px-4 rounded-r-md absolute right-0"
      >
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
