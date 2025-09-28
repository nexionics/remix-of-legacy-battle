import { Button } from "@/components/ui/button";
import { Trophy, Zap, Users, Star, Target, Award } from "lucide-react";
import cleanLockup from "@/assets/lb-logo-clean-lockup.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-red rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-brand-red/60 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-brand-red/40 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-brand-red/50 rounded-full animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            {/* Hero Logo Lockup */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <img src={cleanLockup} alt="Legacy Battle logo lockup" className="w-full max-w-3xl h-auto" loading="lazy" />
              </div>
            </div>
            
            <p className="text-subheading text-2xl md:text-3xl text-brand-red/90">
              A Legacy isn&apos;t given — it&apos;s earned.
            </p>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's premier skill-challenge platform where legends are made. Issue challenges, 
              accept duels, spectate epic battles, and climb the ranks from Challenger to Legend.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" className="min-w-[200px] bg-gradient-primary hover:opacity-90 text-white shadow-glow">
              <Zap className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              <Users className="mr-2 h-5 w-5" />
              Watch Battles
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red flex items-center justify-center gap-1">
                <Target className="h-8 w-8" />
                Stat
              </div>
              <div className="text-sm text-muted-foreground">Duels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red flex items-center justify-center gap-1">
                <Zap className="h-8 w-8" />
                Quick
              </div>
              <div className="text-sm text-muted-foreground">Picks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red">BC</div>
              <div className="text-sm text-muted-foreground">Battle Coins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-red flex items-center justify-center gap-1">
                <Award className="h-8 w-8" />
                Legend
              </div>
              <div className="text-sm text-muted-foreground">Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;