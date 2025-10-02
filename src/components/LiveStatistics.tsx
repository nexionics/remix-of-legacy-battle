import React from "react";
import "../styles/hero.css";
import { TrendingUp, Zap, Trophy } from "lucide-react";

const LiveStatistics = () => {
  return (
    <section className="section">
      <div className="section__inner">
        <h2 className="section__title">Global Arena Stats</h2>
        <p className="section__sub">
          Join thousands of elite competitors worldwide. Real-time battles, instant verification, transparent results.
        </p>

        <div className="grid grid--3">
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255,69,0,.1)',
              border: '1px solid rgba(255,69,0,.3)'
            }}>
              <TrendingUp size={32} color="#FF4500" />
            </div>
            <div className="kpi">147,284</div>
            <div className="lb-body" style={{ color: 'rgba(255,255,255,.7)', fontSize: '16px', marginTop: '12px' }}>
              Active Competitors <span className="badge">+34% This Week</span>
            </div>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255,69,0,.1)',
              border: '1px solid rgba(255,69,0,.3)'
            }}>
              <Zap size={32} color="#FF7F00" />
            </div>
            <div className="kpi">8,431</div>
            <div className="lb-body" style={{ color: 'rgba(255,255,255,.7)', fontSize: '16px', marginTop: '12px' }}>
              Live Battles <span className="badge">◉ Live Now</span>
            </div>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255,69,0,.1)',
              border: '1px solid rgba(255,69,0,.3)'
            }}>
              <Trophy size={32} color="#FF7F00" />
            </div>
            <div className="kpi">$2.4M</div>
            <div className="lb-body" style={{ color: 'rgba(255,255,255,.7)', fontSize: '16px', marginTop: '12px' }}>
              Total Prizes Awarded <span className="badge">+$127K Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;