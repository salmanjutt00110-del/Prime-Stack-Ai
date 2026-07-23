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

function Item({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        background: open ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
        borderColor: open ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.09)",
        boxShadow: open ? "0 10px 30px rgba(139,92,246,0.12)" : "none",
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ borderColor: "rgba(139,92,246,0.3)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left min-h-[56px]"
        aria-expanded={open}
      >
        <span className="text-white text-base font-semibold tracking-tight">
          {item.q}
        </span>
        <span
          className="shrink-0 p-1.5 rounded-lg text-white/80 transition-transform duration-300 min-w-[32px] min-h-[32px] flex items-center justify-center"
          style={{ background: open ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.08)" }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 border-t border-white/8 pt-3">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-body">
                {item.a}
              </p>
              <div className="mt-3.5 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-mono text-violet-300 uppercase tracking-wider font-semibold">
                  Category: {item.category}
                </span>
                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 hover:underline font-semibold min-h-[44px]"
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 scroll-mt-24">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-violet-300 uppercase tracking-widest bg-violet-500/15 border border-violet-500/30 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </motion.div>

          <h2 className="font-display font-bold text-white text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
            <Animated3DText text="Frequently Asked Questions" variant="heading" />
          </h2>

          <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our products, ordering, warranties, and bulk offers.
          </p>

          {/* Category Filter Tabs with min 44px touch height */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-[1.03]"
                    : "bg-white/8 text-white/80 hover:text-white hover:bg-white/15 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((f, i) => (
            <Item key={f.q} item={f} index={i} />
          ))}
        </div>

        {/* Footer help callout */}
        <div className="mt-12 text-center text-xs sm:text-sm text-white/70 font-medium">
          Still have questions?{" "}
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 font-bold underline underline-offset-4"
          >
            Chat with us on WhatsApp for instant assistance →
          </a>
        </div>
      </div>
    </section>
  );
}