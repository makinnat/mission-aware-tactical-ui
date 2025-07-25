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
  const {
    ref: procurementRef,
    isVisible: procurementVisible
  } = useScrollAnimation();
  return <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className={`pt-24 pb-16 relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/dd736d2d-d5fc-4b51-bcd0-b2daf6e6d864.png')`
    }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-combat-black/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-olive-drab mb-8 leading-tight md:text-5xl text-white">
              READY TO OUTFIT YOUR TEAM?
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you're buying for a unit, department, or yourself, Aware Defense makes it easy to deploy custom-fit gear at scale.
            </p>
            <Button variant="scarlet" className="text-lg px-8 py-3 font-semibold uppercase tracking-wide">
              REQUEST A CONSULTATION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Buying Paths Section */}
      <section ref={pathsRef} className={`py-20 transition-all duration-1000 delay-200 ${pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-16">
              CHOOSE YOUR PATH TO MISSION-READY PROTECTION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Government & Federal Buyers */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl h-full">
                <CardContent className="p-8 text-center space-y-6 flex flex-col h-full">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">Federal Buyers</h3>
                  <div className="space-y-3 text-signal-white flex-grow">
                    <p>Buy through Sole Source Justification or through an 8a Parnter</p>
                    
                  </div>
                  <Button className="btn-outline-olive w-full font-semibold uppercase tracking-wide">
                    Contact our Procurement team
                  </Button>
                </CardContent>
              </Card>

              {/* Teams & Organizations */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl h-full">
                <CardContent className="p-8 text-center space-y-6 flex flex-col h-full">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Teams & Organizations
                  </h3>
                  <div className="space-y-3 text-signal-white flex-grow">
                    <p>Request a scanning event, or leverage a scanner lease for larger implementations</p>
                    
                  </div>
                  <Button className="btn-outline-olive w-full font-semibold uppercase tracking-wide">
                    request consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Individual Users */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl h-full">
                <CardContent className="p-8 text-center space-y-6 flex flex-col h-full">
                  <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                    <User className="h-8 w-8 text-signal-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-olive-drab">
                    Individual Users
                  </h3>
                  <div className="space-y-3 text-signal-white flex-grow">
                    <p>Book a scan at an event near you</p>
                    <p>Gear delivered after fitting</p>
                  </div>
                  <Button className="btn-outline-olive w-full font-semibold uppercase tracking-wide" onClick={() => navigate('/get-scanned')}>
                    Get Scanned
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Federal Procurement Justification Section */}
      <section ref={procurementRef} className={`py-20 relative transition-all duration-1000 delay-300 ${procurementVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-16">
              FEDERAL PROCUREMENT JUSTIFICATION
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Proprietary Technology */}
              <Card className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-500 ${procurementVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-signal-white mb-6">
                    PROPRIETARY TECHNOLOGY
                  </h3>
                  <div className="space-y-4 text-signal-white">
                    <p className="font-semibold text-desert-tan">
                      Aware Defense's eFit 3D scanner represents the world's only FDA-cleared, non-contact ear scanning technology.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                        <p>90-second scanning vs. hours for traditional silicone methods to generate a mold</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                        <p>Medical-grade precision to two-micron accuracy</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                        <p>Zero-contact scanning eliminates safety concerns</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                        <p>Permanent digital profiles for lifetime support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Critical Differentiation */}
              <Card className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-700 delay-700 ${procurementVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-signal-white mb-6">
                    MISSION-CRITICAL DIFFERENTIATION
                  </h3>
                  <div className="space-y-4 text-signal-white">
                    <p className="font-semibold text-desert-tan">
                      Traditional foam hearing protection fails <span className="text-scarlet">92%</span> of the time due to improper fit.
                    </p>
                    <p>
                      Only Aware Defense's proprietary eFit scanner captures the critical second bend geometry that ensures perfect seal integrity.
                    </p>
                    <div className="bg-combat-black/30 p-4 rounded-lg mt-4">
                      <p className="text-signal-white">
                        Hearing loss affects over 50% of combat soldiers and represents the #1 cause of veteran disability claims.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 8(a) Partnership Benefits */}
            <Card className={`bg-scarlet/10 border-scarlet/30 rounded-xl transition-all duration-700 delay-900 ${procurementVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-signal-white text-center mb-8">
                  STREAMLINED PROCUREMENT THROUGH CERTIFIED 8(a) PARTNER
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <FileText className="h-8 w-8 text-signal-white" />
                    </div>
                    <h4 className="font-bold" style={{ color: '#B6A687' }}>Direct Contracting</h4>
                    <p className="text-signal-white text-sm">
                      Sole-source contracts up to $4.5M without competitive requirements. Awards cannot be protested.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-signal-white" />
                    </div>
                    <h4 className="font-bold" style={{ color: '#B6A687' }}>Small Business Goals</h4>
                    <p className="text-signal-white text-sm">
                      Satisfies agency small business and 8(a) contracting goals while supporting disadvantaged business development.
                    </p>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto flex items-center justify-center">
                      <Clock className="h-8 w-8 text-signal-white" />
                    </div>
                    <h4 className="font-bold" style={{ color: '#B6A687' }}>Reduced Timeline</h4>
                    <p className="text-signal-white text-sm">
                      Streamlined approval process reduces procurement timeline from months to weeks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment & Delivery Info Section */}
      <section ref={deliveryRef} className={`py-20 relative transition-all duration-1000 delay-400 ${deliveryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-16">
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


      {/* Final CTA Section */}
      <section ref={finalCtaRef} className={`py-20 relative transition-all duration-1000 delay-800 ${finalCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/lovable-uploads/dcbaa36b-0d95-4b4b-a548-872be284e918.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-signal-white mb-8">
              HAVE QUESTIONS BEFORE YOU BUY?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              We'll walk you through what to order, how to scan, and how to deploy Aware products fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" style={{ backgroundColor: '#95182b' }}>
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