import { useState } from "react";
import { ChevronDown, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { CartSidebar } from "@/components/cart/CartSidebar";

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
            <Link to="/">
              <img 
                src="/lovable-uploads/5c607f12-b54d-4365-a386-81fe63ac9dda.png" 
                alt="Aware Defense Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Centered Navigation Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/products" className="flex items-center text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200">
                Products
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 pt-1 w-56 z-50">
                  <div className="bg-combat-black border border-desert-tan/20 rounded-sm shadow-lg">
                    <div className="py-2">
                      {/* Products List */}
                      <Link to="/products/earshield" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        EarShield
                      </Link>
                      <Link to="/products/aviation-cep" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Aviation CEP
                      </Link>
                      <Link to="/products/custom-overmold" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Custom Overmold
                      </Link>
                      <Link to="/products/sleepplug" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        SleepPlug
                      </Link>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        SwimPlug
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        EarBud
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        MusicPlug
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        EarDefender
                      </a>
                      <a href="#" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        RadioCOMM
                      </a>

                      {/* Other Items */}
                      <div className="border-t border-desert-tan/10 mt-2 pt-2">
                      <Link to="/get-scanned" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Get Scanned
                      </Link>
                        <Link to="/how-to-buy" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          How to Buy
                        </Link>
                        <Link to="/instructions-and-care" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                          Instructions & Care
                        </Link>
                      </div>
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
              <Link to="/technology" className="flex items-center text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200">
                Technology
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              
              {activeDropdown === 'technology' && (
                <div 
                  className="absolute top-full left-0 pt-1 w-48 z-50"
                  onMouseEnter={() => handleMouseEnter('technology')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-combat-black border border-desert-tan/20 rounded-sm shadow-lg">
                    <div className="py-2">
                      <Link to="/technology/efit-3d-scanner" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        eFit 3D Scanner
                      </Link>
                      <Link to="/technology/biometric-wearables" className="block px-4 py-2 text-desert-tan/80 hover:text-scarlet-red text-sm transition-colors">
                        Biometric Wearables
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases */}
            <Link 
              to="/use-cases" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Use Cases
            </Link>

            {/* About Us */}
            <Link 
              to="/about" 
              className="text-desert-tan hover:text-scarlet-red font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
            >
              About Us
            </Link>
            </div>
          </div>

          {/* Right Side - Icons and CTA */}
          <div className="flex items-center space-x-6">
            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-desert-tan hover:text-scarlet-red transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-desert-tan hover:text-scarlet-red transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>
              <CartSidebar />
            </div>

            {/* Contact Us CTA */}
            <Link 
              to="/request-consultation" 
              className="btn-scarlet px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200"
            >
              Contact Us
            </Link>

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
      </div>
    </nav>
  );
};

export default Navigation;
