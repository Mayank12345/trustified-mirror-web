
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TestTube, Shield, Award, AlertTriangle } from 'lucide-react';

const HowWeTest = () => {
  const sevenLevelTests = [
    {
      level: 1,
      title: "Macro accuracy tested & trusted",
      description: "Initial accuracy verification of macronutrient content"
    },
    {
      level: 2,
      title: "Full spectrum of amino profile tested & trusted",
      description: "Comprehensive amino acid profile analysis"
    },
    {
      level: 3,
      title: "Melamine spiking tested & trusted",
      description: "Detection of harmful melamine contamination"
    },
    {
      level: 4,
      title: "Heavy metals tested & trusted",
      description: "Screening for dangerous heavy metal contamination"
    },
    {
      level: 5,
      title: "Microbial contamination tested & trusted",
      description: "Testing for harmful bacteria and microorganisms"
    },
    {
      level: 6,
      title: "Banned substances tested & trusted",
      description: "Screening for prohibited and illegal substances"
    },
    {
      level: 7,
      title: "Label claim verification tested & trusted",
      description: "Final verification of all label claims and ingredients"
    }
  ];

  const dopingSubstances = [
    "19-Norandrostenedione", "Androstenedione", "Boldenone", "DHEA",
    "Mesterolone", "Methandienon", "Metenolone", "Methyl-1-testosterone",
    "Methyltestosterone", "Testosterone", "Trenbolone", "Dihydrotestosterone",
    "Stanozolol", "Cortisol", "Prednisolone", "Prednisone", "methylprednisolone",
    "Complexe sample", "Ethanol"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We <span className="text-green-600">Test</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive testing methodology ensures every product meets the highest standards of quality, safety, and authenticity.
            </p>
          </div>

          {/* 7 Level Testing Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <TestTube className="h-8 w-8 text-green-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    What is <span className="text-green-600">7 Level Testing</span>?
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    To earn Trustified Certification each product must pass all the Levels of blind testing.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <p className="text-red-800 text-sm">
                        In case a product Fails with a big difference at any level then further levels will not be tested and such product will be listed under the FAIL category immediately.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <p className="text-green-800 text-sm">
                        If product meets expected results at all the levels then it will be marked under the PASS category and company can request for the certification.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    For every certified product same blind testing process will be repeated after every 6 months to ensure product integrity and complete peace of mind.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-4">
                    {sevenLevelTests.map((test, index) => (
                      <div key={test.level} className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Badge className="bg-green-600 text-white px-3 py-1 text-sm font-medium">
                            Level {test.level}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {test.title}
                          </h4>
                          <p className="text-gray-600 text-xs">
                            {test.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8 Level Testing (Gold) Section */}
          <section className="mb-20">
            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-yellow-600" />
                  <CardTitle className="text-3xl font-bold">
                    What is <span className="text-yellow-600">8 Level Testing</span>?
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Only those products are eligible for Trustified Gold blind testing that are already Trustified certified for Accuracy and Purity.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Trustified Gold is a revolution in the supplement industry. The presence of Trustified Gold logo on labels demonstrates that the product has been blindly tested for 19 doping substances from the World Anti-Doping Agency (WADA) prohibited list:
                </p>
                
                <div className="bg-white rounded-lg p-6 border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-4">19 WADA Prohibited Substances Tested:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {dopingSubstances.map((substance, index) => (
                      <div key={index} className="text-sm text-gray-700 bg-gray-50 rounded px-3 py-1">
                        {substance}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    If the product passes the doping tests, then it will be declared a Trustified Gold-certified product.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  For every Gold-certified product, the same blind testing process will be repeated every 12 months to ensure product integrity and complete peace of mind.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Trustified Gold is an all-inclusive certification program for a fitness enthusiast, bodybuilder, or athlete.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Challenge Process Section */}
          <section className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Challenge Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    A manufacturer or company can send a challenge request against any of their failed products listed on Trustified at{' '}
                    <a href="mailto:legal@trustified.in" className="text-green-600 hover:text-green-700">
                      legal@trustified.in
                    </a>
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Please note the challenger commits to the rules mentioned below:</h4>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Trustified always purchases two samples for all its tested products; therefore, the latest sample cannot be requested and submitted by the challenger.</span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>In case the challenger has some doubt in our blind testing process, then they can request a video document of how we purchased the product and sent the sealed box of it to our testing partner (we always film a proof document of our blind testing process for all our tested products).</span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>The challenger will be responsible for advance payment of the testing costs, and it will be non-refundable.</span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Once the payment is received by Trustified through valid invoices, the challenge process will begin at our independent ISO 17025, NABL accredited laboratory partner. Challenger cannot request testing in any other specific lab.</span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>If the challenge confirms that the product initial result was correct, then no modifications will be done at Trustified database, in case the result of this retest will be final and will be considered the correct result regardless of any considerable correction found; the result will be final and will be the latest and updated result on the database.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> If two products with different batch numbers are found different by the lab in advance to test and keep the remaining sample, ensuring we can retest the sample in the event of a challenge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowWeTest;
