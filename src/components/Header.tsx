import { Button } from "@/components/ui/button";
import legacyBattleLogo from "@/assets/legacy-battle-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-surface/95 via-background/90 to-surface/95 backdrop-blur-xl border-b border-accent/20 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 flex-shrink-0 hover-glow">
            <img src={legacyBattleLogo} alt="Legacy Battle logo" className="h-20 w-auto object-contain transition-all duration-300" loading="lazy" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:glow relative group">
            <span className="relative z-10">Features</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
          </a>
          <a href="#battles" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:glow relative group">
            <span className="relative z-10">Battles</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
          </a>
          <a href="#ranks" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:glow relative group">
            <span className="relative z-10">Ranks</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20">
            Sign In
          </Button>
          <Button variant="glow" size="sm" className="font-medium relative overflow-hidden group">
            <span className="relative z-10">Join Battle</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;