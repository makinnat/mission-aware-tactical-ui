import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <Quote className="w-12 h-12 text-scarlet-red mx-auto mb-6" />
              <blockquote className="body-tactical text-signal-white text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="subheading-tactical text-secondary text-base">
                – {testimonial.role}
              </cite>
            </div>
          ))}
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