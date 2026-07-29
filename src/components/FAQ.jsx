import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Search, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

const CATEGORIES = ["All", "Ordering & Payment", "Warranty & Safety", "Bulk & Support"];

const FAQS = [
  {
    category: "Ordering & Payment",
    q: "How do I place an order on Prime Tools Hub?",
    a: "Simply browse our catalog, pick your desired AI tool or service, and click 'Order on WhatsApp'. Your order details will auto-fill into a WhatsApp message. Hit send and our team will guide you through instant payment and setup.",
  },
  {
    category: "Ordering & Payment",
    q: "How fast is product delivery and account activation?",
    a: "Most products (such as ChatGPT Plus, Gemini Pro, CapCut Pro, Canva Pro, and VPNs) are activated within minutes after payment confirmation. Special agency services like TikTok Growth or custom website builds follow quick turnaround schedules.",
  },
  {
    category: "Ordering & Payment",
    q: "What payment methods do you accept?",
    a: "We accept EasyPaisa, JazzCash, Bank Account Transfers (HBL, Meezan, Allied, Raast), and international cards/USDT where needed. Payment details are provided directly on WhatsApp during order confirmation.",
  },
  {
    category: "Warranty & Safety",
    q: "Are these AI accounts genuine, safe, and legal?",
    a: "Yes, 100%. We only deal in legitimate, official invitation channels and verified subscription methods. Your privacy, personal Gmail, and account security are fully protected.",
  },
  {
    category: "Warranty & Safety",
    q: "What is your Replacement Warranty policy?",
    a: "Every product includes a dedicated replacement warranty for the full duration specified on the card. If you encounter any technical glitch or login issue, our WhatsApp support will replace or fix it immediately.",
  },
  {
    category: "Bulk & Support",
    q: "Do you offer wholesale bulk discounts for agencies and resellers?",
    a: "Yes! Purchasing 2 accounts gets an instant discount, purchasing 5 accounts gets 15% OFF + 1 FREE account, and purchasing 10+ accounts unlocks up to 35% wholesale reseller pricing + 2 FREE accounts.",
  },
  {
    category: "Ordering & Payment",
    q: "Can I renew my existing subscription with Prime Tools Hub?",
    a: "Yes, absolutely! You can renew your subscription with us prior to expiration to enjoy uninterrupted premium access without losing saved chats, projects, or history.",
  },
  {
    category: "Bulk & Support",
    q: "How can I contact Customer Support?",
    a: "You can reach our friendly support team directly via WhatsApp 24/7. We maintain rapid response times for all inquiries, technical setup assistance, and bulk quotations.",
  },
];

function AppleFaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden border transition-all duration-300 shadow-md backdrop-blur-xl"
      style={{
        background: open ? "rgba(20, 24, 40, 0.95)" : "rgba(15, 17, 28, 0.75)",
        borderColor: open ? "rgba(139, 92, 246, 0.4)" : "rgba(255, 255, 255, 0.08)",
        boxShadow: open ? "0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(139,92,246,0.15)" : "0 4px 15px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
      >
        <h3 className={`font-display tracking-tight transition-colors text-left ${open ? "text-cyan-300" : "text-white"}`}>
          {item.q}
        </h3>
        <div
          className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 ${
            open ? "bg-violet-600 text-white border-violet-500 rotate-180" : "bg-white/5 border-white/10 text-slate-300"
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t border-white/10 text-slate-300 font-body">
              {item.a}
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                  {item.category}
                </span>
                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold min-h-[36px]"
                >
                  <MessageCircle size={15} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCat = selectedCat === "All" || f.category === selectedCat;
    const matchesQuery = !searchQuery || f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#030712]">
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border bg-purple-500/15 border-purple-500/30 text-purple-300"
          >
            <HelpCircle size={15} className="text-purple-400" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Apple-Style <span className="ps-grad-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">FAQ Accordion</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-body">
            Everything you need to know about instant activations, replacement warranty, and payment methods.
          </p>

          {/* Search Bar in FAQ */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-white/40 pointer-events-none" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQ questions..."
                className="w-full pl-11 pr-4 h-[46px] rounded-2xl bg-white/[0.04] border border-white/12 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-purple-500/60 transition-all font-body backdrop-blur-md"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 min-h-[40px] flex items-center justify-center cursor-pointer border ${
                  selectedCat === cat
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-500 shadow-md scale-[1.03]"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((f, i) => (
              <AppleFaqItem key={f.q} item={f} index={i} />
            ))
          ) : (
            <div className="text-center py-10 text-slate-400 text-xs">
              No questions found matching your search.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}