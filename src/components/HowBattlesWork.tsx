import React from "react";
import "../styles/hero.css";
import { Swords, Shield, Eye, CheckCircle } from "lucide-react";

const HowBattlesWork = () => {
  const steps = [
    {
      icon: Swords,
      number: "01",
      title: "Create Challenge",
      description: "Select sport, set parameters, choose your challenger. Define stakes and time window."
    },
    {
      icon: Shield,
      number: "02",
      title: "Accept or Decline",
      description: "Review challenge details, verify sources, check history. Accept when ready."
    },
    {
      icon: Eye,
      number: "03",
      title: "Live Tracking",
      description: "Real-time stats from official sources. No manipulation. Complete transparency."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Auto Resolution",
      description: "Oracle verifies results instantly. Winners credited automatically. Immutable records."
    }
  ];

  return (
    <section id="how" className="section">
      <div className="section__inner">
        <h2 className="section__title">How It Works</h2>
        <p className="section__sub">
          Four simple steps from challenge to victory. Transparent, instant, and completely skill-based.
        </p>

        <div className="grid" style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="card" style={{ position: 'relative', paddingTop: '50px' }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '32px',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,69,0,.2), rgba(179,0,0,.2))',
                  border: '2px solid rgba(255,69,0,.4)',
                  boxShadow: '0 8px 24px rgba(255,69,0,.3)'
                }}>
                  <Icon size={28} color="#FF4500" />
                </div>

                <div style={{
                  position: 'absolute',
                  top: '32px',
                  right: '32px',
                  fontSize: '48px',
                  fontFamily: 'LegacyBattleStencil',
                  fontWeight: '400',
                  background: 'linear-gradient(135deg, rgba(255,127,0,.3), rgba(255,69,0,.3))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.4
                }}>
                  {step.number}
                </div>

                <h3 className="lb-display" style={{ 
                  fontSize: '20px',
                  margin: '0 0 16px',
                  color: '#FF7F00',
                  letterSpacing: '.08em'
                }}>
                  {step.title}
                </h3>

                <p className="lb-body" style={{ 
                  color: 'rgba(255,255,255,.7)',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowBattlesWork;