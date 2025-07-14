import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ComparisonSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features: Array<{
    name: string;
    aware: boolean | "LIMITED";
    traditional: boolean | "LIMITED";
    foam: boolean | "LIMITED";
  }> = [
    {
      name: "FDA-cleared, non-contact 3D scanning",
      aware: true,
      traditional: false,
      foam: false
    },
    {
      name: "Perfectly captures second bend for superior fit",
      aware: true,
      traditional: false,
      foam: false
    },
    {
      name: "Permanent digital profile",
      aware: true,
      traditional: false,
      foam: false
    },
    {
      name: "Seamless comms integration",
      aware: true,
      traditional: "LIMITED",
      foam: false
    },
    {
      name: "Future-proof biometric platform",
      aware: true,
      traditional: false,
      foam: false
    },
    {
      name: "Field-tested by SOF and DoD Aviators",
      aware: true,
      traditional: "LIMITED",
      foam: false
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 bg-muted scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-signal-white text-4xl md:text-5xl mb-6">
            Don't Compromise When the Mission Depends on It
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-combat-black rounded-lg overflow-hidden mb-12 border border-olive-drab">
          <div className="grid grid-cols-4 bg-combat-black text-signal-white border-b border-olive-drab">
            <div className="p-4 border-r border-olive-drab">
              <h3 className="subheading-tactical text-sm font-bold">FEATURE</h3>
            </div>
            <div className="p-4 border-r border-olive-drab text-center">
              <h3 className="subheading-tactical text-sm font-bold text-scarlet-red">AWARE</h3>
            </div>
            <div className="p-4 border-r border-olive-drab text-center">
              <h3 className="subheading-tactical text-sm font-bold">TRADITIONAL</h3>
            </div>
            <div className="p-4 text-center">
              <h3 className="subheading-tactical text-sm font-bold">FOAM</h3>
            </div>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-4 border-t border-olive-drab">
              <div className="p-4 bg-combat-black border-r border-olive-drab">
                <span className="body-tactical text-signal-white text-sm">
                  {feature.name}
                </span>
              </div>
              <div className="p-4 border-r border-olive-drab bg-combat-black text-center">
                {feature.aware === true ? (
                  <Check className="w-5 h-5 text-scarlet-red mx-auto" strokeWidth={3} />
                ) : feature.aware === "LIMITED" ? (
                  <span className="text-xs text-signal-white font-medium">LIMITED</span>
                ) : (
                  <X className="w-5 h-5 text-signal-white mx-auto" strokeWidth={3} />
                )}
              </div>
              <div className="p-4 border-r border-olive-drab bg-combat-black text-center">
                {feature.traditional === true ? (
                  <Check className="w-5 h-5 text-scarlet-red mx-auto" strokeWidth={3} />
                ) : feature.traditional === "LIMITED" ? (
                  <span className="text-xs text-signal-white font-medium">LIMITED</span>
                ) : (
                  <X className="w-5 h-5 text-signal-white mx-auto" strokeWidth={3} />
                )}
              </div>
              <div className="p-4 bg-combat-black text-center">
                {feature.foam === true ? (
                  <Check className="w-5 h-5 text-scarlet-red mx-auto" strokeWidth={3} />
                ) : feature.foam === "LIMITED" ? (
                  <span className="text-xs text-signal-white font-medium">LIMITED</span>
                ) : (
                  <X className="w-5 h-5 text-signal-white mx-auto" strokeWidth={3} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};