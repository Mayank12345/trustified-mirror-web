
export type ProductType = {
  id: number;
  name: string;
  brand: string;
  category: string;
  imageUrl: string;
  status: 'PASS' | 'FAIL' | 'EXPIRED';
  date: string;
  description?: string;
  rating?: number;
  affiliateLink?: string;
  productWebsiteLink?: string;
  price?: number;
};
