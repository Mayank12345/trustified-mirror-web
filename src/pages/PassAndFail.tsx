
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/passandfail/SearchBar';
import FiltersSection from '@/components/passandfail/FiltersSection';
import { ProductType } from '@/types/product';
import { supabase } from "@/integrations/supabase/client";

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

  // Fetch from Supabase
  useEffect(() => {
    setLoading(true);
    supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) {
          setError("Failed to fetch products.");
          setProducts([]);
        } else {
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
        }
        setLoading(false);
      });
  }, []);

  // Search param (URL)
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

  // Filtering logic with improved category matching
  useEffect(() => {
    let results = [...products];

    // Filter by search term
    if (searchTerm) {
      results = results.filter(product =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter - now GOLD is separate from PASS
    if (activeFilter !== 'ALL') {
      results = results.filter(product => product.status === activeFilter);
    }

    // Category filter (case- and whitespace-insensitive matching)
    if (selectedCategory !== 'All Categories') {
      results = results.filter(
        product =>
          product.category &&
          product.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
      );
    }

    setFilteredProducts(results);
  }, [searchTerm, activeFilter, selectedCategory, products]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header role="banner">
        <Navbar />
      </header>

      {/* Compact Hero Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Discover Product Testing Results
          </h1>
          <p className="text-sm text-green-100 max-w-2xl mx-auto leading-relaxed">
            Transparent blind testing results for supplement products. See which products pass our rigorous quality standards.
          </p>
        </div>
      </div>

      <main className="flex-1 py-4" role="main">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 max-w-7xl mx-auto">
            {/* Compact Search and Filters */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h2 className="text-lg font-bold text-gray-900">Product Results</h2>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <FiltersSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              categories={categories}
            />

            {/* Loading/Error/Empty states */}
            {loading && (
              <div className="text-center py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading...</h3>
                  <p className="text-gray-500 text-sm">
                    Fetching product data from the server.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">{error}</h3>
                  <p className="text-gray-500 text-sm">
                    Please try refreshing the page.
                  </p>
                </div>
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
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
                    price={product.price}
                    affiliateLink={product.affiliateLink}
                  />
                ))}
              </div>
            )}

            {/* Compact Empty State */}
            {!loading && !error && filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-500 text-sm mb-3">
                    No products match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveFilter('ALL');
                      setSelectedCategory('All Categories');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors focus:ring-4 focus:ring-green-300 text-sm"
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
