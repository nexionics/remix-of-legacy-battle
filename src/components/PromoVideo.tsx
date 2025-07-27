import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const PromoVideo = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              See <span className="text-accent">Legacy Bet</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how our platform revolutionizes peer-to-peer betting and prediction markets
            </p>
          </div>
          
          {/* Video Player Placeholder */}
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl border border-primary/30 backdrop-blur-sm overflow-hidden shadow-2xl">
              {/* Video Thumbnail/Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background/10 to-primary/5 relative">
                {/* Play Button */}
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-20 h-20 rounded-full group-hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-foreground">Legacy Bet Platform Demo</div>
                      <div className="text-xs text-muted-foreground">3:24</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-2 w-full bg-secondary/30 rounded-full h-1">
                    <div className="bg-accent h-1 rounded-full w-1/3"></div>
                  </div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2">
                  <div className="text-xs text-muted-foreground">Live Demo</div>
                  <div className="text-sm font-semibold text-accent">$2,847 Volume</div>
                </div>
                
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2">
                  <div className="text-xs text-muted-foreground">Active Markets</div>
                  <div className="text-sm font-semibold text-primary">156</div>
                </div>
              </div>
            </div>
            
            {/* Video Description */}
            <div className="mt-8 text-center space-y-4">
              <h3 className="text-2xl font-semibold">Experience the Future of Betting</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how Legacy Bet's intuitive interface makes it easy to create markets, place bets, 
                and track your predictions in real-time. No complex processes, just pure innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Real-time trading
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Smart contract security
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  Instant payouts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;