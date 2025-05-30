
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { products, categories } from '@/data/products';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import ProductGrid from '@/components/passandfail/ProductGrid';
import ProductTable from '@/components/passandfail/ProductTable';
import { ProductType } from '@/types/product';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PassAndFail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED' | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  
  useEffect(() => {
    let results = [...products];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (activeFilter !== 'ALL') {
      results = results.filter(product => product.status === activeFilter);
    }
    
    // Filter by category
    if (selectedCategory !== 'All Categories') {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(results);
  }, [searchTerm, activeFilter, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            {/* Filters */}
            <FiltersSection 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              categories={categories}
            />
            
            {/* View Toggle */}
            <div className="flex justify-end">
              <Tabs 
                defaultValue="grid" 
                value={viewMode} 
                onValueChange={(value) => setViewMode(value as 'grid' | 'table')}
                className="w-[200px]"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="table">Table View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Products Display */}
            {viewMode === 'grid' ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <ProductTable products={filteredProducts} />
            )}
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No products match your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PassAndFail;
