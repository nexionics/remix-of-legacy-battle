import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const EmailVerified = () => {
  return (
    <div 
      className="min-h-screen font-body flex flex-col"
      style={{
        background: 'radial-gradient(1200px 600px at 20% 0%, rgba(255,0,0,0.07), transparent 55%), radial-gradient(900px 500px at 100% 0%, rgba(255,0,0,0.06), transparent 60%), #0A0A0A',
        color: '#FFFFFF'
      }}
    >
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-md">
          {/* Success Icon */}
          <div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0.05) 100%)',
              boxShadow: '0 0 40px rgba(255,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1)'
            }}
          >
            <CheckCircle 
              size={48} 
              className="text-[#FF0000]"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(255,0,0,0.6))'
              }}
            />
          </div>

          {/* Title */}
          <h1 
            className="font-display text-heading-lg md:text-heading-xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF0000 50%, #FF4500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Email Verified!
          </h1>

          {/* Message */}
          <p className="text-body-lg text-[#D0D0D0] mb-8">
            Your email has been successfully verified. You can now return to the Legacy Battle app and start building your legacy.
          </p>

          {/* CTA Button */}
          <a 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-[0_0_32px_rgba(255,0,0,.45)]"
            style={{
              boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
            }}
          >
            Return to Home
          </a>

          {/* Additional Info */}
          <p className="text-body-sm text-[#808080] mt-8">
            You can close this page and open the Legacy Battle app on your device.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailVerified;
