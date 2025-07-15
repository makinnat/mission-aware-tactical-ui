import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Shield, Plane, HardHat, Activity, Target, Music, Truck, Zap, Building, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const UseCases = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: overviewRef,
    isVisible: overviewVisible
  } = useScrollAnimation();
  
  const {
    ref: sectorsRef,
    isVisible: sectorsVisible
  } = useScrollAnimation();
  
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();

  const industrySectors = [
    {
      icon: Shield,
      title: "Defense & Federal Government",
      subtitle: "Mission-Critical Applications",
      description: "Warfighters rank hearing loss as the #1 service-connected disability. Aware Defense custom molds integrate seamlessly with comms suites from Gentex, Invisio, Axil, and more, delivering full-seal impulse protection without blocking situational audio.",
      applications: [
        "Special Operations Forces field validation with outstanding results",
        "Aviation units report improved compliance and aircrew satisfaction", 
        "Training environments require protection without communication barriers",
        "Combat zones demand reliable protection with situational awareness"
      ],
      imagePlaceholder: "defense-operations.jpg"
    },
    {
      icon: Settings,
      title: "Manufacturing & Heavy Industry", 
      subtitle: "Enterprise-Scale Safety Solutions",
      description: "Manufacturing generates 14,500 recordable hearing-loss cases annually—76% occur in this sector alone. Custom protection reduces remake rates, speeds shift changeovers, and raises PPE compliance in plants where traditional foam plugs are correctly inserted only 8% of the time.",
      applications: [
        "All-day comfort enables consistent wear throughout 12-hour shifts",
        "Communication integration maintains productivity and safety coordination",
        "Moisture resistance withstands demanding manufacturing conditions", 
        "Digital documentation streamlines OSHA compliance reporting"
      ],
      imagePlaceholder: "manufacturing-facility.jpg"
    },
    {
      icon: HardHat,
      title: "Construction & Infrastructure",
      subtitle: "High-Risk Environment Protection", 
      description: "51% of construction workers have been exposed to hazardous noise levels, yet 52% report not wearing hearing protection. Jackhammers, nail guns and concrete saws create bursts exceeding 120 dB. Our lock-and-key custom fit guarantees proper attenuation.",
      applications: [
        "Impact resistance for debris and falling objects",
        "Radio compatibility for construction communication systems",
        "Sweat resistance for outdoor work in all weather conditions",
        "Quick insertion/removal for varied noise exposure throughout the day"
      ],
      imagePlaceholder: "construction-site.jpg"
    },
    {
      icon: Plane,
      title: "Aviation & Airports",
      subtitle: "Ground Crew & Maintenance Safety",
      description: "Ramp crews, fuel attendants and maintenance teams endure continuous jet and ground-power unit noise. eFit mobile scanning allows mass fittings during shift rotations, and slim custom molds fit comfortably under double hearing protection.",
      applications: [
        "Headset compatibility for air traffic control and ground crew communication",
        "Rapid deployment for emergency response teams", 
        "Multiple noise environments from quiet offices to flight line operations",
        "Regulatory compliance with FAA and OSHA hearing conservation standards"
      ],
      imagePlaceholder: "aviation-ground-crew.jpg"
    },
    {
      icon: Zap,
      title: "Mining & Energy",
      subtitle: "Extreme Environment Solutions",
      description: "An estimated 90% of miners have developed hearing impairment by age 50. Construction sand & gravel miners experience the highest industry hearing-loss prevalence at 36%. Aware Defense ear-pro withstands dust, vibration and extreme temperatures.",
      applications: [
        "Oil and gas operations require explosion-proof hearing protection",
        "Power generation facilities demand protection from turbine and generator noise",
        "Remote operations benefit from biometric monitoring capabilities",
        "MSHA compliance with strict hearing conservation program requirements"
      ],
      imagePlaceholder: "mining-operations.jpg"
    },
    {
      icon: Truck,
      title: "Transportation & Logistics", 
      subtitle: "Mobile Workforce Protection",
      description: "Transportation workers face unique hearing challenges from diverse noise sources including diesel engines, hydraulic systems, loading equipment, and traffic noise combined with constant communication requirements.",
      applications: [
        "Radio communication for coordination and safety",
        "All-weather durability for outdoor loading and transport operations",
        "Comfort for extended wear during long-haul operations", 
        "Quick insertion/removal for varied work environments throughout shifts"
      ],
      imagePlaceholder: "transportation-logistics.jpg"
    },
    {
      icon: Target,
      title: "Public Safety & Law Enforcement",
      subtitle: "Tactical Audio Solutions",
      description: "Police officers are 19% more likely to have hearing loss than the general population. SWAT operators and patrol officers need split-second audio cues while facing exposure from sirens (120 dB) and gunfire (160+ dB).",
      applications: [
        "SWAT and tactical units require impulse protection with communication clarity",
        "Traffic enforcement officers face continuous highway and siren noise",
        "Emergency responders need rapid deployment hearing protection",
        "Training facilities require protection for firearms and scenario training"
      ],
      imagePlaceholder: "law-enforcement.jpg"
    },
    {
      icon: Music,
      title: "Music & Entertainment Industry",
      subtitle: "Precision Audio Protection",
      description: "Musicians are 4× more likely to develop noise-induced hearing loss than the general population. Concert sound levels can reach 120 decibels, causing instant damage without protection. Artists require fidelity as well as protection.",
      applications: [
        "Flat attenuation filters preserve frequency response across the musical spectrum",
        "Musician-specific designs accommodate instruments and performance positions",
        "Custom frequency response tailored to individual hearing profiles",
        "Durable construction for touring and frequent use in demanding environments"
      ],
      imagePlaceholder: "music-entertainment.jpg"
    },
    {
      icon: Activity,
      title: "Recreational & Competitive Shooting",
      subtitle: "Precision Meets Protection", 
      description: "Shooting sports represent America's fastest-growing recreational activity, with participation increasing 24.1% from 2009 to 2022. Yet only 58% of recreational shooters consistently use hearing protection, with 20% of high-volume shooters never using protection.",
      applications: [
        "Range officer commands become clear and audible", 
        "Environmental awareness critical for situational timing is preserved",
        "Shot timing feedback from steel targets remains clear",
        "Equipment malfunction alerts are not masked"
      ],
      imagePlaceholder: "competitive-shooting.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black text-signal-white mb-6 leading-tight md:text-6xl uppercase">
              BUILT FOR THE FIELD. PROVEN IN THE FIELD.
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto">
              Explore how Aware Defense supports real-world missions across military, aviation, industrial, and medical domains.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        ref={overviewRef} 
        className={`py-16 bg-muted/5 transition-all duration-1000 delay-200 ${overviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black text-olive-drab mb-6 uppercase">
              Perfect-Fit Hearing Protection That Scales Across Every High-Noise Environment
            </h2>
            <p className="text-lg text-signal-white leading-relaxed mb-8">
              More than 22 million U.S. workers are exposed to hazardous noise each year, yet most universal earplugs fail to seal properly. Aware Defense combines the FDA-cleared eFit 3D Scanner with custom-molded ear protection and optional biometric sensors so organizations can deploy mission-grade safety at enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sectors Grid */}
      <section 
        ref={sectorsRef} 
        className={`py-20 transition-all duration-1000 delay-300 ${sectorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {industrySectors.map((sector, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 delay-${400 + (index * 100)} ${sectorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <Card className="bg-desert-tan/5 border-desert-tan/20 rounded-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Content Side */}
                        <div className="p-8 lg:p-12">
                          <div className="mb-6">
                            <h3 className="text-2xl font-black text-signal-white uppercase mb-2">
                              {sector.title}
                            </h3>
                            <p className="text-lg font-semibold text-scarlet uppercase tracking-wide">
                              {sector.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-signal-white leading-relaxed mb-8">
                            {sector.description}
                          </p>
                          
                          <div className="space-y-3 mb-8">
                            {sector.applications.map((application, appIndex) => (
                              <div key={appIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-scarlet rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-desert-tan text-sm leading-relaxed">
                                  {application}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Product Images Placeholder */}
                          <div className="mb-8">
                            <p className="text-xs text-desert-tan/60 uppercase tracking-wide mb-3">
                              Featured Products
                            </p>
                            <div className="flex space-x-3">
                              {[1, 2, 3].map((item) => (
                                <div key={item} className="w-16 h-16 bg-combat-black/40 border border-desert-tan/20 rounded-lg flex items-center justify-center">
                                  <div className="w-3 h-3 bg-desert-tan/30 rounded"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Button 
                            className="text-sm px-6 py-3 font-semibold uppercase tracking-wide text-white"
                            style={{ backgroundColor: '#95182b' }}
                          >
                            LEARN MORE ABOUT THIS SECTOR
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        
                        {/* Image Placeholder Side */}
                        <div className="bg-combat-black/30 border-l border-desert-tan/20 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                          <div className="text-center p-8">
                            <div className="w-20 h-20 bg-desert-tan/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                              <div className="w-8 h-8 bg-desert-tan/40 rounded"></div>
                            </div>
                            <p className="text-desert-tan/60 text-sm uppercase tracking-wide">
                              Image Placeholder
                            </p>
                            <p className="text-desert-tan/40 text-xs mt-1">
                              {sector.imagePlaceholder}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={ctaRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-olive-drab mb-8 uppercase">
              HAVE A SPECIFIC USE CASE?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We've worked with Tier 1 units, government agencies, and OEMs — let's solve your problem next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#95182b' }}
              >
                REQUEST A CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-desert-tan text-desert-tan hover:bg-desert-tan hover:text-combat-black"
              >
                CONTACT OUR TEAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;