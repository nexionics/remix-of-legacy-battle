import { Button } from "@/components/ui/button";
import { Mail, Phone, Building2, Shield, FileText } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Strategic Investment Platform
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              L.E.N.D. Holdings represents a diversified portfolio of innovative fintech companies
              positioned for growth in emerging digital markets.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-foreground">Investor Relations</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Mail className="h-5 w-5" />
                  <span>investors@lendholdings.com</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Building2 className="h-5 w-5" />
                  <span>Delaware Corporation</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-foreground">Corporate Governance</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <FileText className="h-5 w-5" />
                  <span>SEC Compliance</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Shield className="h-5 w-5" />
                  <span>Risk Management</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="accent" size="lg" className="px-8">
              <FileText className="mr-2 h-5 w-5" />
              Corporate Deck
            </Button>
            <Button variant="hero" size="lg" className="px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contact Investor Relations
            </Button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Strategic</div>
              <div className="text-primary-foreground/70">Focus</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Multi-State</div>
              <div className="text-primary-foreground/70">Operations</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Compliance</div>
              <div className="text-primary-foreground/70">First</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Innovation</div>
              <div className="text-primary-foreground/70">Driven</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;