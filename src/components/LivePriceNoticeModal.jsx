import { useState, useEffect } from "react";
import { 
  MessageCircle, 
  X, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  DollarSign,
  Lock,
  ExternalLink
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function LivePriceNoticeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Exactly 10 seconds as requested ("10 second ky badd anaa chiaye lazmi")
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    // Listen for manual open trigger if user clicks floating indicator
    const handleManualOpen = () => setShow(true);
    window.addEventListener("open-price-notice-modal", handleManualOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-price-notice-modal", handleManualOpen);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Prime Tools Hub! I want to confirm the current live USD rate & stock availability before placing my order."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <>
      <AnimatePresence>
        {show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/70 backdrop-blur-md transition-all">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-900/65 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.25)] text-left text-white overflow-hidden p-6 sm:p-8"
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}
            >
              {/* Dual Ambient Glow Orbs for Glass Effect */}
              <div className="absolute -top-24 -left-12 w-56 h-56 rounded-full bg-amber-500/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-12 w-60 h-60 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 opacity-90" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer backdrop-blur-md shadow-sm"
                aria-label="Close Notice"
              >
                <X size={17} />
              </button>

              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/35 text-amber-300 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span>Live Market Pricing Policy</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono hidden sm:inline-block">
                  USD Market Sync
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                Real-Time Price &amp; Stock Confirmation
              </h2>

              {/* Intro Note */}
              <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                To guarantee complete transparency and protect you from fluctuating exchange rates, please review our live pricing notice:
              </p>

              {/* Frosted Glass Cards */}
              <div className="mt-4 space-y-2.5">
                {/* Notice Item 1 */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex items-start gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle size={17} />
                  </div>
                  <div className="text-xs sm:text-[13px] leading-relaxed">
                    <span className="text-amber-300 font-bold block mb-0.5">
                      Slight Catalog Variance
                    </span>
                    <span className="text-slate-300 font-normal">
                      Due to rapid supplier updates and live market adjustments, prices displayed on the store catalog might slightly differ or have minor synchronization delays.
                    </span>
                  </div>
                </div>

                {/* Notice Item 2 */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex items-start gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="text-xs sm:text-[13px] leading-relaxed">
                    <span className="text-emerald-300 font-bold block mb-0.5">
                      Verify &amp; Lock Rate on WhatsApp
                    </span>
                    <span className="text-slate-300 font-normal">
                      For the 100% confirmed real-time rate, special bundle discounts, and instant 5–15 minute activation, message us directly on WhatsApp before payment.
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators Pill Bar */}
              <div className="mt-4 py-2 px-3 rounded-xl bg-white/[0.03] border border-white/8 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Zap size={13} className="text-cyan-400" />
                  Instant Digital Fulfillment
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Lock size={13} className="text-emerald-400" />
                  100% Replacement Warranty
                </span>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="flex-1 py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#00ff88] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,211,102,0.45)] cursor-pointer"
                >
                  <MessageCircle size={18} className="fill-slate-950" />
                  <span>Confirm Live Price on WhatsApp</span>
                  <ArrowRight size={15} />
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="py-3 px-4 rounded-2xl font-medium text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/12 transition-all cursor-pointer backdrop-blur-md"
                >
                  Continue Browsing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Re-Open Pill (In case closed and user wants to check again) */}
      {!show && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setShow(true)}
          className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-amber-500/40 hover:border-amber-400 backdrop-blur-xl text-[11px] font-semibold text-amber-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all cursor-pointer group"
          title="Click to view live market price statement"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
          </span>
          <span>Live Price Notice</span>
          <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </>
  );
}
