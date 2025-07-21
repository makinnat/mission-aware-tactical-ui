import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLogoStart, setCurrentLogoStart] = useState(0);
  const testimonials = [
    {
      quote: "We operate in some of the harshest conditions in the world. Aware's EarDefenders held up to salt, sand, and sustained flight hours. The passive protection is solid, and our aircrew say they actually want to wear them. These aren't just another issued item—they're mission-critical.",
      role: "Osprey Pilot and Safety Officer"
    },
    {
      quote: "The Aware team showed up on time, set up quickly, and scanned our entire aircrew within a day. Their custom hearing protection fits flawlessly under our helmets and provides the best seal we've ever had with CEP over-molds. Professional, efficient, and 100% tailored for naval aviation.",
      role: "Aviation Safety Officer"
    },
    {
      quote: "Aware Defense impressed me not only with their product quality but with their deep respect for the law enforcement community. Their support helps us continue our mission: ensuring that officers leave the job with the same level of protection and care they had while wearing the badge.",
      role: "Retired Law Enforcement Professional"
    },
    {
      quote: "This experience has been extremely positive and I'm looking forward to helping your company provide invaluable hearing protection to our Sailors…and for years to come. It was like I felt a shift in morale when folks walked in and walked out (after scanning) and I'll be the first to admit that we needed this.",
      role: "Combat Aviation Brigade"
    },
    {
      quote: "We've tried other 'custom' hearing protection solutions before, but nothing came close to the precision and comfort of what Aware Defense delivered. The 3D scans were fast and accurate, and our team had custom plugs in hand before the next rotation. This is what right looks like.",
      role: "SERE Specialist"
    }
  ];

  const logos = [
    {
      name: "US Navy",
      src: "/lovable-uploads/d59ab18c-d11d-4598-8ecf-85b9b65b9f8d.png",
      alt: "US Navy Logo"
    },
    {
      name: "US Army", 
      src: "/lovable-uploads/889ccf25-6998-4119-8a67-f431b97da35a.png",
      alt: "US Army Logo"
    },
    {
      name: "US Air Force",
      src: "/lovable-uploads/0c24dfc3-6782-4c71-a3db-e2f04154ac88.png",
      alt: "US Air Force Logo"
    },
    {
      name: "ONR",
      src: "/lovable-uploads/a8e2387b-c26e-4705-9bf5-6050903737c5.png",
      alt: "Office of Naval Research Logo"
    },
    {
      name: "Emory Healthcare",
      src: "/lovable-uploads/2e7ebe91-8198-46cc-8c0f-a99ad3760169.png",
      alt: "Emory Healthcare Logo"
    },
    {
      name: "Takeda",
      src: "/lovable-uploads/9ab5019f-203f-404b-89b1-a6411e681421.png",
      alt: "Takeda Logo"
    },
    {
      name: "Logitech",
      src: "/lovable-uploads/801cc443-a322-4d8a-80c8-57f9cc359f15.png",
      alt: "Logitech Logo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 relative scroll-scale-in ${isVisible ? 'visible' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-signal-white text-4xl md:text-5xl mb-6">
            Trusted by Elite Units
          </h2>
        </div>

        {/* Testimonials */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="text-center transition-all duration-500 ease-in-out">
            <Quote className="w-12 h-12 text-scarlet-red mx-auto mb-6" />
            <blockquote className="body-tactical text-signal-white text-xl md:text-2xl mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <cite className="subheading-tactical text-secondary text-lg">
              – {testimonials[currentTestimonial].role}
            </cite>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-scarlet-red' 
                    : 'bg-border hover:bg-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logo Scroll */}
        <div className="border-t border-border pt-12">
          <div className="overflow-hidden">
            <div className="flex items-center gap-6 md:gap-8 animate-scroll">
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 bg-signal-white rounded-lg p-4 shadow-sm border-2 border-olive-drab"
                >
                  <div className="h-12 md:h-16 w-24 md:w-32 flex items-center justify-center">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};