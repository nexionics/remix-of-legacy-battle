import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  FileText, 
  Award, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Globe,
  Star,
  Verified
} from "lucide-react";

const TrustSafety = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced Anti-Cheat",
      description: "AI-powered detection system with 99.8% accuracy",
      status: "Active",
      details: ["Real-time monitoring", "Behavioral analysis", "Hardware fingerprinting"]
    },
    {
      icon: Lock,
      title: "Bank-Grade Encryption",
      description: "End-to-end encryption for all sensitive data",
      status: "Verified",
      details: ["256-bit SSL encryption", "Zero-knowledge architecture", "PCI DSS compliant"]
    },
    {
      icon: Eye,
      title: "Fair Play Guarantee",
      description: "Transparent matchmaking and verified results",
      status: "Certified",
      details: ["Public match logs", "Skill-based matching", "Community oversight"]
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security & availability controls",
      icon: CheckCircle,
      verified: true
    },
    {
      name: "GDPR Compliant",
      description: "European data protection standards",
      icon: Globe,
      verified: true
    },
    {
      name: "COPPA Certified",
      description: "Child privacy protection compliant",
      icon: Users,
      verified: true
    },
    {
      name: "Fair Gaming Seal",
      description: "Independent audit verified",
      icon: Award,
      verified: true
    }
  ];

  const communityGuidelines = [
    {
      title: "Zero Tolerance Policy",
      description: "Immediate action against cheating, harassment, or abuse",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      title: "24/7 Moderation",
      description: "Round-the-clock human moderators and AI monitoring",
      icon: Clock,
      color: "text-brand-red"
    },
    {
      title: "Community Reporting",
      description: "Easy reporting system with quick response times",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Verified Challenges",
      description: "All skill challenges reviewed and validated by experts",
      icon: Verified,
      color: "text-green-400"
    }
  ];

  const trustStats = [
    { label: "Security Incidents", value: "0", period: "Past 12 months", trend: "✅" },
    { label: "Fair Play Rating", value: "99.2%", period: "Community verified", trend: "📈" },
    { label: "Response Time", value: "< 2min", period: "Average support", trend: "⚡" },
    { label: "User Satisfaction", value: "4.9/5", period: "10,000+ reviews", trend: "⭐" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-elevation-1 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-green-500 text-green-400">
            <Shield className="w-4 h-4 mr-2" />
            Trust & Safety
          </Badge>
          <h2 className="text-heading-lg mb-4">Battle with Complete Confidence</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Your security, privacy, and fair play are our top priorities. We maintain the highest standards 
            to ensure every battle is safe, secure, and legitimate.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-green-500/50 transition-all duration-300 group hover-lift">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustStats.map((stat, index) => (
            <Card key={index} className="bg-elevation-2 border-border text-center hover-glow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-1 flex items-center justify-center gap-2">
                  {stat.value}
                  <span className="text-lg">{stat.trend}</span>
                </div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-heading-md mb-4">Industry Certifications</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Independently verified and certified by leading security and compliance organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-green-500/30 transition-all duration-300 text-center group hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <cert.icon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                  {cert.name}
                  {cert.verified && <CheckCircle className="w-4 h-4 text-green-400" />}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="text-center mb-12">
          <h3 className="text-heading-md mb-4">Community Safety</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Our comprehensive safety measures ensure a positive and fair environment for all challengers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityGuidelines.map((guideline, index) => (
            <Card key={index} className="bg-elevation-2 border-border hover:border-brand-red/30 transition-all duration-300 text-center group hover-lift">
              <CardContent className="p-6">
                <guideline.icon className={`w-8 h-8 mx-auto mb-3 ${guideline.color}`} />
                <h4 className="font-semibold text-foreground mb-2">{guideline.title}</h4>
                <p className="text-sm text-muted-foreground">{guideline.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal & Support */}
        <Card className="bg-gradient-to-r from-green-500/10 via-transparent to-brand-red/10 border-green-500/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-heading-md mb-4">Complete Transparency</h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
              Full access to our terms of service, privacy policy, and fair play guidelines. 
              24/7 support team ready to help with any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                <FileText className="w-5 h-5 mr-2" />
                Terms of Service
              </Button>
              <Button variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                <Lock className="w-5 h-5 mr-2" />
                Privacy Policy
              </Button>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <Users className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrustSafety;