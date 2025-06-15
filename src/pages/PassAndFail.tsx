
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import BackToTop from '@/components/ui/back-to-top';
import { ProductGridSkeleton } from '@/components/ui/loading-skeleton';
import { ProductType } from '@/types/product';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "All Categories",
  "Whey Protein Powder",
  "Protein Powders",
  "Oats",
  "Creatine",
  "Mass Gainer",
  "Omega 3",
  "Pre-Workout"
];

const PassAndFail = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED' | 'GOLD' | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch from Supabase with improved error handling
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;

        // Transform each product to match ProductType
        const mappedProducts: ProductType[] = (data || []).map((prod: any) => ({
          id: prod.id,
          name: prod.name,
          brand: prod.brand ?? '',
          category: prod.category,
          imageUrl: prod.image_url || '',
          status: prod.status,
          date: prod.date,
          description: prod.description,
          rating: prod.rating,
          affiliateLink: prod.affiliate_link,
          productWebsiteLink: prod.product_website_link,
          price: prod.price,
        }));
        
        setProducts(mappedProducts);
        
        if (mappedProducts.length === 0) {
          toast({
            title: "No products found",
            description: "There are currently no products in the database.",
          });
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError("Failed to load products. Please try again later.");
        toast({
          title: "Error",
          description: "Failed to load products. Please refresh the page.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [toast]);

  // Search param (URL)
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

  // Enhanced filtering logic with debouncing
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      let results = [...products];

      // Filter by search term
      if (searchTerm) {
        results = results.filter(product =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Status filter
      if (activeFilter !== 'ALL') {
        results = results.filter(product => product.status === activeFilter);
      }

      // Category filter
      if (selectedCategory !== 'All Categories') {
        results = results.filter(
          product =>
            product.category &&
            product.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );
      }

      setFilteredProducts(results);
    }, 300); // Debounce search for better performance

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, activeFilter, selectedCategory, products]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setActiveFilter('ALL');
    setSelectedCategory('All Categories');
    toast({
      title: "Filters cleared",
      description: "All filters have been reset.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      <header role="banner">
        <Navbar />
      </header>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Discover Product Testing Results
          </h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transparent blind testing results for supplement products. See which products pass our rigorous quality standards and make informed choices for your health.
          </p>
        </div>
      </div>

      <main id="main-content" className="flex-1 py-6" role="main">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 max-w-7xl mx-auto">
            {/* Enhanced Search and Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900">Product Results</h2>
                {!loading && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {filteredProducts.length} of {products.length} products
                  </span>
                )}
              </div>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <FiltersSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              categories={categories}
            />

            {/* Enhanced Loading State */}
            {loading && (
              <div className="animate-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Products...</h3>
                  <p className="text-gray-500 text-sm">
                    Fetching the latest product testing results
                  </p>
                </div>
                <ProductGridSkeleton count={12} />
              </div>
            )}

            {/* Enhanced Error State */}
            {error && (
              <div className="text-center py-12 animate-fade-in">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Products</h3>
                  <p className="text-red-600 text-sm mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors focus:ring-4 focus:ring-red-300"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* Enhanced Product Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 animate-fade-in">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard
                      id={product.id}
                      imageUrl={product.imageUrl}
                      name={product.name}
                      brand={product.brand}
                      category={product.category}
                      status={product.status}
                      date={product.date}
                      price={product.price}
                      affiliateLink={product.affiliateLink}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Empty State */}
            {!loading && !error && filteredProducts.length === 0 && products.length > 0 && (
              <div className="text-center py-16 animate-fade-in">
                <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    No products match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:ring-4 focus:ring-green-300 hover:scale-105"
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

      <BackToTop />
    </div>
  );
};

export default PassAndFail;
