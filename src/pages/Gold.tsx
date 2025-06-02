
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const goldProducts = [
  {
    id: 101,
    name: "100 % Performance Whey",
    brand: "Avvatar",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "MAPVA2400C",
    date: "03 May 2023",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 102,
    name: "Pure 07 Preworkout",
    brand: "Naturalein",
    category: "Pre-Workout",
    batchNo: "POXMWNTDOA",
    date: "28 Dec 2022",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 103,
    name: "Creatine Monohydrate",
    brand: "Avvatar",
    category: "Creatine",
    batchNo: "CUTCM0624",
    date: "18 Dec 2024",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 104,
    name: "Biozyme Performance Whey",
    brand: "Muscleblaze Biozyme Iso Zero",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "BIOZYM5407",
    date: "04 DEC 2024",
    testedBy: "Eurofins",
    status: "PASS" as const,
    imageUrl: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 105,
    name: "Biozyme Performance Whey",
    brand: "Muscleblaze",
    category: "Whey Protein Powder (Dairy Based)",
    batchNo: "BIOZYM5407",
    date: "21 July 2024",
    testedBy: "Eurofins",
    status: "PASS" as const,
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gold;
