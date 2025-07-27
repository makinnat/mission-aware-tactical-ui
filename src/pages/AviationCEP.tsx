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

const AviationCEP = () => {
  const {
    ref: productRef,
    isVisible: productVisible
  } = useScrollAnimation();

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    "/lovable-uploads/1b44b514-4cf3-486f-b784-05a70e8c5469.png",
    "/lovable-uploads/9a4443de-78df-4d2f-b6f2-f7d1bbeff978.png",
    "/lovable-uploads/21966723-252b-498d-8787-3e7c3886f3e3.png",
    "/lovable-uploads/7349d2ee-b538-47ce-b7be-60bdc7389253.png",
    "/lovable-uploads/c77088a2-9e34-43c8-a040-1a487f3ff198.png",
    "/lovable-uploads/6cdf5dac-500f-4b62-b65f-95b5bbeb40f3.png",
    "/lovable-uploads/c421e9f8-79e7-433a-9878-8873c22f0e3f.png"
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
                  alt="Aware Aviation CEP" 
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
                      alt={`Aviation CEP view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Product Info Panel - Takes up 3 of 5 columns */}
            <div className="space-y-8 lg:col-span-3">
              <div className="space-y-4">
                <h1 className="heading-tactical text-primary text-4xl md:text-5xl">
                  Aware Aviation CEP
                </h1>
                
                <p className="body-tactical text-signal-white text-lg leading-relaxed">
                  Advanced custom-fit communication earpiece with superior hearing protection. Crystal-clear communications through integrated electronics while maintaining all-day comfort.
                </p>
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
                        <SelectItem value="yellow" className="text-signal-white hover:bg-muted/30">Yellow</SelectItem>
                        <SelectItem value="black" className="text-signal-white hover:bg-muted/30">Black</SelectItem>
                        <SelectItem value="camouflage" className="text-signal-white hover:bg-muted/30">Camouflage</SelectItem>
                        <SelectItem value="orange" className="text-signal-white hover:bg-muted/30">Orange</SelectItem>
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

          {/* Overview Section - Full Width */}
          <div className="space-y-6 bg-muted/20 p-8 rounded-lg border border-[#6C6846]">
            <div>
              <h3 className="heading-tactical text-primary text-2xl mb-4">Overview</h3>
              <p className="body-tactical text-signal-white leading-relaxed text-lg mb-6">
                Achieve crystal-clear communications while maintaining superior hearing protection with the Aware CEP. This advanced custom-fit communication earpiece seamlessly integrates with radio systems, delivering uncompromised audio quality and all-day comfort for those who demand both protection and connectivity.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Key Features</h4>
              <ul className="space-y-2 text-signal-white mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Superior hearing protection with custom-fit design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Crystal-clear communications through integrated electronics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Permits conversational hearing while blocking harmful noise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Soft blended material for extended wear comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Hypoallergenic and antibacterial construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Maintains acoustic seal throughout use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Repeatable attenuation for consistent protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span>Made in the U.S.A. with premium materials</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Applications</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h5 className="text-secondary text-lg font-medium mb-2">Military and Law Enforcement</h5>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    Essential for tactical operations where clear communication and hearing protection are simultaneously critical. Compatible with standard military radio systems while providing protection against weapon fire and vehicle noise.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-secondary text-lg font-medium mb-2">Emergency Response</h5>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    Ideal for firefighters, EMTs, and emergency personnel who need to maintain radio contact while protecting against siren noise and equipment sounds.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-secondary text-lg font-medium mb-2">Industrial Supervisors</h5>
                  <p className="body-tactical text-signal-white leading-relaxed">
                    Perfect for plant managers and safety personnel who require constant radio communication while working in high-noise industrial environments.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Technical Advantages</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-6">
                The CEP utilizes a hollow earplug design coupled with miniature transducers, creating a unique arrangement that yields lightweight, high-quality communications. The tip attaches to the transducer using a threaded hollow tube, providing an unimpeded pathway for sound from the transducer into the ear canal.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Compatibility</h4>
              <ul className="space-y-2 text-signal-white">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span><strong>Radio systems:</strong> Compatible with standard military and commercial radio interfaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span><strong>Custom accessories:</strong> Available with coiled sound tube and alligator clip</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">•</span>
                  <span><strong>Helmet Integration:</strong> Works seamlessly under tactical helmets and headgear</span>
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

export default AviationCEP;