import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles, MessageCircle, ShieldCheck, Award, CheckCircle2, ArrowRight } from "lucide-react";

const TIERS = [
  {
    id: "tier-2k",
    threshold: "Rs. 2,000+",
    title: "FREE Canva Pro",
    detail: "3 Years full premium access with Magic AI design tools & background remover.",
    icon: "🎨",
    badge: "Bonus Gift",
    color: "#EC4899",
    glow: "rgba(236, 72, 153, 0.25)",
    gradient: "from-pink-500/20 to-purple-500/10",
    border: "border-pink-500/40",
  },
  {
    id: "tier-3k",
    threshold: "Rs. 3,000+",
    title: "FREE Gemini Pro",
    detail: "18 Months access on your personal Google account + 5TB Cloud storage & Veo AI.",
    icon: "✨",
    badge: "Popular Gift",
    color: "#8B5CF6",
    glow: "rgba(139, 92, 246, 0.25)",
    gradient: "from-purple-500/20 to-blue-500/10",
    border: "border-purple-500/40",
  },
  {
    id: "tier-5k",
    threshold: "Rs. 5,000+",
    title: "FREE ChatGPT Plus",
    detail: "Full ChatGPT Plus subscription with instant 2FA setup & stable access.",
    icon: "⚡",
    badge: "Pro Choice",
    color: "#10A37F",
    glow: "rgba(16, 163, 127, 0.25)",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/40",
  },
  {
    id: "tier-10k",
    threshold: "Rs. 10,000+",
    title: "DOUBLE GIFT: ChatGPT Plus + Gemini Pro",
    detail: "Get BOTH ChatGPT Plus (1M) and Google Gemini Pro (18M) completely FREE!",
    icon: "👑",
    badge: "Ultimate VIP Bundle",
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.35)",
    gradient: "from-amber-500/25 via-purple-500/20 to-emerald-500/25",
    border: "border-amber-500/60",
    highlight: true,
  },
];

const TieredRewardsBanner = memo(function TieredRewardsBanner() {
  const [selectedTier, setSelectedTier] = useState("tier-10k");

  const handleClaimOffer = (tier) => {
    const message = `Hi Prime Tools Hub, I am interested in the special offer: Order threshold ${tier.threshold} to claim ${tier.title}. Please guide me!`;
    const url = `https://wa.me/923227157125?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleResellerClick = () => {
    const message = `Hi Prime Tools Hub, I am a Reseller / Agency Owner and I want to get special wholesale discounts & VIP dedicated handling for bulk orders.`;
    const url = `https://wa.me/923227157125?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="special-offers" className="relative py-16 px-4 sm:px-6 overflow-hidden bg-[#040407]">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-purple-900/15 via-blue-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-amber-500/15 border border-amber-500/35 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] mb-4"
          >
            <Gift size={14} className="text-amber-400 animate-bounce" />
            <span>EXCLUSIVE GIFT REWARDS & RESELLER DEALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight"
          >
            Spend More,{" "}
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get Premium AI Tools FREE!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-white/75 text-sm sm:text-base max-w-2xl mx-auto font-body"
          >
            Every order unlocks instant free gifts! Choose your purchase amount tier below to automatically claim your bonus premium subscription.
          </motion.p>
        </div>

        {/* TIERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TIERS.map((t, idx) => {
            const isSelected = selectedTier === t.id;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelectedTier(t.id)}
                className={`relative rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ps-glass-reflection ${
                  t.highlight
                    ? "bg-gradient-to-b from-amber-500/15 via-[#0e0a1a] to-[#08080f] border-2 border-amber-500/60 shadow-[0_0_40px_rgba(245,158,11,0.25)]"
                    : "bg-[#090910]/80 border border-white/12 hover:border-white/25 hover:bg-white/[0.04]"
                }`}
                style={{
                  boxShadow: isSelected ? `0 15px 40px ${t.glow}` : "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                {/* Badge Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border"
                      style={{
                        background: `${t.color}20`,
                        borderColor: `${t.color}50`,
                        color: t.color,
                      }}
                    >
                      {t.badge}
                    </span>
                    <span className="text-2xl">{t.icon}</span>
                  </div>

                  {/* Threshold */}
                  <div className="mb-2">
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider block">Spend Amount</span>
                    <span className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                      {t.threshold}
                    </span>
                  </div>

                  {/* Free Gift Title */}
                  <div
                    className="p-3 rounded-2xl border my-3"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}15, transparent)`,
                      borderColor: `${t.color}35`,
                    }}
                  >
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest block">Included Free Gift</span>
                    <h4 className="text-base font-extrabold text-white mt-0.5" style={{ color: t.highlight ? "#FBBF24" : "#FFFFFF" }}>
                      {t.title}
                    </h4>
                  </div>

                  {/* Detail */}
                  <p className="text-white/70 text-xs leading-relaxed font-body">
                    {t.detail}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClaimOffer(t);
                    }}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                    }}
                  >
                    <Sparkles size={14} />
                    <span>Claim Free Gift on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RESELLER SPECIAL DISCOUNT & VIP HANDLING CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-[2px] overflow-hidden ps-gradient-border-anim shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.8), rgba(139,92,246,0.8), rgba(245,158,11,0.8))",
          }}
        >
          <div
            className="w-full rounded-[22px] p-6 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, rgba(14, 11, 24, 0.96) 0%, rgba(8, 8, 14, 0.98) 100%)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Ambient Shine */}
            <div className="ps-glass-shine-line absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left relative z-10 max-w-3xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-purple-500/20 to-amber-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(37,211,102,0.25)]">
                <Award size={36} className="text-emerald-400 animate-pulse" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 font-extrabold text-[11px] uppercase tracking-wider mb-2">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  🤝 SPECIAL PROGRAM FOR RESELLERS & AGENCIES
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Are You a Digital Reseller or Agency Owner?
                </h3>

                <p className="mt-2 text-white/80 text-xs sm:text-sm leading-relaxed font-body">
                  We offer <span className="text-emerald-400 font-bold">Exclusive Wholesale Discounts</span> and <span className="text-purple-300 font-bold">Dedicated VIP Priority Handling</span> for all digital resellers. Get maximum profit margins with fast 24/7 account delivery & guaranteed replacements.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/70 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 size={14} className="text-emerald-400" /> Special Reseller Rate Card
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <CheckCircle2 size={14} className="text-purple-400" /> Dedicated Account Manager
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <CheckCircle2 size={14} className="text-amber-400" /> Priority 24/7 Activation
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button
                onClick={handleResellerClick}
                className="w-full lg:w-auto px-8 py-4 rounded-2xl font-display font-extrabold text-sm text-black flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.4)] cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle size={20} />
                <span>Apply for Reseller Discount</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

export default TieredRewardsBanner;
