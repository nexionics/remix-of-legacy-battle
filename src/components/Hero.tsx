import { Button } from "@/components/ui/button";
import { Building2, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-90"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <Building2 className="w-4 h-4 text-primary" />
            Delaware Corporation
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              L.E.N.D.
            </span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Holdings, Inc.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Strategic technology holding company powering innovative fintech solutions 
            across gaming, payments, and data services.
          </p>
          
          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button variant="hero" size="lg" className="group">
                <Shield className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Corporate Overview
              </Button>
              <Button variant="outline" size="lg">
                <TrendingUp className="mr-2 h-4 w-4" />
                Portfolio Companies
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">4</div>
              <div className="text-muted-foreground">Operating Subsidiaries</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">Multi-State</div>
              <div className="text-muted-foreground">Jurisdictions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">Fintech</div>
              <div className="text-muted-foreground">Innovation Focus</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-secondary/30 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Hero;