import { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Gift, ArrowRight } from "lucide-react";
import { openBulkWhatsApp } from "@/lib/whatsapp";

/**
 * @type {React.NamedExoticComponent<{ variant?: "card" | "compact" | "popup" | "hero", productName?: string }>}
 */
const BulkPurchaseBanner = memo(function BulkPurchaseBanner({
  variant = "card", // "card" | "compact" | "popup" | "hero"
  productName = "",
}) {
  if (variant === "compact" || variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-[1px] overflow-hidden ps-gradient-border-anim my-4 group"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.8), rgba(139,92,246,0.6), rgba(16,163,127,0.8))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(245,158,11,0.15)",
        }}
      >
        <div
          className="w-full rounded-[15px] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{
            background: "linear-gradient(135deg, rgba(17, 14, 25, 0.95) 0%, rgba(9, 9, 14, 0.98) 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Gift size={18} className="text-amber-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  🎉 Bulk Offer
                </span>
                <span className="text-xs font-semibold text-white/90">Buy 5+ Items</span>
              </div>
              <p className="text-xs text-white/70 mt-0.5">
                Special discount for bulk buyers. Contact us on WhatsApp for a custom quotation.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBulkWhatsApp("5+", productName ? `Inquiring alongside ${productName}` : "")}
            className="px-4 py-2 rounded-xl text-xs font-bold text-black flex items-center gap-1.5 shrink-0 transition-all hover:scale-105 shadow-md cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #F59E0B, #10A37F)",
            }}
          >
            <span>Get Quote</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </motion.div>
    );
  }

  if (variant === "popup") {
    return (
      <div
        className="rounded-2xl p-4 my-3 relative overflow-hidden border border-amber-500/30"
        style={{
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(139, 92, 246, 0.1) 100%)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 25px rgba(245,158,11,0.15)",
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-xl">🎉</span>
          <div>
            <h4 className="font-display text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              Bulk Purchase Offer
              <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-amber-400" />
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Buying 5 or more products? You are eligible for a special bulk discount!
            </p>
            <button
              onClick={() => openBulkWhatsApp("5+", productName ? `Ordering ${productName}` : "")}
              className="mt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 underline underline-offset-4 cursor-pointer"
            >
              <MessageCircle size={13} />
              Ask for custom bulk quotation on WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default "card" variant for sections
  return (
    <section className="relative py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-[1.5px] overflow-hidden ps-gradient-border-anim shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(245,158,11,0.2)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,158,11,0.9), rgba(139,92,246,0.8), rgba(16,163,127,0.9))",
          }}
        >
          <div
            className="w-full rounded-[22.5px] p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(18, 14, 28, 0.95) 0%, rgba(8, 8, 12, 0.98) 100%)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
            }}
          >
            {/* Background shimmer */}
            <div className="ps-glass-shine-line absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

            <div className="flex items-center gap-4 sm:gap-6 text-left relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/25 to-violet-600/25 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 animate-pulse" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-extrabold text-[11px] uppercase tracking-wider mb-2">
                  <Sparkles size={12} className="text-amber-400" />
                  🎉 Bulk Purchase Offer
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Buy 5 or more products & get special bulk pricing
                </h3>

                <p className="mt-1 text-white/70 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Need multiple subscriptions or reseller deals? Contact us on WhatsApp for a custom quotation crafted specifically for your requirements.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <button
                onClick={() => openBulkWhatsApp("5+")}
                className="w-full md:w-auto px-7 py-3.5 rounded-2xl font-display font-extrabold text-sm text-black flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle size={18} />
                <span>Contact on WhatsApp for Quotation</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default BulkPurchaseBanner;
