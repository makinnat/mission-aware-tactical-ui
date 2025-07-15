import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LazyImage } from "@/components/ui/lazy-image";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useMemo } from "react";

const ProductShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      name: "Aviation CEP",
      src: "/lovable-uploads/3a90284f-b504-4a79-aec4-72a9b5469446.png",
      alt: "Professional aviation ear protection with components"
    },
    {
      name: "MusicPlugs",
      src: "/lovable-uploads/71a992fd-155b-4df3-a294-21f188459041.png",
      alt: "Music ear protection with blue accents"
    },
    {
      name: "EarShield",
      src: "/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png",
      alt: "Yellow ear protection with cables"
    }
  ];

  // Optimize product data and preload images
  const productImages = useMemo(() => products.map(p => p.src), []);
  useImagePreloader(productImages);

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-background to-muted/30 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.7)), url('/lovable-uploads/bd0af64d-0751-45c4-89d9-0acef8a44443.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-signal-white text-4xl md:text-5xl mb-6">
            GEAR THAT GETS WORN
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={`${product.name}-${index}`} 
                className="group p-4"
              >
                <div className="w-full h-64 bg-black rounded-2xl p-8 flex items-center justify-center shadow-2xl border-2 border-[#6C6846] transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                  <LazyImage
                    src={product.src}
                    alt={product.alt}
                    className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                    priority={index < 3}
                  />
                </div>
                <h3 className="text-center mt-4 text-lg font-semibold text-signal-white">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;