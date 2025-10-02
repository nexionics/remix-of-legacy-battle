import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Thanks! You're on the list.");
    setEmail("");
    // Hook this to your backend/ESP later:
    // fetch('/api/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})})
  };

  return (
    <section id="updates" className="py-16 px-5">
      <div className="container max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="rounded-xl p-5"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '1px solid rgba(255,255,255,.06)',
              boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
            }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
              Get launch updates
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-[260px] px-4 py-3 rounded-lg bg-black text-white font-body"
                style={{
                  border: '1px solid rgba(255,255,255,.1)'
                }}
              />
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-2px]"
                style={{
                  boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
                }}
              >
                Join the Waitlist
              </button>
            </form>
            
            {message && (
              <p className="mt-2.5 text-text-secondary font-body text-sm" role="status" aria-live="polite">
                {message}
              </p>
            )}
          </div>

          <div 
            className="rounded-xl p-5"
            style={{
              background: 'rgba(255,255,255,.02)',
              border: '1px solid rgba(255,255,255,.06)',
              boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
            }}
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-text-primary">
              For partners & creators
            </h2>
            
            <p className="font-body text-text-secondary mb-4">
              Want to host series, sponsor Quick Picks, or integrate via API? Let's talk.
            </p>
            
            <div className="flex flex-wrap gap-2.5">
              <a 
                href="mailto:partners@legacybattle.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-black border border-[#FF0000] text-white cursor-pointer transition-all hover:translate-y-[-1px]"
                style={{
                  boxShadow: '0 0 0 1px rgba(255,255,255,.04), 0 12px 24px rgba(0,0,0,.45)'
                }}
              >
                Partner with us
              </a>
              <a 
                href="mailto:creators@legacybattle.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-b from-[#FF0000] to-[#990000] text-white border-0 cursor-pointer transition-all hover:translate-y-[-2px]"
                style={{
                  boxShadow: '0 0 24px rgba(255,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.06)'
                }}
              >
                Creator program
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
