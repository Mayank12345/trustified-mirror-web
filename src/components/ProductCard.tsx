
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Package, Eye, Download, ShoppingCart } from "lucide-react";
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
  PASS: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg",
  FAIL: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg",
  EXPIRED: "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg",
  GOLD: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg",
};

const statusIcons = {
  PASS: <Check className="h-4 w-4" />,
  FAIL: <X className="h-4 w-4" />,
  EXPIRED: <Package className="h-4 w-4" />,
  GOLD: <Check className="h-4 w-4" />,
};

const ProductCard = ({ id, imageUrl, name, brand, category, status, date, price, affiliateLink }: ProductCardProps) => {
  const { downloadPdf, isDownloading } = usePdfDownload();

  const handleDownloadPdf = async () => {
    await downloadPdf(id, name);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 rounded-xl flex flex-col group hover:-translate-y-2 bg-white h-full animate-fade-in">
      {/* Enhanced Product Image Container with lazy loading */}
      <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${name} by ${brand}`}
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-10">
          <Badge className={`${statusColors[status]} px-3 py-1 font-bold shadow-lg flex items-center gap-2 rounded-lg text-xs transition-transform duration-200 hover:scale-105`}>
            {statusIcons[status]} {status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        {/* Enhanced Product Information */}
        <div className="mb-4 flex-grow">
          {/* Category with improved styling */}
          <p className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wide">{category}</p>
          
          {/* Product Name with better accessibility */}
          <h3 
            className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 leading-tight group-hover:text-green-700 transition-colors duration-200"
            title={name}
          >
            {name}
          </h3>
          
          {/* Brand with better visibility */}
          <p className="text-sm text-gray-600 mb-2 font-medium truncate" title={`by ${brand}`}>
            by {brand}
          </p>

          {/* Enhanced Price display */}
          {price !== undefined && price !== null && (
            <p className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
              ${price.toFixed(2)}
            </p>
          )}
          
          {/* Date with better formatting */}
          {date && (
            <p className="text-xs text-gray-500 font-medium">
              Certified: {date}
            </p>
          )}
        </div>
        
        {/* Enhanced Action Buttons with better animations */}
        <div className="space-y-2 mt-auto">
          <Button 
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white flex items-center justify-center gap-2 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            asChild
          >
            <Link to={`/product/${id}`} aria-label={`View details for ${name}`}>
              <Eye className="h-4 w-4" /> View Details
            </Link>
          </Button>
          
          {affiliateLink && (
            <Button 
              variant="outline"
              className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-600 flex items-center justify-center gap-2 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              asChild
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${name} on external site`}>
                <ShoppingCart className="h-4 w-4" /> Buy Now
              </a>
            </Button>
          )}

          <Button 
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center gap-2 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            aria-label={`Download PDF report for ${name}`}
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
