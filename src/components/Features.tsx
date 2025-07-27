import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Shield, Zap, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Prediction Markets",
    description: "Create and trade on prediction markets for any event - from sports to politics to crypto prices."
  },
  {
    icon: Users,
    title: "Peer-to-Peer",
    description: "Direct betting between users with no house edge. Your winnings come from other traders, not a casino."
  },
  {
    icon: Shield,
    title: "Blockchain Security", 
    description: "All bets are secured by smart contracts. Transparent, immutable, and automatically executed."
  },
  {
    icon: Zap,
    title: "Instant Settlements",
    description: "Real-time payouts as soon as events conclude. No waiting periods or withdrawal delays."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into market trends, probability analysis, and profit optimization tools."
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access prediction markets from around the world. Trade on any timezone, any event."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-accent">Legacy Bet</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most advanced peer-to-peer betting platform with features that give you the edge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;