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
    a: "JazzCash, EasyPaisa, bank transfer, ya USDT se payment kar sakte hain. WhatsApp par batayein, hum details denge.",
  },
  {
    q: "Kitne waqt mein milega?",
    a: "Zyada tar 5–30 minute ke andar delivery ho jati hai. Busy hours mein max 2 ghante lag sakte hain.",
  },
  {
    q: "Agar koi masla aaye toh?",
    a: "Hum 30-day support dete hain. Koi bhi issue ho, WhatsApp karein — hum free mein fix karenge.",
  },
  {
    q: "Kya subscription renew hogi automatically?",
    a: "Nahi. Aapko renewal ke liye dobara WhatsApp karna hoga. Hum reminder bhi dete hain.",
  },
  {
    q: "Kya aap trustworthy hain? Fraud toh nahi?",
    a: "Hum 2+ saal se active hain, 1,200+ orders de chuke hain. Reviews dekh sakte hain WhatsApp par. Pehle chota tool try karein trust ke liye.",
  },
  {
    q: "Kya international customers order kar sakte hain?",
    a: "Haan! USDT ya card se pay karke international customers bhi order kar sakte hain.",
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