import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Our aircrew actually want to wear them. The fit and comfort are unmatched.",
      role: "Aviation Safety Officer"
    },
    {
      quote: "They scanned a task force in 48 hours. Outstanding execution.",
      role: "Special Tactics Liaison"
    },
    {
      quote: "Perfect fit, every time. Compliance is up, downtime is down.",
      role: "Audiologist"
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