
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Package } from "lucide-react";

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
    PASS: "bg-green-500 text-white",
    FAIL: "bg-red-500 text-white",
    EXPIRED: "bg-amber-500 text-white",
  };

  const statusIcons = {
    PASS: <Check className="h-4 w-4" />,
    FAIL: <X className="h-4 w-4" />,
    EXPIRED: <Package className="h-4 w-4" />,
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg">
      {/* Product Image Container */}
      <div className="relative h-56 bg-gray-100 p-6 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name}
          className="max-h-full max-w-full object-contain mix-blend-multiply"
        />
        <div className="absolute top-3 right-3 z-10">
          <Badge className={`${statusColors[status]} px-3 py-1 font-medium shadow-sm flex items-center gap-1.5`}>
            {statusIcons[status]} {status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        {/* Product Information */}
        <div className="mb-4">
          {/* Category */}
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          
          {/* Product Name */}
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1 mb-1">{name}</h3>
          
          {/* Brand */}
          <p className="text-sm text-gray-600 mb-2">by {brand}</p>
          
          {/* Date */}
          {date && (
            <p className="text-xs text-gray-500">
              Certified: {date}
            </p>
          )}
        </div>
        
        {/* Action Button */}
        <Button 
          className="w-full bg-gray-900 hover:bg-gray-800 text-white"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
