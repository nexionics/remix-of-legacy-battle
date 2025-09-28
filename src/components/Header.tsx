import { Button } from "@/components/ui/button";
import legacyBattleLogo from "@/assets/legacy-battle-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 flex-shrink-0">
            <img src={legacyBattleLogo} alt="Legacy Battle logo" className="h-12 w-auto object-contain" loading="lazy" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
          <a href="#battles" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Battles</a>
          <a href="#ranks" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Ranks</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-medium">Sign In</Button>
          <Button size="sm" className="bg-gradient-primary font-medium">Join Battle</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;