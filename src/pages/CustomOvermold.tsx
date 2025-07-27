import React, { useState } from 'react';
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
            <div className="aspect-square rounded-lg overflow-hidden bg-card">
              <img
                src={productImages[imageIndex]}
                alt="Custom Overmold"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    imageIndex === index ? 'border-primary' : 'border-border'
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
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Aware Custom Overmold
              </h1>
              <p className="text-lg text-muted-foreground">
                Custom-fit ear canal sleeves designed to integrate with your existing comms systems—transforming popular headsets into mission-ready solutions.
              </p>
            </div>

            {/* Customization Options */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Customization Options</h3>
              
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
                <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300 w-full py-4">
                  REQUEST CONSULTATION TO SCAN MY TEAM
                </Button>
                
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

        {/* Detailed Content Sections */}
        <div ref={heroRef as React.RefObject<HTMLDivElement>} className={`space-y-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Overview */}
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upgrade your gear without replacing it. Aware Overmolds are custom-fit ear canal sleeves designed to integrate with your existing comms systems—transforming popular headsets into mission-ready, professionally sealed solutions trusted by operators in the field.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're outfitting for a high-noise operational environment or enhancing comfort for long-term wear, Aware Overmolds provide the perfect seal, improved fatigue resistance, and all-day mission comfort—without sacrificing communications clarity.
            </p>
          </section>

          {/* Compatible Headsets */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Compatible Headsets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Otto NoizeBarrier®</h3>
                  <p className="text-sm text-muted-foreground">Professional tactical communication</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">AXIL XCOR®</h3>
                  <p className="text-sm text-muted-foreground">Advanced hearing protection</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Invisio X5 & X7®</h3>
                  <p className="text-sm text-muted-foreground">Military-grade systems</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground mt-6">
              Designed to integrate seamlessly with each model's acoustic pathways, Aware Overmolds eliminate slippage and pressure points while preserving full system functionality.
            </p>
          </section>

          {/* Custom Fit & Finish Options */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Custom Fit & Finish Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Color Choices</h3>
                <p className="text-muted-foreground">Black, Blue, Clear</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Finish Options</h3>
                <p className="text-muted-foreground">Matte or Glossy</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6">
              Each set is 3D-printed using your personal eFit™ scan, ensuring a perfect seal that maintains acoustic integrity through long missions and extreme environments.
            </p>
          </section>

          {/* Key Benefits */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">Enhanced Comfort</h3>
                  <p className="text-muted-foreground">No more hotspots or ear fatigue during extended wear</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Superior Seal</h3>
                  <p className="text-muted-foreground">Maintains consistent protection and sound transmission</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">100% Fit Guarantee</h3>
                  <p className="text-muted-foreground">Every mold is made from an FDA-cleared 3D ear scan</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Quick Remake Turnaround</h3>
                  <p className="text-muted-foreground">Permanent digital profile ensures fast, easy replacement</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ideal For */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Ideal For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Military & Law Enforcement</h3>
                  <p className="text-sm text-muted-foreground">
                    Warfighters and tactical teams requiring maximum comfort and noise isolation with reliable radio connectivity in the field.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Aviation Units</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect integration with CEPs and helmet communication systems for aircrew and ground maintainers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Recreational Shooters & Instructors</h3>
                  <p className="text-sm text-muted-foreground">
                    Upgrade your existing hearing protection with custom overmolds that improve clarity, comfort, and control during high-volume sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Choose Aware Overmolds */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Aware Overmolds?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary">Built by Operators, for Operators</h3>
                <p className="text-muted-foreground">Our leadership team understands the stakes—our gear is tested where it matters most.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Field-Tested, DoD-Validated</h3>
                <p className="text-muted-foreground">Used in joint operations and proven to reduce fatigue, improve seal, and boost wear time.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Seamless Comms Compatibility</h3>
                <p className="text-muted-foreground">You don't have to change your comms—we just make them better.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Made in the United States</h3>
                <p className="text-muted-foreground">With premium materials and manufacturing</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}