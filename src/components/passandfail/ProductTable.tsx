
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ProductType } from '@/types/product';

interface ProductTableProps {
  products: ProductType[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "PASS":
        return "bg-green-500 text-white";
      case "FAIL":
        return "bg-red-500 text-white";
      case "EXPIRED":
        return "bg-amber-500 text-white";
      case "GOLD":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold";
      default:
        return "bg-gray-500 text-white";
    }
  };

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
                <Badge className={getStatusBadgeClass(product.status)}>
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
