import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const EarShield = () => {
  const {
    ref: productRef,
    isVisible: productVisible
  } = useScrollAnimation();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");

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
      <section ref={productRef} className={`py-20 px-6 relative scroll-fade-in ${productVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Product Image and Description */}
            <div className="space-y-6">
              <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 border-[#6C6846]">
                <img 
                  src="/lovable-uploads/4292650a-69ee-427d-8ccf-bc2e4433f736.png" 
                  alt="Aware EarShield" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Detailed Product Description */}
              <div className="space-y-6 bg-muted/20 p-6 rounded-lg border border-[#6C6846]">
                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Overview</h3>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    Experience the next generation of hearing protection with Aware EarShield, featuring 
                    proprietary advanced materials that provide superior ear-shielding defense while 
                    preserving essential hearing levels. This innovative hearing protection solution represents a 
                    breakthrough in balancing maximum protection with situational awareness.
                  </p>
                </div>

                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Revolutionary Protection Technology</h3>
                  <ul className="space-y-2 text-signal-white">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>NRR 27 dB industry-leading noise reduction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Permits hearing conversation through advanced material design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Proprietary blended material for optimal protection and comfort</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Hypoallergenic and antibacterial construction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Maintains acoustic seal throughout extended use</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Repeatable attenuation for consistent protection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Military Applications</h3>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    EarShield provides advanced protection that doesn't obstruct essential sounds, ensuring 
                    warfighters remain protected while maintaining tactical advantage and situational awareness.
                  </p>
                </div>

                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Industrial Excellence</h3>
                  <ul className="space-y-2 text-signal-white">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>All-day workplace wear designed for comfort from clock-in to clock-out</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Enterprise communications integration maintains radio and intercom connectivity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>OSHA compliance exceeds workplace safety requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Reduces workplace hearing loss which affects 48 million Americans</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Advanced Material Science</h3>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    The proprietary shielding format allows conversational-level hearing while blocking harmful 
                    noise. This breakthrough technology eliminates the traditional trade-off between 
                    protection and awareness that has limited conventional hearing protection effectiveness.
                  </p>
                </div>

                <div>
                  <h3 className="heading-tactical text-primary text-xl mb-3">Professional Benefits</h3>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    Unlike traditional hearing protection that workers remove to communicate, exposing 
                    themselves to harmful noise, EarShield allows clear communication while maintaining 
                    continuous protection throughout the workday.
                  </p>
                </div>
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

                {/* NRR Badge and Price */}
                <div className="flex items-center justify-between pt-2">
                  <Badge className="bg-secondary text-background text-sm px-4 py-2 font-semibold">
                    NRR 27 dB
                  </Badge>
                  <div className="text-right">
                    <span className="text-primary text-2xl font-bold">$199.00</span>
                  </div>
                </div>
              </div>

              {/* Product Options */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Color Selection */}
                  <div className="space-y-2">
                    <label className="text-signal-white text-sm font-medium">Color</label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger className="w-full bg-muted/30 border-[#6C6846] text-signal-white">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-[#6C6846] z-50">
                        <SelectItem value="black" className="text-signal-white hover:bg-muted/30">Black</SelectItem>
                        <SelectItem value="blue" className="text-signal-white hover:bg-muted/30">Blue</SelectItem>
                        <SelectItem value="clear" className="text-signal-white hover:bg-muted/30">Clear</SelectItem>
                        <SelectItem value="camouflage" className="text-signal-white hover:bg-muted/30">Camouflage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Finish Selection */}
                  <div className="space-y-2">
                    <label className="text-signal-white text-sm font-medium">Finish</label>
                    <Select value={selectedFinish} onValueChange={setSelectedFinish}>
                      <SelectTrigger className="w-full bg-muted/30 border-[#6C6846] text-signal-white">
                        <SelectValue placeholder="Select finish" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-[#6C6846] z-50">
                        <SelectItem value="matte" className="text-signal-white hover:bg-muted/30">Matte</SelectItem>
                        <SelectItem value="glossy" className="text-signal-white hover:bg-muted/30">Glossy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                  REQUEST CONSULTATION TO SCAN MY TEAM
                </Button>
                
                {/* Checkbox for 3D Scan Confirmation */}
                <div className="flex items-center space-x-3 py-2">
                  <Checkbox 
                    id="scan-confirm"
                    checked={isConfirmed}
                    onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
                  />
                  <label 
                    htmlFor="scan-confirm" 
                    className="text-signal-white text-sm cursor-pointer"
                  >
                    Confirm 3D Scan On-File
                  </label>
                </div>
                
                <Button 
                  className={`w-full py-4 text-base transition-all duration-300 ${
                    isConfirmed 
                      ? 'bg-secondary text-background hover:bg-secondary/90' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!isConfirmed}
                >
                  ADD TO CART
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-4 border-t border-[#6C6846]">
                <p className="text-secondary text-sm">
                  Individual scanning opportunities available at events, or coordinated with team scanning locations. 
                  Check out our upcoming events, or reach out to the team to coordinate your scan.
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