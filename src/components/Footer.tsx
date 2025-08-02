import { Twitter, Instagram, Linkedin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo, Made in USA, eFit, and Social */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-16">
              <img 
                src="/lovable-uploads/7ea90a58-8b4d-45d2-a9a6-c8f05c5e3f83.png" 
                alt="Aware Defense" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-32 h-24">
                <img 
                  src="/lovable-uploads/f769839c-af38-4801-aab1-98f74e7c07c9.png" 
                  alt="Made in USA" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <Link to="/technology/efit-3d-scanner" className="block">
                <img 
                  src="/lovable-uploads/e319426e-8e90-469b-bc84-bde45b072745.png" 
                  alt="eFit 3D Scanner" 
                  className="w-16 h-auto object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="heading-tactical text-primary text-lg mb-4 uppercase">
              NAVIGATION
            </h3>
            <div className="space-y-2 text-secondary text-sm">
              <Link 
                to="/products" 
                className="block hover:text-scarlet-red transition-colors"
              >
                Products
              </Link>
              <Link 
                to="/technology" 
                className="block hover:text-scarlet-red transition-colors"
              >
                Technology
              </Link>
              <Link 
                to="/use-cases" 
                className="block hover:text-scarlet-red transition-colors"
              >
                Use Cases
              </Link>
              <Link 
                to="/about" 
                className="block hover:text-scarlet-red transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Offices */}
          <div className="text-center">
            <h3 className="heading-tactical text-primary text-lg mb-4 uppercase">
              OFFICES
            </h3>
            <div className="space-y-2 text-secondary text-sm">
              <p>ATLANTA</p>
              <p>SAN DIEGO</p>
              <p>DALLAS</p>
              <h4 className="heading-tactical text-primary text-sm mt-4 mb-2 uppercase">
                CONTACT US
              </h4>
              <div className="flex items-center justify-center">
                <span>(855)EAR-SCAN</span>
              </div>
              <a 
                href="mailto:info@awaredefense.us" 
                className="text-scarlet-red hover:text-scarlet-red/80 transition-colors"
              >
                info@awaredefense.us
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <h3 className="heading-tactical text-primary text-lg mb-4 uppercase">
              STAY UPDATED
            </h3>
            <p className="text-secondary text-sm mb-4">
              Find out more about our Ear-Powered Innovations!
            </p>
            <div className="flex gap-2">
              <Input 
                type="email"
                placeholder="your-email@example.com"
                className="bg-background border-secondary/40 text-primary placeholder:text-secondary/60"
              />
              <Button className="btn-scarlet px-3">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              © AWARE DEFENSE 2025
            </p>
            <p className="text-secondary text-xs text-right">
              This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};