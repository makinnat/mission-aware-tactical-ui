import Navigation from "@/components/Navigation";
import { SEOHead } from "@/components/seo/SEOHead";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyAwareSection } from "@/components/WhyAwareSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { generateOrganizationSchema } from "@/utils/seo";

const Index = () => {
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Aware Defense - Military-Grade Hearing Protection & Biometric Wearables"
        description="Custom-fit hearing protection and biometric wearables for warfighters. FDA-cleared scanning technology trusted by Special Operations."
        canonical={`${window.location.origin}/`}
        structuredData={organizationSchema}
      />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <WhyAwareSection />
      <SolutionSection />
      <HowItWorksSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
