import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CustomOvermold() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const productImages = [
    '/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png',
    '/lovable-uploads/523326f6-01e5-4622-94fd-3bf6f853730f.png',
    '/lovable-uploads/2c937de5-7440-4e5d-9ee6-b59a8c9d089b.png',
    '/lovable-uploads/fb392a1b-68db-4984-ae96-fc2750154a62.png'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden border-2 border-[#6C6846] transform scale-85">
              <img
                src={productImages[imageIndex]}
                alt="Custom Overmold"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-3 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    imageIndex === index 
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

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="heading-tactical text-primary text-4xl md:text-5xl">
                AWARE CUSTOM OVERMOLD
              </h1>
            </div>

            {/* Customization Options */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="clear">Clear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Finish</label>
                  <Select value={selectedFinish} onValueChange={setSelectedFinish}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select finish" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matte">Matte</SelectItem>
                      <SelectItem value="glossy">Glossy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="otto">Otto Noize Barrier</SelectItem>
                      <SelectItem value="axil">AXIL XCOR</SelectItem>
                      <SelectItem value="invisio">Invisio X-5 & X-7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

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
                    checked={confirmed}
                    onCheckedChange={(checked) => setConfirmed(checked === true)}
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
                    confirmed 
                      ? 'bg-secondary text-background hover:bg-secondary/90' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!confirmed || !selectedColor || !selectedFinish || !selectedBrand}
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

        {/* Overview Section - Full Width */}
        <div className="space-y-6 bg-muted/20 p-8 rounded-lg border border-[#6C6846]">
          <div>
            <h2 className="heading-tactical text-primary text-2xl mb-4">Overview</h2>
            <p className="body-tactical text-signal-white leading-relaxed mb-6">
              Upgrade your gear without replacing it. Aware Overmolds are custom-fit ear canal sleeves designed to integrate with your existing comms systems—transforming popular headsets into mission-ready, professionally sealed solutions trusted by operators in the field.
            </p>
            <p className="body-tactical text-signal-white leading-relaxed">
              Whether you're outfitting for a high-noise operational environment or enhancing comfort for long-term wear, Aware Overmolds provide the perfect seal, improved fatigue resistance, and all-day mission comfort—without sacrificing communications clarity.
            </p>
          </div>

          <div>
            <h3 className="heading-tactical text-primary text-xl mb-3">Compatible Headsets</h3>
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
            <h3 className="heading-tactical text-primary text-xl mb-3">Custom Fit & Finish Options</h3>
            <div className="space-y-2 mb-4">
              <p className="body-tactical text-signal-white">Color Choices: Black, Blue, Clear</p>
              <p className="body-tactical text-signal-white">Finish Options: Matte or Glossy</p>
            </div>
            <p className="body-tactical text-signal-white leading-relaxed">
              Each set is 3D-printed using your personal eFit™ scan, ensuring a perfect seal that maintains acoustic integrity through long missions and extreme environments.
            </p>
          </div>

          <div>
            <h3 className="heading-tactical text-primary text-xl mb-3">Key Benefits</h3>
            <div className="space-y-2">
              <p className="body-tactical text-signal-white">Enhanced Comfort: No more hotspots or ear fatigue during extended wear</p>
              <p className="body-tactical text-signal-white">Superior Seal: Maintains consistent protection and sound transmission</p>
              <p className="body-tactical text-signal-white">100% Fit Guarantee: Every mold is made from an FDA-cleared 3D ear scan</p>
              <p className="body-tactical text-signal-white">Quick Remake Turnaround: Permanent digital profile ensures fast, easy replacement</p>
            </div>
          </div>

          <div>
            <h3 className="heading-tactical text-primary text-xl mb-3">Ideal For</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-secondary font-semibold">Military & Law Enforcement</h4>
                <p className="body-tactical text-signal-white">
                  Warfighters and tactical teams requiring maximum comfort and noise isolation with reliable radio connectivity in the field.
                </p>
              </div>
              <div>
                <h4 className="text-secondary font-semibold">Aviation Units</h4>
                <p className="body-tactical text-signal-white">
                  Perfect integration with CEPs and helmet communication systems for aircrew and ground maintainers.
                </p>
              </div>
              <div>
                <h4 className="text-secondary font-semibold">Recreational Shooters & Instructors</h4>
                <p className="body-tactical text-signal-white">
                  Upgrade your existing hearing protection with custom overmolds that improve clarity, comfort, and control during high-volume sessions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="heading-tactical text-primary text-xl mb-3">Why Choose Aware Overmolds?</h3>
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
      
      <Footer />
    </div>
  );
}