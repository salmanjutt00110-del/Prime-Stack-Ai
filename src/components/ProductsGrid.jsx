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

const CATEGORIES = [
  { id: "all", label: "All Products", icon: "Grid" },
  { id: "ai", label: "AI Tools", icon: "Cpu" },
  { id: "video-ai", label: "Video AI", icon: "Video" },
  { id: "creator", label: "Creator Tools", icon: "Paintbrush" },
  { id: "subs", label: "Subscriptions", icon: "CreditCard" },
  { id: "vpn", label: "VPN", icon: "Shield" },
  { id: "automation", label: "Automation", icon: "Zap" },
  { id: "trending", label: "Trending", icon: "Flame" }
];

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

export default function ProductsGrid() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      className="relative py-[140px] px-4 sm:px-6 overflow-hidden bg-[#030305] border-t border-white/5 scroll-mt-24"
    >
      {/* SVG Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Luxury Background - Single Subtle Aurora Glow (Performance Optimized) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 35%, rgba(139, 92, 246, 0.06) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* Small Premium Glass Badge */}
          <motion.div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold border border-white/15 bg-white/[0.05] text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] backdrop-blur-md cursor-pointer relative overflow-hidden group"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="ps-shimmer absolute inset-0" />
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400" />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent tracking-wider">
              ✨ PREMIUM COLLECTION
            </span>
          </motion.div>

          {/* Large Gradient Heading */}
          <h2 className="mt-5 font-display font-black leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl text-center text-white">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Premium AI Products
            </span>
          </h2>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-white/80 text-xs sm:text-sm md:text-base max-w-[720px] leading-relaxed font-body text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from our premium collection of AI tools, digital subscriptions, creator services, and business solutions.
          </motion.p>

          {/* Search Box & Category Filters Row */}
          <div className="mt-12 flex flex-col lg:flex-row items-center gap-4 w-full max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto scrollbar-none pb-2 justify-start lg:justify-center">
            {/* Search Box */}
            <div className="relative shrink-0 w-full lg:w-80 p-[1.5px] rounded-[18px] overflow-hidden bg-gradient-to-r from-white/15 to-white/10 focus-within:from-blue-500/40 focus-within:via-purple-500/40 focus-within:to-pink-500/40 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <div className="relative w-full rounded-[17px] bg-[#070709] flex items-center px-4 py-2.5 min-h-[44px]">
                <Search
                  size={15}
                  className="text-white/60 pointer-events-none mr-2.5 shrink-0"
                />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products, tools, services..."
                  className="w-full text-xs text-white placeholder-white/50 outline-none bg-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-white/60 hover:text-white p-1 transition-colors shrink-0 min-w-[32px] min-h-[32px] flex items-center justify-center"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none w-full lg:w-auto shrink-0 pb-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const Icon = IconMap[cat.icon];
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 relative cursor-pointer border shrink-0 backdrop-blur-md min-h-[44px] ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 border-purple-500/60 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                        : "bg-white/8 border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/15"
                    }`}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                      boxShadow: isActive 
                        ? "0 0 25px rgba(139, 92, 246, 0.35)"
                        : "0 0 20px rgba(255, 255, 255, 0.08)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={14} className={isActive ? "text-purple-400" : "text-white/70"} />}
                    <span>{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>

        {/* PRODUCT GRID - Mobile-first responsive spacing */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/70 text-sm">
              No products found for "{query}". Try a different search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-colors min-h-[44px]"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto px-4 sm:px-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} priority={i < 6} />
            ))}
          </div>
        )}

        {/* Trust/Feature Badges Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 p-6 rounded-3xl border border-white/10 bg-[#07070a]/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25 shrink-0">
              <Rocket size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className="text-xs font-bold text-white">Instant Delivery</span>
              <span className="text-[10px] text-white/70 font-medium">100% automatic delivery</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500/15 text-green-400 border border-green-500/25 shrink-0">
              <Shield size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className="text-xs font-bold text-white">Secure Payment</span>
              <span className="text-[10px] text-white/70 font-medium">SSL encrypted & safe</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/25 shrink-0">
              <Award size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className="text-xs font-bold text-white">Best Prices</span>
              <span className="text-[10px] text-white/70 font-medium">10% OFF on every product</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/25 shrink-0">
              <Headphones size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className="text-xs font-bold text-white">24/7 Support</span>
              <span className="text-[10px] text-white/70 font-medium">Always here to help you</span>
            </div>
          </div>
          <div className="flex items-center gap-3 col-span-2 md:col-span-1 justify-center md:justify-start">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 shrink-0">
              <RefreshCw size={16} />
            </div>
            <div className="flex flex-col text-left leading-tight font-body">
              <span className="text-xs font-bold text-white">Money Back</span>
              <span className="text-[10px] text-white/70 font-medium">7 days money back</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}