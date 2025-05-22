
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, categories } from '@/data/products';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import ProductGrid from '@/components/passandfail/ProductGrid';
import ProductTable from '@/components/passandfail/ProductTable';
import { ProductType } from '@/types/product';

const PassAndFail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED' | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-10 px-4 md:px-6">
          <h1 className="text-3xl font-bold text-center mb-10">Product Certification Database</h1>
          
          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <SearchBar 
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                />
              </div>
              
              {/* Filters */}
              <FiltersSection 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                categories={categories}
              />
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="mt-8">
            <ProductGrid products={filteredProducts} />
          </div>
          
          {/* Table View */}
          <ProductTable products={filteredProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PassAndFail;
