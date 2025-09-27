import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PromoVideo from "@/components/PromoVideo";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PromoVideo />
      <CTA />
    </div>
  );
};

export default Index;
