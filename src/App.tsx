
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PassAndFail from "./pages/PassAndFail";
import Gold from "./pages/Gold";
import NmrReports from "./pages/NmrReports";
import GetCertified from "./pages/GetCertified";
import ProductDetail from "./pages/ProductDetail";
import HowWeTest from "./pages/HowWeTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set page title dynamically based on route
    const updatePageTitle = () => {
      const path = window.location.pathname;
      let title = "Trustified - Blockchain Verified Digital Credentials";
      
      switch (path) {
        case "/passandfail":
          title = "Pass & Fail Results | Trustified";
          break;
        case "/gold":
          title = "Gold Certification | Trustified";
          break;
        case "/nmr-reports":
          title = "NMR Test Reports | Trustified";
          break;
        case "/get-certified":
          title = "Get Certified | Trustified";
          break;
        case "/how-we-test":
          title = "How We Test | Trustified";
          break;
        default:
          if (path.startsWith("/product/")) {
            title = "Product Details | Trustified";
          }
      }
      
      document.title = title;
    };

    updatePageTitle();
    
    // Update title on route changes
    const handleRouteChange = () => {
      setTimeout(updatePageTitle, 0);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/passandfail" element={<PassAndFail />} />
              <Route path="/gold" element={<Gold />} />
              <Route path="/nmr-reports" element={<NmrReports />} />
              <Route path="/get-certified" element={<GetCertified />} />
              <Route path="/how-we-test" element={<HowWeTest />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
