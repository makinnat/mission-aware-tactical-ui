import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
    "US Navy",
    "US Army", 
    "ONR",
    "Emory Healthcare",
    "Takeda",
    "Logitech"
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
      className={`py-20 px-6 bg-background scroll-scale-in ${isVisible ? 'visible' : ''}`}
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
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-signal-white text-lg font-montserrat font-bold tracking-wide">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};