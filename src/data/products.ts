
import { ProductType } from '@/types/product';

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Souper Super Oats',
    brand: 'Soulfood',
    category: 'Protein Powders',
    imageUrl: 'https://trustified.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSouperSuperOats.28b88fc9.webp&w=384&q=75',
    status: 'PASS',
    date: '2023-04-15'
  },
  {
    id: 2,
    name: 'Gold Whey Protein',
    brand: 'NutriFit',
    category: 'Protein Powders',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-05-20'
  },
  {
    id: 3,
    name: 'Ultra Creatine',
    brand: 'PowerMax',
    category: 'Creatine',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-03-10'
  },
  {
    id: 4,
    name: 'Mass Gainer 5000',
    brand: 'BulkUp',
    category: 'Mass Gainer',
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop',
    status: 'EXPIRED',
    date: '2022-11-30'
  },
  {
    id: 5,
    name: 'Omega 3 Fish Oil',
    brand: 'VitalHealth',
    category: 'Omega 3',
    imageUrl: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-06-05'
  },
  {
    id: 6,
    name: 'Plant Protein',
    brand: 'GreenNutrition',
    category: 'Protein Powders',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-02-18'
  }
];

export const categories = ['All Categories', 'Protein Powders', 'Creatine', 'Mass Gainer', 'Omega 3'];
