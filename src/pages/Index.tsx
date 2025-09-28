import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import InteractiveDemo from "@/components/InteractiveDemo";
import MobileExperience from "@/components/MobileExperience";
import TrustSafety from "@/components/TrustSafety";
import GlobalAppeal from "@/components/GlobalAppeal";
import Features from "@/components/Features";
import PromoVideo from "@/components/PromoVideo";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SocialProof />
      <InteractiveDemo />
      <MobileExperience />
      <TrustSafety />
      <GlobalAppeal />
      <Features />
      <PromoVideo />
      <CTA />
    </div>
  );
};

export default Index;
