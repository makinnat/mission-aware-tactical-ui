import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref}
      className={`py-20 px-6 bg-background scroll-scale-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="heading-tactical text-white text-4xl md:text-6xl mb-8">
          Ready to Protect Your Team and Future-Proof Your Mission?
        </h2>
        
        <p className="text-secondary mb-8 max-w-3xl mx-auto font-semibold text-base normal-case md:text-lg">
          Schedule a meeting to review your requirements with an Aware Defense expert.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300">
            SCHEDULE A MEETING
          </Button>
          <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm text-white bg-black">
            LEARN MORE ABOUT OUR TECHNOLOGY
          </Button>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-left border-l-2 border-scarlet-red pl-4">
            <h3 className="heading-tactical text-primary text-lg mb-2 uppercase">
              SCANNER LEASING
            </h3>
            <p className="text-secondary text-sm">
              Train-your-own-unit programs available
            </p>
          </div>
          
          <div className="text-left border-l-2 border-scarlet-red pl-4">
            <h3 className="heading-tactical text-primary text-lg mb-2 uppercase">
              PROVEN RESULTS
            </h3>
            <p className="text-secondary text-sm">
              Field-tested at numerous DoD installations
            </p>
          </div>
          
          <div className="text-left border-l-2 border-scarlet-red pl-4">
            <h3 className="heading-tactical text-primary text-lg mb-2 uppercase">
              BEST VALUE
            </h3>
            <p className="text-secondary text-sm">
              Lower cost than foam after 12 months
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="border-t border-secondary/20 pt-8">
          <h2 className="heading-tactical text-scarlet-red text-xl md:text-2xl tracking-wider">
            FIT TO FIGHT, BUILT TO ENDURE
          </h2>
        </div>
      </div>
    </section>
  );
};