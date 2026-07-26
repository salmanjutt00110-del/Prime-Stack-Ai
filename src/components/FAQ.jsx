import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

const CATEGORIES = ["All", "Ordering & Payment", "Warranty & Safety", "Bulk & Support"];

const FAQS = [
  {
    category: "Ordering & Payment",
    q: "How do I place an order?",
    a: "Simply browse our catalog, click 'Buy on WhatsApp' or 'Order Now' on any product card. Your order details will auto-fill in a WhatsApp message. Send it to our team and we'll guide you through quick payment and instant activation.",
  },
  {
    category: "Ordering & Payment",
    q: "How fast is product delivery & activation?",
    a: "Most products (such as ChatGPT Plus, Gemini Advanced, CapCut Pro, Canva Pro, and VPNs) are activated within minutes after payment confirmation. Special custom growth services like TikTok Growth Challenge may take up to 24 hours.",
  },
  {
    category: "Ordering & Payment",
    q: "What payment methods do you accept?",
    a: "We accept EasyPaisa, JazzCash, Bank Account Transfers, and select international payment methods. Once you place an order on WhatsApp, we share the exact payment details.",
  },
  {
    category: "Warranty & Safety",
    q: "Are these accounts genuine, safe, and legal?",
    a: "Yes, 100%. We only deal in legitimate, genuine accounts and official activation channels. Your privacy and data safety are fully protected.",
  },
  {
    category: "Warranty & Safety",
    q: "What if I face an issue during my subscription period?",
    a: "All our products come with a dedicated replacement warranty for the duration specified on the product card. If you experience any issue, simply reach out to our WhatsApp support and we will replace or resolve it immediately.",
  },
  {
    category: "Bulk & Support",
    q: "Do you offer bulk discounts for agencies, teams, or resellers?",
    a: "Yes! If you purchase 5 or more products (or require multi-user team seats), we offer exclusive custom bulk pricing. Contact us on WhatsApp for a personalized quotation.",
  },
  {
    category: "Ordering & Payment",
    q: "Can I renew my existing subscription through Prime Tools Hub?",
    a: "In most cases, yes! You can renew your subscription seamlessly with us at discounted renewal rates without losing your saved work or account history.",
  },
  {
    category: "Bulk & Support",
    q: "How can I contact 24/7 Customer Support?",
    a: "You can reach our friendly support team directly via WhatsApp anytime (24 hours a day, 7 days a week). We prioritize fast response times for all active customers.",
  },
];

function Item({ item, index }) {
  const [open, setOpen] = useState(false);
  const { isDark } = useLanguageTheme();

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm"
      style={{
        background: open 
          ? isDark ? "rgba(255,255,255,0.06)" : "rgba(241,245,249,0.9)"
          : isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
        borderColor: open 
          ? "rgba(139,92,246,0.4)" 
          : isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base min-h-[44px]"
      >
        <span className={`font-display tracking-tight ${
          open 
            ? "text-violet-500 font-bold" 
            : isDark ? "text-white" : "text-slate-900"
        }`}>
          {item.q}
        </span>
        <span className={`p-1.5 rounded-xl border shrink-0 transition-colors ${
          open 
            ? "bg-violet-500 text-white border-violet-500" 
            : isDark ? "bg-white/5 border-white/10 text-white/70" : "bg-slate-100 border-slate-300 text-slate-700"
        }`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className={`px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
              isDark ? "text-white/80 border-white/5" : "text-slate-700 border-slate-200"
            }`}>
              {item.a}
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono text-violet-500 uppercase tracking-wider font-bold">
                  {item.category}
                </span>
                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="keep-white inline-flex items-center gap-1.5 text-xs text-emerald-500 hover:text-emerald-600 font-semibold min-h-[36px]"
                >
                  <MessageCircle size={14} />
                  Ask on WhatsApp
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
  const { t, isDark } = useLanguageTheme();

  const filteredFaqs = selectedCat === "All" 
    ? FAQS 
    : FAQS.filter((f) => f.category === selectedCat);

  return (
    <section id="faq" className={`relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t ${
      isDark ? "bg-[#050505] border-white/5" : "bg-slate-50 border-slate-200"
    }`}>
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
              isDark ? "bg-violet-500/15 border-violet-500/30 text-violet-300" : "bg-violet-100 border-violet-300 text-violet-900"
            }`}
          >
            <HelpCircle size={14} className="text-violet-500" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <h2 className={`font-display font-bold text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            <Animated3DText text={t('faq_heading', 'Frequently Asked Questions')} variant="heading" />
          </h2>

          <p className={`mt-4 text-sm sm:text-base max-w-xl mx-auto font-body ${
            isDark ? "text-white/80" : "text-slate-700"
          }`}>
            Everything you need to know about our instant activations, replacement warranty, and payment methods.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center border ${
                  selectedCat === cat
                    ? "bg-violet-600 text-white border-violet-600 shadow-md scale-[1.03]"
                    : isDark
                      ? "bg-white/8 text-white/80 hover:text-white hover:bg-white/15 border-white/10"
                      : "bg-white text-slate-700 hover:text-slate-900 border-slate-300 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((f, i) => (
            <Item key={f.q} item={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}