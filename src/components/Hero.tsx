import { Button } from "@/components/ui/button";
import { Trophy, Zap, Users, Star, Target, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-destructive/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-destructive rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-destructive/60 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-destructive/40 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-destructive/50 rounded-full animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Trophy className="h-16 w-16 text-destructive animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-heading text-6xl md:text-8xl leading-tight">
              Legacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-destructive/70">Battle</span>
            </h1>
            
            <p className="text-subheading text-2xl md:text-3xl text-destructive/90">
              Build Your Legacy. Challenge Your Rivals.
            </p>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's premier skill-challenge platform where legends are made. Issue challenges, 
              accept duels, spectate epic battles, and climb the ranks from Challenger to Legend.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" className="min-w-[200px] bg-destructive hover:bg-destructive/90">
              <Zap className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-destructive/50 text-destructive hover:bg-destructive/10">
              <Users className="mr-2 h-5 w-5" />
              Watch Battles
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive flex items-center justify-center gap-1">
                <Target className="h-8 w-8" />
                Stat
              </div>
              <div className="text-sm text-muted-foreground">Duels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive flex items-center justify-center gap-1">
                <Zap className="h-8 w-8" />
                Quick
              </div>
              <div className="text-sm text-muted-foreground">Picks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive">BC</div>
              <div className="text-sm text-muted-foreground">Battle Coins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-destructive flex items-center justify-center gap-1">
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