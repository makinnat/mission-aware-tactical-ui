import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import EarShield from "./pages/EarShield";
import GetScanned from "./pages/GetScanned";
import InstructionsAndCare from "./pages/InstructionsAndCare";
import HowToBuy from "./pages/HowToBuy";
import TechnologyOverview from "./pages/TechnologyOverview";
import EFit3DScanner from "./pages/EFit3DScanner";
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
          <Route path="/products" element={<Products />} />
          <Route path="/products/earshield" element={<EarShield />} />
          <Route path="/get-scanned" element={<GetScanned />} />
          <Route path="/instructions-and-care" element={<InstructionsAndCare />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/technology" element={<TechnologyOverview />} />
          <Route path="/technology/efit-3d-scanner" element={<EFit3DScanner />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;