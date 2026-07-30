import { Search, MessageCircle, Zap, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Choose Your Tool",
    icon: Search,
    text: "Browse our tools and select the plan that fits your needs and budget.",
    glow: "rgba(37, 99, 235, 0.4)",
  },
  {
    step: "02",
    title: "Send WhatsApp Message",
    icon: MessageCircle,
    text: "Click 'Order via WhatsApp', tell us which tool & plan you want.",
    glow: "rgba(37, 211, 102, 0.4)",
  },
  {
    step: "03",
    title: "Pay & Receive Instantly",
    icon: Zap,
    text: "Pay via JazzCash/EasyPaisa and receive your tool access in minutes.",
    glow: "rgba(245, 158, 11, 0.4)",
  },
];

export default function HowItWorks() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Prime Tools Hub! I want to start an order for a digital AI subscription."
  )}`;

  return (
    <section id="how-it-works" className="py-20 px-4 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl text-center">
        
        {/* SECTION TITLE & SUBTITLE */}
        <div className="mb-14">
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/30">
            Simple Process
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-3">
            🛒 Order in 3 Simple Steps
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-body">
            Har Pakistani ke liye asaan — No technical knowledge needed
          </p>
        </div>

        {/* 3 STEPS GRID / CONNECTED CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {STEPS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative rounded-2xl p-8 bg-[#0d1117] border border-white/10 flex flex-col items-center text-center shadow-2xl hover:border-cyan-500/40 transition-all group"
              >
                {/* Numbered Gradient Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl text-white shadow-xl mb-6 relative group-hover:scale-110 transition-transform"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #00ff88 100%)",
                  }}
                >
                  <IconComponent size={26} className="text-slate-950" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-950 border border-white/20 text-xs text-[#00ff88] font-mono flex items-center justify-center font-bold">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  {s.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FINAL CTA BUTTON */}
        <div className="mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-display font-black text-base text-slate-950 bg-[#00ff88] hover:bg-[#20ff95] shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all hover:scale-105"
          >
            <span>Start Now → Chat on WhatsApp</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}