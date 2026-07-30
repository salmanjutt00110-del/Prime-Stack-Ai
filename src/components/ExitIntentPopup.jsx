import { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exit_popup_dismissed")) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("exit_popup_dismissed", "true");
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I saw the popup on Prime Tools Hub and need help choosing the right tool."
  )}`;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#0d1117] border border-[#25D366]/50 shadow-2xl text-center text-white overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#25D366]/20 blur-3xl pointer-events-none" />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] mb-4">
              <Sparkles size={28} className="animate-pulse" />
            </div>

            <h3 className="font-display font-black text-2xl text-white tracking-tight">
              Wait! Don't leave yet 👋
            </h3>

            <p className="text-sm text-slate-300 mt-2 font-body leading-relaxed">
              Chat with us on WhatsApp — we'll help you pick the right tool for your specific workflow at the best price!
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full py-3.5 rounded-2xl font-display font-black text-base text-slate-950 bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={18} className="fill-slate-950" />
                <span>💬 Open WhatsApp</span>
              </a>

              <button
                onClick={handleClose}
                className="text-xs text-slate-400 hover:text-white font-bold py-2 transition-colors cursor-pointer"
              >
                No thanks, I'll browse by myself
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
