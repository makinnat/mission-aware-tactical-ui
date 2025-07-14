import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Shield, Headphones, Volume2, Radio, Scan, Music, Filter, Moon, Waves } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Products = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: tacticalRef, isVisible: tacticalVisible } = useScrollAnimation();
  const { ref: industrialRef, isVisible: industrialVisible } = useScrollAnimation();
  const { ref: lifestyleRef, isVisible: lifestyleVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`py-32 px-6 bg-background scroll-fade-in ${heroVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto text-center">
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
      <section 
        ref={whyRef}
        className={`py-20 px-6 bg-muted/30 scroll-slide-in ${whyVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Stats */}
            <div className="space-y-8">
              <div className="bg-background rounded-lg p-8 border border-secondary/20">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-scarlet-red">92%</div>
                  <h3 className="heading-tactical text-primary text-2xl">
                    UNIVERSAL FIT FAILS 92% OF THE TIME
                  </h3>
                  <div className="flex items-center justify-center space-x-4 mt-8">
                    <CheckCircle className="w-8 h-8 text-scarlet-red" />
                    <p className="text-secondary text-lg">
                      Only Aware captures the second bend of the ear
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="space-y-6">
              <h2 className="heading-tactical text-primary text-3xl md:text-4xl">
                WHY CUSTOM FIT MATTERS
              </h2>
              <p className="body-tactical text-signal-white text-lg leading-relaxed">
                Every ear is unique. Our patented FDA-cleared 3D scanner creates a precise ear profile, enabling superior protection, comfort, and sensor integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical & Military Products */}
      <section 
        ref={tacticalRef}
        className={`py-20 px-6 bg-background scroll-scale-in ${tacticalVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            FOR WARFIGHTERS, AVIATORS, AND TACTICAL OPERATORS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Shield className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">EarShield</h3>
                <p className="text-secondary">
                  Highest NRR, comms-compatible, all-day mission endurance
                </p>
                <Button className="btn-olive-outline w-full">
                  VIEW EARSHIELD
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Volume2 className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">EarDefender</h3>
                <p className="text-secondary">
                  Reliable tactical protection with sealed fit for high-noise ops
                </p>
                <Button className="btn-olive-outline w-full">
                  VIEW EARDEFENDER
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Radio className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">RadioCOMM / CEP</h3>
                <p className="text-secondary">
                  Comms-integrated custom earpiece for real-time clarity
                </p>
                <Button className="btn-olive-outline w-full">
                  VIEW CEP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industrial & Law Enforcement */}
      <section 
        ref={industrialRef}
        className={`py-20 px-6 bg-muted/30 scroll-slide-in ${industrialVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            INDUSTRIAL-GRADE SAFETY FOR DEMANDING ENVIRONMENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Shield className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">EarDefender Vented A & B</h3>
                <p className="text-secondary">
                  Protection + communication for variable-noise zones
                </p>
                <Button className="btn-olive-outline w-full">
                  VIEW VENTED PROTECTION
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Headphones className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">CEP (Comm Earpiece)</h3>
                <p className="text-secondary">
                  Connect securely to radios in the field or factory
                </p>
                <Button className="btn-olive-outline w-full">
                  VIEW CEP
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-background border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <Scan className="w-16 h-16 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-xl">3D Ear Scans</h3>
                <p className="text-secondary">
                  Get scanned onsite — scale across your workforce
                </p>
                <Button className="btn-olive-outline w-full">
                  LEARN ABOUT SCANNING
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle & Recreation */}
      <section 
        ref={lifestyleRef}
        className={`py-20 px-6 bg-background scroll-scale-in ${lifestyleVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-tactical text-primary text-3xl md:text-4xl text-center mb-16">
            PRECISION FIT FOR PERFORMANCE, RECREATION, AND REST
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <Music className="w-12 h-12 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-lg">MusicPlugs</h3>
                <p className="text-secondary text-sm">
                  Audio protection with crystal clarity
                </p>
                <Button className="btn-olive-outline w-full text-sm">
                  VIEW MUSICPLUGS
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <Filter className="w-12 h-12 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-lg">MusicFilters</h3>
                <p className="text-secondary text-sm">
                  Interchangeable filter levels for performers
                </p>
                <Button className="btn-olive-outline w-full text-sm">
                  VIEW FILTERS
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <Moon className="w-12 h-12 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-lg">SleepPlug</h3>
                <p className="text-secondary text-sm">
                  Low-profile comfort for deep sleep
                </p>
                <Button className="btn-olive-outline w-full text-sm">
                  VIEW SLEEPPLUG
                </Button>
              </CardContent>
            </Card>

            <Card className="military-card bg-muted/50 border-[#6C6846] hover:border-scarlet-red transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <Waves className="w-12 h-12 text-primary mx-auto group-hover:text-scarlet-red transition-colors" />
                <h3 className="heading-tactical text-primary text-lg">SwimPlug</h3>
                <p className="text-secondary text-sm">
                  Water-blocking custom fit for athletes
                </p>
                <Button className="btn-olive-outline w-full text-sm">
                  VIEW SWIMPLUG
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        ref={ctaRef}
        className={`py-20 px-6 bg-muted/30 scroll-fade-in ${ctaVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-tactical text-primary text-4xl md:text-6xl mb-8">
            READY TO PROTECT YOUR TEAM AND YOUR HEARING?
          </h2>
          
          <p className="subheading-tactical text-secondary text-xl md:text-2xl mb-12">
            Custom-fit comfort. Field-tested performance. Future-ready gear.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300">
              SCHEDULE A MEETING
            </Button>
            <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm text-white bg-black">
              LEARN ABOUT OUR SCANNER
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;