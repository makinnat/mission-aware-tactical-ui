import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      name: "Tactical Binoculars",
      src: "/lovable-uploads/cbf5a753-bdd5-4a75-98c6-20e80a09c659.png",
      alt: "Professional tactical binoculars"
    },
    {
      name: "Tactical Earpiece",
      src: "/lovable-uploads/c48a31ba-1d62-4a5a-8fca-2c5c81f83dab.png", 
      alt: "Tactical communication earpiece"
    },
    {
      name: "Custom Ear Protection",
      src: "/lovable-uploads/bbf508c0-4d98-4982-88c4-ad74ccd85f5c.png",
      alt: "Custom molded ear protection"
    },
    {
      name: "Tactical Ear Plugs", 
      src: "/lovable-uploads/4b95c70a-27c5-400a-a838-b2203455961f.png",
      alt: "Camouflage tactical ear plugs"
    },
    {
      name: "Professional Ear Protection",
      src: "/lovable-uploads/ec701c38-6c5a-47c5-bc64-b10d92b4e618.png",
      alt: "Professional grade ear protection"
    },
    {
      name: "Stealth Ear Protection",
      src: "/lovable-uploads/3c7d92f9-17ed-4b9b-914f-66d3854d0bc8.png", 
      alt: "Stealth black ear protection"
    },
    {
      name: "Tactical Communication Set",
      src: "/lovable-uploads/aee8315a-660f-48fa-9925-2d6dcee4b268.png",
      alt: "Tactical communication ear set"
    },
    {
      name: "Advanced Ear Protection",
      src: "/lovable-uploads/46f89658-3f71-426b-922d-d3d4d545d211.png",
      alt: "Advanced tactical ear protection"
    },
    {
      name: "Premium Ear Guard",
      src: "/lovable-uploads/244828ef-a80b-4a51-8921-7977b82689a4.png",
      alt: "Premium tactical ear guard"
    }
  ];

  // Duplicate products for seamless scrolling
  const duplicatedProducts = [...products, ...products];

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Professional Gear
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of tactical communication and hearing protection equipment, 
            trusted by professionals worldwide.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedProducts.map((product, index) => (
                <div 
                  key={`${product.name}-${index}`} 
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 flex items-center justify-center shadow-2xl border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                    />
                  </div>
                  <p className="text-center mt-4 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;