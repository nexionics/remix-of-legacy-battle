import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import InteractiveDemo from "@/components/InteractiveDemo";
import MobileExperience from "@/components/MobileExperience";
import TrustSafety from "@/components/TrustSafety";
import GlobalAppeal from "@/components/GlobalAppeal";
import ContentHub from "@/components/ContentHub";
import Features from "@/components/Features";
import PromoVideo from "@/components/PromoVideo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      <ContentHub />
      <Features />
      <PromoVideo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
