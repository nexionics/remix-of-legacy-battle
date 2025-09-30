import React from "react";
import "../styles/hero.css";

const BattleCoins = () => {
  return (
    <section id="bc" className="section">
      <div className="section__inner">
        <h2 className="section__title">Battle Coins</h2>
        <p className="section__sub">Virtual credits for boosts, cosmetics, and challenge entry. <strong>Not cash. Not transferable.</strong> Bonus Coins spend first.</p>

        <div className="grid grid--3">
          <div className="card">
            <h3 className="lb-display" style={{margin: "0 0 6px"}}>Starter Pack</h3>
            <p className="lb-body" style={{margin: "0 0 14px"}}>500 BC <span className="badge">+50 Bonus</span></p>
            <p className="lb-display" style={{fontSize: "28px"}}>$4.99</p>
            <a className="btn btn--primary" href="#buy">Purchase Bundle</a>
          </div>

          <div className="card">
            <h3 className="lb-display" style={{margin: "0 0 6px"}}>Challenger Bundle</h3>
            <p className="lb-body" style={{margin: "0 0 14px"}}>1,200 BC <span className="badge">+200 Bonus</span></p>
            <p className="lb-display" style={{fontSize: "28px"}}>$9.99</p>
            <a className="btn btn--primary" href="#buy">Purchase Bundle</a>
          </div>

          <div className="card">
            <h3 className="lb-display" style={{margin: "0 0 6px"}}>Legend Pack</h3>
            <p className="lb-body" style={{margin: "0 0 14px"}}>2,500 BC <span className="badge">+500 Bonus</span></p>
            <p className="lb-display" style={{fontSize: "28px"}}>$19.99</p>
            <a className="btn btn--primary" href="#buy">Purchase Bundle</a>
          </div>
        </div>

        <p className="lb-body" style={{opacity: 0.7, marginTop: "12px"}}>Battle Coins are virtual credits for in-app use only. Not redeemable for cash. All purchases final.</p>
      </div>
    </section>
  );
};

export default BattleCoins;