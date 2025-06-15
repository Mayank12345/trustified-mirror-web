
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FiltersSectionProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  activeFilter: 'PASS' | 'FAIL' | 'EXPIRED' | 'GOLD' | 'ALL';
  setActiveFilter: (value: 'PASS' | 'FAIL' | 'EXPIRED' | 'GOLD' | 'ALL') => void;
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
    <div className="flex flex-wrap gap-3">
      {/* Categories Filter */}
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setSelectedCategory(category)}
          variant={selectedCategory === category ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            selectedCategory === category 
              ? "bg-gray-900 text-white hover:bg-gray-800" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          {category}
        </Button>
      ))}
      
      {/* Status Filter - Shown as separate pills for clarity */}
      <div className="ml-auto flex gap-2">
        <Button
          onClick={() => setActiveFilter('ALL')}
          variant={activeFilter === 'ALL' ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeFilter === 'ALL' 
              ? "bg-gray-900 text-white hover:bg-gray-800" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          All
        </Button>
        <Button
          onClick={() => setActiveFilter('PASS')}
          variant={activeFilter === 'PASS' ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeFilter === 'PASS' 
              ? "bg-green-600 text-white hover:bg-green-700" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          Pass
        </Button>
        <Button
          onClick={() => setActiveFilter('GOLD')}
          variant={activeFilter === 'GOLD' ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeFilter === 'GOLD' 
              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-500 hover:to-yellow-600" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          Gold
        </Button>
        <Button
          onClick={() => setActiveFilter('FAIL')}
          variant={activeFilter === 'FAIL' ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeFilter === 'FAIL' 
              ? "bg-red-600 text-white hover:bg-red-700" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          Fail
        </Button>
        <Button
          onClick={() => setActiveFilter('EXPIRED')}
          variant={activeFilter === 'EXPIRED' ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-colors",
            activeFilter === 'EXPIRED' 
              ? "bg-amber-600 text-white hover:bg-amber-700" 
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          )}
        >
          Expired
        </Button>
      </div>
    </div>
  );
};

export default FiltersSection;
