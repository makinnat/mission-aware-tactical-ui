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

const SwimPlug = () => {
  const {
    ref: productRef,
    isVisible: productVisible
  } = useScrollAnimation();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "/lovable-uploads/9fcf5ff1-91bc-456c-8737-11c234a7c989.png",
    "/lovable-uploads/05d563b4-ca15-44dc-81cb-93e476b6caa3.png",
    "/lovable-uploads/3fe876c7-263f-4ca3-bda4-d64bf9710cc9.png",
    "/lovable-uploads/3645fda2-d00c-4106-8354-77d12da20b63.png"
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
                  alt="Aware SwimPlug" 
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
                      alt={`SwimPlug view ${index + 1}`}
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
                  AWARE SWIMPLUG
                </h1>
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
                        <SelectItem value="blue" className="text-signal-white hover:bg-muted/30">Blue</SelectItem>
                        <SelectItem value="black" className="text-signal-white hover:bg-muted/30">Black</SelectItem>
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
                Enjoy worry-free aquatic activities with Aware SwimPlugs, the precision-engineered water protection solution that ensures maximum comfort and secure sealing for swimming and water sports. Designed using patented eFit 3D scanning technology, these custom plugs provide reliable water protection without sacrificing comfort or hearing.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Advanced Water Protection</h4>
              <ul className="space-y-2 text-signal-white mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Custom-fit from eFit 3D scans ensures perfect seal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Blocks water effectively during swimming and water activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Floating and non-floating options for different preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Proprietary soft, durable material withstands pool chemicals and saltwater</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Hypoallergenic and antibacterial for safe aquatic use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Maintains secure seal during active water sports</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Applications</h4>
              
              <div className="mb-6">
                <h5 className="text-secondary text-lg font-semibold mb-3">Competitive Swimming</h5>
                <ul className="space-y-2 text-signal-white mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Training protection for high-volume pool sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Competition preparation maintaining ear health during intensive training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Pool chemical protection preventing irritation from chlorinated water</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-secondary text-lg font-semibold mb-3">Water Sports Enthusiasts</h5>
                <ul className="space-y-2 text-signal-white mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Surfing - Protection from cold water and ear infections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Water skiing - Secure fit during high-speed water sports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Diving - Surface water protection and ear pressure management</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-secondary text-lg font-semibold mb-3">Therapeutic Water Activities</h5>
                <ul className="space-y-2 text-signal-white mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Physical therapy - Safe aquatic rehabilitation sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Aqua aerobics - Comfortable protection during fitness classes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Recreational swimming - Enjoyable pool and beach activities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Medical Benefits</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                Water trapped in ears can lead to:
              </p>
              <ul className="space-y-2 text-signal-white mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Swimmer's ear infections (otitis externa)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Bacterial growth in warm, moist ear canals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Hearing temporary hearing loss from water blockage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Ear canal irritation from chemical exposure</span>
                </li>
              </ul>
              <p className="body-tactical text-signal-white leading-relaxed mb-6">
                SwimPlugs prevent these issues while allowing comfortable, confident water enjoyment.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Design Options</h4>
              <ul className="space-y-2 text-signal-white mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Floating versions - Easy retrieval if dislodged in water</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Non-floating versions - Lower profile for competitive swimming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Multiple colors - Personal preference and visibility options</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Professional Quality</h4>
              <ul className="space-y-2 text-signal-white">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Made in the U.S.A. with marine-grade materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Precision manufacturing ensures consistent water blocking performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Durable construction withstands repeated aquatic exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Easy maintenance for optimal hygiene and performance</span>
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

export default SwimPlug;