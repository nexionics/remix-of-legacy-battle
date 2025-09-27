import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Trophy, Zap, Users, Download, Apple, PlayCircle } from "lucide-react";

const CTA = () => {
  const platforms = [
    { icon: Apple, name: "iOS App", status: "Phase 1", description: "Native iOS wrapper + responsive web" },
    { icon: Globe, name: "Web Platform", status: "Live", description: "Mobile-first responsive design" },
    { icon: PlayCircle, name: "Android", status: "Phase 2", description: "Coming post-Super Bowl pilot" }
  ];

  const battleCoins = [
    { package: "Starter Pack", coins: "500 BC", bonus: "+50 Bonus", price: "$4.99" },
    { package: "Challenger Bundle", coins: "1,200 BC", bonus: "+200 Bonus", price: "$9.99" },
    { package: "Legend Pack", coins: "2,500 BC", bonus: "+500 Bonus", price: "$19.99" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-destructive/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Main CTA */}
          <Card className="bg-gradient-to-br from-destructive to-destructive/70 border-destructive/50 shadow-xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 border border-white/20 rounded-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-white/20 text-white border-white/30 mb-4">
                    Welcome, Legend-in-the-making!
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Ready to Build Your Legacy?
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Join the skill challenge revolution. Create duels, accept challenges, 
                    verify results, and climb the ranks to Legend status.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="min-w-[200px] bg-white text-destructive hover:bg-white/90 font-semibold"
                  >
                    <Trophy className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-[200px] border-white/30 text-white hover:bg-white/10 font-semibold"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Watch Battles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Availability */}
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold">Available <span className="text-destructive">Platforms</span></h3>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="group hover:border-destructive/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <platform.icon className="h-12 w-12 mx-auto mb-4 text-destructive group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-2">{platform.name}</h4>
                    <Badge 
                      variant={platform.status === "Live" ? "default" : "secondary"}
                      className={platform.status === "Live" ? "bg-green-500" : ""}
                    >
                      {platform.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Battle Coins */}
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold">Battle <span className="text-destructive">Coins</span></h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Virtual credits for boosts, cosmetics, and challenge entry. Not cash. Not transferable. 
              Bonus Coins spend first.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {battleCoins.map((pack, index) => (
                <Card key={index} className="group hover:border-destructive/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-destructive to-destructive/70 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{pack.package}</h4>
                    <div className="text-2xl font-bold text-destructive mb-1">{pack.coins}</div>
                    <div className="text-sm text-green-600 font-medium mb-3">{pack.bonus}</div>
                    <div className="text-xl font-bold mb-4">{pack.price}</div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
                    >
                      Purchase Bundle
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Battle Coins are virtual credits for in-app purchases and challenge entry. 
              Not redeemable for cash. All purchases final.
            </p>
          </div>

          {/* Contact */}
          <Card className="bg-secondary/10 border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions About Legacy Battle?</h3>
              <p className="text-muted-foreground mb-6">
                Get in touch with our team for support, partnerships, or media inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                  <Download className="mr-2 h-4 w-4" />
                  Press Kit
                </Button>
                <Button variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
                  Support Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;