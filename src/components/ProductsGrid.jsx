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

const CATEGORY_MAP = {
  all: null,
  ai: ["gemini-pro-18", "veo-3-video", "supergrok-3m-basic", "supergrok-3m-warranty", "supergrok-12m-basic", "supergrok-12m-premium", "chatgpt-plus-1m", "chatgpt-go-3m", "lovable-ai-100c", "lovable-ai-12m-pro-lite"],
  "video-ai": ["veo-3-video", "capcut-pro-1m", "capcut-pro-admin-7s", "canva-pro-edu", "canva-pro-admin"],
  creator: ["capcut-pro-1m", "capcut-pro-admin-7s", "canva-pro-edu", "canva-pro-admin", "tiktok-growth-challenge", "youtube-premium-12m", "youtube-premium-3m", "youtube-premium-1m"],
  subs: ["youtube-premium-12m", "youtube-premium-3m", "youtube-premium-1m", "canva-pro-edu", "canva-pro-admin", "chatgpt-plus-1m", "gemini-pro-18", "lovable-ai-100c", "lovable-ai-12m-pro-lite", "supergrok-12m-premium"],
  vpn: ["surfshark-vpn-1y", "surfshark-vpn-1m", "nordvpn-3m"],
  automation: ["lovable-ai-100c", "lovable-ai-12m-pro-lite", "tiktok-growth-challenge", "chatgpt-go-3m", "veo-3-video"],
  trending: ["gemini-pro-18", "chatgpt-plus-1m", "canva-pro-edu", "veo-3-video", "supergrok-12m-premium", "nordvpn-3m", "youtube-premium-12m"]
};

const CATEGORIES = [
  { id: "all", label: "All Products (20)", icon: LayoutGrid },
  { id: "ai", label: "AI Tools", icon: Cpu },
  { id: "video-ai", label: "Video & Creative AI", icon: Video },
  { id: "creator", label: "Creator Tools", icon: Paintbrush },
  { id: "subs", label: "Subscriptions", icon: CreditCard },
  { id: "vpn", label: "VPN & Security", icon: Shield },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "trending", label: "🔥 Trending Now", icon: Flame }
];

export default function ProductsGrid() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = 
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));

      const allowedIds = CATEGORY_MAP[selectedCategory];
      const matchesCategory = !allowedIds || allowedIds.includes(p.id);

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden border-t border-white/5 bg-[#050505]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-radial from-violet-900/10 via-indigo-900/5 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-violet-500/15 border border-violet-500/30 text-violet-300 mb-4"
          >
            <Rocket size={14} className="text-violet-400" />
            <span>INSTANT AUTO ACTIVATION & WARRANTY</span>
          </motion.div>

          <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.2rem)] text-white tracking-tight leading-tight">
            Explore <span className="ps-grad-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Premium Products</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-body">
            100% Genuine, tested, and instant delivery with dedicated replacement warranty.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-white/40 pointer-events-none" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ChatGPT, Gemini, CapCut, VPN, Canva..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all font-body shadow-inner"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all min-h-[36px]"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 min-h-[44px] ${
                  active
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-[1.03]"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white/5 rounded-3xl border border-white/10 max-w-md mx-auto">
            <Search size={40} className="mx-auto text-white/30 mb-3" />
            <h3 className="text-lg font-bold text-white font-display">No products found</h3>
            <p className="text-xs text-white/60 mt-1 font-body">Try searching with a different term or clear filter.</p>
            <button
              onClick={() => { setQuery(""); setSelectedCategory("all"); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Trust & Guarantee Badges Footer */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Award className="text-emerald-400 mb-2" size={24} />
            <span className="text-xs font-bold text-white font-display">100% Genuine Accounts</span>
            <span className="text-[11px] text-white/50 mt-0.5">Verified & Safe</span>
          </div>

          <div className="flex flex-col items-center">
            <Zap className="text-yellow-400 mb-2" size={24} />
            <span className="text-xs font-bold text-white font-display">Instant Delivery</span>
            <span className="text-[11px] text-white/50 mt-0.5">Minutes Activation</span>
          </div>

          <div className="flex flex-col items-center">
            <RefreshCw className="text-blue-400 mb-2" size={24} />
            <span className="text-xs font-bold text-white font-display">Replacement Warranty</span>
            <span className="text-[11px] text-white/50 mt-0.5">Full Period Safety</span>
          </div>

          <div className="flex flex-col items-center">
            <Headphones className="text-purple-400 mb-2" size={24} />
            <span className="text-xs font-bold text-white font-display">24/7 Support</span>
            <span className="text-[11px] text-white/50 mt-0.5">WhatsApp Active</span>
          </div>
        </div>

      </div>
    </section>
  );
}