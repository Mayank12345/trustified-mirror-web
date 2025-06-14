import { ProductType } from '@/types/product';

export const products: ProductType[] = [
  // Gold Certified Products
  {
    id: 101,
    name: '100 % Performance Whey',
    brand: 'Avvatar',
    category: 'Whey Protein Powder',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-05-03',
    description: 'Premium whey protein powder with 100% performance guarantee. Gold certified for exceptional quality and purity standards.',
    rating: 4.9
  },
  {
    id: 102,
    name: 'Pure 07 Preworkout',
    brand: 'Naturalein',
    category: 'Pre-Workout',
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2022-12-28',
    description: 'Advanced pre-workout formula designed for maximum performance and energy boost. Gold standard certification.',
    rating: 4.8
  },
  {
    id: 103,
    name: 'Creatine Monohydrate',
    brand: 'Avvatar',
    category: 'Creatine',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2024-12-18',
    description: 'Pure creatine monohydrate with pharmaceutical grade quality. Gold certified for superior purity and effectiveness.',
    rating: 4.9
  },
  {
    id: 104,
    name: 'Biozyme Performance Whey',
    brand: 'Muscleblaze Biozyme Iso Zero',
    category: 'Whey Protein Powder',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2024-12-04',
    description: 'Advanced biozyme technology for superior protein absorption. Zero sugar formula with gold standard certification.',
    rating: 4.8
  },
  {
    id: 105,
    name: 'Biozyme Performance Whey',
    brand: 'Muscleblaze',
    category: 'Whey Protein Powder',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2024-07-21',
    description: 'Premium biozyme whey protein with enhanced digestibility and absorption. Gold certified quality assurance.',
    rating: 4.7
  },
  
  // Updated: This "Souper Super Oats" is not a protein powder, categorize as "Oats"
  {
    id: 1,
    name: 'Souper Super Oats',
    brand: 'Soulfood',
    category: 'Oats',
    imageUrl: 'https://trustified.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSouperSuperOats.28b88fc9.webp&w=384&q=75',
    status: 'PASS',
    date: '2023-04-15',
    description: 'Sourced from premium oats and carefully processed to maintain optimal nutritional value. Contains 24g of complete protein per serving with a full amino acid profile.',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Gold Whey Protein',
    brand: 'NutriFit',
    category: 'Whey Protein Powder',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-05-20',
    description: 'Premium whey isolate with 27g of protein per serving. Fast-absorbing formula ideal for post-workout recovery with minimal fat and carbs.',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Plant Protein',
    brand: 'GreenNutrition',
    category: 'Protein Powders',
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-02-18',
    description: 'Vegan protein blend made from pea, rice, and hemp sources. Contains artificial sweeteners that exceed recommended limits.',
    rating: 2.3
  },
  {
    id: 4,
    name: 'Organic Protein Blend',
    brand: 'EarthFuel',
    category: 'Protein Powders',
    imageUrl: 'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-07-12',
    description: 'USDA certified organic protein blend from pea, brown rice, and chia seeds. No artificial flavors or preservatives.',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Ultra Creatine',
    brand: 'PowerMax',
    category: 'Creatine',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-03-10',
    description: 'Micronized creatine monohydrate. Failed lab tests for purity standards with heavy metal contamination above acceptable levels.',
    rating: 1.9
  },
  {
    id: 6,
    name: 'Creatine HCL',
    brand: 'MuscleTech',
    category: 'Creatine',
    imageUrl: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-06-22',
    description: 'Highly soluble creatine hydrochloride for enhanced absorption. 5g per serving with zero fillers or additives.',
    rating: 4.6
  },
  {
    id: 7,
    name: 'Pure Creatine',
    brand: 'OptiFuel',
    category: 'Creatine',
    imageUrl: 'https://images.unsplash.com/photo-1506003094589-53954a26283f?q=80&w=1000&auto=format&fit=crop',
    status: 'EXPIRED',
    date: '2022-08-15',
    description: 'Pharmaceutical grade creatine monohydrate with 99.9% purity. Unflavored and mixes easily with any beverage.',
    rating: 4.2
  },
  {
    id: 8,
    name: 'Mass Gainer 5000',
    brand: 'BulkUp',
    category: 'Mass Gainer',
    imageUrl: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop',
    status: 'EXPIRED',
    date: '2022-11-30',
    description: 'High-calorie formula with 1250 calories per serving. Contains 50g protein, 250g carbs, and essential vitamins and minerals.',
    rating: 3.5
  },
  {
    id: 9,
    name: 'Serious Mass',
    brand: 'OptimumNutrition',
    category: 'Mass Gainer',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-09-05',
    description: 'Weight gain formula with 1200 calories per serving and 50g of protein. Contains 25 vitamins and minerals for complete nutrition.',
    rating: 4.4
  },
  {
    id: 10,
    name: 'Extreme Bulk Gainer',
    brand: 'MuscleForce',
    category: 'Mass Gainer',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-01-18',
    description: 'Maximum calorie formula for hardgainers. Contains excessive amounts of sugar and artificial ingredients above regulatory limits.',
    rating: 2.1
  },
  {
    id: 11,
    name: 'Omega 3 Fish Oil',
    brand: 'VitalHealth',
    category: 'Omega 3',
    imageUrl: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-06-05',
    description: 'Ultra-purified fish oil with 1000mg EPA and 500mg DHA per serving. Molecularly distilled to remove mercury and other contaminants.',
    rating: 4.9
  },
  {
    id: 12,
    name: 'Krill Oil Complex',
    brand: 'OceanPure',
    category: 'Omega 3',
    imageUrl: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1000&auto=format&fit=crop',
    status: 'PASS',
    date: '2023-04-28',
    description: 'Antarctic krill oil with superior bioavailability. Contains natural astaxanthin and choline for added health benefits.',
    rating: 4.5
  },
  {
    id: 13,
    name: 'Vegan Omega 3',
    brand: 'PlantLife',
    category: 'Omega 3',
    imageUrl: 'https://images.unsplash.com/photo-1531280021850-9cc2745ef31e?q=80&w=1000&auto=format&fit=crop',
    status: 'FAIL',
    date: '2023-02-11',
    description: 'Plant-based omega-3 from algae oil. Claims of DHA/EPA content not verified in lab testing.',
    rating: 2.7
  },
  
  // ADDED PRODUCTS FROM SCREENSHOT START
  {
    id: 201,
    name: "Avvatar 100% Performance Whey",
    brand: "Avvatar",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/b2df8497-c92f-4a43-860b-8ecf75d310c0.png",
    status: "PASS",
    date: "2024-05-01",
    description: "Tested and passed for purity and protein content.",
    rating: 4.8
  },
  {
    id: 202,
    name: "Muscleblaze Biozyme Performance Whey",
    brand: "Muscleblaze",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/b2df8497-c92f-4a43-860b-8ecf75d310c0.png",
    status: "PASS",
    date: "2024-04-27",
    description: "Biozyme Performance series verified for quality.",
    rating: 4.7
  },
  {
    id: 203,
    name: "GNC Pro Performance 100% Whey Protein",
    brand: "GNC",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/b2df8497-c92f-4a43-860b-8ecf75d310c0.png",
    status: "PASS",
    date: "2024-04-23",
    description: "Third-party tested for protein and safety.",
    rating: 4.6
  },
  {
    id: 204,
    name: "AS-IT-IS Nutrition Whey Protein",
    brand: "AS-IT-IS Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/b2df8497-c92f-4a43-860b-8ecf75d310c0.png",
    status: "FAIL",
    date: "2024-04-21",
    description: "Failed purity or label claim tests.",
    rating: 2.9
  },
  {
    id: 205,
    name: "Bigmuscles Nutrition Frotein Whey",
    brand: "Bigmuscles Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/bigmuscles-frotein.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Certified frotein whey tested for purity and quality.",
    rating: 4.7
  },
  {
    id: 206,
    name: "Bigmuscles Nutrition Crude Whey",
    brand: "Bigmuscles Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/bigmuscles-crude.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Tested crude whey for quality and authenticity.",
    rating: 4.5
  },
  {
    id: 207,
    name: "Labrada 100% Whey Protein",
    brand: "Labrada",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/labrada-whey.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Premium whey protein powder, lab tested for safety.",
    rating: 4.7
  },
  {
    id: 208,
    name: "MB Biozyme Performance Whey",
    brand: "MuscleBlaze",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/mb-biozyme.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Biozyme series performance whey with superior value.",
    rating: 4.8
  },
  {
    id: 209,
    name: "AS-IT-IS Nutrition Whey Protein",
    brand: "AS-IT-IS Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/asitis-whey.png",
    status: "FAIL",
    date: "2024-06-01",
    description: "Failed quality test for purity and ingredients.",
    rating: 2.6
  },
  {
    id: 210,
    name: "GNC Pro Performance Whey Protein",
    brand: "GNC",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/gnc-pp-whey.png",
    status: "PASS",
    date: "2024-06-01",
    description: "GNC Pro Performance 100% whey tested and passed.",
    rating: 4.7
  },
  {
    id: 211,
    name: "Oziva Protein & Herbs Whey",
    brand: "Oziva",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/oziva-whey.png",
    status: "FAIL",
    date: "2024-06-01",
    description: "Oziva failed quality and purity checks.",
    rating: 2.3
  },
  {
    id: 212,
    name: "ON Gold Standard 100% Whey",
    brand: "Optimum Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/on-gold.png",
    status: "PASS",
    date: "2024-06-01",
    description: "ON Gold Standard passed all quality tests.",
    rating: 4.9
  },
  {
    id: 213,
    name: "Dymatize Nutrition Elite 100% Whey",
    brand: "Dymatize Nutrition",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/dymatize-whey.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Dymatize Elite Whey Protein powder, tested.",
    rating: 4.8
  },
  {
    id: 214,
    name: "Nutrabay Wellness Gold Whey Protein Isolate",
    brand: "Nutrabay",
    category: "Whey Protein Powder",
    imageUrl: "/lovable-uploads/nutrabay-gold.png",
    status: "PASS",
    date: "2024-06-01",
    description: "Nutrabay Gold Whey Isolate, purity verified.",
    rating: 4.7
  },
];

export const categories = [
  "All Categories",
  "Whey Protein Powder",
  "Protein Powders",
  "Oats",
  "Creatine",
  "Mass Gainer",
  "Omega 3",
  "Pre-Workout"
];
