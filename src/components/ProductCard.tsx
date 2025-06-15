
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-200 rounded-2xl flex flex-col group hover:-translate-y-2 bg-white">
      {/* Product Image Container with enhanced styling */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name}
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-10">
          <Badge className={`${statusColors[status]} px-4 py-2 font-bold shadow-xl flex items-center gap-2 rounded-xl`}>
            {statusIcons[status]} {status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        {/* Product Information with enhanced typography */}
        <div className="mb-6 flex-grow">
          {/* Category */}
          <p className="text-sm font-medium text-green-600 mb-2 uppercase tracking-wide">{category}</p>
          
          {/* Product Name */}
          <h3 className="font-bold text-xl text-gray-900 line-clamp-2 mb-3 h-14 group-hover:text-green-700 transition-colors">{name}</h3>
          
          {/* Brand */}
          <p className="text-base text-gray-600 mb-3 font-medium">by {brand}</p>

          {/* Price with enhanced styling */}
          {price !== undefined && price !== null && (
            <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-3">
              ${price.toFixed(2)}
            </p>
          )}
          
          {/* Date */}
          {date && (
            <p className="text-sm text-gray-500 font-medium">
              Certified: {date}
            </p>
          )}
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="space-y-3 mt-auto">
          <Button 
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white flex items-center justify-center gap-3 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link to={`/product/${id}`}>
              <Eye className="h-5 w-5" /> View Details
            </Link>
          </Button>
          
          {affiliateLink && (
            <Button 
              variant="outline"
              className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-600 flex items-center justify-center gap-3 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-5 w-5" /> Buy Now
              </a>
            </Button>
          )}

          <Button 
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center gap-3 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
          >
            <Download className="h-5 w-5" /> 
            {isDownloading ? 'Downloading...' : 'Download PDF'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
