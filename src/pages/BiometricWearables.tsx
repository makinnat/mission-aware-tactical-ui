import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Activity, Brain, Heart, Eye, Wifi, Shield, Radio, Target, Zap, Users, Plane } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BiometricWearables = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: capabilitiesRef,
    isVisible: capabilitiesVisible
  } = useScrollAnimation();
  
  const {
    ref: whyEarRef,
    isVisible: whyEarVisible
  } = useScrollAnimation();
  
  const {
    ref: integrationRef,
    isVisible: integrationVisible
  } = useScrollAnimation();
  
  const {
    ref: applicationsRef,
    isVisible: applicationsVisible
  } = useScrollAnimation();
  
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 relative overflow-hidden transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            className="absolute inset-0 w-full h-full object-cover scale-110"
            src="https://www.canva.com/design/DAGtOzlXTwk/HGaYXQ8ur0k-U5HdyZoYmQ/watch?embed" 
            allowFullScreen
            allow="fullscreen"
            style={{ border: 'none', padding: 0, margin: 0 }}
          />
        </div>
        
        {/* Transparent overlay for text visibility */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-8 leading-tight md:text-6xl">
              BEYOND HEARING PROTECTION: THE BIOMETRIC PLATFORM
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
              Aware custom-fit ear gear becomes a passive platform for in-ear sensing — no added steps, no added equipment. Your ear is the window.
            </p>
            <Button 
              className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" 
              style={{ backgroundColor: '#95182b' }}
            >
              SCHEDULE A TECHNOLOGY DEMO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sensor Capabilities Overview */}
      <section 
        ref={capabilitiesRef} 
        className={`py-20 transition-all duration-1000 delay-200 ${capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              WHAT WE CAN MEASURE — RIGHT FROM THE EAR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Core Temperature",
                  description: "Real-time thermal data from internal ear canal"
                },
                {
                  icon: Brain,
                  title: "EEG Signals",
                  description: "Brainwave + fatigue data from consistent earpiece positioning"
                },
                {
                  icon: Heart,
                  title: "Cardiovascular Monitoring",
                  description: "Passive HRV / pulse via optical sensors"
                },
                {
                  icon: Eye,
                  title: "Cognitive Readiness",
                  description: "Future-state: focus, reaction time, alertness data"
                }
              ].map((capability, index) => (
                <Card 
                  key={index}
                  className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-${400 + (index * 100)} ${capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto mb-6 flex items-center justify-center">
                      <capability.icon className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-lg font-bold text-desert-tan mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-signal-white text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why the Ear Section */}
      <section 
        ref={whyEarRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-300 ${whyEarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Visual */}
              <div className={`transition-all duration-700 delay-500 ${whyEarVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <div className="w-full h-96 bg-combat-black/50 rounded-xl flex items-center justify-center border border-desert-tan/30">
                  <img 
                    src="/lovable-uploads/4b42e1ce-24c0-46cc-beee-1f4ea95bc5ec.png" 
                    alt="Biometric Ear Device" 
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className={`transition-all duration-700 delay-700 ${whyEarVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <h2 className="text-3xl font-bold text-olive-drab mb-8">
                  WHY THE EAR BEATS THE WRIST
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-scarlet rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-signal-white leading-relaxed">
                      <span className="font-semibold text-desert-tan">Improved sensor contact</span> — Consistent positioning ensures reliable data collection
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-scarlet rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-signal-white leading-relaxed">
                      <span className="font-semibold text-desert-tan">Shielded from environmental noise</span> — Protected from temperature fluctuations and interference
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-scarlet rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-signal-white leading-relaxed">
                      <span className="font-semibold text-desert-tan">More accurate EEG and core temp data</span> — Proximity to brain and core temperature source
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-scarlet rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-signal-white leading-relaxed">
                      <span className="font-semibold text-desert-tan">No interference with gear</span> — Compatible with uniforms, gloves, and weapons handling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section 
        ref={integrationRef} 
        className={`py-20 transition-all duration-1000 delay-400 ${integrationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              FITS INTO EXISTING SYSTEMS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Wifi,
                  title: "Wireless Sync",
                  description: "BLE-compatible with tactical radios and wearables"
                },
                {
                  icon: Shield,
                  title: "Secure Data",
                  description: "AES-256 encryption, zero local storage"
                },
                {
                  icon: Radio,
                  title: "Comms + Sensor Compatible",
                  description: "One device, dual function — hearing + health"
                }
              ].map((integration, index) => (
                <Card 
                  key={index}
                  className={`bg-scarlet/10 border-scarlet/30 rounded-xl transition-all duration-700 delay-${600 + (index * 100)} ${integrationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-olive-drab rounded-lg mx-auto mb-6 flex items-center justify-center">
                      <integration.icon className="h-8 w-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-signal-white mb-4">
                      {integration.title}
                    </h3>
                    <p className="text-desert-tan leading-relaxed">
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section 
        ref={applicationsRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-500 ${applicationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              OPERATOR-READY. R&D-PROVEN.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, text: "Cognitive performance monitoring" },
                { icon: Plane, text: "Aviation pilot fatigue" },
                { icon: Target, text: "Warfighter readiness tracking" },
                { icon: Users, text: "Special ops field medicine" },
                { icon: Activity, text: "Training & simulation performance metrics" },
                { icon: Zap, text: "Real-time health analytics" }
              ].map((application, index) => (
                <div 
                  key={index}
                  className={`bg-desert-tan/20 border border-desert-tan/30 rounded-lg p-6 text-center transition-all duration-500 delay-${600 + (index * 100)} ${applicationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="w-12 h-12 bg-scarlet rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <application.icon className="h-6 w-6 text-signal-white" />
                  </div>
                  <p className="text-desert-tan font-medium text-sm">
                    {application.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className={`py-20 transition-all duration-1000 delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-olive-drab mb-8">
              BUILD WITH US
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We're looking for forward-thinking buyers, innovators, and defense partners. Let's evolve together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" 
                style={{ backgroundColor: '#95182b' }}
              >
                SCHEDULE A DEMO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
              >
                CONTACT TECH TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BiometricWearables;