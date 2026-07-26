import { useMemo, useState } from "react";
import { 
  Search, 
  X, 
  LayoutGrid, 
  Cpu, 
  Video, 
  Paintbrush, 
  CreditCard, 
  Shield, 
  Zap, 
  Flame,
  Rocket,
  Award,
  Headphones,
  RefreshCw
} from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

const CATEGORY_MAP = {
  all: null,
  ai: ["gemini-pro-18", "veo-3-video", "supergrok-3m-basic", "supergrok-3m-warranty", "supergrok-12m-basic", "supergrok-12m-premium", "chatgpt-plus-1m", "chatgpt-go-3m", "lovable-ai-100c"],
  "video-ai": ["veo-3-video", "capcut-pro-1m", "capcut-pro-admin-7s"],
  creator: ["capcut-pro-1m", "capcut-pro-admin-7s", "canva-pro-edu", "canva-pro-admin", "tiktok-growth-challenge", "youtube-premium-12m", "youtube-premium-3m", "youtube-premium-1m"],
  subs: ["youtube-premium-12m", "youtube-premium-3m", "youtube-premium-1m", "canva-pro-edu", "canva-pro-admin", "chatgpt-plus-1m", "gemini-pro-18", "lovable-ai-100c"],
  vpn: ["surfshark-vpn-1y", "surfshark-vpn-1m", "nordvpn-3m"],
  automation: ["lovable-ai-100c", "tiktok-growth-challenge", "chatgpt-go-3m"],
  trending: ["gemini-pro-18", "chatgpt-plus-1m", "canva-pro-edu", "veo-3-video", "supergrok-12m-premium"]
};

const IconMap = {
  Grid: LayoutGrid,
  Cpu: Cpu,
  Video: Video,
  Paintbrush: Paintbrush,
  CreditCard: CreditCard,
  Shield: Shield,
  Zap: Zap,
  Flame: Flame
};

export default function ProductsGrid() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t, isDark } = useLanguageTheme();

  const CATEGORIES = [
    { id: "all", label: t('cat_all', 'All Products'), icon: "Grid" },
    { id: "ai", label: t('cat_ai', 'AI Tools'), icon: "Cpu" },
    { id: "video-ai", label: t('cat_creative', 'Video & Creative AI'), icon: "Video" },
    { id: "creator", label: t('cat_creative', 'Creator Tools'), icon: "Paintbrush" },
    { id: "subs", label: t('cat_streaming', 'Subscriptions'), icon: "CreditCard" },
    { id: "vpn", label: t('cat_dev', 'VPN & Dev'), icon: "Shield" },
    { id: "automation", label: "Automation", icon: "Zap" },
    { id: "trending", label: "Trending", icon: "Flame" }
  ];

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS;

    // Filter by category
    if (selectedCategory !== "all") {
      const allowedIds = CATEGORY_MAP[selectedCategory] || [];
      list = list.filter((p) => allowedIds.includes(p.id));
    }

    // Filter by search query
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        [p.name, p.duration, p.tag, ...p.features].join(" ").toLowerCase().includes(q)
      );
    }
    
    return list;
  }, [selectedCategory, query]);

  return (
    <section 
      id="products" 
      className={`relative py-[120px] px-4 sm:px-6 overflow-hidden border-t scroll-mt-24 ${
        isDark ? "bg-[#030305] border-white/5" : "bg-slate-100/70 border-slate-200"
      }`}
    >
      <div className="mx-auto max-w-[1440px] relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-14 flex flex-col items-center">
          
          {/* Small Premium Glass Badge */}
          <motion.div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold border backdrop-blur-md cursor-pointer relative overflow-hidden group ${
              isDark 
                ? "border-white/15 bg-white/[0.05] text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]" 
                : "border-violet-200 bg-white text-violet-700 shadow-sm"
            }`}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="ps-shimmer absolute inset-0" />
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400" />
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent tracking-wider">
              ✨ {t('hero_marketplace_badge', 'PREMIUM COLLECTION')}
            </span>
          </motion.div>

          {/* Large Gradient Heading */}
          <h2 className={`mt-5 font-display font-black leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl text-center ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t('products_heading', 'Explore All Premium Tools & Accounts')}
          </h2>

          {/* Subtitle */}
          <motion.p
            className={`mt-4 text-xs sm:text-sm md:text-base max-w-[720px] leading-relaxed font-body text-center ${
              isDark ? "text-white/80" : "text-slate-700"
            }`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('products_subheading', 'Select from 30+ verified digital tools, AI models, and streaming subscriptions.')}
          </motion.p>

          {/* Search Box & Category Filters Row */}
          <div className="mt-10 flex flex-col lg:flex-row items-center gap-4 w-full max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto scrollbar-none pb-2 justify-start lg:justify-center">
            {/* Search Box */}
            <div className="relative shrink-0 w-full lg:w-80 p-[1.5px] rounded-[18px] overflow-hidden bg-gradient-to-r from-violet-500/30 to-pink-500/30 shadow-md">
              <div className={`relative w-full rounded-[17px] flex items-center px-4 py-2.5 min-h-[44px] ${
                isDark ? "bg-[#070709]" : "bg-white"
              }`}>
                <Search
                  size={15}
                  className={`mr-2.5 shrink-0 ${isDark ? "text-white/60" : "text-slate-500"}`}
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('products_search_ph', 'Search tools (e.g. Canva, ChatGPT, Netflix, CapCut)...')}
                  className={`w-full text-xs outline-none bg-transparent ${
                    isDark ? "text-white placeholder-white/50" : "text-slate-900 placeholder-slate-400"
                  }`}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className={`p-1 transition-colors shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center ${
                      isDark ? "text-white/60 hover:text-white" : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none w-full lg:w-auto shrink-0 pb-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const Icon = IconMap[cat.icon];
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 relative cursor-pointer border shrink-0 backdrop-blur-md min-h-[44px] ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 text-white border-purple-400 shadow-md"
                        : isDark
                          ? "bg-white/8 border-white/15 text-white/80 hover:text-white hover:bg-white/15"
                          : "bg-white border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-50 shadow-sm"
                    }`}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={14} className={isActive ? "text-white" : isDark ? "text-white/70" : "text-slate-500"} />}
                    <span>{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>

        {/* PRODUCT GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className={`text-sm ${isDark ? "text-white/70" : "text-slate-600"}`}>
              No products found for "{query}". Try a different search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory("all");
              }}
              className={`mt-4 px-5 py-2.5 rounded-full text-sm font-medium border transition-colors min-h-[44px] ${
                isDark ? "text-white border-white/20 hover:bg-white/10" : "text-slate-800 border-slate-300 hover:bg-slate-200"
              }`}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto px-2 sm:px-4">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} priority={i < 6} />
            ))}
          </div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
          className={`mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 p-6 rounded-3xl border ${
            isDark 
              ? "border-white/10 bg-[#07070a]/60 backdrop-blur-md" 
              : "border-slate-200 bg-white/90 shadow-lg backdrop-blur-md"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/25 shrink-0">
              <Rocket size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t('card_instant', 'Instant Delivery')}</span>
              <span className={`text-[10px] font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>100% fast & verified</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500/15 text-green-500 border border-green-500/25 shrink-0">
              <Shield size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t('card_verified', '100% Guaranteed')}</span>
              <span className={`text-[10px] font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>Verified & genuine</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-500/15 text-purple-500 border border-purple-500/25 shrink-0">
              <Award size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Best Prices</span>
              <span className={`text-[10px] font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>Wholesale rates</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-500/15 text-pink-500 border border-pink-500/25 shrink-0">
              <Headphones size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t('stats_support', '24/7 Dedicated Support')}</span>
              <span className={`text-[10px] font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>Active WhatsApp support</span>
            </div>
          </div>

          <div className="flex items-center gap-3 col-span-2 md:col-span-1 justify-center md:justify-start">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/25 shrink-0">
              <RefreshCw size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t('stats_guarantee', 'Full Warranty')}</span>
              <span className={`text-[10px] font-medium ${isDark ? "text-white/70" : "text-slate-600"}`}>Instant replacement</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}