import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MusicPlugs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const { ref: productRef, isVisible: productVisible } = useScrollAnimation();

  const productImages = [
    '/lovable-uploads/00045a18-33a0-48de-9a9b-66e1f5ed4f9a.png',
    '/lovable-uploads/7a5fd631-c90e-4df9-85b3-3557298e1641.png',
    '/lovable-uploads/db713f14-2263-463a-8b8f-ec91e4bea22e.png',
    '/lovable-uploads/a1875415-213c-4955-963b-8c635bf48225.png'
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
                  alt="Aware MusicPlugs" 
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
                      alt={`MusicPlugs view ${index + 1}`}
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
                  AWARE MUSICPLUGS
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

                  {/* Filter Selection */}
                  <div className="space-y-2">
                    <label className="text-signal-white text-sm font-medium">Filter</label>
                    <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                      <SelectTrigger className="w-full bg-muted/30 border-[#6C6846] text-signal-white">
                        <SelectValue placeholder="Select filter" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-[#6C6846] z-50">
                        <SelectItem value="10db" className="text-signal-white hover:bg-muted/30">10DB</SelectItem>
                        <SelectItem value="15db" className="text-signal-white hover:bg-muted/30">15DB</SelectItem>
                        <SelectItem value="25db" className="text-signal-white hover:bg-muted/30">25DB</SelectItem>
                        <SelectItem value="30db" className="text-signal-white hover:bg-muted/30">30DB</SelectItem>
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
                Preserve your passion with Aware MusicPlugs, engineered specifically for musicians, band members, singers, and music enthusiasts who refuse to compromise between hearing protection and audio fidelity. These custom-fit earplugs deliver crystal-clear, high-fidelity sound while safeguarding your most valuable asset - your hearing.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Professional Audio Protection</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Crystal-clear, high-fidelity sound maintains music quality</p>
                <p className="body-tactical text-signal-white">Interchangeable filters (10 dB, 15 dB, 25 dB, 30 dB) for versatile protection</p>
                <p className="body-tactical text-signal-white">Balanced sound reduction without frequency distortion</p>
                <p className="body-tactical text-signal-white">Natural, distortion-free audio preserves musical nuance</p>
                <p className="body-tactical text-signal-white">Extended wear comfort for long performances and practice sessions</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Custom Precision Engineering</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">eFit 3D scan technology ensures perfect fit</p>
                <p className="body-tactical text-signal-white">Proprietary soft, durable materials withstand professional use</p>
                <p className="body-tactical text-signal-white">Hypoallergenic construction safe for sensitive skin</p>
                <p className="body-tactical text-signal-white">Made in the U.S.A. with premium components</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Applications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-secondary font-semibold">Musicians</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Orchestra members - Protect from loud brass and percussion while maintaining ensemble balance</p>
                    <p className="body-tactical text-signal-white">Rock and pop artists - Safe performance in high-volume amplified environments</p>
                    <p className="body-tactical text-signal-white">Jazz musicians - Preserve the subtle dynamics essential to improvisational music</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-secondary font-semibold">Singers</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Vocal performers - Maintain pitch accuracy and tone perception while protecting from stage monitors</p>
                    <p className="body-tactical text-signal-white">Choir members - Balance individual voice with ensemble while protecting from organ and orchestral accompaniment</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-secondary font-semibold">Music Lovers</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Concert attendees - Enjoy live performances without risking hearing damage</p>
                    <p className="body-tactical text-signal-white">Music students - Safe practice and lesson environments</p>
                    <p className="body-tactical text-signal-white">Audio enthusiasts - Critical listening at safe volume levels</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Filter Technology Advantages</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                Each interchangeable filter provides flat frequency response attenuation, reducing volume evenly across all frequencies rather than creating the muffled, unnatural sound of conventional earplugs.
              </p>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">This allows musicians to:</p>
              <div className="space-y-2">
                <p className="body-tactical text-signal-white">Maintain accurate pitch perception</p>
                <p className="body-tactical text-signal-white">Preserve dynamic range awareness</p>
                <p className="body-tactical text-signal-white">Detect subtle harmonic details</p>
                <p className="body-tactical text-signal-white">Communicate effectively during performances</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Long-term Hearing Health</h4>
              <p className="body-tactical text-signal-white leading-relaxed">
                With over 50% of professional musicians experiencing hearing damage, MusicPlugs provide essential protection against both sustained exposure and sudden volume spikes while preserving the musical experience that drives artistic expression.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}