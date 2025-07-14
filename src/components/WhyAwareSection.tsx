import { Button } from "@/components/ui/button";
import { Award, Users, Headphones } from "lucide-react";
import productImage from "@/assets/product-tactical-earpiece.jpg";

export const WhyAwareSection = () => {
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
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="heading-tactical text-primary text-4xl md:text-5xl mb-8">
              Engineered by Operators. Validated in the Field.
            </h2>
            
            <p className="body-tactical text-foreground text-lg md:text-xl mb-10 leading-relaxed">
              Founded by combat-tested operators, Aware Defense delivers proven, field-tested solutions that enhance rather than hinder performance.
            </p>

            {/* Icon Highlights */}
            <div className="flex flex-wrap gap-8 mb-10">
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
              View Use Cases
            </Button>
          </div>

          {/* Right: Product image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={productImage} 
                alt="Tactical hearing protection device" 
                className="w-full h-auto rounded-lg shadow-2xl"
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