import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductType } from '@/types/product';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, Package, ArrowLeft, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { supabase } from "@/integrations/supabase/client";
import { usePdfDownload } from "@/hooks/usePdfDownload";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);

  const { downloadPdf, isDownloading } = usePdfDownload();

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);

      // Fetch product from Supabase using Number(id)
      supabase
        .from("products")
        .select("*")
        .eq("id", Number(id))
        .maybeSingle()
        .then(({ data, error }) => {
          if (error || !data) {
            setProduct(null);
            setError('Product not found');
          } else {
            setProduct({
              id: data.id,
              name: data.name,
              brand: data.brand ?? '',
              category: data.category,
              imageUrl: data.image_url || "",
              status: data.status as 'PASS' | 'FAIL' | 'EXPIRED',
              date: data.date,
              description: data.description ?? '',
              rating: data.rating ?? undefined,
            });
            setError(null);
          }
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    // Fetch PDF name for the download button using Number(id)
    const fetchPdfName = async () => {
      if (!id) {
        setPdfName(null);
        return;
      }
      const { data, error } = await supabase
        .from('product_pdfs')
        .select('pdf_name')
        .eq('product_id', Number(id))
        .maybeSingle();

      if (data && data.pdf_name) {
        setPdfName(data.pdf_name);
      } else {
        setPdfName(null);
      }
    };
    fetchPdfName();
  }, [id]);

  const statusColors = {
    PASS: "bg-green-500 text-white",
    FAIL: "bg-red-500 text-white",
    EXPIRED: "bg-amber-500 text-white",
  };

  const statusIcons = {
    PASS: <Check className="h-5 w-5" />,
    FAIL: <X className="h-5 w-5" />,
    EXPIRED: <Package className="h-5 w-5" />,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-500">Loading product information...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center h-64">
              <p className="text-lg text-gray-500 mb-4">{error || "Product not found"}</p>
              <Button asChild>
                <Link to="/passandfail">Return to products</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back button */}
          <Button 
            variant="outline" 
            className="mb-6" 
            asChild
          >
            <Link to="/passandfail" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center h-[400px]">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-2">
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-700 mb-4">by {product.brand}</p>
              
              {/* Status Badge */}
              <Badge 
                className={`${statusColors[product.status]} px-4 py-2 text-base font-medium shadow-sm flex items-center gap-2 mb-6 w-fit`}
              >
                {statusIcons[product.status]} {product.status}
              </Badge>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">
                {product.description || "No detailed description available for this product."}
              </p>
              
              {/* Additional Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Certification Date</p>
                  <p className="font-medium">{product.date}</p>
                </div>
                
                {product.rating && (
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{product.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Lab Report Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="lab-report">Lab Report</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              </TabsList>
              
              <TabsContent value="summary" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Certification Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Status: {product.status}</h3>
                        <p className="text-gray-700">
                          {product.status === 'PASS' && "This product has passed all required tests and meets our quality standards."}
                          {product.status === 'FAIL' && "This product has failed one or more critical tests and does not meet quality standards."}
                          {product.status === 'EXPIRED' && "This product's certification has expired and requires retesting."}
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-semibold mb-2">Certification Details</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Certified on: {product.date}</li>
                          <li>Product Category: {product.category}</li>
                          <li>Manufacturer: {product.brand}</li>
                          <li>Valid for: 12 months from certification date</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="lab-report" className="mt-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Detailed Laboratory Report</CardTitle>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      disabled={!pdfName || isDownloading}
                      onClick={() => product && downloadPdf(product.id, product.name)}
                    >
                      <FileText className="h-4 w-4" /> 
                      {isDownloading
                        ? 'Preparing...'
                        : pdfName 
                          ? `Download PDF (${pdfName})`
                          : "PDF Not Available"}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Test Results</h3>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Protein Content</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.category === 'Protein Powders' ? '24.6g per serving' : 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.category === 'Protein Powders' ? '±5% of label claim' : 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {product.status === 'PASS' ? (
                                    <Badge className="bg-green-100 text-green-800">PASS</Badge>
                                  ) : (
                                    <Badge className="bg-red-100 text-red-800">FAIL</Badge>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Heavy Metals</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.status === 'PASS' ? 'Below threshold' : 'Above threshold'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  &lt; 0.5ppm
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {product.status === 'PASS' ? (
                                    <Badge className="bg-green-100 text-green-800">PASS</Badge>
                                  ) : (
                                    <Badge className="bg-red-100 text-red-800">FAIL</Badge>
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Microbial Content</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {product.status === 'PASS' ? 'None detected' : 'Present'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  None detected
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {product.status === 'PASS' ? (
                                    <Badge className="bg-green-100 text-green-800">PASS</Badge>
                                  ) : (
                                    <Badge className="bg-red-100 text-red-800">FAIL</Badge>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-3">Laboratory Notes</h3>
                        <p className="text-gray-700">
                          {product.status === 'PASS' 
                            ? "This product meets all quality and safety standards established by our certification program. All tested parameters are within acceptable ranges." 
                            : "This product fails to meet one or more critical quality or safety standards. See detailed report for specific issues identified during testing."}
                        </p>
                        <p className="text-gray-700 mt-2">
                          Testing conducted at ISO 17025 certified laboratory facilities using validated analytical methods.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ingredients Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">Declared Ingredients</h3>
                        <p className="text-gray-700">
                          {product.category === 'Protein Powders' && "Whey Protein Isolate, Whey Protein Concentrate, Natural and Artificial Flavors, Lecithin, Acesulfame Potassium, Sucralose."}
                          {product.category === 'Creatine' && "Creatine Monohydrate, Silicon Dioxide (anti-caking agent)."}
                          {product.category === 'Mass Gainer' && "Maltodextrin, Whey Protein Concentrate, Calcium Caseinate, Medium Chain Triglycerides, Vitamins and Minerals Blend, Natural and Artificial Flavors."}
                          {product.category === 'Omega 3' && "Fish Oil Concentrate, Gelatin, Glycerin, Purified Water, Mixed Tocopherols."}
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-semibold mb-2">Allergen Information</h3>
                        <p className="text-gray-700">
                          {product.category === 'Protein Powders' && "Contains: Milk, Soy (lecithin)."}
                          {product.category === 'Creatine' && "No known allergens."}
                          {product.category === 'Mass Gainer' && "Contains: Milk, Soy (lecithin). Manufactured in a facility that also processes egg, wheat, tree nuts, and peanuts."}
                          {product.category === 'Omega 3' && "Contains: Fish (anchovy, sardine, mackerel). Gelatin derived from bovine sources."}
                        </p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-semibold mb-2">Nutrient Profile</h3>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <p className="text-sm text-gray-500">Protein</p>
                            <p className="font-medium text-lg">
                              {product.category === 'Protein Powders' && "24-27g"}
                              {product.category === 'Creatine' && "0g"}
                              {product.category === 'Mass Gainer' && "50g"}
                              {product.category === 'Omega 3' && "0g"}
                            </p>
                          </div>
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <p className="text-sm text-gray-500">Carbohydrates</p>
                            <p className="font-medium text-lg">
                              {product.category === 'Protein Powders' && "3-5g"}
                              {product.category === 'Creatine' && "0g"}
                              {product.category === 'Mass Gainer' && "250g"}
                              {product.category === 'Omega 3' && "0g"}
                            </p>
                          </div>
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <p className="text-sm text-gray-500">Fat</p>
                            <p className="font-medium text-lg">
                              {product.category === 'Protein Powders' && "1-2g"}
                              {product.category === 'Creatine' && "0g"}
                              {product.category === 'Mass Gainer' && "10g"}
                              {product.category === 'Omega 3' && "1g"}
                            </p>
                          </div>
                          <div className="border rounded-lg p-4 bg-gray-50">
                            <p className="text-sm text-gray-500">Calories</p>
                            <p className="font-medium text-lg">
                              {product.category === 'Protein Powders' && "120-140"}
                              {product.category === 'Creatine' && "0"}
                              {product.category === 'Mass Gainer' && "1250"}
                              {product.category === 'Omega 3' && "10"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
