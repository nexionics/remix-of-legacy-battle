import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list! We'll notify you when Legacy Bet launches.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Be among the first to experience the future of peer-to-peer betting. 
              Get exclusive early access and special launch bonuses.
            </p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm"
                required
              />
              <Button type="submit" variant="accent" size="lg" className="h-14 px-8">
                <Bell className="mr-2 h-5 w-5" />
                Notify Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-primary-foreground/60">
              Join 50,000+ users already waiting for launch. No spam, unsubscribe anytime.
            </p>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Early Access</div>
              <div className="text-primary-foreground/70">Be first to trade</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Bonus Credits</div>
              <div className="text-primary-foreground/70">$100 launch bonus</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">VIP Support</div>
              <div className="text-primary-foreground/70">Priority assistance</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;