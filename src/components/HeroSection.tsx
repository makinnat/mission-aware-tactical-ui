import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tactical-operator-plain.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="heading-tactical md:text-7xl lg:text-8xl mb-6 max-w-5xl mx-auto leading-tight text-stone-50 text-5xl">CUSTOM-FIT HEARING PROTECTION MISSION-READY PERFORMANCE</h1>
        
        <p className="subheading-tactical text-secondary md:text-2xl mb-8 max-w-3xl mx-auto font-semibold text-base">
          If it's not worn, it doesn't work. Discover gear that actually gets worn and performs flawlessly.
        </p>
        
        <p className="body-tactical text-signal-white text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90">The world's only FDA-cleared, non-contact 3D ear scanner. Trusted by Special Operations, DoD Aviators, Law Enforcement, and Industrial Teams.</p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-scarlet cta-tactical px-8 py-4 text-base rounded-sm">
            Schedule A Meeting
          </Button>
          <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm">
            Learn How Our Tech Works
          </Button>
        </div>
      </div>
    </section>;
};