
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const nmrProducts = [
  {
    id: 201,
    name: "Himalaya Honey",
    brand: "Apis",
    category: "Honey",
    batchNo: "DSIBFQ021",
    date: "11 April 2025",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 202,
    name: "Patanjali Honey",
    brand: "Patanjali",
    category: "Honey",
    batchNo: "BCM240071",
    date: "05 April 2025",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 203,
    name: "Organic Honey",
    brand: "Saffola",
    category: "Honey",
    batchNo: "N78",
    date: "18 March 2025",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 204,
    name: "Honey Sundarbans",
    brand: "Saffola",
    category: "Honey",
    batchNo: "NA266",
    date: "18 March 2025",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 205,
    name: "Pure Honey",
    brand: "Zandu",
    category: "Honey",
    batchNo: "ZH2024001",
    date: "15 March 2025",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop"
  }
];

const NmrReports = () => {
  useEffect(() => {
    // Set page-specific meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View Nuclear Magnetic Resonance (NMR) testing reports for honey and food products. Verify authenticity and quality with Trustified\'s independent lab testing.');
    }

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://trustified-mirror-web.lovable.app/nmr-reports');

    // Update page title
    document.title = 'NMR Test Reports for Honey & Food Products | Trustified';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header role="banner">
        <Navbar />
      </header>
      <main id="main-content" role="main" className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">NMR Reports</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nuclear Magnetic Resonance (NMR) testing reports for honey and other food products to verify authenticity and quality.
              </p>
            </header>
            
            {/* Product Cards Grid */}
            <section aria-label="NMR tested products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nmrProducts.map((product) => (
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
            </section>
          </div>
        </div>
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};

export default NmrReports;
