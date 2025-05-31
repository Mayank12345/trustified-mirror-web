
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { HandHeart, Shield, Eye, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  contact: z.string().min(10, { message: "Contact must be at least 10 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

const GetCertified = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      contact: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <HandHeart className="h-16 w-16 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interested in getting <span className="text-green-500">Trustified</span>?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Show your customers that you are completely transparent about what's in the label is in your product with India's first and only 100% blind testing certification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Form Section */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Submit Your Request</CardTitle>
              <CardDescription className="text-green-100">
                Fill out this form to get started with certification
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email address"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Company Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your company name"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Contact *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Kindly mention a brief description of what you would like to discuss *
                        </FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Tell us about your products and certification needs..."
                            className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium rounded-md transition-colors"
                  >
                    SEND
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Terms and Conditions Section */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-500" />
                  Terms and Conditions for Blind Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    In the event a company wants to participate in the blind testing process, the testing expenses must be covered by the company itself.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Please take note: We only do 100% blind testing and never collect samples from manufacturers or companies. Also, to maintain 100% trust and transparency for customers, we never disclose how, when, or from where we will buy the products.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    If the company's product fails the test, failed results will also be shown.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">4</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Last but not least, this is a very ethical certification designed to keep customers in mind so that they can avoid adulterated products and choose safe ones. Apply for this certification only if your products are genuine.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Why Choose Trustified?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Eye className="h-4 w-4 text-green-500" />
                    100% transparent blind testing process
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Shield className="h-4 w-4 text-green-500" />
                    India's first ethical certification program
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Build customer trust and credibility
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetCertified;
