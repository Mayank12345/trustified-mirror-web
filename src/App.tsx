
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PassAndFail from "./pages/PassAndFail";
import Gold from "./pages/Gold";
import NmrReports from "./pages/NmrReports";
import GetCertified from "./pages/GetCertified";
import ProductDetail from "./pages/ProductDetail";
import HowWeTest from "./pages/HowWeTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
