import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy, Zap, Target, Users, CheckCircle, Clock } from "lucide-react";

const PromoVideo = () => {
  const battleFlow = [
    {
      icon: Target,
      title: "Create Challenge",
      description: "Select stat duel template, set players/teams, choose time window"
    },
    {
      icon: Users,
      title: "Accept & Join",
      description: "Review rules, minimum attempts, and official sources before joining"
    },
    {
      icon: CheckCircle,
      title: "Verify Results",
      description: "Upload evidence or wait for Oracle snapshot from official sources"
    },
    {
      icon: Trophy,
      title: "Resolution & Share",
      description: "Transparent Resolution Notes with source, hash, and verified results"
    }
  ];

  const quickStats = [
    { value: "≤2 min", label: "Onboarding Time" },
    { value: "≤5 min", label: "Median Verify" },
    { value: "90%+", label: "Success Rate" },
    { value: "24/7", label: "Live Challenges" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-destructive border-destructive/30 bg-destructive/5">
              Challenge Lifecycle
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              How Battles <span className="text-destructive">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From challenge creation to verified resolution - experience the complete skill challenge ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Demo Area */}
            <div className="relative">
              <Card className="relative overflow-hidden bg-gradient-to-br from-destructive to-destructive/70 border-destructive/50 shadow-xl">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-destructive/10 via-transparent to-destructive/10" />
                    <div className="relative z-10 text-center space-y-4">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Battle Demo
                      </h3>
                      <p className="text-white/80 max-w-sm mx-auto">
                        Watch a complete challenge from creation to resolution
                      </p>
                      <div className="flex justify-center gap-4 text-sm text-white/70">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          2:30
                        </span>
                        <span>|</span>
                        <span>Stat Duel Example</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {quickStats.map((stat, index) => (
                  <Card key={index} className="text-center p-4 bg-card/50 border-destructive/20">
                    <div className="text-xl font-bold text-destructive">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Battle Flow */}
            <div className="space-y-6">
              {battleFlow.map((step, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg hover:border-destructive/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-destructive to-destructive/70 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold group-hover:text-destructive transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-destructive/10 to-destructive/5 border-destructive/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Legacy?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of challengers competing in real-time stat duels and skill challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-destructive text-white rounded-lg hover:bg-destructive/90 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5" />
                    Start Challenging
                  </button>
                  <button className="px-6 py-3 border border-destructive/30 text-destructive rounded-lg hover:bg-destructive/10 transition-colors font-semibold">
                    Watch Demo
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;