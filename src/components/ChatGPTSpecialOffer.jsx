import { useState, memo } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, CheckCircle2, MessageCircle, Sparkles, Star } from "lucide-react";
import { openChatGPTPlusOfferWhatsApp } from "@/lib/whatsapp";

const OPTIONS = [
  {
    id: "chatgpt-10d",
    title: "ChatGPT Plus",
    warranty: "10 Days Warranty",
    price: "Rs. 1,299",
    tag: "⚡ Fast Starter",
    desc: "10 Days Full Access with instant delivery & iCloud method setup.",
    color: "#10A37F",
  },
  {
    id: "chatgpt-1m",
    title: "ChatGPT Plus Premium",
    warranty: "1 Month Warranty",
    price: "Rs. 1,799",
    popular: true,
    tag: "👑 Best Value · 1 Month",
    desc: "30 Days Full Guaranteed Access, 2FA code setup & priority 24/7 support.",
    color: "#0D8A6D",
  },
];

const ChatGPTSpecialOffer = memo(function ChatGPTSpecialOffer() {
  const [selectedId, setSelectedId] = useState("chatgpt-1m");
  const selectedOption = OPTIONS.find((o) => o.id === selectedId) || OPTIONS[1];

  return (
    <section className="relative py-12 px-4 sm:px-6">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(16, 163, 127, 0.4) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-[1.5px] overflow-hidden ps-gradient-border-anim shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(16,163,127,0.25)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,163,127,0.9), rgba(139,92,246,0.8), rgba(236,72,153,0.8), rgba(16,163,127,0.9))",
          }}
        >
          <div
            className="w-full rounded-[22.5px] p-6 sm:p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(10, 15, 13, 0.96) 0%, rgba(5, 7, 6, 0.99) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >
            <div className="ps-glass-shine-line absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 text-xs font-bold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <Sparkles size={13} className="text-emerald-300" />
                FEATURED SPECIAL OFFER
              </div>

              <div className="flex items-center gap-1.5 text-xs text-white/85 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 font-medium">
                <Star size={13} className="text-amber-400 fill-amber-400" />
                <span>Trusted by 500+ Active Users</span>
              </div>
            </div>

            <div className="text-left mb-8">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex flex-wrap items-center gap-3">
                🔥 ChatGPT Plus Special Offer
              </h2>
              <p className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed font-body">
                Choose your preferred warranty duration and enjoy instant activation with guaranteed support on <span className="text-emerald-300 font-semibold">Prime Tools Hub</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {OPTIONS.map((opt) => {
                const isSelected = opt.id === selectedId;
                return (
                  <motion.div
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className={`relative rounded-2xl p-5 sm:p-6 cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "bg-emerald-950/50 border-emerald-500/90 shadow-[0_0_30px_rgba(16,163,127,0.35)]"
                        : "bg-white/[0.04] border-white/15 hover:border-white/30 hover:bg-white/[0.07]"
                    }`}
                  >
                    {opt.popular && (
                      <span className="absolute -top-3 right-4 bg-gradient-to-r from-emerald-400 to-teal-300 text-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {opt.tag}
                      </span>
                    )}

                    {!opt.popular && (
                      <span className="absolute -top-3 right-4 bg-white/15 border border-white/20 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        {opt.tag}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                          <Zap size={18} className="text-emerald-400" />
                          {opt.title}
                        </h3>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            isSelected
                              ? "border-emerald-400 bg-emerald-400"
                              : "border-white/40 bg-transparent"
                          }`}
                        >
                          {isSelected && <CheckCircle2 size={14} className="text-black" />}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                        <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/25">
                          {opt.warranty}
                        </span>
                      </div>

                      <p className="text-xs text-white/80 leading-relaxed mb-4 font-body">{opt.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-baseline justify-between">
                      <span className="text-xs text-white/70 font-medium">Price:</span>
                      <span className="font-display text-2xl font-black text-white tracking-tight">
                        {opt.price}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15">
              <div className="text-xs text-white/85 text-center sm:text-left font-body">
                Selected: <span className="text-white font-bold">{selectedOption.title}</span> ({selectedOption.warranty}) — <span className="text-emerald-400 font-bold">{selectedOption.price}</span>
              </div>

              <button
                onClick={() =>
                  openChatGPTPlusOfferWhatsApp(
                    selectedOption.title,
                    selectedOption.price,
                    selectedOption.warranty
                  )
                }
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-display font-extrabold text-sm text-black flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer min-h-[48px]"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle size={18} className="fill-black/10" />
                <span>Order Now via WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ChatGPTSpecialOffer;
