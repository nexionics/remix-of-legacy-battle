import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Zap, Users, Award, Timer, Shield, Coins } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Stat Duels",
    badge: "Real-Time",
    description: "Challenge rivals on live sports stats. QB yards, team points, player performance - all verified by official sources and Oracle snapshots."
  },
  {
    icon: Zap,
    title: "Quick Picks",
    badge: "Sponsor Ready",
    description: "Lightning-fast challenges with sponsor integration. Quick carousel picks for instant engagement and branded experiences."
  },
  {
    icon: Timer,
    title: "Instant Verification",
    badge: "≤5 Min",
    description: "Upload evidence in seconds. ≤20s videos, ≤5MB images. 2-of-3 friend attestations for disputes. Median verify time under 5 minutes."
  },
  {
    icon: Coins,
    title: "Battle Coins",
    badge: "Virtual Credits",
    description: "Earn BC for boosts, cosmetics, and challenge entry. Purchase bundles with bonus rewards. Not cash - purely engagement currency."
  },
  {
    icon: Award,
    title: "Rank Progression",
    badge: "Legend Status",
    description: "Climb from Challenger to Legend. Earn XP through creating, accepting, and winning verified challenges. Build your legacy."
  },
  {
    icon: Shield,
    title: "Oracle Resolution",
    badge: "Transparent",
    description: "Official source verification with Resolution Notes. Snapshot hash, oracle signer, and rule application for complete transparency."
  }
];

const rankTiers = [
  { name: "Challenger", xp: "0 XP", description: "Fresh start" },
  { name: "Contender", xp: "100 XP", description: "Battle ready" },
  { name: "Rival", xp: "500 XP", description: "First victory" },
  { name: "Warrior", xp: "1,500 XP", description: "Proven fighter" },
  { name: "Champion", xp: "5,000 XP", description: "Elite performer" },
  { name: "Legend", xp: "15,000 XP", description: "Hall of fame" }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Features Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Platform <span className="text-destructive">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end skill challenges with real-time verification, sponsor integration, and transparent resolution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:border-destructive/50 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-destructive to-destructive/70 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-lg group-hover:text-destructive transition-colors">
                    {feature.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs bg-destructive/10 text-destructive border-destructive/20">
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rank Progression */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Rank <span className="text-destructive">Progression</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your legacy through the competitive ladder system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {rankTiers.map((rank, index) => (
              <Card 
                key={index} 
                className={`text-center p-4 transition-all duration-300 hover:scale-105 ${
                  index === rankTiers.length - 1 
                    ? 'bg-gradient-to-br from-destructive to-destructive/70 border-destructive text-white' 
                    : 'bg-card/50 hover:border-destructive/30'
                }`}
              >
                <div className="space-y-2">
                  {index === rankTiers.length - 1 && (
                    <Trophy className="h-6 w-6 mx-auto text-yellow-400" />
                  )}
                  <h3 className={`font-bold text-sm ${index === rankTiers.length - 1 ? 'text-white' : 'text-destructive'}`}>
                    {rank.name}
                  </h3>
                  <p className={`text-xs font-medium ${index === rankTiers.length - 1 ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {rank.xp}
                  </p>
                  <p className={`text-xs ${index === rankTiers.length - 1 ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {rank.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;