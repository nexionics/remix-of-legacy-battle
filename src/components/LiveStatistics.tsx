import React from "react";
import "../styles/hero.css";

const LiveStatistics = () => {
  return (
    <section className="section">
      <div className="section__inner">
        <h2 className="section__title">Live Statistics</h2>
        <p className="section__sub">Thousands of skilled challengers are competing live. Real battles, real prizes, real impact.</p>

        <div className="grid grid--3">
          <div className="card">
            <div className="kpi">12,847</div>
            <div className="lb-body">Active Battlers <span className="badge">+23% today</span></div>
          </div>
          <div className="card">
            <div className="kpi">3,291</div>
            <div className="lb-body">Battles Today <span className="badge">Live</span></div>
          </div>
          <div className="card">
            <div className="kpi">$127K</div>
            <div className="lb-body">Total Prizes Won <span className="badge">+ $8.2K today</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatistics;