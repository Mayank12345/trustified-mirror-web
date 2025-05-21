
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  brand: string;
  category: string;
  status: 'PASS' | 'FAIL' | 'EXPIRED';
  date?: string;
}

const ProductCard = ({ imageUrl, name, brand, category, status, date }: ProductCardProps) => {
  const statusColors = {
    PASS: "bg-green-500 hover:bg-green-600",
    FAIL: "bg-red-500 hover:bg-red-600",
    EXPIRED: "bg-amber-500 hover:bg-amber-600",
  };

  return (
    <Card className="overflow-hidden flex flex-col items-center p-6 transition-all hover:shadow-md">
      <div className="w-full flex justify-center mb-4">
        <img 
          src={imageUrl} 
          alt={name}
          className="h-32 object-contain"
        />
      </div>
      
      <h3 className="font-medium text-lg text-center mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-1">{brand}</p>
      <p className="text-xs text-muted-foreground mb-4">{category}</p>
      
      <Badge className={`${statusColors[status]} px-6 py-1 text-white`}>
        {status}
      </Badge>
      
      {date && (
        <p className="text-xs text-muted-foreground mt-2">
          Certified on: {date}
        </p>
      )}
    </Card>
  );
};

export default ProductCard;
