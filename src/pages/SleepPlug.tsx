import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function SleepPlug() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const { ref: productRef, isVisible: productVisible } = useScrollAnimation();

  const productImages = [
    '/lovable-uploads/898ed8b2-e6e0-419c-84d9-4cc58e636bdc.png',
    '/lovable-uploads/8dff5d9e-cba2-41a3-879e-b45d9de9089f.png',
    '/lovable-uploads/3248dd47-ce9e-4516-8d46-48e46a6948cf.png',
    '/lovable-uploads/ee3f5f58-f80e-4a64-9eeb-fb621fc6be70.png',
    '/lovable-uploads/4aba5070-1982-43c6-8ca8-1e9775657fae.png',
    '/lovable-uploads/fe35170e-4d70-446b-8094-c2d6b733f8ed.png',
    '/lovable-uploads/0da3a165-cb30-42c2-81f0-2b6825889161.png'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

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
                  alt="Aware SleepPlug" 
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
                      alt={`SleepPlug view ${index + 1}`}
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
                  AWARE SLEEPPLUG
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
                Solve one of today's most critical health challenges with Aware SleepPlug - the custom-fit sleep protection solution designed to ensure peaceful, uninterrupted rest in noisy environments. Specially engineered to be comfortable in any sleeping position while providing effective noise blocking for restorative sleep.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Sleep Optimization Features</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">NRR 25 dB noise reduction for effective sleep protection</p>
                <p className="body-tactical text-signal-white">Comfort-fit design matches your unique ear anatomy</p>
                <p className="body-tactical text-signal-white">Soft silicone material prevents pressure points during side sleeping</p>
                <p className="body-tactical text-signal-white">Hypoallergenic construction safe for nightly use</p>
                <p className="body-tactical text-signal-white">Maintains acoustic seal throughout sleep movement</p>
                <p className="body-tactical text-signal-white">Repeatable attenuation for consistent sleep protection</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Sleep Health Benefits</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                Quality sleep is fundamental to physical health, cognitive function, and emotional well-being. SleepPlug addresses one of the most common sleep disruptors - environmental noise - enabling the deep, restorative sleep essential for:
              </p>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Immune system function and recovery</p>
                <p className="body-tactical text-signal-white">Memory consolidation and cognitive performance</p>
                <p className="body-tactical text-signal-white">Emotional regulation and mental health</p>
                <p className="body-tactical text-signal-white">Physical recovery and tissue repair</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Ideal for Sleep Disruption Solutions</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Urban environments - Block traffic, sirens, and city noise</p>
                <p className="body-tactical text-signal-white">Apartment living - Reduce neighbor noise and building sounds</p>
                <p className="body-tactical text-signal-white">Shift workers - Enable daytime sleep in noisy environments</p>
                <p className="body-tactical text-signal-white">Travel - Comfortable sleep in hotels and unfamiliar environments</p>
                <p className="body-tactical text-signal-white">Partner snoring - Maintain relationship harmony with noise reduction</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Custom Comfort Technology</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                Unlike universal foam earplugs that can cause ear pain and fall out during sleep movement, SleepPlug's custom fit ensures:
              </p>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">No pressure points regardless of sleep position</p>
                <p className="body-tactical text-signal-white">Secure retention throughout the night</p>
                <p className="body-tactical text-signal-white">Breathable comfort for extended wear</p>
                <p className="body-tactical text-signal-white">Easy insertion and removal for bedtime routine</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Sleep Position Versatility</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                Specially designed low-profile construction works comfortably for:
              </p>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Side sleepers - No pillow pressure or discomfort</p>
                <p className="body-tactical text-signal-white">Back sleepers - Secure fit without shifting</p>
                <p className="body-tactical text-signal-white">Combination sleepers - Maintains comfort through position changes</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Quality Construction</h4>
              <div className="space-y-2">
                <p className="body-tactical text-signal-white">Made in the U.S.A. with premium sleep-safe materials</p>
                <p className="body-tactical text-signal-white">Durable construction for nightly use</p>
                <p className="body-tactical text-signal-white">Easy maintenance for hygienic sleep health</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}