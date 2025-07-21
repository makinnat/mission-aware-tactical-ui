import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/lazy-image";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const heroImage = "/lovable-uploads/2bf4d720-4753-487d-ba23-f8007156d857.png";
export const HeroSection = () => {
  // Preload critical hero image
  useImagePreloader([heroImage], { priority: true });

  return <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Optimized Background Image */}
      <LazyImage
        src={heroImage}
        alt="Tactical operator background"
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="heading-tactical text-5xl mb-6 max-w-5xl mx-auto leading-tight text-stone-50">
          CUSTOM-FIT HEARING PROTECTION<br />
          <span style={{
          color: 'hsl(var(--scarlet-red))'
        }} className="text-4xl text-[#95182b] font-semibold">MISSION-READY PERFORMANCE</span>
        </h1>
        
        <p className="text-secondary mb-8 max-w-3xl mx-auto font-semibold text-base normal-case md:text-lg">
          If it's not worn, it doesn't work. Discover gear that actually gets worn and performs flawlessly.
        </p>
        
        <p className="body-tactical text-signal-white text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90">The world's only FDA-cleared, non-contact 3D ear scanner. Trusted by Special Operations, DoD Aviators, Law Enforcement, and Industrial Teams.</p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero-cta text-white bg-black hover:bg-scarlet-red text-base transition-all duration-300">
            Schedule A Meeting
          </Button>
          <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm text-white bg-black">
            Learn How Our Tech Works
          </Button>
        </div>
      </div>
    </section>;
};