const Hero = () => {
  return (
    <section 
      className="hero" 
      style={{
        padding: "clamp(32px,7vw,96px) clamp(16px,4vw,32px)",
        display: "grid",
        gridTemplateColumns: "1fr",
        placeItems: "center",
        textAlign: "center",
        gap: "clamp(16px,3vw,28px)"
      }}
    >
      {/* Mark + halo */}
      <div className="lb-halo" aria-hidden="true">
        <span className="lb-rim"></span>
        {/* Inline SVG: LB monogram (fills inherit the theme red) */}
        <svg viewBox="0 0 100 100" role="img" aria-label="Legacy Battle LB mark">
          <defs>
            <linearGradient id="lbFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--lb-red-700))"/>
              <stop offset="55%" stopColor="hsl(var(--lb-red-500))"/>
              <stop offset="100%" stopColor="hsl(var(--lb-red-400))"/>
            </linearGradient>
          </defs>
          {/* "L" */}
          <path fill="url(#lbFill)" d="M24 20h12v48h26l-8 12H24z"/>
          {/* "B" (geometric) */}
          <path fill="url(#lbFill)" d="M60 20h16l8 12-7 10 7 10-8 12H60V20zm12 20 4-6-4-6h-4v12h4zm0 24 4-6-4-6h-4v12h4z"/>
        </svg>
      </div>

      <h1 className="font-display text-white text-6xl">LEGACY <span className="text-lb-red-500">BATTLE</span></h1>
      <p>Issue, accept, and spectate skill challenges. <strong>Not a sportsbook.</strong> Battle Coins are virtual credits—<em>not cash</em>.</p>

      <div style={{display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center"}}>
        <button className="px-6 py-3 rounded-full text-white shadow-lb-glow bg-lb-grad-red">Download App</button>
        <button className="px-6 py-3 rounded-full text-white border border-lb-red-500 bg-transparent hover:bg-lb-red-500/10">How It Works</button>
      </div>
    </section>
  );
};

export default Hero;