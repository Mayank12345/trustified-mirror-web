
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const Testimonial = ({ name, role, company, quote, rating }: TestimonialProps) => {
  return (
    <Card className="bg-white border rounded-lg shadow-sm h-full">
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-4">"{quote}"</blockquote>
        <div className="flex items-center mt-4">
          <div className="bg-green-100 text-green-600 rounded-full h-10 w-10 flex items-center justify-center font-semibold">
            {name.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      company: "Health & Wellness Blog",
      quote: "Trustified helped me discover that my expensive protein powder was actually contaminated with heavy metals. Their testing saved my health!",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Sports Nutritionist",
      company: "Elite Performance Center",
      quote: "As a professional, I rely on Trustified's lab reports to recommend safe supplements to my athletes. Their testing is thorough and reliable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Personal Trainer",
      company: "FitLife Gym",
      quote: "I always check Trustified before recommending any supplement to my clients. It's become an essential tool in my practice.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Supplement Store Owner",
      company: "Pure Nutrition",
      quote: "Trustified testing has helped us stock only genuine, safe products. Our customers trust us more knowing we use their verification.",
      rating: 4,
    },
    {
      name: "Elena Rodriguez",
      role: "Health Coach",
      company: "Wellness Solutions",
      quote: "The detailed lab reports from Trustified give me confidence when advising clients about supplement safety and quality.",
      rating: 5,
    },
    {
      name: "James Lee",
      role: "Athlete",
      company: "Professional Bodybuilder",
      quote: "After finding out my creatine was spiked with banned substances through Trustified, I never buy supplements without checking their database first.",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our <span className="text-green-600">Users Say</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Hear from people who trust our lab testing to make informed supplement choices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevPage}
            disabled={pageCount <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {Array.from({ length: pageCount }).map((_, i) => (
            <Button
              key={i}
              variant={i === currentPage ? "default" : "outline"}
              className="w-10"
              onClick={() => setCurrentPage(i)}
            >
              {i + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextPage}
            disabled={pageCount <= 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
