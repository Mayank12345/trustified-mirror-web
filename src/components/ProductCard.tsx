import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Package, Eye, Download, ShoppingCart, Heart, BarChart3 } from "lucide-react";
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
      {/* Enhanced Product Image Container with improved mobile layout */}
      <div className="relative h-48 md:h-44 bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center overflow-hidden">
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
      
      <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
        {/* Enhanced Product Information with better mobile spacing */}
        <div className="mb-4 flex-grow">
          {/* Category with improved styling */}
          <p className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wide">{category}</p>
          
          {/* Product Name with better accessibility and mobile optimization */}
          <h3 
            className="font-bold text-lg md:text-xl text-gray-900 line-clamp-2 mb-3 leading-tight group-hover:text-green-700 transition-colors duration-200"
            title={name}
          >
            {name}
          </h3>
          
          {/* Brand with better visibility */}
          <p className="text-sm md:text-base text-gray-600 mb-3 font-medium truncate" title={`by ${brand}`}>
            by {brand}
          </p>

          {/* Enhanced Price display with better contrast */}
          {price !== undefined && price !== null && (
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              ${price.toFixed(2)}
            </p>
          )}
          
          {/* Date with better formatting and contrast */}
          {date && (
            <p className="text-xs md:text-sm text-gray-700 font-medium">
              Certified: {date}
            </p>
          )}
        </div>
        
        {/* Enhanced Action Buttons with improved mobile UX and accessibility */}
        <div className="space-y-3 mt-auto">
          {/* Primary CTA - View Details (most prominent) */}
          <Button 
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white flex items-center justify-center gap-2 py-4 md:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
            asChild
            style={{ minHeight: '44px' }} // Ensure 44px touch target
          >
            <Link to={`/product/${id}`} aria-label={`View details for ${name}`}>
              <Eye className="h-4 w-4" /> View Details
            </Link>
          </Button>
          
          {/* Secondary Actions Row - Better spacing for mobile */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
            {/* Buy Now Button - Secondary but prominent */}
            {affiliateLink && (
              <Button 
                variant="outline"
                className="w-full border-2 border-green-500 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-600 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 text-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                asChild
                style={{ minHeight: '44px' }} // Ensure 44px touch target
              >
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer" aria-label={`Buy ${name} on external site`}>
                  <ShoppingCart className="h-4 w-4" /> Buy Now
                </a>
              </Button>
            )}

            {/* Download PDF - Tertiary action */}
            <Button 
              variant="outline"
              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 flex items-center justify-center gap-2 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              aria-label={`Download PDF report for ${name}`}
              style={{ minHeight: '44px' }} // Ensure 44px touch target
            >
              <Download className="h-4 w-4" /> 
              {isDownloading ? 'Downloading...' : 'PDF Report'}
            </Button>
          </div>

          {/* Additional Actions - Less prominent, better mobile spacing */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label={`Save ${name} for later`}
              style={{ minHeight: '36px' }} // Slightly smaller but still accessible
            >
              <Heart className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Save</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label={`Compare ${name} with other products`}
              style={{ minHeight: '36px' }}
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Compare</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;