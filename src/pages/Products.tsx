import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Shield, Headphones, Volume2, Radio, Scan, Music, Filter, Moon, Waves } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { sampleProducts, getFeaturedProducts } from "@/data/products";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
const Products = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  const {
    ref: whyRef,
    isVisible: whyVisible
  } = useScrollAnimation();
  const {
    ref: tacticalRef,
    isVisible: tacticalVisible
  } = useScrollAnimation();
  const {
    ref: industrialRef,
    isVisible: industrialVisible
  } = useScrollAnimation();
  const {
    ref: lifestyleRef,
    isVisible: lifestyleVisible
  } = useScrollAnimation();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();
  return <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`relative py-32 px-6 bg-cover bg-center bg-no-repeat scroll-fade-in ${heroVisible ? 'visible' : ''}`} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`
    }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="heading-tactical text-white text-3xl md:text-4xl mb-4 leading-tight">
            REVOLUTIONIZING HEARING PROTECTION
          </h1>
          
          <h2 className="subheading-tactical text-secondary text-xl md:text-2xl mb-8">
            FOR MISSION-CRITICAL ENVIRONMENTS
          </h2>
          
          <p className="body-tactical text-signal-white text-lg mb-12 max-w-4xl mx-auto">
            From warfighters to industrial operators and musicians — Aware Defense delivers the comfort, protection, and integration that universal products can't.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300">
              LEARN ABOUT OUR TECHNOLOGY
            </Button>
            <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm text-white bg-black">
              SCHEDULE A CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Why Custom-Fit Section */}
      <section ref={whyRef} className={`py-20 px-6 relative scroll-slide-in ${whyVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Stats */}
            <div className="space-y-8">
              <div className="bg-background rounded-lg p-8 border-2 border-[#6C6846]">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-scarlet-red">92%</div>
                  <h3 className="heading-tactical text-primary text-2xl">
                    UNIVERSAL FIT FAILS 92% OF THE TIME
                  </h3>
                  <div className="mt-8">
                    <p className="text-secondary text-lg text-center">Only Aware accurately captures the second bend of the ear for superior fit and performance, even beyond traditional silicone pour methods.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6">
              <h2 className="heading-tactical text-primary text-3xl md:text-4xl">
                WHY CUSTOM FIT MATTERS
              </h2>
              <p className="body-tactical text-signal-white text-lg leading-relaxed">Every ear is unique. Our patented FDA-cleared 3D scanner creates a precise ear profile, enabling superior protection, comfort, and sensor integration. With zero risk, and 100% fit. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical & Military Products */}
      <section ref={tacticalRef} className={`py-20 px-6 relative scroll-scale-in ${tacticalVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            FOR WARFIGHTERS, AVIATORS, AND TACTICAL OPERATORS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/c8c84d7c-5408-41e6-a09b-c302b846944b.png" alt="Custom Overmolds Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">Custom Overmolds</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Enhanced durability and grip for demanding tactical environments
                </p>
                <Link to="/products/custom-overmold" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW CUSTOM OVERMOLDS
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/f08ea2b9-fb1c-4945-aca8-82c79c5a4189.png" alt="Aviation CEP Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">Aviation CEP</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Achieve crystal-clear communications while maintaining superior hearing protection with the Aviation CEP
                </p>
                <Link to="/products/aviation-cep" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW AVIATION CEP
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/84a31d0b-15e4-451c-b912-8cea07846932.png" alt="EarShield Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">EarShield</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Experience the next generation of hearing protection with Aware EarShield
                </p>
                <Link to="/products/earshield" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW EARSHIELD
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industrial & Law Enforcement */}
      <section ref={industrialRef} className={`py-20 px-6 relative scroll-slide-in ${industrialVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            INDUSTRIAL-GRADE SAFETY FOR DEMANDING ENVIRONMENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/c8c84d7c-5408-41e6-a09b-c302b846944b.png" alt="Custom Overmolds Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">Custom Overmolds</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Upgrade your gear without replacing it
                </p>
                <Link to="/products/custom-overmold" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW CUSTOM OVERMOLDS
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/8c75de71-5567-4458-ace4-b743cc10fdc4.png" alt="EarBud Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">EarBud</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Designed to transform your existing earbuds into perfectly fitted audio devices
                </p>
                <Link to="/products/earbud" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW EARBUD
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/84a31d0b-15e4-451c-b912-8cea07846932.png" alt="EarShield Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-xl mb-4">EarShield</h3>
                <p className="text-secondary mb-6 flex-grow">
                  Experience the next generation of hearing protection
                </p>
                <Link to="/products/earshield" className="mt-auto">
                  <Button className="btn-olive-outline w-full">
                    VIEW EARSHIELD
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle & Recreation */}
      <section ref={lifestyleRef} className={`py-20 px-6 relative scroll-scale-in ${lifestyleVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            PRECISION FIT FOR PERFORMANCE, RECREATION, AND REST
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/e6f319aa-df08-44f9-a43f-616e668d2ae1.png" alt="MusicPlugs Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-lg mb-3">MusicPlugs</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">
                  Audio protection with crystal clarity
                </p>
                <Button className="btn-olive-outline w-full text-sm mt-auto">
                  VIEW MUSICPLUGS
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/5871d1fd-a537-4fc1-8012-e6c57c6e36d6.png" alt="MusicFilters Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-lg mb-3">MusicFilters</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">
                  Interchangeable filter levels for performers
                </p>
                <Button className="btn-olive-outline w-full text-sm mt-auto">
                  VIEW FILTERS
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/c121614b-05af-4f5b-845d-8b90cf6eee13.png" alt="SleepPlug Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-lg mb-3">SleepPlug</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">
                  Low-profile comfort for deep sleep
                </p>
                <Button className="btn-olive-outline w-full text-sm mt-auto">
                  VIEW SLEEPPLUG
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                  <img src="/lovable-uploads/8656c4f5-a409-4d5f-8cd1-f4c642eba875.png" alt="SwimPlug Product" className="w-full h-full object-cover" />
                </div>
                <h3 className="heading-tactical text-primary text-lg mb-3">SwimPlug</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">
                  Water-blocking custom fit for athletes
                </p>
                <Button className="btn-olive-outline w-full text-sm mt-auto">
                  VIEW SWIMPLUG
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className={`py-20 px-6 relative scroll-fade-in ${ctaVisible ? 'visible' : ''}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-tactical text-primary text-4xl md:text-6xl mb-8">
            READY TO PROTECT YOUR TEAM AND YOUR HEARING?
          </h2>
          
          <p className="subheading-tactical text-secondary text-xl md:text-2xl mb-12">
            Custom-fit comfort. Field-tested performance. Future-ready gear.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/request-consultation">
              <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300">
                SCHEDULE A MEETING
              </Button>
            </Link>
            <Link to="/efit-3d-scanner">
              <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm text-white bg-black">
                LEARN ABOUT OUR SCANNER
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Products;