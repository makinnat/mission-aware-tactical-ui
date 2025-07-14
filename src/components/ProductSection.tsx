import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProductSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const products = [
    {
      name: "AWARE 3D Scanner",
      description: "FDA-cleared 3D ear scanning technology",
      image: "/lovable-uploads/a503e3ff-b8f6-41a5-b56c-6b1370166621.png",
      category: "scanner"
    },
    {
      name: "Tactical Black Earpieces",
      description: "Stealth operations standard",
      image: "/lovable-uploads/fe7f724c-d0a4-453b-8ed8-3f808460d769.png",
      category: "earpiece"
    },
    {
      name: "Professional Blue Series",
      description: "High-visibility training configuration",
      image: "/lovable-uploads/31d211e5-93c8-41b7-be48-9b0b891a5172.png",
      category: "earpiece"
    },
    {
      name: "Woodland Camouflage",
      description: "Field operations blend",
      image: "/lovable-uploads/ed117d84-02ad-4122-86b8-1288b2ae0428.png",
      category: "earpiece"
    },
    {
      name: "High-Vis Safety Yellow",
      description: "Industrial and emergency response",
      image: "/lovable-uploads/dbfd4bc2-d75a-49c9-9b1e-40965893b463.png",
      category: "earpiece"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 px-6 bg-combat-black scroll-fade-in ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-tactical text-signal-white text-4xl md:text-5xl mb-6">
            Precision-Engineered Solutions
          </h2>
          <p className="body-tactical text-signal-white text-lg max-w-3xl mx-auto">
            From 3D scanning technology to custom-fitted earpieces, our complete product line 
            delivers uncompromising performance for mission-critical communications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Scanner - Takes 2 columns on larger screens */}
          <div className="lg:col-span-2 bg-muted rounded-lg border border-olive-drab overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={products[0].image} 
                    alt={products[0].name}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="heading-tactical text-scarlet-red text-2xl mb-4">
                    {products[0].name}
                  </h3>
                  <p className="body-tactical text-signal-white text-base mb-6">
                    {products[0].description}
                  </p>
                  <div className="space-y-2 text-sm text-signal-white">
                    <div>• Non-contact 3D scanning</div>
                    <div>• Captures second bend precision</div>
                    <div>• FDA-cleared technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earpiece Showcase */}
          <div className="space-y-6">
            {products.slice(1).map((product, index) => (
              <div key={index} className="bg-muted rounded-lg border border-olive-drab p-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="subheading-tactical text-signal-white text-sm font-bold mb-1">
                      {product.name}
                    </h4>
                    <p className="body-tactical text-signal-white text-xs">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="body-tactical text-signal-white text-sm">
            All earpieces feature identical acoustic performance with custom coloring options
          </p>
        </div>
      </div>
    </section>
  );
};