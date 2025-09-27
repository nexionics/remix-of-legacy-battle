import { Button } from "@/components/ui/button";
import logoTransparent from "@/assets/lb-logo-halo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <span className="absolute inset-0 rounded-full bg-brand-red/15 blur-[6px]" aria-hidden="true"></span>
            <img src={logoTransparent} alt="Legacy Battle logo - LB circular mark" className="relative h-8 w-8 object-contain" loading="lazy" />
          </div>
          <span className="text-heading text-xl font-bold">Legacy Battle</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-body hover:text-brand-red transition-colors">Features</a>
          <a href="#battles" className="text-body hover:text-brand-red transition-colors">Battles</a>
          <a href="#ranks" className="text-body hover:text-brand-red transition-colors">Ranks</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm" className="bg-gradient-primary">Join Battle</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;