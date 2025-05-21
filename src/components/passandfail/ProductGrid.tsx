
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/types/product';

interface ProductGridProps {
  products: ProductType[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-muted-foreground">No products match your search criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          brand={product.brand}
          category={product.category}
          status={product.status as 'PASS' | 'FAIL' | 'EXPIRED'}
          date={product.date}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
