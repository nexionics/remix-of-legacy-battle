import React from "react";
import heroLogo from "@/assets/lb-hero-arena.png";
import { Users, Trophy, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Container */}
      <div className="relative w-full" style={{ maxHeight: '70vh' }}>
        <img
          src={heroLogo}
          className="w-full h-auto object-cover animate-pulse-glow"
          alt="Legacy Battle arena logo with red neon effects"
          loading="eager"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(255,0,0,.6))',
            maxHeight: '70vh'
          }}
        />
        
        {/* Gradient Overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.95) 100%)'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative -mt-32 pb-20 px-5">
        <div className="container max-w-[1120px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight text-text-primary">
              Legacies aren't given—<br />they're earned!
            </h1>

            <p className="font-body text-lg md:text-xl text-text-secondary max-w-[700px]">
              The skill-battle network. Create fair battles, verify results, and build your legacy with your Allies.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 items-center justify-center mb-2">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Users size={18} className="text-[#FF0000]" />
                <span><strong className="text-text-primary">147K+</strong> Active Competitors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Trophy size={18} className="text-[#FF0000]" />
                <span><strong className="text-text-primary">8.4K</strong> Live Battles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Shield size={18} className="text-[#FF0000]" />
                <span><strong className="text-text-primary">100%</strong> Verified</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center">
              <a 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-3px] hover:shadow-[0_0_40px_rgba(255,0,0,.5)] active:translate-y-[-1px]"
                style={{
                  boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
                }}
                href="#features"
              >
                Start a Battle
              </a>
              <a 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-black border border-[#FF0000] text-white cursor-pointer transition-all hover:translate-y-[-2px] hover:bg-[rgba(255,0,0,.05)] hover:shadow-[0_0_24px_rgba(255,0,0,.3)]"
                style={{
                  boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
                }}
                href="#join"
              >
                Join the Waitlist
              </a>
              <span 
                className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  background: 'rgba(255,0,0,.12)',
                  border: '1px solid rgba(255,0,0,.35)',
                  color: '#fff'
                }}
                title="Verified outcomes with allow-listed sources"
              >
                Verified by Oracle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
