import { Button } from "@/components/ui/button";
import { Calendar, Scan, Shield } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export const HowItWorksSection = () => {
  const { ref, isVisible } = useStaggeredAnimation();
  const steps = [
    {
      icon: Calendar,
      title: "Schedule a Meeting",
      description: "Review your mission requirements with an Aware Defense expert"
    },
    {
      icon: Scan,
      title: "Get Scanned",
      description: "We deploy our FDA-cleared 3D ear scanner to capture your team's ear profiles"
    },
    {
      icon: Shield,
      title: "Equip & Scale",
      description: "Outfit your team with precision-fit protection and upgrade to biometrics as needs evolve"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 px-6 bg-muted"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-signal-white text-4xl md:text-5xl mb-6">
            How to Get Started
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-12 stagger-children ${isVisible ? 'visible' : ''}`}>
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-scarlet-red rounded-full flex items-center justify-center">
                <span className="cta-tactical text-signal-white text-lg">
                  {index + 1}
                </span>
              </div>
              
              <div className="bg-black/55 p-8 rounded-lg border-2" style={{
          borderColor: '#6C6846'
        }}>
                <step.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
                <h3 className="subheading-tactical text-white text-xl mb-4">
                  {step.title}
                </h3>
                <p className="body-tactical text-white font-thin text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-black border-2 border-signal-red hover:bg-black/90 text-signal-white cta-tactical px-8 py-4 text-base rounded-sm">
            Book Your Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};