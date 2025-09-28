import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Trophy, Users, Zap, Target } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SocialProof = () => {
  // Real-time stats (would be fetched from API in production)
  const liveStats = [
    { icon: Users, label: "Active Battlers", value: "12,847", trend: "+23% today" },
    { icon: Zap, label: "Battles Today", value: "3,291", trend: "Live" },
    { icon: Trophy, label: "Total Prizes Won", value: "$127K", trend: "+$8.2K today" },
    { icon: Target, label: "Success Rate", value: "94.2%", trend: "Verified" }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Legend Rank",
      avatar: "AC",
      country: "🇺🇸",
      quote: "Went from complete beginner to earning $2K monthly through skill challenges. The progression system is incredible.",
      verified: true,
      earnings: "$24,800"
    },
    {
      name: "Maria Silva",
      role: "Champion",
      avatar: "MS", 
      country: "🇧🇷",
      quote: "Finally a platform that rewards actual skill. Won my first major tournament within 3 months!",
      verified: true,
      earnings: "$8,400"
    },
    {
      name: "Kenji Tanaka",
      role: "Elite",
      avatar: "KT",
      country: "🇯🇵", 
      quote: "The anti-cheat system gives me confidence. Every victory feels earned and legitimate.",
      verified: true,
      earnings: "$15,200"
    }
  ];

  const trustIndicators = [
    { icon: Shield, label: "SSL Secured", desc: "Bank-grade encryption" },
    { icon: Trophy, label: "Fair Play Certified", desc: "Anti-cheat verified" },
    { icon: Users, label: "50K+ Users", desc: "Global community" },
    { icon: Star, label: "4.9/5 Rating", desc: "User satisfaction" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-elevation-1">
      <div className="container mx-auto px-4">
        {/* Live Statistics */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-red text-brand-red">
            <Zap className="w-4 h-4 mr-2" />
            Live Statistics
          </Badge>
          <h2 className="text-heading-lg mb-4">Join the Battle Right Now</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of skilled challengers are competing live. Real battles, real prizes, real impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {liveStats.map((stat, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-brand-red/50 transition-colors">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-brand-red mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-xs text-brand-red">{stat.trend}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-brand-red text-brand-red">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-heading-lg mb-4">Real People, Real Victories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet challengers who transformed their skills into substantial earnings through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-brand-red/30 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={`/avatar-${index + 1}.jpg`} />
                    <AvatarFallback className="bg-brand-red/10 text-brand-red">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Shield className="w-4 h-4 text-brand-red" />
                      )}
                      <span className="text-sm">{testimonial.country}</span>
                    </div>
                    <p className="text-sm text-brand-red">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-brand-red/10 text-brand-red">
                    Earned {testimonial.earnings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-brand-red/20">
                <indicator.icon className="w-8 h-8 text-brand-red" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{indicator.label}</h4>
              <p className="text-sm text-muted-foreground">{indicator.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;