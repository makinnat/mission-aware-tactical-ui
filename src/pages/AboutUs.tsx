import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, MessageSquare, Scale, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: originRef,
    isVisible: originVisible
  } = useScrollAnimation();
  
  const {
    ref: valuesRef,
    isVisible: valuesVisible
  } = useScrollAnimation();
  
  const {
    ref: organizationsRef,
    isVisible: organizationsVisible
  } = useScrollAnimation();
  
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();

  const values = [
    {
      icon: Shield,
      title: "Fit Comes First",
      description: "If it's not worn, it doesn't work. Comfort drives compliance in the field."
    },
    {
      icon: MessageSquare,
      title: "Communication Critical", 
      description: "Protection shouldn't block communication. Clear comms save lives."
    },
    {
      icon: Scale,
      title: "Scalable Solutions",
      description: "Everything we build must deploy at scale across diverse operations."
    },
    {
      icon: Settings,
      title: "Future Ready Design",
      description: "Our platform evolves with the mission and emerging technologies."
    }
  ];

  // Partner logos for the scroll
  const partners = [
    "/lovable-uploads/064fecdc-cff5-4391-ac37-ff2652b59d58.png",
    "/lovable-uploads/0c24dfc3-6782-4c71-a3db-e2f04154ac88.png",
    "/lovable-uploads/1106a9b7-e1eb-4c18-b7c0-653862ff02dd.png",
    "/lovable-uploads/13f84161-99ce-4565-8109-86a7671c9e94.png",
    "/lovable-uploads/1a80bd1a-8c26-4b80-bbf9-6853495696a0.png",
    "/lovable-uploads/1fac4378-15bb-4fa2-aa7d-4413a5f32ed1.png",
    "/lovable-uploads/244828ef-a80b-4a51-8921-7977b82689a4.png",
    "/lovable-uploads/24c9958e-52a3-4409-833c-30ecae02d79d.png"
  ];

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`pt-32 pb-20 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl lg:text-7xl font-black text-olive-drab mb-8 uppercase tracking-tight">
            BUILT BY OPERATORS.<br />
            TRUSTED BY ELITE UNITS.
          </h1>
          <p className="text-2xl text-desert-tan leading-relaxed max-w-4xl mx-auto">
            We created Aware Defense to solve the problem we lived with — gear that's uncomfortable, non-compliant, and gets tossed mid-mission.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section 
        ref={originRef}
        className={`py-20 transition-all duration-1000 delay-200 ${originVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="bg-muted/10 rounded-lg min-h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-desert-tan/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-desert-tan/60" />
                </div>
                <p className="text-desert-tan/60 text-sm uppercase tracking-wide">
                  Founder Image Placeholder
                </p>
                <p className="text-desert-tan/40 text-xs mt-1">
                  Field setting or tactical photo
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-5xl font-black text-olive-drab mb-8 uppercase">
                AWARE BEGAN IN THE FIELD
              </h2>
              <div className="space-y-6 text-xl text-signal-white leading-relaxed">
                <p>
                  Aware Defense was founded by a team of U.S. military veterans, engineers, and field medics who knew the pain points firsthand.
                </p>
                <p>
                  What started as a mission to make better ear protection has grown into a platform for protection, performance, and passive sensing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className={`py-20 bg-muted/5 transition-all duration-1000 delay-400 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-signal-white mb-4 uppercase">
              OUR OPERATING PRINCIPLES
            </h2>
            <p className="text-2xl text-desert-tan font-semibold">
              Humans are more important than hardware
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-combat-black/50 border-desert-tan/20 hover:border-desert-tan/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-scarlet-red rounded-lg mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-signal-white" />
                  </div>
                  <h3 className="text-xl font-bold text-desert-tan mb-4 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-signal-white leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations We Serve Section */}
      <section 
        ref={organizationsRef}
        className={`py-20 transition-all duration-1000 delay-600 ${organizationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-olive-drab mb-4 uppercase">
              TRUSTED ACROSS DOMAINS
            </h2>
          </div>

          {/* Scrolling Partner Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {/* First set of logos */}
              {partners.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 filter grayscale"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0">
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={ctaRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-800 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#95182b' }}
              >
                TALK TO OUR TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;