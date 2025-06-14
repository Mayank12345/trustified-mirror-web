import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Package, Eye, Download, ShoppingCart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { usePdfDownload } from '@/hooks/usePdfDownload';

interface ProductCardProps {
  id: number;
  imageUrl: string;
  name: string;
  brand: string;
  category: string;
  status: 'PASS' | 'FAIL' | 'EXPIRED' | 'GOLD';
  date?: string;
  price?: number;
  affiliateLink?: string;
}

const statusColors = {
  PASS: "bg-green-500 text-white",
  FAIL: "bg-red-500 text-white",
  EXPIRED: "bg-amber-500 text-white",
  GOLD: "bg-yellow-500 text-white",
};

const statusIcons = {
  PASS: <Check className="h-4 w-4" />,
  FAIL: <X className="h-4 w-4" />,
  EXPIRED: <Package className="h-4 w-4" />,
  GOLD: <Check className="h-4 w-4" />, // You might use a different icon for GOLD (e.g. Star)
};

const ProductCard = ({ id, imageUrl, name, brand, category, status, date, price, affiliateLink }: ProductCardProps) => {
  const { downloadPdf, isDownloading } = usePdfDownload();

  const handleDownloadPdf = async () => {
    await downloadPdf(id, name);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg flex flex-col">
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
      
      <CardContent className="p-5 flex flex-col flex-grow">
        {/* Product Information */}
        <div className="mb-4 flex-grow">
          {/* Category */}
          <p className="text-sm text-gray-500 mb-1">{category}</p>
          
          {/* Product Name */}
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 mb-1 h-14">{name}</h3>
          
          {/* Brand */}
          <p className="text-sm text-gray-600 mb-2">by {brand}</p>

          {/* Price */}
          {price !== undefined && price !== null && (
            <p className="text-xl font-bold text-green-600 mb-2">
              ${price.toFixed(2)}
            </p>
          )}
          
          {/* Date */}
          {date && (
            <p className="text-xs text-gray-500">
              Certified: {date}
            </p>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2 mt-auto">
          <Button 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center gap-2"
            asChild
          >
            <Link to={`/product/${id}`}>
              <Eye className="h-4 w-4" /> View Details
            </Link>
          </Button>
          
          {affiliateLink && (
            <Button 
              variant="outline"
              className="w-full border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 flex items-center justify-center gap-2"
              asChild
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4" /> Buy Now
              </a>
            </Button>
          )}

          <Button 
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
          >
            <Download className="h-4 w-4" /> 
            {isDownloading ? 'Downloading...' : 'Download PDF'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
