import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

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

        {/* Comparison Table and Image Layout */}
        <div className="flex gap-8 items-center">
          {/* Comparison Table - 2/3 width */}
          <div className="w-2/3">
            <div className="bg-combat-black rounded-lg overflow-hidden border border-scarlet-red">
              <div className="grid grid-cols-4 bg-combat-black text-signal-white border-b border-scarlet-red">
                <div className="p-4 border-r border-scarlet-red flex items-center justify-center">
                  <h3 className="subheading-tactical text-sm font-bold">FEATURE</h3>
                </div>
                <div className="p-4 border-r border-scarlet-red flex items-center justify-center">
                  <h3 className="subheading-tactical text-lg font-black text-signal-white">AWARE</h3>
                </div>
                <div className="p-4 border-r border-scarlet-red flex items-center justify-center">
                  <h3 className="subheading-tactical text-sm font-medium text-desert-tan">TRADITIONAL</h3>
                </div>
                <div className="p-4 flex items-center justify-center">
                  <h3 className="subheading-tactical text-sm font-medium text-desert-tan">FOAM</h3>
                </div>
              </div>

              {features.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 border-t border-scarlet-red">
                  <div className="p-4 bg-combat-black border-r border-scarlet-red flex items-center justify-center">
                    <span className="body-tactical text-signal-white text-sm">
                      {feature.name}
                    </span>
                  </div>
                  <div className="p-4 border-r border-scarlet-red bg-combat-black flex items-center justify-center">
                    {feature.aware === true ? (
                      <Check className="w-5 h-5 text-desert-tan" strokeWidth={4} />
                    ) : feature.aware === "LIMITED" ? (
                      <span className="text-xs text-signal-white font-medium">LIMITED</span>
                    ) : (
                      <X className="w-5 h-5 text-signal-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="p-4 border-r border-scarlet-red bg-combat-black flex items-center justify-center">
                    {feature.traditional === true ? (
                      <Check className="w-5 h-5 text-desert-tan" strokeWidth={4} />
                    ) : feature.traditional === "LIMITED" ? (
                      <span className="text-xs text-signal-white font-medium">LIMITED</span>
                    ) : (
                      <X className="w-5 h-5 text-signal-white" strokeWidth={3} />
                    )}
                  </div>
                  <div className="p-4 bg-combat-black flex items-center justify-center">
                    {feature.foam === true ? (
                      <Check className="w-5 h-5 text-desert-tan" strokeWidth={4} />
                    ) : feature.foam === "LIMITED" ? (
                      <span className="text-xs text-signal-white font-medium">LIMITED</span>
                    ) : (
                      <X className="w-5 h-5 text-signal-white" strokeWidth={3} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column - 1/3 width */}
          <div className="w-1/3 flex justify-center">
            <div className="bg-combat-black rounded-lg border border-scarlet-red p-8 flex flex-col items-center space-y-6">
              <img 
                src="/lovable-uploads/3e5c206b-e96b-4d8d-8f27-a668823b9cbb.png" 
                alt="AWARE 3D Scanner Device" 
                className="w-full h-auto object-contain"
              />
              <Link to="/technology/efit-3d-scanner" className="block">
                <img 
                  src="/lovable-uploads/e319426e-8e90-469b-bc84-bde45b072745.png" 
                  alt="eFit 3D Scanner" 
                  className="w-24 h-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};