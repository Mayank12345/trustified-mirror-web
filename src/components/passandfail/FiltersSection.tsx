
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FiltersSectionProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  activeFilter: 'PASS' | 'FAIL' | 'EXPIRED' | 'ALL';
  setActiveFilter: (value: 'PASS' | 'FAIL' | 'EXPIRED' | 'ALL') => void;
  categories: string[];
}

const FiltersSection = ({ 
  selectedCategory, 
  setSelectedCategory, 
  activeFilter, 
  setActiveFilter,
  categories 
}: FiltersSectionProps) => {
  return (
    <>
      {/* Category Filter */}
      <div className="md:col-span-1">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="h-12 bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Status Filter */}
      <div className="md:col-span-1">
        <Select
          value={activeFilter}
          onValueChange={(value: 'PASS' | 'FAIL' | 'EXPIRED' | 'ALL') => setActiveFilter(value)}
        >
          <SelectTrigger className="h-12 bg-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Status</SelectItem>
            <SelectItem value="PASS">PASS</SelectItem>
            <SelectItem value="FAIL">FAIL</SelectItem>
            <SelectItem value="EXPIRED">EXPIRED</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default FiltersSection;
