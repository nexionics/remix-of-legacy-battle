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
          width={200}
          height={200}
          alt="Legacy Battle halo logo with glowing effects"
          loading="eager"
        />

        <h1 id="hero-title" className="hero__title lb-display">
          <span className="hero__legacy">LEGACY</span>
          <span className="hero__battle">BATTLE</span>
        </h1>

        <p className="hero__tag lb-body">
          The World's Premier Skill-Challenge Platform. Issue Challenges, Accept Duels, Win Glory.
          {" "}<strong>Not gambling.</strong> Battle Coins are virtual credits—<em>zero cash value</em>.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#download">
            Download Now
          </a>
          <a className="btn btn--ghost" href="#how">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
