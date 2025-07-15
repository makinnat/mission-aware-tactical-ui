import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png",
      alt: "Yellow ear protection with cables"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/1106a9b7-e1eb-4c18-b7c0-653862ff02dd.png",
      alt: "Black and white ear protection devices"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/1a80bd1a-8c26-4b80-bbf9-6853495696a0.png",
      alt: "Clear transparent ear protection"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/83c663c5-dbf3-4729-8781-02d66756deb6.png",
      alt: "Clear ear protection with colored accents"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/308e9b99-dd7d-474b-a8e9-a5e86d7c6fef.png",
      alt: "Blue ear protection with cables"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/71a992fd-155b-4df3-a294-21f188459041.png",
      alt: "Black ear protection with blue accents"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/3a90284f-b504-4a79-aec4-72a9b5469446.png",
      alt: "Professional black ear protection with components"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/e5876c7e-ae5c-4b85-a7e1-f76ac3c673de.png",
      alt: "Clear ear protection with coiled cable"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/064fecdc-cff5-4391-ac37-ff2652b59d58.png",
      alt: "Black ear protection pair"
    },
    {
      name: "SwimPlugs",
      src: "/lovable-uploads/24c9958e-52a3-4409-833c-30ecae02d79d.png",
      alt: "Blue gradient ear protection"
    }
  ];

  // Duplicate products for seamless scrolling
  const duplicatedProducts = [...products, ...products];

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
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedProducts.map((product, index) => (
                <div 
                  key={`${product.name}-${index}`} 
                  className="flex-shrink-0 mx-8 group p-2"
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