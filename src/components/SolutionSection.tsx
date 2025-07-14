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
    title: "Zero Contact. Zero Risk. 100% Fit.",
    description: "Our patented, non-contact 3D ear scanner captures the full geometry of the ear—including the critical second bend—in just 90 seconds.",
    subtitle: "Scan Once, Fit For Your Career.",
    subdescription: "Permanent digital profile for fast remakes and future upgrades. Your ear geometry is stored securely for life."
  }, {
    icon: Radio,
    title: "Seamless Integration",
    description: "Works with your existing comms and helmet systems. We don't replace your gear—we make it better.",
    subtitle: "Future-Proof Platform",
    subdescription: "Ready for advanced biometrics and health monitoring as your operational needs evolve."
  }];
  return <section ref={ref} className={`py-20 px-6 bg-background scroll-slide-right ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-4xl md:text-5xl mb-6 text-white">
            The New Standard in Hearing Protection & Biometric Readiness
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => <div key={index} className="bg-black/55 p-8 rounded-lg text-center border-2" style={{
          borderColor: '#6C6846'
        }}>
              <solution.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
              <h3 className="subheading-tactical text-white text-xl mb-4">
                {solution.title}
              </h3>
              <p className="body-tactical text-white font-thin text-sm mb-6">
                {solution.description}
              </p>
              <h4 className="subheading-tactical text-white text-lg mb-3">
                {solution.subtitle}
              </h4>
              <p className="body-tactical text-white font-thin text-sm">
                {solution.subdescription}
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