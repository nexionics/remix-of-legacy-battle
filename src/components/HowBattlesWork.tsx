import React from "react";

const HowBattlesWork = () => {
  const howSteps = [
    {
      title: "Create or Accept.",
      description: "Pick a template, set rules, and go live—or join a duel from your feed."
    },
    {
      title: "Compete & Verify.",
      description: "Upload proof or wait for official stats. Disputes use 2-of-3 attesters."
    },
    {
      title: "Resolve & Share.",
      description: "Every result includes Resolution Notes and a shareable result card."
    },
    {
      title: "Grow your legacy.",
      description: "Earn Allies, climb leaderboards (soon), and unlock seasonal events."
    }
  ];

  const battleCoinPoints = [
    "Balances: Purchased & Bonus",
    "Referral & sponsor drops (Bonus BC)",
    "No cash-out. No swaps with cash."
  ];

  const renderDot = () => (
    <span 
      className="w-2.5 h-2.5 rounded-full mt-1.5 flex-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #FF0000, #990000)',
        boxShadow: '0 0 12px rgba(255,0,0,.45)'
      }}
      aria-hidden="true"
    />
  );

  return (
    <section id="how" className="py-16 px-5">
      <div className="container max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="rounded-xl p-5"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '1px solid rgba(255,255,255,.06)',
              boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
            }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
              How it works
            </h2>
            
            <div className="grid gap-3">
              {howSteps.map((step, index) => (
                <div key={index} className="flex gap-3 items-start">
                  {renderDot()}
                  <div>
                    <strong className="text-text-primary font-body">{step.title}</strong>
                    <span className="text-text-secondary font-body"> {step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            id="wallet"
            className="rounded-xl p-5"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '1px solid rgba(255,255,255,.06)',
              boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
            }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
              Battle Coin at launch
            </h2>
            
            <p className="font-body text-text-secondary mb-4">
              Buy BC bundles (iOS IAP / web checkout), receive promo/reward drops, and spend on boosts/cosmetics
              or to join eligible challenges. <strong className="text-text-primary">Bonus</strong> balance always spends first.
            </p>
            
            <div className="grid gap-3">
              {battleCoinPoints.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  {renderDot()}
                  <div className="text-text-secondary font-body">{point}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowBattlesWork;
