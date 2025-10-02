import React from "react";
import heroHalo from "@/assets/lb-logo-halo.png";

const Header = () => {
  return (
    <header 
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,10,.9) 0%, rgba(10,10,10,.7) 90%, rgba(10,10,10,0) 100%)',
        backdropFilter: 'blur(8px)',
        borderColor: 'rgba(255,255,255,.06)'
      }}
      role="banner"
    >
      <div className="container max-w-[1120px] mx-auto px-5">
        <nav className="flex items-center justify-between py-3.5" aria-label="Primary">
          <div className="flex items-center gap-3" aria-label="Legacy Battle">
            <div 
              className="w-11 h-11 rounded-full flex-none"
              style={{
                background: `url(${heroHalo}) center/cover no-repeat, radial-gradient(circle at 50% 50%, rgba(255,0,0,.25), rgba(255,0,0,0) 60%)`,
                boxShadow: '0 0 24px rgba(255,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.08)'
              }}
              role="img" 
              aria-label="Legacy Battle LB glow logo"
            />
            <div className="font-display font-extrabold text-lg tracking-wide">
              LEGACY BATTLE
            </div>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="#features" className="px-3 py-2 rounded-lg text-sm hover:bg-[rgba(255,0,0,.12)] transition-colors" aria-current="page">
              Features
            </a>
            <a href="#how" className="px-3 py-2 rounded-lg text-sm hover:bg-[rgba(255,0,0,.12)] transition-colors">
              How it works
            </a>
            <a href="#wallet" className="px-3 py-2 rounded-lg text-sm hover:bg-[rgba(255,0,0,.12)] transition-colors">
              Battle Coin
            </a>
            <a href="#updates" className="px-3 py-2 rounded-lg text-sm hover:bg-[rgba(255,0,0,.12)] transition-colors">
              Updates
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
