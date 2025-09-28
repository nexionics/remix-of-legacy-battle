import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Shield,
  Heart,
  Trophy,
  Users,
  Gamepad2
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Game",
      links: [
        { name: "Download", href: "#download" },
        { name: "System Requirements", href: "#requirements" },
        { name: "Game Modes", href: "#modes" },
        { name: "Rankings", href: "#rankings" },
        { name: "Tournaments", href: "#tournaments" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord Server", href: "#discord" },
        { name: "Forums", href: "#forums" },
        { name: "Creator Program", href: "#creators" },
        { name: "Esports", href: "#esports" },
        { name: "Events", href: "#events" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Bug Reports", href: "#bugs" },
        { name: "Contact Us", href: "#contact" },
        { name: "Account Recovery", href: "#recovery" },
        { name: "Billing Support", href: "#billing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
        { name: "Partnerships", href: "#partners" },
        { name: "Blog", href: "#blog" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Youtube, href: "#youtube", label: "YouTube" },
    { icon: MessageCircle, href: "#discord", label: "Discord" }
  ];

  const achievements = [
    { icon: Users, value: "10M+", label: "Active Players" },
    { icon: Trophy, value: "50K+", label: "Tournaments" },
    { icon: Heart, value: "4.9/5", label: "User Rating" },
    { icon: Shield, value: "100%", label: "Secure Platform" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">Stay in the Game</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest updates on tournaments, new features, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              type="email"
              className="flex-1"
            />
            <Button size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{achievement.value}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SkillClash</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              The ultimate skill-based gaming platform where strategy meets competition. 
              Join millions of players worldwide in fair, exciting battles.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@skillclash.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors story-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all hover-scale"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors story-link">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors story-link">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary transition-colors story-link">
              Cookie Policy
            </a>
            <a href="#accessibility" className="hover:text-primary transition-colors story-link">
              Accessibility
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} SkillClash. All rights reserved.
          </div>
        </div>

        {/* Age Rating & Compliance */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="px-2 py-1 border border-border rounded text-xs">T for Teen</span>
              <span>ESRB Content Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3" />
              <span>Secured by industry-standard encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;