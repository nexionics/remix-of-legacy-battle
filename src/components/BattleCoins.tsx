import React from "react";
import "../styles/hero.css";
import bcLogo from "@/assets/bc-logo.png";
import { Coins, Sparkles, Crown } from "lucide-react";

const BattleCoins = () => {
  const packages = [
    {
      icon: Coins,
      name: "Starter Pack",
      coins: "500 BC",
      bonus: "+50 Bonus",
      price: "$4.99",
      popular: false
    },
    {
      icon: Sparkles,
      name: "Champion Bundle",
      coins: "1,500 BC",
      bonus: "+300 Bonus",
      price: "$14.99",
      popular: true
    },
    {
      icon: Crown,
      name: "Legend Pack",
      coins: "3,500 BC",
      bonus: "+800 Bonus",
      price: "$29.99",
      popular: false
    }
  ];

  return (
    <section id="bc" className="section" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)' }}>
      <div className="section__inner">
        <h2 className="section__title flex items-center justify-center gap-4">
          <img src={bcLogo} alt="Battle Coins" className="w-12 h-12" />
          Battle Coins
        </h2>
        <p className="section__sub">
          Fuel your journey with Battle Coins. Unlock boosts, cosmetics, and premium challenges. 
          {" "}<strong>Not cash. Not transferable. Not gambling.</strong> Pure skill, pure competition.
        </p>

        <div className="grid grid--3">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  textAlign: 'center',
                  position: 'relative',
                  ...(pkg.popular && {
                    border: '2px solid rgba(255,69,0,.5)',
                    transform: 'scale(1.05)',
                    zIndex: 2
                  })
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #FF4500, #B30000)',
                    color: '#fff',
                    padding: '6px 20px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '.05em',
                    boxShadow: '0 4px 12px rgba(255,69,0,.5)'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(255,69,0,.1)',
                  border: '2px solid rgba(255,69,0,.3)'
                }}>
                  <Icon size={40} color="#FF4500" />
                </div>

                <h3 className="lb-display" style={{ 
                  fontSize: '24px', 
                  margin: '0 0 16px',
                  color: '#fff',
                  letterSpacing: '.08em'
                }}>
                  {pkg.name}
                </h3>

                <p className="lb-body" style={{ 
                  fontSize: '20px',
                  color: 'rgba(255,255,255,.8)', 
                  margin: '0 0 8px',
                  fontWeight: '600'
                }}>
                  {pkg.coins}
                </p>

                <span className="badge" style={{ marginBottom: '24px', display: 'inline-block' }}>
                  {pkg.bonus}
                </span>

                <div className="kpi" style={{ 
                  fontSize: '40px',
                  margin: '24px 0'
                }}>
                  {pkg.price}
                </div>

                <a 
                  className="btn btn--primary" 
                  href="#buy"
                  style={{ 
                    width: '100%',
                    display: 'block',
                    textAlign: 'center'
                  }}
                >
                  Get Bundle
                </a>
              </div>
            );
          })}
        </div>

        <p className="lb-body" style={{ 
          opacity: 0.6, 
          marginTop: '48px', 
          textAlign: 'center',
          fontSize: '14px',
          maxWidth: '900px',
          margin: '48px auto 0'
        }}>
          Battle Coins are virtual in-app credits with zero cash value. Not redeemable, not transferable, not refundable. 
          Bonus Coins are applied first. All sales final. 18+ only.
        </p>
      </div>
    </section>
  );
};

export default BattleCoins;