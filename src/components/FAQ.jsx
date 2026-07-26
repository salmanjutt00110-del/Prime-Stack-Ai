import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

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

function Item({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 shadow-sm bg-white/[0.03]"
      style={{
        borderColor: open ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.09)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base min-h-[44px]"
      >
        <span className={`font-display tracking-tight ${open ? "text-violet-400 font-bold" : "text-white"}`}>
          {item.q}
        </span>
        <span className={`p-1.5 rounded-xl border shrink-0 transition-colors ${
          open ? "bg-violet-500 text-white border-violet-500" : "bg-white/5 border-white/10 text-white/70"
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
            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t border-white/5 text-white/80">
              {item.a}
              <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-wider font-bold">
                  {item.category}
                </span>
                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold min-h-[36px]"
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

  const filteredFaqs = selectedCat === "All" 
    ? FAQS 
    : FAQS.filter((f) => f.category === selectedCat);

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border bg-violet-500/15 border-violet-500/30 text-violet-300"
          >
            <HelpCircle size={14} className="text-violet-400" />
            <span>Got Questions? We Have Answers</span>
          </motion.div>

          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.2rem)] text-white tracking-tight">
            <Animated3DText text="Frequently Asked Questions" variant="heading" />
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-body">
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
                    : "bg-white/8 text-white/80 hover:text-white hover:bg-white/15 border-white/10"
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