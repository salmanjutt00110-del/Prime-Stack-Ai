import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, Sparkles, MessageCircle, Award, Users } from "lucide-react";
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
    icon: Award,
    title: "Unmatched Market Prices",
    desc: "Direct bulk sourcing allows us to offer Pakistan & Global users premium subscriptions at fractions of retail prices.",
    color: "#10B981",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Dynamic Background Radial Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-violet-600/10 via-indigo-600/5 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-violet-500/30 bg-violet-500/10 text-violet-300 mb-4 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-violet-400 animate-pulse" />
            <span>ABOUT PRIME TOOLS HUB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight"
          >
            <Animated3DText text="Pakistan's Most Trusted Digital & AI Marketplace" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Prime Tools Hub empowers creators, students, developers, and businesses by offering instant, affordable access to world-class AI subscriptions and specialized digital services.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="ps-luxury-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-300"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${p.color}15`,
                      borderColor: `${p.color}35`,
                      color: p.color,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div
                  className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono tracking-wider uppercase font-bold flex items-center gap-1"
                  style={{ color: p.color }}
                >
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* EEAT Founder & Business Verification Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0d1117]/80 border border-white/10 text-left space-y-4"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                E-E-A-T VERIFIED BRAND &amp; FOUNDER STORY
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                Founded by Salman Jutt — Serving Pakistan Since 2022
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shrink-0">
              Verified 5,000+ Orders Delivered
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
            Prime Tools Hub was established in Lahore, Pakistan by <strong>Salman Jutt</strong> to address the severe international credit card payment barriers faced by local freelancers, content creators, software developers, and students. By establishing direct bulk licensing partnerships and localized PKR payment rails (JazzCash, EasyPaisa, Meezan, HBL), Prime Tools Hub makes global SaaS and AI subscriptions seamlessly accessible without PayPal or foreign transaction surcharges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-emerald-400 font-bold block mb-0.5">🔒 100% Verified Accounts</span>
              <span className="text-slate-400 text-[11px]">No trial scams or temporary links. Official team &amp; email invites only.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-blue-400 font-bold block mb-0.5">⚡ 15-Minute Activation</span>
              <span className="text-slate-400 text-[11px]">Instant delivery directly to your WhatsApp with full 2FA support.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-purple-400 font-bold block mb-0.5">🛡️ Full Replacement Warranty</span>
              <span className="text-slate-400 text-[11px]">Full support &amp; instant replacements for the entire plan duration.</span>
            </div>
          </div>
        </motion.div>

        {/* Trust Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-900/30 via-indigo-900/20 to-pink-900/30 border border-white/15 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Users size={26} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                Join 5,000+ Happy Customers & Creators
              </h4>
              <p className="text-xs sm:text-sm text-white/80">
                Reliable delivery, authentic subscriptions, and dedicated 24/7 post-purchase support.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-black flex items-center gap-2 shadow-lg hover:scale-105 transition-transform shrink-0 min-h-[44px]"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle size={18} />
            Chat with Us on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
