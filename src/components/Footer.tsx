import React from "react";
import heroHalo from "@/assets/lb-logo-halo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-5" role="contentinfo">
      <div className="container max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text-secondary">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div 
                className="w-11 h-11 rounded-full flex-none"
                style={{
                  background: `url(${heroHalo}) center/cover no-repeat, radial-gradient(circle at 50% 50%, rgba(255,0,0,.25), rgba(255,0,0,0) 60%)`,
                  boxShadow: '0 0 24px rgba(255,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.08)'
                }}
                role="img" 
                aria-label="Legacy Battle LB glow logo"
              />
              <div className="font-display font-extrabold text-lg tracking-wide text-text-primary">
                LEGACY BATTLE
              </div>
            </div>
            <div className="text-sm">
              © {currentYear} Legacy Battle. All rights reserved.
            </div>
          </div>

          <div className="text-sm">
            <strong className="text-text-primary">Tagline</strong>
            <br />
            Legacies aren't given—they're earned!
          </div>

          <div className="text-sm">
            <strong className="text-text-primary">Disclosures</strong>
            <br />
            Battle Coins are virtual credits for boosts & cosmetics. Not cash. Not transferable.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
