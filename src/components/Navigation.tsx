import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-combat-black py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/5c607f12-b54d-4365-a386-81fe63ac9dda.png" 
                alt="Aware Defense Logo" 
                className="h-8 w-auto"
              />
            </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <a 
              href="/" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200">
                Products
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-combat-black border border-desert-tan/20 rounded-sm shadow-lg">
                  <div className="py-2">
                    {/* Custom Hearing Protection */}
                    <div className="group">
                      <div className="px-4 py-2 text-desert-tan font-semibold text-xs uppercase tracking-wide border-b border-desert-tan/10">
                        Custom Hearing Protection
                      </div>
                      <div className="pl-6">
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          EarShield
                        </a>
                        <div className="group">
                          <div className="px-4 py-1 text-desert-tan/70 text-xs uppercase tracking-wide">
                            Vented Protection
                          </div>
                          <div className="pl-4">
                            <a href="#" className="block px-4 py-1 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                              EarDefender Vented A
                            </a>
                            <a href="#" className="block px-4 py-1 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                              EarDefender Vented B
                            </a>
                          </div>
                        </div>
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          SwimPlug
                        </a>
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          SleepPlug
                        </a>
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          EarBud
                        </a>
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          MusicPlug
                        </a>
                      </div>
                    </div>
                    
                    {/* CEP */}
                    <div className="group border-t border-desert-tan/10 mt-2">
                      <div className="px-4 py-2 text-desert-tan font-semibold text-xs uppercase tracking-wide">
                        CEP
                      </div>
                      <div className="pl-6">
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          EarDefender
                        </a>
                        <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          RadioCOMM
                        </a>
                      </div>
                    </div>

                    {/* Other Items */}
                    <div className="border-t border-desert-tan/10 mt-2 pt-2">
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Get Scanned
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        How to Buy
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Instructions & Care
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('technology')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200">
                Technology
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {activeDropdown === 'technology' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-combat-black border border-desert-tan/20 rounded-sm shadow-lg">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                      eFit 3D Scanner
                    </a>
                    <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                      Biometric Wearables
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases */}
            <a 
              href="#" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Use Cases
            </a>

            {/* About Us */}
            <a 
              href="#" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              About Us
            </a>

            {/* Contact */}
            <a 
              href="#" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-desert-tan hover:text-scarlet-red">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
