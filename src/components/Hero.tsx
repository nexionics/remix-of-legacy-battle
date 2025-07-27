import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when Legacy Bet launches.");
      setEmail("");
    }
  };

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
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Coming Soon
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Peer-to-Peer Betting
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create, trade, and profit from prediction markets on any topic. 
            Join the revolution where your knowledge becomes your edge.
          </p>
          
          {/* CTA Section */}
          <div className="space-y-6">
            <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-secondary/20 border-primary/30 backdrop-blur-sm"
                required
              />
              <Button type="submit" variant="accent" size="lg" className="h-12 px-8">
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button variant="hero" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">$10M+</div>
              <div className="text-muted-foreground">Total Volume Ready</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">50K+</div>
              <div className="text-muted-foreground">Pre-registered Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-muted-foreground">Market Categories</div>
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