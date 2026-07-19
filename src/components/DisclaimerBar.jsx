import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Helper to map brand theme colors dynamically
function getProductTheme(id) {
  if (!id) return null;
  const lowerId = id.toLowerCase();
  if (lowerId.includes("chatgpt")) return { from: "#10A37F", to: "#0D8A6D" };
  if (lowerId.includes("gemini")) return { from: "#4285F4", to: "#8B5CF6" };
  if (lowerId.includes("veo")) return { from: "#4285F4", to: "#EA4335" };
  if (lowerId.includes("capcut")) return { from: "#FE2C55", to: "#25F4EE" };
  if (lowerId.includes("canva")) return { from: "#7D2AE8", to: "#00C4CC" };
  if (lowerId.includes("grok")) return { from: "#1DA1F2", to: "#8B5CF6" };
  if (lowerId.includes("surfshark")) return { from: "#1C9FE8", to: "#22D3EE" };
  if (lowerId.includes("tiktok")) return { from: "#FE2C55", to: "#25F4EE" };
  return null;
}

export default function DisclaimerBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [themeColors, setThemeColors] = useState({
    from: "#60A5FA", // Default Blue
    via: "#8B5CF6",  // Default Purple
    to: "#EC4899",   // Default Pink
  });

  // Scroll detection to adjust top positioning matching the navbar height
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen to active route changes and hero showcase index updates
  useEffect(() => {
    // 1. If on product page, dynamically extract active product theme
    if (location.pathname.startsWith("/product/")) {
      const parts = location.pathname.split("/");
      const id = parts[parts.length - 1];
      const theme = getProductTheme(id);
      if (theme) {
        setThemeColors({
          from: theme.from,
          via: theme.to,
          to: theme.from,
        });
        return;
      }
    }

    // 2. Default to general multi-color gradient
    setThemeColors({
      from: "#60A5FA",
      via: "#8B5CF6",
      to: "#EC4899",
    });
  }, [location.pathname]);

  // Listen to custom hero slide change events
  useEffect(() => {
    const handleHeroProductChange = (e) => {
      // Only transition colors dynamically if not explicitly on a product details page
      if (!location.pathname.startsWith("/product/")) {
        const { color, color2 } = e.detail;
        setThemeColors({
          from: color,
          via: color2 || color,
          to: color,
        });
      }
    };

    window.addEventListener("hero-product-change", handleHeroProductChange);
    return () => {
      window.removeEventListener("hero-product-change", handleHeroProductChange);
    };
  }, [location.pathname]);

  const textSegment = (
    <span className="text-xs font-semibold text-white/80 tracking-wide whitespace-nowrap flex items-center">
      <span className="inline-block animate-pulse text-[11px] mr-1.5">⚠️</span>
      <span className="text-white/60 font-bold mr-1.5">Disclaimer:</span>
      Hamari services ki prices, duration, features aur availability market conditions, supplier updates aur platform policies ke mutabiq kisi bhi waqt tabdeel ho sakti hain. Hum website ko regularly update karte rehte hain taake aap ko latest information aur best rates mil saken. Order place karne se pehle latest price aur details zaroor verify karein.
    </span>
  );

  return (
    <>
      <div
        className="fixed inset-x-0 z-40 px-4 sm:px-6 transition-all duration-500 pointer-events-none"
        style={{ top: scrolled ? 51 : 63 }}
      >
        <div
          className="mx-auto max-w-7xl w-full h-9 rounded-full p-[1px] relative overflow-hidden transition-all duration-700 pointer-events-auto ps-gradient-border-anim"
          style={{
            background: `linear-gradient(90deg, ${themeColors.from}, ${themeColors.via}, ${themeColors.to})`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 4px 15px ${themeColors.from}1a`,
          }}
        >
          {/* Soft Ambient Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div
              className="absolute top-1/2 left-1/4 w-32 h-10 rounded-full blur-xl opacity-20 ps-float-particle-1"
              style={{ background: themeColors.from, transform: "translateY(-50%)" }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-32 h-10 rounded-full blur-xl opacity-15 ps-float-particle-2"
              style={{ background: themeColors.via, transform: "translateY(-50%)" }}
            />
          </div>

          {/* 8-second glass shine animation overlay */}
          <div className="ps-glass-shine-line absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] z-10 pointer-events-none" />

          {/* Glassmorphic body */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="w-full h-full rounded-full bg-[#050506]/90 backdrop-blur-[24px] flex items-center relative z-20 px-3 overflow-hidden cursor-pointer"
          >
            {/* Interactive "Important Note" Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white border border-white/10 hover:border-white/20 transition-all mr-3 shrink-0 cursor-pointer pointer-events-auto relative z-30 active:scale-95 bg-white/5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
              </span>
              Zaroori Note
            </button>

            {/* Marquee scroll zone */}
            <div className="w-full overflow-hidden relative select-none">
              <div className="flex w-max ps-animate-marquee gap-24 items-center">
                {textSegment}
                {textSegment}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Glassmorphic Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl p-[1px] overflow-hidden ps-gradient-border-anim"
              style={{
                background: `linear-gradient(135deg, ${themeColors.from}, ${themeColors.via}, ${themeColors.to})`,
                boxShadow: `0 30px 60px rgba(0, 0, 0, 0.85), 0 0 50px ${themeColors.from}20`,
              }}
            >
              <div className="w-full rounded-[23px] bg-[#070709] p-6 sm:p-8 relative overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-25"
                  style={{ background: themeColors.from }}
                />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    Zaroori Note / Important Disclaimer
                  </h3>
                </div>

                <div className="relative z-10 space-y-4">
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed font-semibold">
                    Hamari services ki prices, duration, features aur availability market conditions, supplier updates aur platform policies ke mutabiq kisi bhi waqt tabdeel ho sakti hain. Hum website ko regularly update karte rehte hain taake aap ko latest information aur best rates mil saken. Order place karne se pehle latest price aur details zaroor verify karein.
                  </p>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 leading-relaxed font-medium">
                    ⚠️ Order place karne se pehle agar aap ke paas koi query hai, toh aap direct WhatsApp par contact kar sakte hain. We are always active to guide you!
                  </div>
                </div>

                <div className="mt-8 flex justify-end relative z-10">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white/80 hover:text-white border border-white/10 hover:bg-white/5 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Samjh Gaya (Close)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
