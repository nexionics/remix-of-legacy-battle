import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowBattlesWork from "@/components/HowBattlesWork";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen font-body"
      style={{
        background: 'radial-gradient(1200px 600px at 20% 0%, rgba(255,0,0,0.07), transparent 55%), radial-gradient(900px 500px at 100% 0%, rgba(255,0,0,0.06), transparent 60%), #0A0A0A',
        color: '#FFFFFF'
      }}
    >
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <HowBattlesWork />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
