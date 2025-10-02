import React from "react";
import heroLogo from "@/assets/lb-hero-arena.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-5" role="contentinfo">
      <div className="container max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text-secondary">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <img 
                src={heroLogo}
                alt="Legacy Battle"
                className="w-[46px] h-[46px] rounded-full flex-none"
                style={{
                  objectFit: 'cover',
                  filter: 'drop-shadow(0 0 12px rgba(255,0,0,.5))'
                }}
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
