import React from "react";
import heroLogo from "@/assets/lb-hero-arena.png";

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
            <img 
              src={heroLogo}
              alt="Legacy Battle"
              className="w-[46px] h-[46px] rounded-full flex-none"
              style={{
                objectFit: 'cover',
                filter: 'drop-shadow(0 0 12px rgba(255,0,0,.5))'
              }}
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
