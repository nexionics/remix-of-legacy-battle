import React from "react";
import heroHalo from "@/assets/lb-logo-halo.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__brand">
        <img
          className="hero__halo"
          src={heroHalo}
          width={160}
          height={160}
          alt="Legacy Battle halo logo"
          loading="eager"
        />

        <h1 id="hero-title" className="hero__title lb-display">
          <span className="hero__legacy">LEGACY</span>{" "}
          <span className="hero__battle">BATTLE</span>
        </h1>

        <p className="hero__tag lb-body">
          Issue, accept, and spectate skill challenges. <strong>Not a sportsbook.</strong>
          {" "}Battle Coins are virtual credits—<em>not cash</em>.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#download">Download App</a>
          <a className="btn btn--ghost" href="#how">How It Works</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
