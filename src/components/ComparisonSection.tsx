import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ComparisonSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    "Fit Guarantee",
    "Communication Compatible", 
    "FDA-Cleared Scanning",
    "Digital Profile",
    "Biometric Ready"
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 bg-muted scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-primary text-4xl md:text-5xl mb-6">
            Don't Compromise When the Mission Depends on It
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="card-tactical rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-3 bg-primary text-signal-white">
            <div className="p-6">
              <h3 className="subheading-tactical text-xl">Feature</h3>
            </div>
            <div className="p-6 border-l border-border">
              <h3 className="subheading-tactical text-xl">Foam Plugs</h3>
            </div>
            <div className="p-6 border-l border-border">
              <h3 className="subheading-tactical text-xl">Aware Defense</h3>
            </div>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 border-t border-border">
              <div className="p-6 bg-card">
                <span className="body-tactical text-card-foreground font-medium">
                  {feature}
                </span>
              </div>
              <div className="p-6 border-l border-border bg-card text-center">
                <X className="w-6 h-6 text-scarlet-red mx-auto" strokeWidth={3} />
              </div>
              <div className="p-6 border-l border-border bg-card text-center">
                <Check className="w-6 h-6 text-green-500 mx-auto" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm">
            Learn About EFIT Technology
          </Button>
        </div>
      </div>
    </section>
  );
};