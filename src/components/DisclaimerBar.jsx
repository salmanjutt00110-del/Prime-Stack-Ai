import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
    <span className="text-xs font-semibold text-white/90 tracking-wide whitespace-nowrap flex items-center">
      {/* Small Animated Pulse Icon */}
      <span className="relative flex h-2 w-2 mr-2">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ backgroundColor: themeColors.from }}
        />
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: themeColors.from }}
        />
      </span>
      {/* Highlighted Disclaimer with gradient */}
      <span
        className="bg-gradient-to-r bg-clip-text text-transparent font-black tracking-wider uppercase mr-2"
        style={{ backgroundImage: `linear-gradient(90deg, ${themeColors.from}, ${themeColors.via})` }}
      >
        Disclaimer:
      </span>
      Hamari services ki prices, duration, features aur availability market conditions, supplier updates aur platform policies ke mutabiq kisi bhi waqt tabdeel ho sakti hain. Hum website ko regularly update karte rehte hain taake aap ko latest information aur best rates mil saken. Order place karne se pehle latest price aur details zaroor verify karein.
    </span>
  );

  return (
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
        <div className="w-full h-full rounded-full bg-[#050506]/90 backdrop-blur-[24px] flex items-center relative z-20 px-4 overflow-hidden">
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
  );
}
