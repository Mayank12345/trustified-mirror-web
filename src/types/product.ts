
export type ProductType = {
  id: number;
  name: string;
  brand: string;
  category: string;
  imageUrl: string;
  status: 'PASS' | 'FAIL' | 'EXPIRED' | 'GOLD';
  date: string;
  description?: string;
  rating?: number;
  affiliateLink?: string;
  productWebsiteLink?: string;
  price?: number;
  amazonPrice?: number;
  websitePrice?: number;
};
