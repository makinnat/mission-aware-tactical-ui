import { Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social */}
          <div className="space-y-6">
            <div className="w-32 h-24">
              <img 
                src="/lovable-uploads/f769839c-af38-4801-aab1-98f74e7c07c9.png" 
                alt="Made in USA" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Atlanta Office */}
          <div>
            <h3 className="heading-tactical text-primary text-lg mb-4 uppercase">
              ATLANTA OFFICE
            </h3>
            <div className="space-y-2 text-secondary text-sm">
              <p>2277 Peachtree Road</p>
              <p>Suite D</p>
              <p>Atlanta, GA 30309</p>
              <p>Office 404.480.9949</p>
              <a 
                href="mailto:info@awaredefense.us" 
                className="text-scarlet-red hover:text-scarlet-red/80 transition-colors"
              >
                info@awaredefense.us
              </a>
            </div>
          </div>

          {/* San Diego Office */}
          <div>
            <h3 className="heading-tactical text-primary text-lg mb-4 uppercase">
              SAN DIEGO OFFICE
            </h3>
            <div className="space-y-2 text-secondary text-sm">
              <p>11545 West Bernardo Court</p>
              <p>Suite 211</p>
              <p>San Diego, CA 92127</p>
              <p>Office 404.779.7821</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
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