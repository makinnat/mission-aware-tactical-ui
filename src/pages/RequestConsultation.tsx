import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const heroImage = "/lovable-uploads/2bf4d720-4753-487d-ba23-f8007156d857.png";

const RequestConsultation = () => {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/47124486.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="heading-tactical text-5xl mb-6 max-w-5xl mx-auto leading-tight text-stone-50">
              YOUR MISSION DEMANDS
              <br />
              <span 
                style={{
                  color: 'hsl(var(--scarlet-red))'
                }} 
                className="text-4xl text-[#95182b] font-semibold"
              >
                PROTECTION
              </span>
            </h1>
            
            <p className="body-tactical text-signal-white text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-90">
              Tell us about your mission needs, and we'll build a protection and performance plan tailored to your unit, environment, and equipment.
            </p>
          </div>

          {/* HubSpot Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div 
                className="hs-form-frame" 
                data-region="na1" 
                data-form-id="fc71169f-c440-4a2b-8bcb-b5ca76737fe6" 
                data-portal-id="47124486"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestConsultation;