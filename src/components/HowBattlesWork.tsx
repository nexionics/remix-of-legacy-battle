import React from "react";
import "../styles/hero.css";

const HowBattlesWork = () => {
  return (
    <section id="how" className="section">
      <div className="section__inner">
        <h2 className="section__title">How Battles Work</h2>
        <div className="grid grid--3">
          <div className="card">
            <h3 className="lb-display">1 · Create</h3>
            <p className="lb-body">Pick a stat-duel template, set players/teams, choose a time window.</p>
          </div>
          <div className="card">
            <h3 className="lb-display">2 · Accept</h3>
            <p className="lb-body">Review rules, minimum attempts, and official sources before joining.</p>
          </div>
          <div className="card">
            <h3 className="lb-display">3 · Verify</h3>
            <p className="lb-body">Upload evidence or rely on Oracle snapshots from official sources.</p>
          </div>
          <div className="card">
            <h3 className="lb-display">4 · Resolve</h3>
            <p className="lb-body">Transparent Resolution Notes: source link, snapshot hash, signer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowBattlesWork;