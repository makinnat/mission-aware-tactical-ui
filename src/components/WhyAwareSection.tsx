import { Button } from "@/components/ui/button";
import { Award, Users, Headphones } from "lucide-react";
const productImage = "/lovable-uploads/75be66ba-1b9e-4843-b587-0343fb09a439.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const WhyAwareSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: Award,
      text: "FDA-Cleared"
    },
    {
      icon: Users,
      text: "SOF-Tested"
    },
    {
      icon: Headphones,
      text: "Comms-Integrated"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 bg-muted scroll-slide-left ${isVisible ? 'visible' : ''}`}
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

            {/* Icon Highlights */}
            <div className="flex justify-between gap-4 mb-10 max-w-lg">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <highlight.icon className="w-8 h-8 text-scarlet-red" strokeWidth={2} />
                  <span className="subheading-tactical text-secondary text-lg">
                    {highlight.text}
                  </span>
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