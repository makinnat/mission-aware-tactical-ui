import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PartnerSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const partners = [
    "Invisio",
    "Gentex", 
    "Ops-Core",
    "Axil",
    "Otto",
    "Staccato"
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 relative scroll-slide-left ${isVisible ? 'visible' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="heading-tactical text-primary text-4xl md:text-5xl mb-12">
          We Don't Replace Your Gear — We Make It Better
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="text-signal-white text-xl font-montserrat font-bold tracking-wide hover:text-secondary transition-colors duration-300"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};