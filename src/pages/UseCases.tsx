import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Shield, Plane, HardHat, Activity, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const UseCases = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: useCasesRef,
    isVisible: useCasesVisible
  } = useScrollAnimation();
  
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();

  const useCases = [
    {
      icon: Shield,
      title: "GROUND COMBAT OPERATORS",
      body: "Operators need protection they'll actually wear. Foam doesn't cut it — it gets removed mid-mission. Aware gear stays in, seals properly, and works with tactical comms.",
      products: "EarShield, CEP, EarDefender",
      ctaText: "SEE HOW IT FITS YOUR UNIT"
    },
    {
      icon: Plane,
      title: "AVIATORS & AIRCREW",
      body: "Cockpits are loud. Comms are mission-critical. EarShield and CEP systems offer fatigue-free protection and seamless radio clarity — tested in U.S. aviation units.",
      products: "EarShield, CEP",
      ctaText: "REQUEST AVIATION OVERVIEW"
    },
    {
      icon: HardHat,
      title: "INDUSTRIAL SAFETY & OSHA COMPLIANCE",
      body: "Ensure hearing conservation program success. Get your entire workforce scanned in a day. Track compliance. Replace gear instantly with stored digital profiles.",
      products: "EarDefender Vented, EarBud, Scanner",
      ctaText: "TALK TO AN INDUSTRIAL REP"
    },
    {
      icon: Activity,
      title: "MEDICAL & BIOMETRIC RESEARCH",
      body: "The ear canal is a gateway to real-time data. Our platform enables passive EEG, core temp, and HRV capture for performance studies and field research.",
      products: "Biometric-Ready EarGear",
      ctaText: "LEARN ABOUT OUR SENSOR PLATFORM"
    },
    {
      icon: Target,
      title: "TRAINING & SIM PERFORMANCE METRICS",
      body: "Custom gear ensures accurate data from every evolution. Whether monitoring cognition or ensuring hearing protection compliance, we bring precision to the pipeline.",
      products: "Custom Training Solutions",
      ctaText: "REQUEST A TECHNICAL DEMO"
    }
  ];

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black text-signal-white mb-6 leading-tight md:text-6xl uppercase">
              BUILT FOR THE FIELD. PROVEN IN THE FIELD.
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto">
              Explore how Aware Defense supports real-world missions across military, aviation, industrial, and medical domains.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section 
        ref={useCasesRef} 
        className={`py-20 transition-all duration-1000 delay-200 ${useCasesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card 
                  key={index}
                  className={`h-full bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-${400 + (index * 100)} ${useCasesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-olive-drab rounded-lg mb-6 flex items-center justify-center">
                      <useCase.icon className="h-8 w-8 text-signal-white" />
                    </div>
                    
                    <h3 className="text-xl font-black text-signal-white mb-4 uppercase min-h-[3rem] flex items-center">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-signal-white leading-relaxed mb-6 flex-1">
                      {useCase.body}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-sm text-desert-tan mb-2 uppercase font-semibold tracking-wide">
                        Relevant Products:
                      </p>
                      <p className="text-sm text-desert-tan">
                        {useCase.products}
                      </p>
                    </div>
                    
                    <Button 
                      className="w-full text-sm px-6 py-3 font-semibold uppercase tracking-wide text-white"
                      style={{ backgroundColor: '#95182b' }}
                    >
                      {useCase.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={ctaRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-olive-drab mb-8 uppercase">
              HAVE A SPECIFIC USE CASE?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We've worked with Tier 1 units, government agencies, and OEMs — let's solve your problem next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#95182b' }}
              >
                REQUEST A CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-desert-tan text-desert-tan hover:bg-desert-tan hover:text-combat-black"
              >
                CONTACT OUR TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;