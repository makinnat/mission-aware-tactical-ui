import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const productImage = "/lovable-uploads/cbfb1a8a-8b83-4766-abd6-811dab90c759.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WhyAwareSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      title: "FDA CLEARED TECHNOLOGY",
      description: "Our scanning technology meets the highest medical standards"
    },
    {
      title: "SPECIAL OPERATIONS TRUSTED", 
      description: "Validated by DoD aviators in the field"
    },
    {
      title: "INDUSTRY PARTNERSHIPS",
      description: "Integrated with Invisio, Gentex, Ops-Core, Staccato, Axil, and Otto"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 scroll-slide-left ${isVisible ? 'visible' : ''} relative`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <div className="mb-6">
              <h2 className="heading-tactical text-4xl md:text-5xl text-white">
                Engineered by Operators
              </h2>
              <h3 className="subheading-tactical text-2xl md:text-3xl" style={{ color: '#6C6846' }}>
                Validated in the field
              </h3>
            </div>
            
            <p className="body-tactical text-foreground text-lg md:text-xl mb-10 leading-relaxed">
              Founded by combat-tested operators, Aware Defense delivers proven, field-tested solutions that enhance rather than hinder performance.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-6 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-scarlet-red mt-1 flex-shrink-0" strokeWidth={2} />
                  <div className="space-y-2">
                    <h4 className="heading-tactical text-lg font-bold tracking-wide" style={{ color: '#B6A687' }}>
                      {highlight.title}
                    </h4>
                    <p className="body-tactical text-white text-base leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm">
              See additional use cases
            </Button>
          </div>

          {/* Right: Product image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img 
                src={productImage} 
                alt="Tactical operator in field operations" 
                className="w-full h-auto shadow-2xl scale-105 -m-1"
              />
            </div>
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-olive-drab opacity-10 rounded-lg blur-xl transform scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};