import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, Sparkles, CheckCircle2, MessageCircle, Award, Users } from "lucide-react";
import Animated3DText from "@/components/Animated3DText";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Access",
    desc: "We provide authentic, fully verified subscriptions and legitimate account setups. No temporary trial scams or unstable links.",
    color: "#3B82F6",
  },
  {
    icon: Zap,
    title: "Instant WhatsApp Activation",
    desc: "No waiting for hours. Once payment is confirmed, our dedicated support team delivers your login or invitation within minutes.",
    color: "#F59E0B",
  },
  {
    icon: Headphones,
    title: "24/7 Priority Support",
    desc: "Have a question or technical issue? Our WhatsApp customer care is available round the clock to ensure seamless usage.",
    color: "#8B5CF6",
  },
  {
    icon: Sparkles,
    title: "Unbeatable Rates & Bulk Offers",
    desc: "Get premium AI features at prices tailored for freelancers, students, agencies, and teams with special discounts for 5+ purchases.",
    color: "#EC4899",
  },
];

const STATS = [
  { value: "500+", label: "Happy Clients", icon: Users, color: "#3B82F6" },
  { value: "99.9%", label: "Satisfaction Rate", icon: Award, color: "#10A37F" },
  { value: "15+", label: "Premium AI Tools", icon: Sparkles, color: "#8B5CF6" },
  { value: "24/7", label: "WhatsApp Support", icon: Headphones, color: "#EC4899" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-500/15 border border-violet-500/30 text-violet-300 mb-4"
          >
            <Sparkles size={14} className="text-violet-400" />
            <span>Why Choose Prime Tools Hub</span>
          </motion.div>

          <h2 className="font-display font-bold text-[clamp(2rem,4.5vw,3.2rem)] text-white tracking-tight">
            <Animated3DText text="Pakistan's Premier AI & Digital Agency Marketplace" variant="heading" />
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-body">
            Empowering creators, freelancers, agencies, and businesses across Pakistan with instant access to top-tier AI tools & custom digital services.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05] group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{
                    background: `${p.color}15`,
                    borderColor: `${p.color}30`,
                    color: p.color,
                  }}
                >
                  <p.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-body">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center p-3">
              <s.icon size={20} className="mx-auto mb-2" style={{ color: s.color }} />
              <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-xs text-white/60 font-body mt-1 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="rounded-3xl p-8 sm:p-10 border border-violet-500/30 bg-gradient-to-r from-violet-900/30 via-purple-900/20 to-blue-900/30 text-center relative overflow-hidden">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
            Ready to Upgrade Your AI Workflow?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto font-body mb-6">
            Get instant activation within minutes. Order directly on WhatsApp for 24/7 dedicated support.
          </p>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 min-h-[44px]"
          >
            <MessageCircle size={16} />
            <span>Contact Support on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
