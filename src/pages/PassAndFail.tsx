
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import { ProductType } from '@/types/product';

const PassAndFail = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED' | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  
  useEffect(() => {
    // Get search term from URL parameters
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

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
      <header role="banner">
        <Navbar />
      </header>
      
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

      <main className="flex-1 py-8" role="main">
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
            
            {/* Products Grid - Now using ProductCard component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  brand={product.brand}
                  category={product.category}
                  status={product.status}
                  date={product.date}
                />
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
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:ring-4 focus:ring-green-300"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};

export default PassAndFail;
