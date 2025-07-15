import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Building2, User, ArrowRight, FileText, Download, CheckCircle, Clock, CreditCard, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
const HowToBuy = () => {
  const navigate = useNavigate();
  
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  const {
    ref: pathsRef,
    isVisible: pathsVisible
  } = useScrollAnimation();
  const {
    ref: deliveryRef,
    isVisible: deliveryVisible
  } = useScrollAnimation();
  const {
    ref: resourcesRef,
    isVisible: resourcesVisible
  } = useScrollAnimation();
  const {
    ref: finalCtaRef,
    isVisible: finalCtaVisible
  } = useScrollAnimation();
  return <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-24 pb-16 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-olive-drab mb-8 leading-tight md:text-5xl">
              READY TO OUTFIT YOUR TEAM?
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you're buying for a unit, department, or yourself, Aware Defense makes it easy to deploy custom-fit gear at scale.
            </p>
            <Button className="btn-scarlet text-lg px-8 py-3 font-semibold uppercase tracking-wide">
              REQUEST A CONSULTATION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Buying Paths Section */}
      <section ref={pathsRef} className={`py-20 transition-all duration-1000 delay-200 ${pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              CHOOSE YOUR PATH TO MISSION-READY PROTECTION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Government & Federal Buyers */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Government & Federal Buyers
                  </h3>
                  <div className="space-y-3 text-signal-white">
                    <p>Buy through Sole Source Justification or through an 8a Parnter</p>
                    
                  </div>
                  <Button className="btn-outline-olive w-full font-semibold uppercase tracking-wide">
                    Contact our Procurement team
                  </Button>
                </CardContent>
              </Card>

              {/* Teams & Organizations */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Teams & Organizations
                  </h3>
                  <div className="space-y-3 text-signal-white">
                    <p>Request a scanning event, or leverage a scanner lease for larger implementations</p>
                    
                  </div>
                  <Button className="btn-outline-olive w-full font-semibold uppercase tracking-wide">
                    request consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Individual Users */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <User className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Individual Users
                  </h3>
                  <div className="space-y-3 text-signal-white">
                    <p>Book a scan at an event near you</p>
                    <p>Gear delivered after fitting</p>
                  </div>
                  <Button 
                    className="btn-outline-olive w-full font-semibold uppercase tracking-wide"
                    onClick={() => navigate('/get-scanned')}
                  >
                    Get Scanned
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Delivery Info Section */}
      <section ref={deliveryRef} className={`py-20 transition-all duration-1000 delay-400 ${deliveryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              BILLING, SHIPPING, & LEAD TIME
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-muted/20 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <CreditCard className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Payment: PO, credit card, and federal EFT accepted
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Truck className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Delivery: 2–3 weeks from scan date
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/20 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Bulk orders: Priority timelines available
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FileText className="h-6 w-6 text-scarlet mt-1 flex-shrink-0" />
                    <p className="text-lg text-signal-white">
                      Digital scan files stored for remakes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Resources Section */}
      <section ref={resourcesRef} className={`py-20 transition-all duration-1000 delay-600 ${resourcesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-olive-drab text-center mb-16">
              PROCUREMENT RESOURCES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl hover:bg-desert-tan/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <CheckCircle className="h-8 w-8 text-scarlet mx-auto" />
                  <h3 className="text-lg font-semibold text-olive-drab">
                    Procurement One-Sheet
                  </h3>
                  <Download className="h-5 w-5 text-desert-tan mx-auto" />
                </CardContent>
              </Card>

              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl hover:bg-desert-tan/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <CheckCircle className="h-8 w-8 text-scarlet mx-auto" />
                  <h3 className="text-lg font-semibold text-olive-drab">
                    NSN Numbers / GSA Schedule
                  </h3>
                  <Download className="h-5 w-5 text-desert-tan mx-auto" />
                </CardContent>
              </Card>

              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl hover:bg-desert-tan/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <CheckCircle className="h-8 w-8 text-scarlet mx-auto" />
                  <h3 className="text-lg font-semibold text-olive-drab">
                    Vendor Certifications
                  </h3>
                  <Download className="h-5 w-5 text-desert-tan mx-auto" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={finalCtaRef} className={`py-20 transition-all duration-1000 delay-800 ${finalCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-olive-drab mb-8">
              HAVE QUESTIONS BEFORE YOU BUY?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We'll walk you through what to order, how to scan, and how to deploy Aware products fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-scarlet text-lg px-8 py-3 font-semibold uppercase tracking-wide">
                TALK TO OUR TEAM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-outline-olive text-lg px-8 py-3 font-semibold uppercase tracking-wide">
                REQUEST A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default HowToBuy;