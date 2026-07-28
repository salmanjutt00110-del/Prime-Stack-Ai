import { memo } from "react";
import { motion } from "framer-motion";
import { Gift, MessageCircle } from "lucide-react";
import { openBulkWhatsApp } from "@/lib/whatsapp";

const BulkPurchaseBanner = memo(function BulkPurchaseBanner({
  variant = "card",
  productName = "",
}) {
  if (variant === "compact" || variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-[1.5px] overflow-hidden my-4 group cursor-pointer"
        onClick={() => openBulkWhatsApp("5+", productName ? `Inquiring alongside ${productName}` : "")}
        style={{
          background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(59,130,246,0.8))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
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
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Gift size={20} className="text-purple-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  🎉 BUY MORE SAVE MORE
                </span>
                <span className="text-xs font-semibold text-white/90">Buy 2 (10% OFF) | Buy 5 (15% OFF) | Buy 10+ (20% OFF)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Exact reference layout for Homepage "BUY MORE SAVE MORE" banner
  return (
    <section className="relative py-12 px-4 sm:px-6 z-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.5) 100%)",
          }}
        >
          <div
            className="w-full rounded-[22.5px] p-6 sm:p-10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            style={{
              background: "linear-gradient(135deg, rgba(10, 10, 20, 0.97) 0%, rgba(5, 5, 12, 0.99) 100%)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Left Column: Gift Icon & Title */}
            <div className="lg:col-span-4 flex items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-purple-500/20 border border-purple-500/35 flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                <Gift size={44} className="text-purple-300 animate-pulse" />
              </div>

              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-none uppercase">
                  BUY MORE <br />
                  <span className="ps-grad-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    SAVE MORE
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-body">
                  Special bulk discounts for resellers, teams, &amp; agency orders.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Tier Discount Glass Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Buy 2 */}
              <div
                onClick={() => openBulkWhatsApp("Buy 2 Accounts")}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.06] transition-all cursor-pointer text-center group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-300 block mb-1">Buy 2</span>
                  <span className="text-[11px] text-slate-400 block mb-2">Get Up To</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    10% OFF
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-white/10 text-[11px] font-extrabold text-purple-400 flex items-center justify-center gap-1">
                  <MessageCircle size={13} />
                  <span>Claim Bulk Rate</span>
                </div>
              </div>

              {/* Buy 5 */}
              <div
                onClick={() => openBulkWhatsApp("Buy 5 Accounts")}
                className="p-5 rounded-2xl bg-white/[0.03] border border-purple-500/30 hover:border-purple-500/70 hover:bg-purple-500/10 transition-all cursor-pointer text-center group flex flex-col justify-between relative shadow-[0_0_25px_rgba(139,92,246,0.2)]"
              >
                <div>
                  <span className="text-xs font-bold text-purple-300 block mb-1">Buy 5</span>
                  <span className="text-[11px] text-slate-400 block mb-2">Get Up To</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    15% OFF
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-purple-500/20 text-[11px] font-extrabold text-purple-300 flex items-center justify-center gap-1">
                  <MessageCircle size={13} />
                  <span>Claim Bulk Rate</span>
                </div>
              </div>

              {/* Buy 10+ */}
              <div
                onClick={() => openBulkWhatsApp("Buy 10+ Accounts")}
                className="p-5 rounded-2xl bg-white/[0.03] border border-blue-500/30 hover:border-blue-500/70 hover:bg-blue-500/10 transition-all cursor-pointer text-center group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-300 block mb-1">Buy 10+</span>
                  <span className="text-[11px] text-slate-400 block mb-2">Get Up To</span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    20% OFF
                  </span>
                </div>
                <div className="mt-4 pt-2 border-t border-blue-500/20 text-[11px] font-extrabold text-blue-300 flex items-center justify-center gap-1">
                  <MessageCircle size={13} />
                  <span>Claim Bulk Rate</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default BulkPurchaseBanner;
