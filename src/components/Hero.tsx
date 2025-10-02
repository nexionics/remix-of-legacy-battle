import React from "react";
import heroHalo from "@/assets/lb-logo-halo.png";

const Hero = () => {
  return (
    <section className="relative py-20 px-5">
      <div className="container max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src={heroHalo}
            width={120}
            height={120}
            alt="Legacy Battle halo logo with glowing effects"
            loading="eager"
            className="animate-pulse-glow"
            style={{
              filter: 'drop-shadow(0 0 24px rgba(255,0,0,.45))'
            }}
          />

          <h1 className="font-display text-[40px] md:text-[56px] leading-[1.2] tracking-tight text-text-primary">
            Legacies aren't given—<br />they're earned!
          </h1>

          <p className="font-body text-lg text-text-secondary max-w-[600px]">
            The skill-challenge network. Create fair challenges, verify results, and build your legacy with your Allies.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            <a 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-[0_0_32px_rgba(255,0,0,.35)]"
              style={{
                boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
              }}
              href="#features"
            >
              Start a Challenge
            </a>
            <a 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-black border border-[#FF0000] text-white cursor-pointer transition-all hover:translate-y-[-1px]"
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
    </section>
  );
};

export default Hero;
