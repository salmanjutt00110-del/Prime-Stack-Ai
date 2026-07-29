import { useMemo, useState } from "react";
import { 
  Search, 
  X, 
  Sparkles,
  Award,
  Headphones,
  RefreshCw,
  Zap
} from "lucide-react";
import { ALL_PRODUCTS, BRAND } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CountdownTimer from "@/components/CountdownTimer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCurrency } from "@/context/CurrencyContext";

const FILTER_PILLS = [
  { id: "all", label: "✨ All Catalog", keyword: "" },
  { id: "chatgpt", label: "ChatGPT", keyword: "chatgpt" },
  { id: "gemini", label: "Gemini", keyword: "gemini" },
  { id: "google", label: "Google", keyword: "google" },
  { id: "video", label: "Video", keyword: "video" },
  { id: "design", label: "Design", keyword: "canva" },
  { id: "productivity", label: "Productivity", keyword: "notion" },
  { id: "vpn", label: "VPN", keyword: "vpn" },
  { id: "coding", label: "Coding", keyword: "cursor" },
  { id: "writing", label: "Writing", keyword: "chatgpt" },
  { id: "ai-tools", label: "AI Tools", keyword: "grok" },
  { id: "agency", label: "Agency", keyword: "agency" },
];

export default function ProductsGrid() {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const q = query.trim().toLowerCase();
      const filterObj = FILTER_PILLS.find(f => f.id === activeFilter);
      const filterKw = filterObj?.keyword?.toLowerCase() || "";

      const matchesSearch = 
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.tagline && p.tagline.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.features && p.features.some((f) => f.toLowerCase().includes(q)));

      const matchesPill = 
        !filterKw ||
        p.id.toLowerCase().includes(filterKw) ||
        p.name.toLowerCase().includes(filterKw) ||
        (p.tagline && p.tagline.toLowerCase().includes(filterKw));

      return matchesSearch && matchesPill;
    });
  }, [query, activeFilter]);

  return (
    <section id="products" className="relative py-24 px-3 sm:px-6 scroll-mt-20 overflow-hidden border-t border-white/5 bg-[#02040a]">
      
      {/* Animated Aurora Gradient & Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-radial from-violet-900/15 via-indigo-900/10 to-transparent blur-[160px] ps-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-radial from-cyan-900/15 via-blue-900/5 to-transparent blur-[140px]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER ROW matching reference screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold text-lg">✦</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Featured <span className="ps-grad-text bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Products</span>
            </h2>
          </div>

          <a
            href="#products"
            className="text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>View All Products</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* TOP EXCLUSIVE FEATURED GEMINI PRO 18M FLASH SALE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => navigate("/product/gemini-pro-18")}
          className="mb-10 p-6 sm:p-8 rounded-3xl border border-blue-500/50 bg-gradient-to-r from-blue-950/90 via-indigo-950/85 to-purple-950/90 backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(66,133,244,0.25)] cursor-pointer group hover:border-blue-400/90 hover:shadow-[0_25px_60px_rgba(66,133,244,0.35)] transition-all relative overflow-hidden"
        >
          {/* Subtle Grid Noise & Shimmer Light Ray */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#4285F4_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="ps-glass-shine-line absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] pointer-events-none" />

          {/* Left Content Area */}
          <div className="flex items-center gap-5 text-left relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 border border-blue-400/50 flex items-center justify-center shrink-0 shadow-xl group-hover:scale-105 transition-transform">
              <img src={BRAND.gemini} alt="Google Gemini Pro 18 Months" className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="px-3 py-0.5 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-red-500/30 text-red-200 border border-red-500/50 animate-pulse">
                  ⚡ 24-HOUR LIMITED FLASH SALE
                </span>
                <span className="text-xs font-bold text-amber-300">🔥 Most Popular Deal</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Google Gemini Pro 18 Months — Only {formatPrice("Rs. 1,099")} <span className="text-sm font-normal line-through text-slate-400">({formatPrice("Rs. 1,599")})</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-body leading-relaxed max-w-2xl">
                Get 18 Months of full Gemini Pro AI access directly on your personal Gmail account. Includes 5TB Cloud Storage, Veo AI Video Generation &amp; monthly credits. Price increases after timer expires!
              </p>
            </div>
          </div>

          {/* Right Action & Timer Area */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
            <CountdownTimer compact targetPrice="Rs. 1,099" futurePrice="Rs. 1,599" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/product/gemini-pro-18");
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl min-h-[48px]"
            >
              <span>Get {formatPrice("Rs. 1,099")} Deal</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>

          {/* PREMIUM SEARCH BAR: Rounded Glass Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl mx-auto relative"
          >
            <div className="relative flex items-center">
              <label htmlFor="catalog-search-input" className="sr-only">
                Search products catalog
              </label>
              <Search className="absolute left-4 text-slate-400 pointer-events-none" size={20} />
              <input
                id="catalog-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ChatGPT, Gemini, Canva, CapCut..."
                className="w-full pl-12 pr-10 h-[52px] sm:h-[56px] rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/25 transition-all font-body shadow-2xl backdrop-blur-2xl"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search filter"
                  className="absolute right-3 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>

          {/* MODERN FILTER PILLS: Horizontal Swipe on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center overflow-x-auto no-scrollbar snap-x sm:flex-wrap sm:justify-center gap-2 max-w-4xl mx-auto pb-2 px-1 -mx-2 sm:mx-auto mb-10"
          >
            {FILTER_PILLS.map((pill) => {
              const active = activeFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer min-h-[42px] shrink-0 snap-start flex items-center justify-center border ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white border-violet-400 shadow-lg scale-[1.04]"
                      : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border-white/10"
                  }`}
                >
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </motion.div>

        {/* RESPONSIVE PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white/[0.03] rounded-3xl border border-white/10 max-w-md mx-auto backdrop-blur-xl">
            <Search size={44} className="mx-auto text-slate-500 mb-3" />
            <h3 className="text-lg font-extrabold text-white font-display">No matching products found</h3>
            <p className="text-xs text-slate-400 mt-1 font-body">Try refining your search keyword or clearing the filter.</p>
            <button
              onClick={() => { setQuery(""); setActiveFilter("all"); }}
              className="mt-5 px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* TRUST BADGES FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Award className="text-emerald-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">100% Genuine Accounts</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Verified Licenses Only</span>
          </div>

          <div className="flex flex-col items-center">
            <Zap className="text-yellow-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">Instant Delivery</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Minutes WhatsApp Setup</span>
          </div>

          <div className="flex flex-col items-center">
            <RefreshCw className="text-blue-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">Full Replacement Warranty</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Subscription Security</span>
          </div>

          <div className="flex flex-col items-center">
            <Headphones className="text-purple-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">24/7 Dedicated Support</span>
            <span className="text-[11px] text-slate-400 mt-0.5">WhatsApp Active</span>
          </div>
        </div>

      </div>
    </section>
  );
}