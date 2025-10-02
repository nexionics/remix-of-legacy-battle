import React from "react";
import { Swords, Shield, Users, Wallet, CheckCircle, TrendingUp, Building2, MessageSquare, Trophy } from "lucide-react";

const Features = () => {
  const mvpFeatures = [
    {
      icon: Swords,
      title: "Skill Battles",
      description: "Create & accept asynchronous battles with transparent rules and evidence upload.",
      status: "MVP"
    },
    {
      icon: Shield,
      title: "Stat Duels",
      description: "Resolved from official box scores via signed Resolution Notes (source URL + snapshot hash + signer).",
      status: "MVP"
    },
    {
      icon: Users,
      title: "Social Layer",
      description: "Profiles, Allies (follow graph), feed, comments, reactions, and notifications.",
      status: "MVP"
    },
    {
      icon: Wallet,
      title: "Battle Coin Wallet",
      description: "Virtual credits for boosts/cosmetics and joining eligible battles. Not cash. Not transferable.",
      status: "MVP"
    },
    {
      icon: CheckCircle,
      title: "Verification & Attesters",
      description: "Upload image/≤20s video; optional 2-of-3 attesters on dispute; evidence held 30 days.",
      status: "MVP"
    }
  ];

  const comingSoonFeatures = [
    {
      icon: TrendingUp,
      title: "Partner-Assisted Markets",
      badge: "Where Permitted",
      description: "Simple Yes/No outcomes via licensed partners with age/geo gating, KYC, and cash-out handled off-platform.",
      status: "COMING SOON"
    },
    {
      icon: Building2,
      title: "Houses & Series",
      description: "Organizations/venues running recurring series (Legacies) with sponsor overlays and admin tools.",
      status: "COMING SOON"
    },
    {
      icon: MessageSquare,
      title: "Direct Messages",
      description: "One-to-one messaging and post-battle recaps with reporting/safety controls.",
      status: "COMING SOON"
    },
    {
      icon: Trophy,
      title: "Rank Progression",
      description: "Challenger → Contender → Rival → Warrior → Champion → Legend. Status only—no monetary perks.",
      status: "COMING SOON"
    }
  ];

  const renderFeatureCard = (feature: any) => {
    const Icon = feature.icon;
    const isMVP = feature.status === "MVP";
    
    return (
      <article 
        key={feature.title}
        className="rounded-xl p-5"
        style={{
          background: 'rgba(255,255,255,.02)',
          border: '1px solid rgba(255,255,255,.06)',
          boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide"
            style={{
              background: isMVP ? 'rgba(255,0,0,.12)' : 'rgba(163,163,163,.15)',
              border: isMVP ? '1px solid rgba(255,0,0,.35)' : '1px solid rgba(163,163,163,.4)',
              color: isMVP ? '#fff' : '#e6e6e6'
            }}
          >
            {feature.status}
          </span>
          <Icon size={20} color={isMVP ? "#FF0000" : "#A3A3A3"} />
        </div>
        
        <h3 className="font-display text-lg font-bold mb-2 text-text-primary">
          {feature.title}
          {feature.badge && (
            <span 
              className="ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
              style={{
                background: 'rgba(163,163,163,.15)',
                border: '1px solid rgba(163,163,163,.4)',
                color: '#e6e6e6'
              }}
            >
              {feature.badge}
            </span>
          )}
        </h3>
        
        <p className="font-body text-sm text-text-secondary leading-relaxed">
          {feature.description}
        </p>
      </article>
    );
  };

  return (
    <section id="features" className="py-16 px-5">
      <div className="container max-w-[1120px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-text-primary">
          What's in at MVP — and what's next
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {mvpFeatures.map(renderFeatureCard)}
          {comingSoonFeatures.map(renderFeatureCard)}
        </div>

        <div 
          className="rounded-xl p-4"
          style={{
            border: '1px dashed rgba(255,255,255,.15)',
            background: 'rgba(255,0,0,.05)'
          }}
        >
          <p className="font-body text-sm text-text-secondary">
            <strong className="text-text-primary">Compliance note:</strong> Battle Coins are virtual credits for boosts & cosmetics.
            {" "}<em>Not cash. Not transferable.</em> Public markets will only be available via licensed partners and{" "}
            <span title="Geofenced and age-restricted">where permitted</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
