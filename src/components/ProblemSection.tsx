import { AlertTriangle, Volume, RadioIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const ProblemSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const problems = [{
    icon: AlertTriangle,
    title: "Comfort Failure",
    description: "Constant readjustment and fatigue"
  }, {
    icon: Volume,
    title: "Communication Breakdown",
    description: "Muffled comms = compromised awareness"
  }, {
    icon: RadioIcon,
    title: "Mission Compromise",
    description: "Operators remove protection to function"
  }];
  return <section ref={ref} className={`relative py-20 px-6 scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{
    backgroundImage: `url(/lovable-uploads/4fc34f4c-b066-4cb7-812f-9e888c91f448.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6">
            <h2 className="heading-tactical text-4xl md:text-5xl text-white">
              Outdated ear protection
            </h2>
            <h3 className="subheading-tactical text-scarlet-red text-2xl md:text-3xl">
              Fails when it matters most
            </h3>
          </div>
          <p className="body-tactical text-secondary text-lg max-w-4xl mx-auto">
            Over 50% of combat soldiers suffer hearing loss because their protection doesn't fit or interferes with comms.
          </p>
        </div>

        <div className="grid-tactical max-w-5xl mx-auto">
          {problems.map((problem, index) => <div key={index} className="bg-black/90 p-8 rounded-lg text-center border-2 border-olive-drab">
              <problem.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
              <h3 className="subheading-tactical text-white text-2xl mb-4 h-16 flex items-center justify-center">
                {problem.title}
              </h3>
              <p className="body-tactical text-white text-lg font-extralight">
                {problem.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};