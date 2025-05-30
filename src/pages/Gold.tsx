
import React from 'react';
import Navbar from '@/components/Navbar';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const goldProducts = [
  {
    id: 101,
    name: "100 % Performance Whey",
    brand: "Avvatar",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "MAPVA2400C",
    dateCertified: "03 May 2023",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 102,
    name: "Pure 07 Preworkout",
    brand: "Naturalein",
    category: "Pre-Workout",
    batchNo: "POXMWNTDOA",
    dateCertified: "28 Dec 2022",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 103,
    name: "Creatine Monohydrate",
    brand: "Avvatar",
    category: "Creatine",
    batchNo: "CUTCM0624",
    dateCertified: "18 Dec 2024",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 104,
    name: "Biozyme Performance Whey",
    brand: "Muscleblaze Biozyme Iso Zero",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "BIOZYM5407",
    dateCertified: "04 DEC 2024",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 105,
    name: "Biozyme Performance Whey",
    brand: "Muscleblaze",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "BIOZYM5407",
    dateCertified: "21 July 2024",
    testedBy: "Eurofins",
    status: "Passed",
    imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
  }
];

const Gold = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Gold Certified</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Premium products that have achieved our highest certification standards through rigorous testing and quality assurance.
              </p>
            </div>
            
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goldProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {/* Trustified Badge */}
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
                        <span className="text-gray-900">{product.batchNo}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date Certified</span>
                        <span className="text-gray-900">{product.dateCertified}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tested By</span>
                        <span className="text-gray-900">{product.testedBy}</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <span className="text-gray-600">Testing Status</span>
                        <Badge className="bg-green-500 text-white">{product.status}</Badge>
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

export default Gold;
