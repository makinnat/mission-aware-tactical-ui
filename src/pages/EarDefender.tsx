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

const EarDefender = () => {
  const {
    ref: productRef,
    isVisible: productVisible
  } = useScrollAnimation();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "/lovable-uploads/25ac5f0e-de6f-491d-bf2a-2c3405813a20.png",
    "/lovable-uploads/5f5916e9-0eba-402b-944b-797aff5ea1e6.png",
    "/lovable-uploads/1ade310a-19d9-4202-82f7-8b5d2cf3d0ca.png",
    "/lovable-uploads/3321637f-868d-48d8-bc8f-6641da5d181f.png",
    "/lovable-uploads/704f5f4e-34d3-4c88-bed1-ffac5767750c.png",
    "/lovable-uploads/fa3ce3e2-7f5f-4f2a-8802-105308b2e6a5.png",
    "/lovable-uploads/5729e5c1-0153-4c19-847e-8e7c2c3d85b1.png"
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
        backgroundSize: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mb-16">
            
            {/* Left Column: Product Image - Takes up 2 of 5 columns */}
            <div className="space-y-6 lg:col-span-2">
              <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 border-[#6C6846] transform scale-85">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt="Aware EarDefender" 
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
                      alt={`EarDefender view ${index + 1}`}
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
                  Aware EarDefender
                </h1>
                <div className="text-3xl font-bold text-desert-tan">
                  ${selectedColor === 'camouflage' ? '209.00' : '199.00'}
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
                        <SelectItem value="camouflage" className="text-signal-white hover:bg-muted/30">Camouflage +$10</SelectItem>
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
                Experience unmatched comfort and secure acoustic protection with Aware EarDefender. This military-grade hearing protection combines superior noise blocking with custom-fit comfort, making it ideal for professionals who face sustained exposure to harmful noise levels in demanding environments.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Superior Protection Features</h4>
              <ul className="space-y-2 text-signal-white mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>NRR 26 dB noise reduction rating</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Repeatable attenuation ensures consistent protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Maintains acoustic seal throughout extended use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Soft silicone material (Shore A 25/A 35 hardness)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Hypoallergenic construction suitable for sensitive skin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Custom-fit design conforms to unique ear anatomy</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Applications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-secondary font-semibold mb-2">Military Grade Applications</h5>
                  <ul className="space-y-2 text-signal-white mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Shooters: Protection against firearm discharge while maintaining awareness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Aviators: Extended comfort during long flights with engine noise protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Law Enforcement: Tactical operations requiring hearing protection and situational awareness</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-secondary font-semibold mb-2">Industrial Grade Applications</h5>
                  <ul className="space-y-2 text-signal-white">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>All-day comfort for workers in sustained high-noise environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Safety compliance meets OSHA hearing protection requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary mt-1">•</span>
                      <span>Communication capability allows for workplace interaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Advanced Design Benefits</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-6">
                Unlike one-size-fits-all solutions that fail 92% of the time due to improper insertion, Aware EarDefender's custom fit ensures optimal protection every time. The precise fit eliminates pressure points while creating a superior acoustic seal that traditional foam plugs cannot achieve.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Quality Assurance</h4>
              <ul className="space-y-2 text-signal-white">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Made in the U.S.A. with premium materials and manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>100% Fit Guarantee ensures customer satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Consistent performance with repeatable attenuation ratings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarDefender;