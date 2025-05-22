
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, X, Package } from "lucide-react";

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

  const statusIcons = {
    PASS: <Check className="h-4 w-4" />,
    FAIL: <X className="h-4 w-4" />,
    EXPIRED: <Package className="h-4 w-4" />,
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-gray-200">
      {/* Product Image Container with improved badge visibility */}
      <div className="relative h-52 bg-gray-50 p-4">
        <div className="absolute top-3 right-3 z-10">
          <Badge className={`${statusColors[status]} px-3 py-1 text-white font-medium shadow-md flex items-center gap-1.5`}>
            {statusIcons[status]} {status}
          </Badge>
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <img 
            src={imageUrl} 
            alt={name}
            className="max-h-full max-w-full object-contain mix-blend-multiply"
          />
        </div>
      </div>
      
      <CardContent className="p-4">
        {/* Brand */}
        <p className="text-xs text-muted-foreground mb-1">{brand}</p>
        
        {/* Product Name */}
        <h3 className="font-medium text-lg line-clamp-2 min-h-[3.5rem]">{name}</h3>
        
        {/* Category */}
        <div className="mt-2 flex items-center">
          <Badge variant="outline" className="text-xs font-normal">
            {category}
          </Badge>
        </div>
        
        {/* Date */}
        {date && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-muted-foreground flex items-center">
              Certified on: <span className="ml-1 font-medium">{date}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
