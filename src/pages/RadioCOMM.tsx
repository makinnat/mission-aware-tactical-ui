import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function RadioCOMM() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedMold, setSelectedMold] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const { ref: productRef, isVisible: productVisible } = useScrollAnimation();

  const productImages = [
    '/lovable-uploads/46468d82-9fe3-4eb1-bc54-5a1a45b2c547.png',
    '/lovable-uploads/3e8d4d5c-504a-4e85-99be-2491b0b1da86.png',
    '/lovable-uploads/9ca08e96-412c-4dd5-b157-8e2c0829df89.png',
    '/lovable-uploads/18af24dc-e12c-4429-8b4a-1f20395b3b24.png',
    '/lovable-uploads/1933cf53-e24b-401e-8dfc-e89498929924.png',
    '/lovable-uploads/a96067cc-2666-48d3-8094-5bc15339a918.png'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Product Detail Section */}
      <section ref={productRef} className={`py-20 px-6 relative scroll-fade-in ${productVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: '600px',
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
                  alt="Aware RadioCOMM" 
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
                      alt={`RadioCOMM view ${index + 1}`}
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
                  AWARE RADIOCOMM
                </h1>
                <div className="text-3xl font-bold text-desert-tan">
                  $125.00
                </div>
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
                        <SelectItem value="clear" className="text-signal-white hover:bg-muted/30">Clear</SelectItem>
                        <SelectItem value="black" className="text-signal-white hover:bg-muted/30">Black</SelectItem>
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

                  {/* Mold Selection */}
                  <div className="space-y-2">
                    <label className="text-signal-white text-sm font-medium">Mold</label>
                    <Select value={selectedMold} onValueChange={setSelectedMold}>
                      <SelectTrigger className="w-full bg-muted/30 border-[#6C6846] text-signal-white">
                        <SelectValue placeholder="Select mold" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-[#6C6846] z-50">
                        <SelectItem value="full-shell" className="text-signal-white hover:bg-muted/30">Full Shell</SelectItem>
                        <SelectItem value="skeleton" className="text-signal-white hover:bg-muted/30">Skeleton</SelectItem>
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
                Maintain critical radio communications with Aware RadioCOMM, the custom-fit communication earpiece designed for professional radio operators who demand reliable connectivity and hearing protection. This single-side design with acoustic vent ensures situational awareness while delivering crystal-clear radio transmissions.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Professional Communication Features</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Custom-fit design ensures secure, comfortable placement</p>
                <p className="body-tactical text-signal-white">Single-side configuration maintains environmental awareness</p>
                <p className="body-tactical text-signal-white">Acoustic vent for situational awareness and pressure equalization</p>
                <p className="body-tactical text-signal-white">Hypoallergenic materials suitable for extended professional use</p>
                <p className="body-tactical text-signal-white">APX radio compatibility for seamless integration</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Complete System Components</h4>
              <div className="space-y-2 mb-4">
                <p className="body-tactical text-signal-white">Coiled sound tube provides flexible connection and durability</p>
                <p className="body-tactical text-signal-white">Alligator clip for secure radio attachment</p>
                <p className="body-tactical text-signal-white">Multiple color options: Clear, Black, Orange</p>
                <p className="body-tactical text-signal-white">Finish choices: Matte or Glossy</p>
                <p className="body-tactical text-signal-white">Mold configurations: Full Shell or Skeleton</p>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Applications</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-secondary font-semibold">Public Safety</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Police officers - Discrete communication during patrols and investigations</p>
                    <p className="body-tactical text-signal-white">Firefighters - Clear communications in high-noise emergency environments</p>
                    <p className="body-tactical text-signal-white">EMT/Paramedics - Reliable contact with dispatch and hospitals</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-secondary font-semibold">Security Personnel</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Event security - Coordinate crowd control and incident response</p>
                    <p className="body-tactical text-signal-white">Corporate security - Maintain communication while preserving professional appearance</p>
                    <p className="body-tactical text-signal-white">Executive protection - Discrete coordination during protective details</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-secondary font-semibold">Industrial Operations</h5>
                  <div className="space-y-2">
                    <p className="body-tactical text-signal-white">Plant supervisors - Radio communication in high-noise manufacturing environments</p>
                    <p className="body-tactical text-signal-white">Construction coordinators - Site communication with hearing protection</p>
                    <p className="body-tactical text-signal-white">Transportation logistics - Clear dispatch communication</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Design Advantages</h4>
              <p className="body-tactical text-signal-white leading-relaxed mb-4">
                The single-side design allows the non-radio ear to maintain full environmental awareness while the radio ear receives clear communications. The acoustic vent prevents pressure buildup and occlusion effects that can interfere with speech perception and cause discomfort during extended wear.
              </p>
            </div>

            <div>
              <h4 className="heading-tactical text-primary text-xl mb-3">Professional Reliability</h4>
              <p className="body-tactical text-signal-white leading-relaxed">
                Built to withstand the demanding conditions of professional use while maintaining consistent audio quality and secure fit throughout long shifts and challenging environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}