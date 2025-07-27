import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const GetScanned = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  const {
    ref: scannerRef,
    isVisible: scannerVisible
  } = useScrollAnimation();
  const {
    ref: pathsRef,
    isVisible: pathsVisible
  } = useScrollAnimation();
  const {
    ref: eventsRef,
    isVisible: eventsVisible
  } = useScrollAnimation();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();
  return <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`relative pt-24 pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/68ac4c95-84ec-4119-a846-03be89b8204c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-combat-black/70"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-signal-white mb-8 leading-tight md:text-5xl">GET SCANNED FOR CUSTOM-FIT GEAR IN JUST 90 SECONDS</h1>
            <p className="text-xl md:text-2xl text-signal-white mb-12 leading-relaxed max-w-3xl mx-auto">
              Our FDA-cleared eFit 3D scanner captures the exact geometry of your ear — no contact, no silicone. Just perfect fit, every time.
            </p>
            <Link to="/request-consultation">
              <Button className="btn-scarlet text-lg px-8 py-4 font-semibold uppercase tracking-wide">
                REQUEST A SCAN CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why 3D Scanning Section */}
      <section ref={scannerRef} className={`py-20 transition-all duration-1000 delay-200 ${scannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Scanner Visual */}
              <div className="space-y-4 flex justify-center">
                <div className="w-full h-80 bg-muted/20 rounded-lg overflow-hidden border-2 border-desert-tan/30 relative">
                  <img src="/lovable-uploads/352d3b3f-b71b-42a4-866f-a51c29f3bb25.png" alt="eFit 3D Scanner in action - contactless ear scanning process" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-combat-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-olive-drab leading-tight md:text-4xl">WHY eFIT MATTERS</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      No contact, no silicone, zero infection risk
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">Digitally captures full ear geometry, including the second bend</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Enables perfect repeatability and biometric upgrades
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">Scans take less than 90 seconds minutes per person</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/efit-3d-scanner">
                    <Button className="bg-desert-tan text-combat-black hover:bg-desert-tan/90 text-lg px-8 py-3 font-semibold uppercase tracking-wide">
                      Learn more about eFIT
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Scanned Section */}
      <section ref={pathsRef} className={`py-20 transition-all duration-1000 delay-400 ${pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-olive-drab text-center mb-16">
              TWO WAYS TO GET SCANNED
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Teams & Organizations Card */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-olive-drab rounded-lg mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-signal-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Teams & Organizations
                  </h3>
                  
                  <p className="text-signal-white text-lg leading-relaxed">
                    Schedule a scanner deployment to your unit or facility.
                  </p>
                  
                  <Link to="/request-consultation">
                    <Button className="btn-scarlet w-full text-lg py-3 font-semibold uppercase tracking-wide">
                      Request a scanning event for your team
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Individuals Card */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-olive-drab rounded-lg mx-auto flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-signal-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Individuals
                  </h3>
                  
                  <p className="text-signal-white text-lg leading-relaxed">
                    Join us at a scheduled scanning event near you.
                  </p>
                  
                  <Button className="btn-scarlet w-full text-lg py-3 font-semibold uppercase tracking-wide" onClick={() => eventsRef.current?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    SEE UPCOMING EVENTS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={eventsRef} className={`py-20 transition-all duration-1000 delay-600 ${eventsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-olive-drab text-center mb-16">
              WHERE TO FIND US NEXT
            </h2>
            
            <Card className="bg-muted/20 border-desert-tan/30 rounded-xl overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-desert-tan" />
                  <h3 className="text-2xl font-bold text-signal-white">
                    SOF Week 2026
                  </h3>
                </div>
                
                <div className="flex items-center space-x-3 text-desert-tan">
                  <MapPin className="h-5 w-5" />
                  <p className="text-lg font-semibold">
                    May 18–22, 2026 — Tampa, Florida
                  </p>
                </div>
                
                <p className="text-signal-white text-lg leading-relaxed">
                  Meet Aware Defense and get scanned on-site during SOF Week. Reserve your spot in advance.
                </p>
                
                <a href="https://sofweek.org/" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-scarlet w-full text-lg py-3 font-semibold uppercase tracking-wide">
                    LEARN MORE ABOUT SOF WEEK
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className={`py-20 transition-all duration-1000 delay-800 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-olive-drab leading-tight">GET YOUR TEAM MISSION-READY</h2>
            
            <p className="text-xl text-desert-tan leading-relaxed text-white">
              Schedule a scan, get gear that fits, and prepare for the next evolution in protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link to="/request-consultation">
                <Button className="btn-scarlet text-lg px-8 py-3 font-semibold uppercase tracking-wide w-full sm:w-auto">
                  REQUEST A CONSULTATION
                </Button>
              </Link>
              
              <Link to="/request-consultation">
                <Button variant="outline" className="border-desert-tan text-desert-tan hover:bg-desert-tan hover:text-combat-black text-lg px-8 py-3 font-semibold uppercase tracking-wide w-full sm:w-auto">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default GetScanned;