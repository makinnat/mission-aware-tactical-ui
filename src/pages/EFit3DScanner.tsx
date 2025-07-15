import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle, Shield, Zap, Clock, Target, Monitor, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const EFit3DScanner = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  
  const {
    ref: introRef,
    isVisible: introVisible
  } = useScrollAnimation();
  
  const {
    ref: techRef,
    isVisible: techVisible
  } = useScrollAnimation();
  
  const {
    ref: specsRef,
    isVisible: specsVisible
  } = useScrollAnimation();
  
  const {
    ref: comparisonRef,
    isVisible: comparisonVisible
  } = useScrollAnimation();
  
  const {
    ref: militaryRef,
    isVisible: militaryVisible
  } = useScrollAnimation();
  
  const {
    ref: platformRef,
    isVisible: platformVisible
  } = useScrollAnimation();
  
  const {
    ref: finalCtaRef,
    isVisible: finalCtaVisible
  } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-combat-black text-signal-white font-inter">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className={`pt-24 pb-16 relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-signal-white mb-8 leading-tight md:text-6xl">
              eFit 3D Scanner
            </h1>
            <p className="text-xl text-desert-tan leading-relaxed max-w-3xl mx-auto mb-10">
              Revolutionizing Ear Scanning with Medical-Grade Precision
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        ref={introRef} 
        className={`py-20 transition-all duration-1000 delay-200 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-signal-white leading-relaxed mb-12">
              The eFit 3D Scanner represents a breakthrough in non-contact ear scanning technology, delivering the precision and safety that traditional methods simply cannot match. As the world's only FDA-cleared, non-contact 3D ear scanner, the eFit system transforms how custom hearing protection is created while establishing the foundation for advanced biometric capabilities.
            </p>
            
            <div className="bg-muted/10 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-signal-white mb-6">
                Zero Contact. Zero Risk. Maximum Precision.
              </h2>
              <p className="text-desert-tan leading-relaxed">
                Revolutionary Non-Contact Technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section 
        ref={techRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-300 ${techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-lg text-signal-white leading-relaxed mb-8">
                The eFit scanner essentially paints the ear with light using advanced radial illumination technology. This proprietary approach eliminates the risks, discomfort, and inconsistency associated with traditional silicone impression methods. By capturing the ear in its natural state, the eFit scanner ensures medical-grade accuracy that competitors cannot achieve through contact-based methods.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-signal-white text-center mb-12">Key Technical Advantages</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, text: "FDA-cleared for medical device applications" },
                { icon: CheckCircle, text: "Non-contact scanning eliminates safety risks - no risk of eardrum puncture or injury" },
                { icon: Target, text: "Two-micron precision - medical-grade accuracy for perfect fit" },
                { icon: Clock, text: "90-second scanning time - rapid data collection without discomfort" },
                { icon: Zap, text: "Captures the critical second bend - the only technology capable of accurately mapping this vital area" }
              ].map((advantage, index) => (
                <Card 
                  key={index}
                  className={`bg-desert-tan/10 border-desert-tan/30 rounded-xl transition-all duration-500 delay-${400 + (index * 100)} ${techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-olive-drab rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-signal-white" />
                    </div>
                    <p className="text-desert-tan text-sm leading-relaxed">
                      {advantage.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Bend Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-8">
              The Only Technology to Capture the Second Bend
            </h2>
            <p className="text-lg text-desert-tan leading-relaxed mb-8">
              What sets the eFit apart from all other scanning technologies is its unique ability to accurately capture the second bend of the ear canal. This anatomical feature, located deep within the ear canal, is critical for:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Perfect seal integrity for hearing protection effectiveness",
                "Medical-grade biometric sensor placement for accurate data collection",
                "Optimal comfort through precise anatomical mapping",
                "Future-proof platform for advanced sensor integration"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                  <p className="text-signal-white">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-desert-tan leading-relaxed mt-8">
              The second bend is strategically positioned close to the brain, major blood vessels, and Arnold's nerve (the auricular branch of the vagus nerve). This proximity enables the collection of medical-grade data that universal, one-size-fits-all devices cannot consistently capture.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section 
        ref={specsRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-400 ${specsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-16">
              Technical Specifications and Capabilities
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Precision Engineering */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-signal-white mb-6">Precision Engineering</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-olive-drab mb-3">Scanning Accuracy:</h4>
                      <div className="space-y-2 text-desert-tan">
                        <p>• Volumetric accuracy to 90 microns (0.09mm)</p>
                        <p>• Two-micron precision for critical measurement points</p>
                        <p>• Over 1 million data points captured per scan</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-olive-drab mb-3">Scanning Technology:</h4>
                      <div className="space-y-2 text-desert-tan">
                        <p>• Patented radial-light scanning system</p>
                        <p>• Integrated 3D tracking system for precise positioning</p>
                        <p>• Advanced laser scanning with three scanning modes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety and Compliance */}
              <Card className="bg-desert-tan/10 border-desert-tan/30 rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-signal-white mb-6">Safety and Compliance</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-olive-drab mb-3">Medical Device Clearance:</h4>
                      <div className="space-y-2 text-desert-tan">
                        <p>• FDA 510(k) clearance for medical device classification</p>
                        <p>• CE marking for European compliance</p>
                        <p>• Class 2 laser product certification (EN 60825)</p>
                        <p>• LED photobiological safety (EN 62471)</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-olive-drab mb-3">Operational Safety:</h4>
                      <div className="space-y-2 text-desert-tan">
                        <p>• Zero contact eliminates risk of ear canal injury</p>
                        <p>• No silicone injection removes risk of eardrum puncture</p>
                        <p>• No special certification required for operators</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Military Applications */}
      <section 
        ref={militaryRef} 
        className={`py-20 transition-all duration-1000 delay-500 ${militaryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-8">
              Military and Defense Applications
            </h2>
            <h3 className="text-2xl font-bold text-olive-drab text-center mb-8">
              Mission-Critical Reliability
            </h3>
            <p className="text-lg text-desert-tan leading-relaxed text-center mb-12">
              The eFit scanner has been validated by Special Operations Forces, Navy aviators, and elite military units across multiple service branches. Field testing has demonstrated superior performance in the most demanding operational environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-signal-white mb-4">Deployment Advantages:</h4>
                <div className="space-y-3">
                  {[
                    "Rapid mass scanning capability - entire units can be scanned in hours",
                    "Field-portable design enables forward deployment", 
                    "No consumable materials required - sustainable operations",
                    "Digital profiles enable rapid resupply without re-scanning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                      <p className="text-desert-tan">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-signal-white mb-4">Operational Validation:</h4>
                <div className="space-y-3">
                  {[
                    "DoD installations have validated superior performance",
                    "Special Operations units report outstanding field results",
                    "Aviation communities demonstrate improved compliance",
                    "US Navy studies show superior fit compared to traditional methods"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-scarlet mt-1 flex-shrink-0" />
                      <p className="text-desert-tan">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Proof Platform */}
      <section 
        ref={platformRef} 
        className={`py-20 bg-muted/10 transition-all duration-1000 delay-600 ${platformVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-signal-white text-center mb-8">
              Future-Proof Platform Architecture
            </h2>
            <p className="text-lg text-desert-tan leading-relaxed text-center mb-12">
              The eFit scanner creates more than just hearing protection—it establishes a permanent digital platform for advanced capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-scarlet/10 border-scarlet/30 rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-signal-white mb-6">Biometric Integration</h3>
                  <div className="space-y-3">
                    {[
                      "Custom sensor placement in the critical second bend",
                      "Medical-grade EEG capability validated by Emory University",
                      "Continuous physiological monitoring",
                      "Advanced neuromodulation through precise electrode placement"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-scarlet mt-1 flex-shrink-0" />
                        <p className="text-desert-tan text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-scarlet/10 border-scarlet/30 rounded-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-signal-white mb-6">Scalable Implementation</h3>
                  <div className="space-y-3">
                    {[
                      "Scanner lease programs enable rapid evaluation",
                      "Training programs for organizational independence",
                      "Distributed manufacturing reduces logistics burden",
                      "Cloud-based data management for enterprise deployment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-scarlet mt-1 flex-shrink-0" />
                        <p className="text-desert-tan text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={finalCtaRef} 
        className={`py-20 transition-all duration-1000 delay-700 ${finalCtaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-signal-white mb-8">
              Ready to Protect Your Team and Future-Proof Your Mission?
            </h2>
            <p className="text-xl text-desert-tan leading-relaxed mb-10">
              When mission success depends on equipment that personnel will actually wear, choose the scanning technology that delivers perfect fit, uncompromised safety, and unlimited potential for operational enhancement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-signal-white" />
                </div>
                <h4 className="font-bold text-signal-white mb-2">Scanner Leasing</h4>
                <p className="text-desert-tan text-sm">With training programs available</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-signal-white" />
                </div>
                <h4 className="font-bold text-signal-white mb-2">Proven Results</h4>
                <p className="text-desert-tan text-sm">Field-Tested at numerous DoD installations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-scarlet rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-signal-white" />
                </div>
                <h4 className="font-bold text-signal-white mb-2">Best Value</h4>
                <p className="text-desert-tan text-sm">Lower cost than foam in just 12 months</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide text-white" 
                style={{ backgroundColor: '#95182b' }}
              >
                SCHEDULE A MEETING
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-3 font-semibold uppercase tracking-wide border-olive-drab text-olive-drab hover:bg-olive-drab hover:text-signal-white"
              >
                LEARN MORE ABOUT OUR TECHNOLOGY
              </Button>
            </div>
            
            <p className="text-2xl font-bold text-olive-drab">
              Fit to Fight, Built to Endure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EFit3DScanner;