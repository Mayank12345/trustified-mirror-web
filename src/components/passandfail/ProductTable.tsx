
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ProductType } from '@/types/product';

interface ProductTableProps {
  products: ProductType[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className="mt-16 hidden md:block">
      <h2 className="text-xl font-medium mb-4">Certification Records</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <Badge 
                  className={`${
                    product.status === 'PASS' 
                      ? 'bg-green-500' 
                      : product.status === 'FAIL'
                      ? 'bg-red-500'
                      : 'bg-amber-500'
                  } text-white`}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>{product.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
