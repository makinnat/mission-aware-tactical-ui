import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Shield, Plane, HardHat, Activity, Target, Music, Truck, Zap, Building, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const UseCases = () => {
  const navigate = useNavigate();
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
      imagePlaceholder: "defense-operations.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/1b44b514-4cf3-486f-b784-05a70e8c5469.png", 
          alt: "Aviation CEP",
          link: "/products/aviation-cep"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/898ed8b2-e6e0-419c-84d9-4cc58e636bdc.png", 
          alt: "SleepPlug",
          link: "/products/sleepplug"
        },
        { 
          src: "/lovable-uploads/25ac5f0e-de6f-491d-bf2a-2c3405813a20.png", 
          alt: "EarDefender",
          link: "/products/eardefender"
        },
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        }
      ]
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
      imagePlaceholder: "competitive-shooting.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        },
        { 
          src: "/lovable-uploads/898ed8b2-e6e0-419c-84d9-4cc58e636bdc.png", 
          alt: "SleepPlug",
          link: "/products/sleepplug"
        }
      ]
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
      imagePlaceholder: "aviation-ground-crew.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/1b44b514-4cf3-486f-b784-05a70e8c5469.png", 
          alt: "Aviation CEP",
          link: "/products/aviation-cep"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/898ed8b2-e6e0-419c-84d9-4cc58e636bdc.png", 
          alt: "SleepPlug",
          link: "/products/sleepplug"
        },
        { 
          src: "/lovable-uploads/25ac5f0e-de6f-491d-bf2a-2c3405813a20.png", 
          alt: "EarDefender",
          link: "/products/eardefender"
        },
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        }
      ]
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
      imagePlaceholder: "law-enforcement.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/46468d82-9fe3-4eb1-bc54-5a1a45b2c547.png", 
          alt: "RadioCOMM",
          link: "/products/radiocomm"
        },
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        }
      ]
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
      imagePlaceholder: "construction-site.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/27802c88-a2c7-4bc1-8c39-658c9a526d77.png", 
          alt: "EarBud",
          link: "/products/earbud"
        }
      ]
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
      imagePlaceholder: "manufacturing-facility.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/27802c88-a2c7-4bc1-8c39-658c9a526d77.png", 
          alt: "EarBud",
          link: "/products/earbud"
        }
      ]
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
      imagePlaceholder: "mining-operations.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/27802c88-a2c7-4bc1-8c39-658c9a526d77.png", 
          alt: "EarBud",
          link: "/products/earbud"
        }
      ]
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
      imagePlaceholder: "transportation-logistics.jpg",
      featuredProducts: [
        { 
          src: "/lovable-uploads/007c27eb-f1af-44c2-9993-6f6619b6102f.png", 
          alt: "Custom Overmold",
          link: "/products/custom-overmold"
        },
        { 
          src: "/lovable-uploads/d29ee097-8a6f-4865-ad02-b39949605030.png", 
          alt: "EarShield",
          link: "/products/earshield"
        },
        { 
          src: "/lovable-uploads/27802c88-a2c7-4bc1-8c39-658c9a526d77.png", 
          alt: "EarBud",
          link: "/products/earbud"
        },
        { 
          src: "/lovable-uploads/46468d82-9fe3-4eb1-bc54-5a1a45b2c547.png", 
          alt: "RadioCOMM",
          link: "/products/radiocomm"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `url('/lovable-uploads/58f8e7d8-4eae-435b-97e4-5d655310aec9.png')`
        }}
      >
        {/* Multiple transparent overlay layers for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black text-signal-white mb-6 leading-tight md:text-6xl uppercase drop-shadow-lg">
              PROVEN IN THE FIELD
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
        className={`py-16 transition-all duration-1000 delay-200 ${overviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-black text-signal-white mb-6 uppercase">
              Hearing Protection That Scales Across Every High-Noise Environment
            </h2>
            <p className="text-lg text-desert-tan leading-relaxed mb-8">
              More than 22 million U.S. workers are exposed to hazardous noise each year, yet most universal earplugs fail to seal properly. Aware Defense combines the FDA-cleared eFit 3D Scanner with custom-molded ear protection and optional biometric sensors so organizations can deploy mission-grade safety at enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sectors Grid */}
      <section 
        ref={sectorsRef} 
        className={`py-8 transition-all duration-1000 delay-300 ${sectorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
          backgroundSize: '400px 400px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
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
                                <div className="w-2 h-2 bg-scarlet rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-desert-tan text-sm leading-relaxed">
                                  {application}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Product Images */}
                          <div className="mb-8">
                            <p className="text-xs text-desert-tan/60 uppercase tracking-wide mb-3">
                              Featured Products
                            </p>
                            <div className="flex space-x-3">
                              {sector.featuredProducts.map((product, productIndex) => (
                                <div 
                                  key={productIndex} 
                                  className="w-16 h-16 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                  onClick={() => product.link && navigate(product.link)}
                                >
                                  <img 
                                    src={product.src} 
                                    alt={product.alt} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Image Side */}
                        <div className="bg-combat-black/30 border-l border-desert-tan/20 flex items-center justify-center min-h-[300px] lg:min-h-[350px]">
                          {index === 0 ? (
                            <img 
                              src="/lovable-uploads/f1e814a3-2edb-4313-8649-962fba392f5a.png" 
                              alt="Defense and Federal Government Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 1 ? (
                            <img 
                              src="/lovable-uploads/864a9bfd-9667-4c95-b683-2c86443241bc.png" 
                              alt="Recreational and Competitive Shooting Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 2 ? (
                            <img 
                              src="/lovable-uploads/cb89dbec-314e-409b-b792-21da7b98292e.png" 
                              alt="Aviation and Airports Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 3 ? (
                            <img 
                              src="/lovable-uploads/80b794a0-00ea-493c-8eae-b5e4a067075b.png" 
                              alt="Public Safety and Law Enforcement Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 4 ? (
                            <img 
                              src="/lovable-uploads/5a0bcd62-e02b-4d44-b984-c3153435ab72.png" 
                              alt="Construction and Infrastructure Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 5 ? (
                            <img 
                              src="/lovable-uploads/ec0fc2c8-2cc0-4cb1-b6d4-ad1a9f439054.png" 
                              alt="Manufacturing and Heavy Industry Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : index === 6 ? (
                            <img 
                              src="/lovable-uploads/b4eb3490-cc39-4921-8158-e59860c99aa1.png" 
                              alt="Mining and Energy Operations" 
                              className="w-full h-full object-cover scale-x-[-1]"
                            />
                          ) : index === 7 ? (
                            <img 
                              src="/lovable-uploads/0395ed94-f56e-4c2d-a713-7753eee8d533.png" 
                              alt="Transportation and Logistics Operations" 
                              className="w-full h-full object-cover"
                            />
                          ) : (
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
                           )}
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
        className={`py-20 transition-all duration-1000 delay-600 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-signal-white mb-8 uppercase">
              HAVE A SPECIFIC USE CASE?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#95182b' }}
                onClick={() => navigate('/request-consultation')}
              >
                REQUEST A CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-desert-tan text-desert-tan hover:bg-desert-tan hover:text-combat-black"
                onClick={() => navigate('/request-consultation')}
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