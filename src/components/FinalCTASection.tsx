import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="heading-tactical text-primary text-4xl md:text-6xl mb-8">
          Ready to Protect Your Team and Future-Proof Your Mission?
        </h2>
        
        <p className="subheading-tactical text-secondary text-xl md:text-2xl mb-12">
          Scanner Leasing • Field-Tested • Lower Cost Than Foam in 12 Months
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-scarlet cta-tactical px-8 py-4 text-base rounded-sm">
            Schedule A Meeting
          </Button>
          <Button className="btn-olive-outline cta-tactical px-8 py-4 text-base rounded-sm">
            Learn More About Our Technology
          </Button>
        </div>
      </div>
    </section>
  );
};