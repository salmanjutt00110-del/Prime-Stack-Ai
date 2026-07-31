import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloating() {
  const [showPopup, setShowPopup] = useState(false);
  const [closedManually, setClosedManually] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show popup after 6 seconds
    const timer = setTimeout(() => {
      if (!closedManually) {
        setShowPopup(true);
      }
    }, 6000);

    // Auto disappear after 15 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [closedManually]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I want to order a tool from Prime Tools Hub."
  )}`;

  return (
    <div
      className={`fixed right-4 lg:right-6 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] lg:bottom-6 z-50 flex flex-col items-end gap-3 pointer-events-auto transition-all duration-300 ${
        isScrolling ? "opacity-40 scale-90" : "opacity-100 scale-100"
      }`}
    >
      
      {/* POPUP CHAT BUBBLE */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-72 p-4 rounded-2xl bg-[#0d1117] border border-[#25D366]/40 shadow-2xl text-white relative font-body"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="text-xs font-bold leading-relaxed text-slate-100">
                👋 Hello! Need help choosing a tool? Chat with us on WhatsApp!
              </p>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setClosedManually(true);
                }}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                aria-label="Close popup"
              >
                <X size={14} />
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
                className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition-transform hover:scale-105 shadow-md"
              >
                <MessageCircle size={14} className="fill-slate-950" />
                Start Chat
              </a>
              <button
                onClick={() => {
                  setShowPopup(false);
                  setClosedManually(true);
                }}
                className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-300 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON WITH CONTINUOUS RING PULSE */}
      <div className="relative group">
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={30} className="fill-white stroke-none" />
        </a>

        {/* Hover Tooltip */}
        <div className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/15 text-xs font-extrabold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with us on WhatsApp
        </div>
      </div>

    </div>
  );
}
