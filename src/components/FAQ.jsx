import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How do I place an order?",
    a: "Simply browse the products, click 'Buy on WhatsApp' on any product, and your order details will be automatically filled into a WhatsApp message. Send it to us and we'll guide you through payment and activation.",
  },
  {
    q: "How fast is delivery?",
    a: "Most products are delivered instantly or within minutes after payment confirmation. Some activations (like TikTok Growth Challenge) may take longer due to processing requirements.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We'll share available payment options (bank transfer, EasyPaisa, JazzCash, etc.) on WhatsApp once you place your order. Payment is confirmed before activation.",
  },
  {
    q: "Do you offer warranties?",
    a: "Warranty terms vary by product. Some products include activation warranties or replacement warranties — check the warranty note on each product card for exact details.",
  },
  {
    q: "Are these accounts genuine and safe?",
    a: "Yes. We only deal in genuine premium accounts and legitimate activation methods. Follow the terms of use provided with each product to keep your access stable and secure.",
  },
];

function Item({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-xl overflow-hidden border transition-colors duration-300"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: open ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.07)",
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ borderColor: "rgba(139,92,246,0.25)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-white text-sm sm:text-base font-medium">
          {item.q}
        </span>
        <span className="shrink-0 text-white/60">
          {open ? <Minus size={18} /> : <Plus size={18} />}
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
            <p className="px-5 pb-4 text-white/55 text-sm leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <motion.span
            className="text-xs font-semibold tracking-widest text-violet-400 uppercase inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Questions
          </motion.span>
          <motion.h2
            className="mt-3 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked
          </motion.h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Item key={f.q} item={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}