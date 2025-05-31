
import React from 'react';
import Navbar from '@/components/Navbar';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const nmrProducts = [
  {
    id: 201,
    name: "Himalaya Honey",
    brand: "Apis",
    category: "Honey",
    batchNo: "DSIBFQ021",
    dateCertified: "11 April 2025",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 202,
    name: "Patanjali Honey",
    brand: "Patanjali",
    category: "Honey",
    batchNo: "BCM240071",
    dateCertified: "05 April 2025",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 203,
    name: "Organic Honey",
    brand: "Saffola",
    category: "Honey",
    batchNo: "N78",
    dateCertified: "18 March 2025",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 204,
    name: "Honey Sundarbans",
    brand: "Saffola",
    category: "Honey",
    batchNo: "NA266",
    dateCertified: "18 March 2025",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 205,
    name: "Pure Honey",
    brand: "Zandu",
    category: "Honey",
    batchNo: "ZH2024001",
    dateCertified: "15 March 2025",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1000&auto=format&fit=crop"
  }
];

const NmrReports = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">NMR Reports</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nuclear Magnetic Resonance (NMR) testing reports for honey and other food products to verify authenticity and quality.
              </p>
            </div>
            
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nmrProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="h-64 bg-gray-100 p-6 flex items-center justify-center">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
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
                        <span className="text-gray-900">{product.batchNo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Published Date</span>
                        <span className="text-gray-900">{product.dateCertified}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tested By</span>
                        <span className="text-gray-900">{product.testedBy}</span>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default NmrReports;
