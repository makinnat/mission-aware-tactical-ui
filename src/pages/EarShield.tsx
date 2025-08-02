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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png",
    "/lovable-uploads/59ac8214-a01c-4867-bd0d-8386c6982f0e.png",
    "/lovable-uploads/24d19ee8-99dc-4db3-aea4-831b24467eb7.png",
    "/lovable-uploads/c1558d09-4028-4c64-9d53-034404f3f627.png",
    "/lovable-uploads/1c02955e-0de3-4cfd-a618-f1c391087f89.png"
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mb-16">
            
            {/* Left Column: Product Image - Takes up 2 of 5 columns */}
            <div className="space-y-6 lg:col-span-2">
              <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 border-[#6C6846] transform scale-85">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt="Aware EarShield" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3 justify-center">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      currentImageIndex === index 
                        ? 'border-secondary shadow-lg scale-105' 
                        : 'border-[#6C6846] hover:border-secondary/50 hover:scale-102'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`EarShield view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info Panel - Takes up 3 of 5 columns */}
            <div className="space-y-8 lg:col-span-3">
              <div className="space-y-4">
                <h1 className="heading-tactical text-signal-white text-4xl md:text-5xl">
                  Aware EarShield
                </h1>
                <div className="text-3xl font-bold text-desert-tan">
                  $199.00
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

              {/* CTAs */}
              <div className="space-y-4">
                <Link to="/request-consultation">
                  <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300 w-full py-4">
                    REQUEST CONSULTATION TO SCAN MY TEAM
                  </Button>
                </Link>
                
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

          {/* Overview Section - Full Width */}
          <div className="space-y-6 bg-muted/20 p-8 rounded-lg border border-[#6C6846]">
            <div>
              <h3 className="heading-tactical text-primary text-2xl mb-4">Overview</h3>
              <p className="body-tactical text-signal-white leading-relaxed text-lg mb-6">
                Experience the next generation of hearing protection with Aware EarShield, featuring proprietary advanced materials that provide superior ear-shielding defense while preserving essential hearing levels. This innovative hearing protection solution represents a breakthrough in balancing maximum protection with situational awareness.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Revolutionary Protection Technology</h4>
              <ul className="space-y-2 text-signal-white mb-6">
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
              <h4 className="heading-tactical text-primary text-xl mb-3">Military Applications</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-6">
                EarShield provides advanced protection that doesn't obstruct essential sounds, ensuring warfighters remain protected while maintaining tactical advantage and situational awareness.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Industrial Excellence</h4>
              <ul className="space-y-2 text-signal-white mb-6">
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
              <h4 className="heading-tactical text-primary text-xl mb-3">Advanced Material Science</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-6">
                The proprietary shielding format allows conversational-level hearing while blocking harmful noise. This breakthrough technology eliminates the traditional trade-off between protection and awareness that has limited conventional hearing protection effectiveness.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Professional Benefits</h4>
              <p className="body-tactical text-signal-white leading-relaxed">
                Unlike traditional hearing protection that workers remove to communicate, exposing themselves to harmful noise, EarShield allows clear communication while maintaining continuous protection throughout the workday.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarShield;