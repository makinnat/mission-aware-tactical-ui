import { AlertTriangle, HeadphoneOff, ShieldBan } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
export const ProblemSection = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const problems = [{
    icon: AlertTriangle,
    title: "Comfort Failure",
    description: "Constant readjustment and fatique during extended operations."
  }, {
    icon: HeadphoneOff,
    title: "Communication Breakdown",
    description: "Muffled radio communications compromise situational awareness."
  }, {
    icon: ShieldBan,
    title: "Mission Compromise",
    description: "Operators remove protection to perform critical tasks."
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
            <h3 className="subheading-tactical text-2xl md:text-3xl" style={{
            color: '#6C6846'
          }}>
              Fails when it matters most
            </h3>
          </div>
          <p className="body-tactical text-secondary text-lg max-w-4xl mx-auto">Over 50% of combat soldiers suffer hearing loss because their protection doesn't fit or interferes with communication. You shouldn't have to choose between comfort, protection, and performance.</p>
        </div>

        <div className="grid-tactical max-w-5xl mx-auto">
          {problems.map((problem, index) => <div key={index} className="bg-black/55 p-8 rounded-lg text-center border-2" style={{
          borderColor: '#6C6846'
        }}>
              <problem.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
              <h3 className="subheading-tactical text-white text-xl mb-4 h-16 flex items-center justify-center">
                {problem.title}
              </h3>
              <p className="body-tactical text-white font-thin text-sm">
                {problem.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};