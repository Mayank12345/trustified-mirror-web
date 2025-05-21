
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';

// Sample product data
const products = [
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

const categories = ['All Categories', 'Protein Powders', 'Creatine', 'Mass Gainer', 'Omega 3'];

const PassAndFail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED' | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    let results = [...products];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (activeFilter !== 'ALL') {
      results = results.filter(product => product.status === activeFilter);
    }
    
    // Filter by category
    if (selectedCategory !== 'All Categories') {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(results);
  }, [searchTerm, activeFilter, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Product Certification Database</h1>
        
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 flex gap-2">
              <div className="flex-1">
                <Input 
                  type="text" 
                  placeholder="Search product or brand" 
                  className="h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="default" className="bg-green-500 hover:bg-green-600 h-12 px-4">
                <Search size={20} />
              </Button>
            </div>
            
            {/* Category Filter */}
            <div className="md:col-span-1">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Status Filter */}
            <div className="md:col-span-1">
              <Select
                value={activeFilter}
                onValueChange={(value: 'PASS' | 'FAIL' | 'EXPIRED' | 'ALL') => setActiveFilter(value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All Status</SelectItem>
                  <SelectItem value="PASS">PASS</SelectItem>
                  <SelectItem value="FAIL">FAIL</SelectItem>
                  <SelectItem value="EXPIRED">EXPIRED</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl text-muted-foreground">No products match your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  brand={product.brand}
                  category={product.category}
                  status={product.status as 'PASS' | 'FAIL' | 'EXPIRED'}
                  date={product.date}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Table View for Desktop */}
        <div className="mt-16 hidden md:block">
          <h2 className="text-xl font-medium mb-4">Certification Records</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Badge 
                      className={`${
                        product.status === 'PASS' 
                          ? 'bg-green-500' 
                          : product.status === 'FAIL'
                          ? 'bg-red-500'
                          : 'bg-amber-500'
                      } text-white`}
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PassAndFail;
