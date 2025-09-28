import { Button } from "@/components/ui/button";
import { Trophy, Zap, Users, Star, Target, Award } from "lucide-react";
import legacyBattleLogo from "@/assets/legacy-battle-logo.png";

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
            {/* Hero Logo */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <img src={legacyBattleLogo} alt="Legacy Battle logo" className="w-full max-w-4xl h-auto" loading="lazy" />
              </div>
            </div>
            
            <p className="text-subheading text-2xl md:text-3xl text-brand-red/90 mb-6 font-legacy">
              A Legacy isn&apos;t given — it&apos;s earned.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent flex-1 max-w-24"></div>
              <p className="text-lg md:text-xl font-semibold text-foreground px-4 bg-gradient-to-r from-brand-red/20 to-brand-red/10 rounded-full border border-brand-red/30 font-legacy">
                No House. No Odds. No Gimmicks.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent flex-1 max-w-24"></div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world&apos;s premier skill-challenge platform where legends are made. Issue challenges, 
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
              <div className="text-2xl font-bold text-brand-red flex items-center justify-center gap-1 font-legacy">
                <Target className="h-6 w-6" />
                Stat
              </div>
              <div className="text-lg text-muted-foreground font-legacy font-semibold">Duels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red flex items-center justify-center gap-1 font-legacy">
                <Zap className="h-6 w-6" />
                Quick
              </div>
              <div className="text-lg text-muted-foreground font-legacy font-semibold">Picks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red font-legacy">BC</div>
              <div className="text-lg text-muted-foreground font-legacy font-semibold">Battle Coins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-red flex items-center justify-center gap-1 font-legacy">
                <Award className="h-6 w-6" />
                Legend
              </div>
              <div className="text-lg text-muted-foreground font-legacy font-semibold">Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;