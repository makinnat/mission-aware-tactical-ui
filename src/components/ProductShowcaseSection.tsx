import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/339d683d-40d1-4155-9f3c-a63dba391db3.png",
      alt: "Tactical ear protection product"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/8063ae90-fd92-4865-92cf-ac39a7b2387e.png",
      alt: "Clear ear protection product"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/ca7c87a3-324f-4afa-8803-8c4cfd57734b.png",
      alt: "Professional ear monitoring system"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/5f950b83-9026-404a-a91c-d868fce64ded.png",
      alt: "Blue tactical ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/b1f7cecb-047e-4c2a-9b86-54ff52078aa5.png",
      alt: "Professional in-ear monitors"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/45b01d5a-70fa-4a10-8fb4-397924cbf291.png",
      alt: "Custom ear protection with components"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/3bea60ae-ef54-424c-87a6-90816b05ca1d.png",
      alt: "Clear acoustic tube system"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/3cb1df53-745e-44e5-95b9-ebb3c3921521.png",
      alt: "Black tactical ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/f08cb946-2b01-4ed0-b9a2-26f1e82cd776.png",
      alt: "Blue gradient ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/4b4e91cd-a209-4478-a2de-7b81a45ef759.png",
      alt: "Blue gradient swim ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/ade983a7-462e-4306-9b64-0a826ded8df8.png",
      alt: "Black tactical earpiece covers"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/9b270845-4af3-4a48-aaa0-69ead472d728.png",
      alt: "Black tactical ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/13f84161-99ce-4565-8109-86a7671c9e94.png",
      alt: "Yellow tactical earpiece with wires"
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
                  <div className="w-48 h-48 bg-black rounded-2xl p-8 flex items-center justify-center shadow-2xl border-2 border-[#6C6846] transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
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

export default ProductShowcaseSection;