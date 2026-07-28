import { memo, useState, useEffect } from "react";
import { Home, Grid, Sparkles, Gift, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

import { scrollToSection } from "@/lib/scroll";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "products", label: "Catalog", icon: Grid, href: "#products" },
  { id: "services", label: "Agency", icon: Sparkles, href: "#agency-services" },
  { id: "offers", label: "Deals", icon: Gift, href: "#special-offers" },
];

export default memo(function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["special-offers", "agency-services", "products", "home"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            if (sectionId === "home") setActiveTab("home");
            else if (sectionId === "products") setActiveTab("products");
            else if (sectionId === "agency-services") setActiveTab("services");
            else if (sectionId === "special-offers") setActiveTab("offers");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (item) => {
    setActiveTab(item.id);
    if (location.pathname !== "/") {
      navigate("/" + item.href);
      return;
    }

    window.history.pushState(null, "", item.href);
    scrollToSection(item.href);
  };

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden px-3 py-2 transition-all duration-300 pointer-events-auto"
      style={{
        background: "rgba(7, 8, 18, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className={`flex flex-col items-center justify-center py-1 px-3.5 rounded-2xl transition-all duration-300 min-w-[56px] min-h-[48px] cursor-pointer relative ${
                isActive ? "text-blue-400 font-bold" : "text-white/60 hover:text-white/90"
              }`}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-2xl -z-10 bg-blue-500/15 border border-blue-500/30"
                  style={{
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.25)",
                  }}
                />
              )}
              <Icon size={20} className={`transition-transform ${isActive ? "scale-110" : ""}`} />
              <span className="text-[10px] mt-1 tracking-tight">{item.label}</span>
            </button>
          );
        })}

        {/* WhatsApp Direct Floating Button */}
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3.5 rounded-2xl text-emerald-400 font-bold min-w-[56px] min-h-[48px] relative group"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-lg transition-transform active:scale-95"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
            }}
          >
            <MessageCircle size={18} />
          </div>
          <span className="text-[10px] mt-0.5 text-emerald-400 font-extrabold tracking-tight">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
});
