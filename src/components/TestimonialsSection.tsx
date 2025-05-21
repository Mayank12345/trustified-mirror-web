
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
          <div className="bg-purple-100 text-primary rounded-full h-10 w-10 flex items-center justify-center font-semibold">
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
      role: "Director of Education",
      company: "Global Learning Institute",
      quote: "Trustified has completely transformed how we issue certificates to our students. The blockchain verification gives our credentials real value in the job market.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "HR Manager",
      company: "Tech Innovations",
      quote: "As someone who verifies credentials regularly, I can't express how much time we've saved with Trustified. The instant verification is a game-changer.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "CEO",
      company: "Skill Academy",
      quote: "We've seen a 40% increase in course enrollment since implementing Trustified certificates. Students value the blockchain-verified credentials.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "Operations Director",
      company: "Certification Council",
      quote: "The custom design features combined with blockchain security makes Trustified the best credentialing solution we've used in our 15 years of operation.",
      rating: 4,
    },
    {
      name: "Elena Rodriguez",
      role: "Event Manager",
      company: "Global Summit Series",
      quote: "Our attendees love receiving blockchain-verified badges for our events. It's added a whole new level of professionalism to our conferences.",
      rating: 5,
    },
    {
      name: "James Lee",
      role: "Technical Director",
      company: "Blockchain Education Network",
      quote: "From a technical perspective, Trustified offers the perfect balance between robust security and ease of use. Their API is well-documented and simple to integrate.",
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
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Hear from organizations that have transformed their credentialing process with Trustified.
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
