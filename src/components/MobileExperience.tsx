import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Download, 
  Star, 
  Shield, 
  Zap,
  Users,
  Globe,
  Wifi
} from "lucide-react";

const MobileExperience = () => {
  const platforms = [
    {
      icon: Smartphone,
      name: "Mobile App",
      status: "Available",
      description: "Native iOS & Android apps with offline battle preparation",
      features: ["Push notifications", "Offline mode", "Biometric login"],
      downloadLink: "#",
      badge: "New"
    },
    {
      icon: Tablet,
      name: "Tablet",
      status: "Optimized", 
      description: "Enhanced tablet experience with split-screen battles",
      features: ["Multi-window", "Enhanced UI", "Gesture controls"],
      downloadLink: "#",
      badge: "Enhanced"
    },
    {
      icon: Monitor,
      name: "Desktop",
      status: "Full Featured",
      description: "Complete desktop experience with advanced analytics",
      features: ["Real-time stats", "Multiple battles", "Stream mode"],
      downloadLink: "#",
      badge: "Pro"
    }
  ];

  const mobileFeatures = [
    {
      icon: Zap,
      title: "Instant Battles",
      description: "Join battles in seconds with one-tap quick match"
    },
    {
      icon: Shield,
      title: "Secure Sync",
      description: "Your progress syncs securely across all devices"
    },
    {
      icon: Users,
      title: "Mobile Chat",
      description: "Communicate with opponents and spectators on the go"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Battle players worldwide with optimized mobile networking"
    },
    {
      icon: Wifi,
      title: "Offline Ready",
      description: "Practice and prepare for battles even without internet"
    },
    {
      icon: Star,
      title: "Touch Optimized",
      description: "Intuitive touch controls designed for mobile gaming"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-elevation-1 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-red text-brand-red animate-pulse">
            <Smartphone className="w-4 h-4 mr-2" />
            Cross-Platform
          </Badge>
          <h2 className="text-heading-lg mb-4">Battle Anywhere, Anytime</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Optimized for every device with native mobile apps, responsive design, and seamless cross-platform sync.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="bg-elevation-2 border-border hover:border-brand-red/50 transition-all duration-300 hover:shadow-glow group hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <platform.icon className="w-8 h-8 text-brand-red group-hover:animate-pulse" />
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-brand-red/10 text-brand-red text-xs animate-bounce"
                    >
                      {platform.badge}
                    </Badge>
                  </div>
                  
                  <Badge 
                    variant="outline" 
                    className={`mb-4 ${
                      platform.status === "Available" 
                        ? "border-green-500 text-green-400" 
                        : "border-brand-red text-brand-red"
                    }`}
                  >
                    {platform.status}
                  </Badge>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-glow group-hover:scale-105 transform transition-transform duration-200"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {platform.name === "Desktop" ? "Launch App" : "Download"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Features Grid */}
        <div className="text-center mb-12">
          <h3 className="text-heading-md mb-4">Mobile-First Features</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed specifically for mobile warriors who demand peak performance on the go.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {mobileFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="bg-elevation-2 border-border hover:border-brand-red/30 transition-all duration-300 group hover:shadow-accent hover:-translate-y-1"
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-red/20 transition-colors group-hover:scale-110 transform duration-200">
                  <feature.icon className="w-6 h-6 text-brand-red group-hover:animate-pulse" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile CTA */}
        <Card className="bg-gradient-to-r from-brand-red/10 via-brand-red/5 to-brand-red/10 border-brand-red/20 animate-pulse-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-heading-md mb-4">Ready to Battle on Mobile?</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Download our mobile app and join thousands of challengers competing for glory and rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow hover:scale-105 transform transition-all duration-200">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white hover:scale-105 transform transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MobileExperience;