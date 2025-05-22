
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/types/product';

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return null; // Empty state is handled in parent component
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          brand={product.brand}
          category={product.category}
          status={product.status}
          date={product.date}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
