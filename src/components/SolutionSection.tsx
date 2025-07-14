import { Button } from "@/components/ui/button";
import { Target, Clock, Radio, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const SolutionSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const solutions = [{
    icon: Target,
    title: "100% Fit Guarantee",
    description: "Zero contact scanning captures exact geometry"
  }, {
    icon: Clock,
    title: "Scan Once, Fit Forever",
    description: "Lifetime digital profile, fast remakes"
  }, {
    icon: Radio,
    title: "Comms-Compatible",
    description: "Works with existing helmet + comms systems"
  }, {
    icon: Activity,
    title: "Biometric-Ready",
    description: "Future upgrades: health, EEG, performance data"
  }];
  return <section ref={ref} className={`py-20 px-6 bg-background scroll-slide-right ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-4xl md:text-5xl mb-6 text-white">
            The New Standard in Hearing Protection & Biometric Readiness
          </h2>
        </div>

        <div className="grid-tactical-4 mb-12">
          {solutions.map((solution, index) => <div key={index} className="card-tactical p-8 rounded-lg text-center">
              <solution.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
              <h3 className="subheading-tactical text-card-foreground text-xl mb-4">
                {solution.title}
              </h3>
              <p className="body-tactical text-card-foreground opacity-80">
                {solution.description}
              </p>
            </div>)}
        </div>

        <div className="text-center">
          <Button className="btn-scarlet cta-tactical px-8 py-4 text-base rounded-sm">
            See How It Works
          </Button>
        </div>
      </div>
    </section>;
};