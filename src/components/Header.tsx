import React, { useState } from "react";
import logoLockup from "@/assets/lb-logo-lockup.png";
import bcLogo from "@/assets/bc-logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,10,.95) 0%, rgba(10,10,10,.85) 90%, rgba(10,10,10,0) 100%)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(255,255,255,.06)'
      }}
      role="banner"
    >
      <div className="container max-w-[1120px] mx-auto px-5">
        <nav className="flex items-center justify-between py-3" aria-label="Primary">
          <div className="flex items-center" aria-label="Legacy Battle">
            <img 
              src={logoLockup}
              alt="Legacy Battle"
              className="h-14 w-auto"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(255,0,0,.5))'
              }}
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a 
              href="#features" 
              className="px-3 py-2 rounded-lg text-base transition-all hover:text-[#FF0000] relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#how" 
              className="px-3 py-2 rounded-lg text-base transition-all hover:text-[#FF0000] relative group"
            >
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#wallet" 
              className="px-3 py-2 rounded-lg text-base transition-all hover:text-[#FF0000] relative group flex items-center gap-2"
            >
              <img src={bcLogo} alt="Battle Coin" className="w-5 h-5" />
              Battle Coin
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#updates" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-[0_0_32px_rgba(255,0,0,.45)]"
              style={{
                boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
              }}
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[rgba(255,0,0,.12)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(255,255,255,.06)]">
            <div className="flex flex-col gap-2">
              <a 
                href="#features" 
                className="px-4 py-3 rounded-lg text-base hover:bg-[rgba(255,0,0,.12)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how" 
                className="px-4 py-3 rounded-lg text-base hover:bg-[rgba(255,0,0,.12)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#wallet" 
                className="px-4 py-3 rounded-lg text-base hover:bg-[rgba(255,0,0,.12)] transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={bcLogo} alt="Battle Coin" className="w-5 h-5" />
                Battle Coin
              </a>
              <a 
                href="#updates" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer mt-2"
                style={{
                  boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
