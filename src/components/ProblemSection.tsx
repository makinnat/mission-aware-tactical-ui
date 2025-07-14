import { AlertTriangle, Volume, RadioIcon } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Comfort Failure",
      description: "Constant readjustment and fatigue"
    },
    {
      icon: Volume,
      title: "Communication Breakdown", 
      description: "Muffled comms = compromised awareness"
    },
    {
      icon: RadioIcon,
      title: "Mission Compromise",
      description: "Operators remove protection to function"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-primary text-4xl md:text-5xl mb-6">
            Outdated Ear Protection Fails When It Matters Most
          </h2>
          <p className="subheading-tactical text-secondary text-xl md:text-2xl max-w-4xl mx-auto">
            Over 50% of combat soldiers suffer hearing loss because their protection doesn't fit or interferes with comms.
          </p>
        </div>

        <div className="grid-tactical max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="card-tactical p-8 rounded-lg text-center">
              <problem.icon className="w-16 h-16 text-scarlet-red mx-auto mb-6" strokeWidth={2} />
              <h3 className="subheading-tactical text-card-foreground text-2xl mb-4">
                {problem.title}
              </h3>
              <p className="body-tactical text-card-foreground text-lg opacity-80">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};