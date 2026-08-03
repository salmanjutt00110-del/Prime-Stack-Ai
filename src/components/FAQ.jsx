import { useState, useMemo } from "react";
import { Search, Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Kya ye accounts real hain ya shared?",
    a: "Hum 100% official accounts provide karte hain. ChatGPT Plus mein aapki apni email use hoti hai, baaki tools mein family/team slot milta hai jo perfectly safe hai.",
  },
  {
    q: "Payment kaise karni hai?",
    a: "JazzCash, EasyPaisa, bank transfer (Meezan, HBL, UBL, Allied Bank), ya USDT se payment kar sakte hain. WhatsApp par batayein, hum details denge.",
  },
  {
    q: "Kitne waqt mein milega?",
    a: "Zyada tar 5–15 minute ke andar delivery ho jati hai. Busy hours mein max 2 ghante lag sakte hain.",
  },
  {
    q: "Agar koi masla aaye toh?",
    a: "Hum full replacement warranty dete hain jo product card par mentioned duration ke liye valid hai. Koi bhi issue ho, WhatsApp karein — hum free mein fix ya replace karenge.",
  },
  {
    q: "Kya subscription renew hogi automatically?",
    a: "Nahi. Aapko renewal ke liye dobara WhatsApp karna hoga. Hum expiry se pehle reminder bhi dete hain taake aapka access uninterrupted rahe.",
  },
  {
    q: "Kya aap trustworthy hain? Fraud toh nahi?",
    a: "Hum 2022 se active hain aur 5,000+ orders successfully deliver kar chuke hain. Reviews dekh sakte hain WhatsApp par. Pehle chota tool try karein trust ke liye.",
  },
  {
    q: "Kya international customers order kar sakte hain?",
    a: "Haan! USDT ya crypto se pay karke international customers bhi order kar sakte hain. Delivery worldwide available hai WhatsApp ke through.",
  },
  {
    q: "ChatGPT Plus Pakistan mein kaise milega?",
    a: "Humse order karein — hum aapki email par ChatGPT Plus activate karte hain. Koi VPN ya international card ki zaroorat nahi. 15 minute mein delivery ho jati hai.",
  },
  {
    q: "Canva Pro kitne mein milega?",
    a: "Canva Pro sirf Rs. 279 mein 3 saal ke liye available hai. Ye education invite hai jo aapke personal account par activate hota hai with all premium features.",
  },
  {
    q: "Google Gemini Pro kya hai aur kaise kaam karta hai?",
    a: "Google Gemini Pro Google ka flagship AI model hai with 2M context window, 5TB cloud storage, aur Veo video generation. Hum isko aapke personal Gmail par activate karte hain 18 months ke liye.",
  },
  {
    q: "VPN subscription safe hai? IP leak toh nahi hoga?",
    a: "Surfshark aur NordVPN dono industry-leading VPN providers hain with military-grade encryption, no-log policy, aur kill switch. Aapki privacy 100% protected hai.",
  },
  {
    q: "Kya bulk orders ke liye discount milta hai?",
    a: "Haan! 5 ya zyada products kharidne par exclusive bulk pricing milti hai. Agencies, resellers, aur teams ke liye custom quotes available hain — WhatsApp par contact karein.",
  },
  {
    q: "Refund policy kya hai?",
    a: "Agar product activation mein koi issue aaye toh hum replacement dete hain. Digital nature ki wajah se standard refunds available nahi hain, lekin full replacement warranty har product ke saath included hai.",
  },
  {
    q: "CapCut Pro mein kya features milte hain?",
    a: "CapCut Pro mein 4K export bina watermark, AI auto-captions, body tracking, premium effects library, aur trending TikTok templates sab included hain. Perfect hai video editors aur content creators ke liye.",
  },
  {
    q: "Kya mujhe product ka login credentials milenge?",
    a: "ChatGPT Plus mein hum aapki email par activate karte hain. Canva Pro mein invite link milta hai. Har product ka method different hai — order ke waqt hum full guide dete hain WhatsApp par.",
  },
  {
    q: "Aapki support timings kya hain?",
    a: "Humari WhatsApp support 9 AM se 11 PM PKT tak available hai, 7 days a week including weekends. Urgent issues ke liye WhatsApp par message karein aur hum jaldi reply karenge.",
  },
  {
    q: "Kya YouTube Premium bhi available hai?",
    a: "Haan! YouTube Premium 1, 3, aur 12 month plans mein available hai. Aapke personal Google account par fixed family slot milta hai — ad-free videos, YouTube Music, aur background play sab included hai.",
  },
  {
    q: "Lovable AI aur Cursor AI kya hain?",
    a: "Lovable AI ek AI-powered app builder hai jo code likhne mein madad karta hai. Cursor AI ek advanced coding assistant hai. Dono developers aur startups ke liye ideal hain aur humse affordable rates par available hain.",
  },
  {
    q: "Kya mere existing Google account par Gemini activate ho jayega?",
    a: "Haan, bilkul! Google Gemini Pro aapke existing Gmail account par directly activate hota hai. Aapko naya account banane ki zaroorat nahi — apna personal Gmail share karein aur hum baaki handle karenge.",
  },
  {
    q: "Order karne ka tareeqa kya hai step by step?",
    a: "Step 1: Website par product choose karein. Step 2: 'Buy on WhatsApp' button click karein. Step 3: Apni details aur payment method batayein. Step 4: Payment karein. Step 5: 15 minute mein credentials ya activation link receive karein. Simple!",
  },
];

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return FAQS;
    const q = query.toLowerCase();
    return FAQS.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="faq" className="py-20 px-4 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-4xl">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30">
            Got Questions?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-3">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-body">
            Koi confusion? Yahan check karein pehle
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question..."
            className="w-full pl-12 pr-4 h-[50px] rounded-2xl bg-[#0d1117] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00ff88] transition-all"
          />
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden bg-[#0d1117] ${
                    isOpen ? "border-[#00ff88]/60 shadow-[0_0_20px_rgba(0,255,136,0.1)] border-l-4 border-l-[#00ff88]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left font-display font-extrabold text-base text-white flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className={isOpen ? "text-[#00ff88]" : "text-slate-400"} />
                      {faq.q}
                    </span>
                    <span className={`p-1.5 rounded-full border transition-transform ${isOpen ? "bg-[#00ff88]/20 border-[#00ff88]/40 text-[#00ff88]" : "bg-white/5 border-white/10 text-slate-400"}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-300 font-body leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-400 text-sm">
              No matching questions found. Chat with us on WhatsApp for immediate help!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}