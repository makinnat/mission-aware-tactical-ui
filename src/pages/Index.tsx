import Navigation from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyAwareSection } from "@/components/WhyAwareSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PartnerSection } from "@/components/PartnerSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <WhyAwareSection />
      <SolutionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PartnerSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
