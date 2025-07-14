import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const EarShield = () => {
  const {
    ref: productRef,
    isVisible: productVisible
  } = useScrollAnimation();

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="bg-background py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/products" className="inline-flex items-center text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Detail Section */}
      <section ref={productRef} className={`py-20 px-6 bg-background scroll-fade-in ${productVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 border-[#6C6846]">
                <img 
                  src="/lovable-uploads/4292650a-69ee-427d-8ccf-bc2e4433f736.png" 
                  alt="Aware EarShield" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Product Info Panel */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="heading-tactical text-primary text-4xl md:text-5xl">
                  Aware EarShield
                </h1>
                
                <p className="body-tactical text-signal-white text-lg leading-relaxed">
                  Premium custom-fit earplugs with NRR 27 dB. Built for tactical and industrial environments. Seamless communication system compatibility.
                </p>

                {/* NRR Badge */}
                <div className="flex items-center gap-4 pt-2">
                  <Badge className="bg-secondary text-background text-sm px-4 py-2 font-semibold">
                    NRR 27 dB
                  </Badge>
                </div>
              </div>

              {/* Specifications */}
              <Card className="bg-muted/30 border-[#6C6846]">
                <CardContent className="p-6">
                  <h3 className="heading-tactical text-primary text-xl mb-4">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-signal-white">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Custom-fit using FDA-cleared scan</span>
                    </li>
                    <li className="flex items-start gap-3 text-signal-white">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Compatible with Invisio, Ops-Core, Gentex</span>
                    </li>
                    <li className="flex items-start gap-3 text-signal-white">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Medical-grade hypoallergenic material</span>
                    </li>
                    <li className="flex items-start gap-3 text-signal-white">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Lightweight, all-day wearable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTAs */}
              <div className="space-y-4">
                <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300 w-full py-4">
                  REQUEST A SCAN TO ORDER
                </Button>
                
                <Button className="btn-olive-outline w-full py-4 text-base">
                  LEARN ABOUT EFIT 3D SCANNER
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-[#6C6846]">
                <p className="text-secondary text-sm">
                  Professional fitting and scanning services available nationwide. 
                  Contact us for enterprise pricing and bulk orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarShield;