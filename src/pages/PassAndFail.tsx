
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Search } from 'lucide-react';

const ProductCategory = ({ title, image }: { title: string, image: string }) => (
  <div className="relative w-full h-full">
    <div className="w-[250px] h-[250px] rounded-full overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-2xl font-medium text-center">{title}</h3>
      </div>
    </div>
  </div>
);

const PassAndFail = () => {
  const [activeFilter, setActiveFilter] = useState<'PASS' | 'FAIL' | 'EXPIRED'>('PASS');
  
  const categories = [
    {
      title: "Protein Powders",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Creatine",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Mass Gainer",
      image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Omega 3",
      image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-10">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input 
                type="text" 
                placeholder="Search our certified product" 
                className="h-14 text-lg"
              />
            </div>
            <Button variant="default" className="bg-green-500 hover:bg-green-600 h-14 px-6">
              <Search size={24} />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Sort by</span>
            <div className="flex gap-2">
              <Button 
                variant={activeFilter === 'PASS' ? 'default' : 'outline'}
                className={activeFilter === 'PASS' ? 'bg-green-500 hover:bg-green-600' : ''}
                onClick={() => setActiveFilter('PASS')}
              >
                PASS
              </Button>
              <Button 
                variant={activeFilter === 'FAIL' ? 'default' : 'outline'}
                className={activeFilter === 'FAIL' ? 'bg-green-500 hover:bg-green-600' : ''}
                onClick={() => setActiveFilter('FAIL')}
              >
                FAIL
              </Button>
              <Button 
                variant={activeFilter === 'EXPIRED' ? 'default' : 'outline'}
                className={activeFilter === 'EXPIRED' ? 'bg-green-500 hover:bg-green-600' : ''}
                onClick={() => setActiveFilter('EXPIRED')}
              >
                EXPIRED
              </Button>
            </div>
          </div>
        </div>
        
        <div className="my-10">
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 flex justify-center">
                  <ProductCategory title={category.title} image={category.image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="border rounded-lg p-6 flex flex-col items-center">
            <img 
              src="https://trustified.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSouperSuperOats.28b88fc9.webp&w=384&q=75" 
              alt="Product" 
              className="w-40 h-auto mb-4"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 px-10 rounded-full">
              Pass
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PassAndFail;
