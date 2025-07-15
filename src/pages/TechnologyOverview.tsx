import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, Scan, Brain, Shield, Zap, Database, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const TechnologyOverview = () => {
  const navigate = useNavigate();
  
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: pillarsRef,
    isVisible: pillarsVisible
  } = useScrollAnimation();
  
  const {
    ref: advantagesRef,
    isVisible: advantagesVisible
  } = useScrollAnimation();
  
  const {
    ref: comparisonRef,
    isVisible: comparisonVisible
  } = useScrollAnimation();
  
  const {
    ref: finalCtaRef,
    isVisible: finalCtaVisible
  } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-signal-white mb-8 leading-tight md:text-6xl">
              TECH THAT FITS. TECH THAT PERFORMS.
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto mb-10">
              The only platform that unites precision scanning, mission-grade hearing protection, and biometric upgrade paths — all built for field use.
            </p>
            <Button 
              className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" 
              style={{ backgroundColor: '#95182b' }}
            >
              REQUEST A DEMO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Pillars Section */}
      <section 
        ref={pillarsRef} 
        className={`py-20 transition-all duration-1000 delay-200 ${pillarsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* eFit 3D Scanner */}
              <Card className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-400 ${pillarsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-signal-white mb-6">
                    FDA-CLEARED. NON-CONTACT.
                  </h3>
                  <div className="w-48 h-48 mx-auto mb-6 bg-combat-black rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/67c45871-fd6f-4e93-93b8-ce87da954882.png" 
                      alt="eFit 3D Scanner" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <p className="text-desert-tan mb-8 leading-relaxed">
                    Our scanner captures precise ear canal geometry in under 2 minutes — no foam, no silicone, and zero infection risk.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
                    onClick={() => navigate('/earshield')}
                  >
                    LEARN ABOUT EFIT SCANNING
                  </Button>
                </CardContent>
              </Card>

              {/* Biometric Wearables */}
              <Card className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-600 ${pillarsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-olive-drab rounded-lg mb-6 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab mb-6">
                    FUTURE-READY SENSOR INTEGRATION
                  </h3>
                  <p className="text-signal-white mb-8 leading-relaxed">
                    Our platform is built for next-gen performance: biometric data, EEG sensing, readiness tracking, and cognitive monitoring.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
                  >
                    LEARN ABOUT BIOMETRICS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Advantages Section */}
      <section 
        ref={advantagesRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-300 ${advantagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              A PLATFORM BUILT FOR REAL-WORLD DEPLOYMENT
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, text: "No physical impressions required" },
                { icon: Zap, text: "Same-day scan + ship capability" },
                { icon: Brain, text: "Passive biometric readiness built-in" },
                { icon: Headphones, text: "Comms compatibility built into design" },
                { icon: Database, text: "Digitally stored profiles for lifetime access" },
                { icon: Shield, text: "Mission-grade durability standards" }
              ].map((advantage, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-500 delay-${500 + (index * 100)} ${advantagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="w-8 h-8 bg-olive-drab rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <advantage.icon className="h-5 w-5 text-signal-white" />
                  </div>
                  <p className="text-desert-tan font-medium leading-relaxed">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section 
        ref={comparisonRef} 
        className={`py-20 transition-all duration-1000 delay-400 ${comparisonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-olive-drab mb-8">
              THE ONLY FDA-CLEARED NON-CONTACT SYSTEM
            </h2>
            <p className="text-xl text-signal-white leading-relaxed mb-10">
              Compare our patented scanner and data platform to outdated foam plug workflows. Trust the tech that elite units rely on.
            </p>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
            >
              VIEW COMPARISON
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={finalCtaRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-500 ${finalCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-olive-drab mb-8">
              WANT TO SEE IT IN ACTION?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We'll show you how Aware's platform deploys fast, scales efficiently, and delivers unmatched results in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" 
                style={{ backgroundColor: '#95182b' }}
              >
                REQUEST A TECHNOLOGY DEMO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
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

export default TechnologyOverview;