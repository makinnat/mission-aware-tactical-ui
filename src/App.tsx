import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from "@/contexts/CartContext";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy load non-critical pages
const Products = lazy(() => import("./pages/Products"));
const EarShield = lazy(() => import("./pages/EarShield"));
const SwimPlug = lazy(() => import("./pages/SwimPlug"));
const EarBud = lazy(() => import("./pages/EarBud"));
const AviationCEP = lazy(() => import("./pages/AviationCEP"));
const CustomOvermold = lazy(() => import("./pages/CustomOvermold"));
const MusicPlugs = lazy(() => import("./pages/MusicPlugs"));
const EarDefender = lazy(() => import("./pages/EarDefender"));
const RadioCOMM = lazy(() => import("./pages/RadioCOMM"));
const SleepPlug = lazy(() => import("./pages/SleepPlug"));
const GetScanned = lazy(() => import("./pages/GetScanned"));
const InstructionsAndCare = lazy(() => import("./pages/InstructionsAndCare"));
const HowToBuy = lazy(() => import("./pages/HowToBuy"));
const TechnologyOverview = lazy(() => import("./pages/TechnologyOverview"));
const EFit3DScanner = lazy(() => import("./pages/EFit3DScanner"));
const BiometricWearables = lazy(() => import("./pages/BiometricWearables"));
const UseCases = lazy(() => import("./pages/UseCases"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const RequestConsultation = lazy(() => import("./pages/RequestConsultation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  usePerformanceMonitor();
  
  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:handle" element={<Products />} />
              <Route path="/collections/:handle" element={<Products />} />
            <Route path="/products/earshield" element={<EarShield />} />
            <Route path="/products/swimplug" element={<SwimPlug />} />
            <Route path="/products/earbud" element={<EarBud />} />
            <Route path="/products/aviation-cep" element={<AviationCEP />} />
            <Route path="/products/custom-overmold" element={<CustomOvermold />} />
            <Route path="/products/musicplugs" element={<MusicPlugs />} />
            <Route path="/products/eardefender" element={<EarDefender />} />
            <Route path="/products/radiocomm" element={<RadioCOMM />} />
            <Route path="/products/sleepplug" element={<SleepPlug />} />
              <Route path="/get-scanned" element={<GetScanned />} />
              <Route path="/instructions-and-care" element={<InstructionsAndCare />} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/technology" element={<TechnologyOverview />} />
              <Route path="/technology/efit-3d-scanner" element={<EFit3DScanner />} />
              <Route path="/technology/biometric-wearables" element={<BiometricWearables />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/request-consultation" element={<RequestConsultation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
  </HelmetProvider>
  );
};

export default App;