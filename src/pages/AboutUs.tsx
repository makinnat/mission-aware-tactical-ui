import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, MessageSquare, ArrowUpRight, Settings, Quote } from "lucide-react";
import { useState, useEffect } from "react";
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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "We operate in some of the harshest conditions in the world. Aware's EarDefenders held up to salt, sand, and sustained flight hours. The passive protection is solid, and our aircrew say they actually want to wear them. These aren't just another issued item—they're mission-critical.",
      role: "Osprey Pilot and Safety Officer"
    },
    {
      quote: "The Aware team showed up on time, set up quickly, and scanned our entire aircrew within a day. Their custom hearing protection fits flawlessly under our helmets and provides the best seal we've ever had with CEP over-molds. Professional, efficient, and 100% tailored for naval aviation.",
      role: "Aviation Safety Officer"
    },
    {
      quote: "Aware Defense impressed me not only with their product quality but with their deep respect for the law enforcement community. Their support helps us continue our mission: ensuring that officers leave the job with the same level of protection and care they had while wearing the badge.",
      role: "Retired Law Enforcement Professional"
    },
    {
      quote: "This experience has been extremely positive and I'm looking forward to helping your company provide invaluable hearing protection to our Sailors…and for years to come. It was like I felt a shift in morale when folks walked in and walked out (after scanning) and I'll be the first to admit that we needed this.",
      role: "Combat Aviation Brigade"
    },
    {
      quote: "We've tried other 'custom' hearing protection solutions before, but nothing came close to the precision and comfort of what Aware Defense delivered. The 3D scans were fast and accurate, and our team had custom plugs in hand before the next rotation. This is what right looks like.",
      role: "SERE Specialist"
    }
  ];

  const logos = [
    {
      name: "US Navy",
      src: "/lovable-uploads/d59ab18c-d11d-4598-8ecf-85b9b65b9f8d.png",
      alt: "US Navy Logo"
    },
    {
      name: "US Army", 
      src: "/lovable-uploads/889ccf25-6998-4119-8a67-f431b97da35a.png",
      alt: "US Army Logo"
    },
    {
      name: "US Air Force",
      src: "/lovable-uploads/0c24dfc3-6782-4c71-a3db-e2f04154ac88.png",
      alt: "US Air Force Logo"
    },
    {
      name: "ONR",
      src: "/lovable-uploads/a8e2387b-c26e-4705-9bf5-6050903737c5.png",
      alt: "Office of Naval Research Logo"
    },
    {
      name: "Emory Healthcare",
      src: "/lovable-uploads/2e7ebe91-8198-46cc-8c0f-a99ad3760169.png",
      alt: "Emory Healthcare Logo"
    },
    {
      name: "Takeda",
      src: "/lovable-uploads/9ab5019f-203f-404b-89b1-a6411e681421.png",
      alt: "Takeda Logo"
    },
    {
      name: "Logitech",
      src: "/lovable-uploads/801cc443-a322-4d8a-80c8-57f9cc359f15.png",
      alt: "Logitech Logo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
      icon: ArrowUpRight,
      title: "Scalable Solutions",
      description: "Everything we build must deploy at scale across diverse operations."
    },
    {
      icon: Settings,
      title: "Future Ready Design",
      description: "Our platform evolves with the mission and emerging technologies."
    }
  ];


  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative pt-32 pb-20 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `url('/lovable-uploads/fe973eea-926b-4ab5-9991-92cb270bd128.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl lg:text-7xl font-black text-signal-white mb-4 uppercase tracking-tight">
            BUILT BY OPERATORS
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold text-desert-tan mb-8 uppercase tracking-tight">
            TRUSTED BY ELITE UNITS
          </h2>
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
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a6148255-f8a9-4cfa-a3bf-461c3740c374.png"
                alt="Founder in tactical setting"
                className="w-full h-[500px] object-cover"
              />
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
              <Card key={index} className="bg-combat-black/50 border-desert-tan/20 hover:border-desert-tan/40 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="w-16 h-16 bg-scarlet-red rounded-lg mx-auto mb-6 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-signal-white" />
                    </div>
                    <h3 className="text-xl font-bold text-desert-tan mb-4 uppercase">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-signal-white leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Across Domains Section */}
      <section 
        ref={organizationsRef}
        className={`py-20 transition-all duration-1000 delay-600 ${organizationsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-signal-white mb-4 uppercase">
              TRUSTED ACROSS DOMAINS
            </h2>
          </div>

          {/* Testimonials */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="text-center transition-all duration-500 ease-in-out">
              <Quote className="w-12 h-12 text-scarlet-red mx-auto mb-6" />
              <blockquote className="text-signal-white text-xl md:text-2xl mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <cite className="text-desert-tan text-lg">
                – {testimonials[currentTestimonial].role}
              </cite>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-scarlet-red' 
                      : 'bg-desert-tan/30 hover:bg-desert-tan/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Logo Scroll */}
          <div className="border-t border-desert-tan/20 pt-12">
            <div className="overflow-hidden">
              <div className="flex items-center gap-6 md:gap-8 animate-scroll">
                {/* Duplicate logos for seamless loop */}
                {[...logos, ...logos].map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 bg-signal-white rounded-lg p-4 shadow-sm border-2 border-olive-drab"
                  >
                    <div className="h-12 md:h-16 w-24 md:w-32 flex items-center justify-center">
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
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