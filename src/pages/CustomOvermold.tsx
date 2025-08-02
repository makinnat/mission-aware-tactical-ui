import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CustomOvermold() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const { ref: productRef, isVisible: productVisible } = useScrollAnimation();

  const productImages = [
    '/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png',
    '/lovable-uploads/523326f6-01e5-4622-94fd-3bf6f853730f.png',
    '/lovable-uploads/2c937de5-7440-4e5d-9ee6-b59a8c9d089b.png',
    '/lovable-uploads/fb392a1b-68db-4984-ae96-fc2750154a62.png'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

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
                  alt="Aware Custom Overmold" 
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
                      alt={`Custom Overmold view ${index + 1}`}
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
                  AWARE CUSTOM OVERMOLD
                </h1>
              </div>

              {/* Product Options */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                  {/* Brand Selection */}
                  <div className="space-y-2">
                    <label className="text-signal-white text-sm font-medium">Brand</label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="w-full bg-muted/30 border-[#6C6846] text-signal-white">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-[#6C6846] z-50">
                        <SelectItem value="otto" className="text-signal-white hover:bg-muted/30">Otto Noize Barrier</SelectItem>
                        <SelectItem value="axil" className="text-signal-white hover:bg-muted/30">AXIL XCOR</SelectItem>
                        <SelectItem value="invisio" className="text-signal-white hover:bg-muted/30">Invisio X-5 & X-7</SelectItem>
                        <SelectItem value="bose" className="text-signal-white hover:bg-muted/30">Bose Pro Flight 2</SelectItem>
                        <SelectItem value="clarity" className="text-signal-white hover:bg-muted/30">Clarity Aloft</SelectItem>
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
                Upgrade your gear without replacing it. Aware Overmolds are custom-fit ear canal sleeves designed to integrate with your existing comms systems—transforming popular headsets into mission-ready, professionally sealed solutions trusted by operators in the field.
              </p>
              <p className="body-tactical text-signal-white leading-relaxed text-lg">
                Whether you're outfitting for a high-noise operational environment or enhancing comfort for long-term wear, Aware Overmolds provide the perfect seal, improved fatigue resistance, and all-day mission comfort—without sacrificing communications clarity.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Compatible Headsets</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Otto NoizeBarrier®</p>
                <p className="body-tactical text-signal-white">AXIL XCOR®</p>
                <p className="body-tactical text-signal-white">Invisio X5 & X7®</p>
              </div>
              <p className="body-tactical text-signal-white leading-relaxed">
                Designed to integrate seamlessly with each model's acoustic pathways, Aware Overmolds eliminate slippage and pressure points while preserving full system functionality.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Custom Fit & Finish Options</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Color Choices: Black, Blue, Clear</p>
                <p className="body-tactical text-signal-white">Finish Options: Matte or Glossy</p>
              </div>
              <p className="body-tactical text-signal-white leading-relaxed">
                Each set is 3D-printed using your personal eFit™ scan, ensuring a perfect seal that maintains acoustic integrity through long missions and extreme environments.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Key Benefits</h4>
              <div className="space-y-2">
                <p className="body-tactical text-signal-white">Enhanced Comfort: No more hotspots or ear fatigue during extended wear</p>
                <p className="body-tactical text-signal-white">Superior Seal: Maintains consistent protection and sound transmission</p>
                <p className="body-tactical text-signal-white">100% Fit Guarantee: Every mold is made from an FDA-cleared 3D ear scan</p>
                <p className="body-tactical text-signal-white">Quick Remake Turnaround: Permanent digital profile ensures fast, easy replacement</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Ideal For</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-secondary font-semibold">Military & Law Enforcement</h5>
                  <p className="body-tactical text-signal-white">
                    Warfighters and tactical teams requiring maximum comfort and noise isolation with reliable radio connectivity in the field.
                  </p>
                </div>
                <div>
                  <h5 className="text-secondary font-semibold">Aviation Units</h5>
                  <p className="body-tactical text-signal-white">
                    Perfect integration with CEPs and helmet communication systems for aircrew and ground maintainers.
                  </p>
                </div>
                <div>
                  <h5 className="text-secondary font-semibold">Recreational Shooters & Instructors</h5>
                  <p className="body-tactical text-signal-white">
                    Upgrade your existing hearing protection with custom overmolds that improve clarity, comfort, and control during high-volume sessions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Why Choose Aware Overmolds?</h4>
              <div className="space-y-3">
                <p className="body-tactical text-signal-white">
                  <span className="text-secondary font-semibold">Built by Operators, for Operators:</span> Our leadership team understands the stakes—our gear is tested where it matters most.
                </p>
                <p className="body-tactical text-signal-white">
                  <span className="text-secondary font-semibold">Field-Tested, DoD-Validated:</span> Used in joint operations and proven to reduce fatigue, improve seal, and boost wear time.
                </p>
                <p className="body-tactical text-signal-white">
                  <span className="text-secondary font-semibold">Seamless Comms Compatibility:</span> You don't have to change your comms—we just make them better.
                </p>
                <p className="body-tactical text-signal-white">
                  <span className="text-secondary font-semibold">Made in the United States:</span> With premium materials and manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}