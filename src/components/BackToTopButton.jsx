import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer group min-w-[44px] min-h-[44px]"
          aria-label="Scroll to top of page"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform text-purple-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
