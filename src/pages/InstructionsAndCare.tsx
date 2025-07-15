import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  CheckCircle, 
  RotateCcw, 
  Hand, 
  ArrowRight, 
  Shield, 
  Droplets, 
  Clock,
  AlertCircle,
  RefreshCw,
  Store
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const InstructionsAndCare = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: insertionRef,
    isVisible: insertionVisible
  } = useScrollAnimation();
  
  const {
    ref: cleaningRef,
    isVisible: cleaningVisible
  } = useScrollAnimation();
  

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-24 pb-16 transition-all duration-1000 bg-cover bg-center bg-no-repeat relative ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{backgroundImage: 'url(/lovable-uploads/a6a4e3b2-7822-4110-89db-6da73143d330.png)'}}>
        <div className="absolute inset-0 bg-combat-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-olive-drab mb-8 leading-tight md:text-5xl">
              INSTRUCTIONS & CARE GUIDE
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto">
              Get the most from your Aware Defense gear. Follow these steps to ensure a secure fit, proper function, and long-lasting protection.
            </p>
          </div>
        </div>
      </section>

      {/* Insertion & Removal Section */}
      <section ref={insertionRef} className={`py-20 transition-all duration-1000 delay-200 ${insertionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Inserting Earpieces */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-olive-drab text-center mb-12">
                INSERTING YOUR CUSTOM EARPIECES
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-olive-drab">
                      Check L/R Marking
                    </h3>
                    <p className="text-signal-white leading-relaxed">
                      Ensure you have the correct side before insertion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <RotateCcw className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-olive-drab">
                      Align & Insert Gently
                    </h3>
                    <p className="text-signal-white leading-relaxed">
                      Rotate slightly to seat properly into ear canal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <Shield className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-olive-drab">
                      Confirm Fit
                    </h3>
                    <p className="text-signal-white leading-relaxed">
                      A correct seal will feel snug but not pressured.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Removing Earpieces */}
            <div>
              <h2 className="text-4xl font-bold text-olive-drab text-center mb-12">
                REMOVING SAFELY
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <RotateCcw className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-olive-drab">
                      Twist Slightly
                    </h3>
                    <p className="text-signal-white leading-relaxed">
                      Break the seal gently before pulling.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <Hand className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-olive-drab">
                      Pull from Base
                    </h3>
                    <p className="text-signal-white leading-relaxed">
                      Do not tug from comms cord or tubing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Instructions Section */}
      <section ref={cleaningRef} className={`py-20 transition-all duration-1000 delay-400 ${cleaningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Daily Cleaning */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-olive-drab text-center mb-12">
                DAILY CLEANING
              </h2>
              
              <Card className="bg-muted/20 border-desert-tan/30 rounded-xl max-w-4xl mx-auto">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Droplets className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Wipe with a dry, lint-free cloth or provided cleaning tool
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Do not use alcohol or harsh solvents
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Store className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Store in provided case when not in use
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deep Cleaning */}
            <div>
              <h2 className="text-4xl font-bold text-olive-drab text-center mb-12">
                DEEP CLEANING (AS NEEDED)
              </h2>
              
              <Card className="bg-muted/20 border-desert-tan/30 rounded-xl max-w-4xl mx-auto">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Droplets className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Warm water and mild soap
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Air dry fully before storing
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Never submerge electronic components (e.g., CEP inserts)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstructionsAndCare;