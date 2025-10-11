import React from "react";
import logoLockup from "@/assets/lb-logo-lockup.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-5" role="contentinfo">
      <div className="container max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text-secondary">
          <div>
            <div className="flex items-center mb-2.5">
              <img 
                src={logoLockup}
                alt="Legacy Battle"
                className="h-12 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(255,0,0,.5))'
                }}
              />
            </div>
            <p className="text-sm">
              © {currentYear} Legacy Battle. All rights reserved.
            </p>
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
