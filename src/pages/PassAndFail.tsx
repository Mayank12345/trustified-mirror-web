
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, categories } from '@/data/products';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import { ProductType } from '@/types/product';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Discover Product Testing Results
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Transparent blind testing results for supplement products. See which products pass our rigorous quality standards and which ones don't.
          </p>
        </div>
      </div>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Product Results</h2>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <FiltersSection 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              categories={categories}
            />
            
            {/* Products Grid - Using Gold page card format */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {/* Trustified Badge and Product Image */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        Trustified
                      </div>
                    </div>
                    
                    {/* Product Image */}
                    <div className="h-64 bg-gray-100 p-6 flex items-center justify-center">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Brand Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{product.brand}</h3>
                    
                    {/* Product Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Product Name</span>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Category</span>
                        <span className="text-gray-900">{product.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Batch No. Tested</span>
                        <span className="text-gray-900">BATCH{product.id}001</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date Certified</span>
                        <span className="text-gray-900">{product.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tested By</span>
                        <span className="text-gray-900">Eurofins</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <span className="text-gray-600">Testing Status</span>
                        <Badge className={
                          product.status === 'PASS' ? "bg-green-500 text-white" :
                          product.status === 'FAIL' ? "bg-red-500 text-white" :
                          "bg-amber-500 text-white"
                        }>
                          {product.status === 'PASS' ? 'Passed' : 
                           product.status === 'FAIL' ? 'Failed' : 'Expired'}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* See Report Button */}
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 rounded-full"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>
                        See Report
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-white rounded-lg shadow-sm p-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Products Found</h3>
                  <p className="text-lg text-gray-500 mb-6">
                    No products match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveFilter('ALL');
                      setSelectedCategory('All Categories');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PassAndFail;
