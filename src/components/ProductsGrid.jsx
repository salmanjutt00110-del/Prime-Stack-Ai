import { useMemo, useState, useEffect } from "react";
import { 
  Search, 
  X,
  Award,
  Headphones,
  RefreshCw,
  Zap,
  ArrowUpDown,
  ShieldCheck,
  Globe,
  ShoppingCart,
  Check,
  Bell,
  LayoutGrid
} from "lucide-react";
import { ALL_PRODUCTS, BRAND } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CountdownTimer from "@/components/CountdownTimer";
import LazyImage from "@/components/LazyImage";
import { openWhatsApp } from "@/lib/whatsapp";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency } from "@/context/CurrencyContext";

const FILTER_PILLS = [
  { id: "all", label: "All Products", keyword: "" },
  { id: "chatgpt", label: "ChatGPT & AI", keyword: "chatgpt" },
  { id: "gemini", label: "Gemini & Google", keyword: "gemini" },
  { id: "design", label: "Canva & Design", keyword: "canva" },
  { id: "video", label: "CapCut & Video", keyword: "video" },
  { id: "coding", label: "Dev & Coding", keyword: "cursor" },
  { id: "productivity", label: "Productivity", keyword: "notion" },
  { id: "vpn", label: "VPN & Security", keyword: "vpn" },
  { id: "agency", label: "Bulk Deals", keyword: "agency" },
];

export default function ProductsGrid() {
  const navigate = useNavigate();
  const { formatPrice, countryFlag, currency, countryName } = useCurrency();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedProduct, setSelectedProduct] = useState(null); // Quick View Modal

  useEffect(() => {
    const handleMobileSearch = (e) => {
      if (typeof e.detail === "string") {
        setQuery(e.detail);
      }
    };
    window.addEventListener("mobile-search", handleMobileSearch);
    return () => window.removeEventListener("mobile-search", handleMobileSearch);
  }, []);

  const filteredProducts = useMemo(() => {
    let list = ALL_PRODUCTS.filter((p) => {
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

    if (sortBy === "price_asc") {
      list = [...list].sort((a, b) => {
        const pa = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
        const pb = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
        return pa - pb;
      });
    } else if (sortBy === "price_desc") {
      list = [...list].sort((a, b) => {
        const pa = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
        const pb = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
        return pb - pa;
      });
    }

    return list;
  }, [query, activeFilter, sortBy]);

  return (
    <section id="products" className="relative py-16 sm:py-24 px-3 sm:px-6 scroll-mt-20 overflow-hidden bg-[#04060f]">
      
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-radial from-blue-900/20 via-indigo-950/10 to-transparent blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-radial from-purple-900/20 via-slate-950/5 to-transparent blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* HEADER matching reference screenshot */}
        <div className="text-center space-y-3 mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-500/30 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-xl">
            <ShieldCheck size={14} className="text-blue-400" />
            <span>Premium Digital Products</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Premium Tools,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
              Premium Results
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 font-body max-w-xl mx-auto leading-relaxed font-medium">
            100% Official Accounts • Instant Delivery • Best Prices
          </p>
        </div>

        {/* TOP EXCLUSIVE FEATURED GEMINI PRO BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => navigate("/product/gemini-pro-18")}
          className="mb-10 p-6 sm:p-8 rounded-[24px] border border-blue-500/40 bg-gradient-to-r from-[#060a18] via-[#091129] to-[#110e2e] backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group hover:border-blue-400/80 transition-all relative overflow-hidden"
        >
          <div className="flex items-center gap-5 text-left relative z-10">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 p-2 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform"
              style={{
                background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f5f9 70%, #e2e8f0 100%)",
              }}
            >
              <img src={BRAND.gemini} alt="Google Gemini Pro 18 Months" className="w-11 h-11 sm:w-14 sm:h-14 object-contain filter drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-500/25 text-red-200 border border-red-500/40 animate-pulse">
                  ⚡ FLASH SALE
                </span>
                <span className="text-xs font-bold text-amber-300">🔥 #1 Top Deal</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Google Gemini Pro 18 Months — Only {formatPrice("Rs. 799")} <span className="text-sm font-normal line-through text-slate-400">({formatPrice("Rs. 1,599")})</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-body max-w-2xl">
                5TB Google One cloud storage, Veo AI Video Generator &amp; monthly credits directly on your Gmail.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
            <CountdownTimer compact targetPrice="Rs. 799" futurePrice="Rs. 1,599" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/product/gemini-pro-18");
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-display font-extrabold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl border border-blue-400/40 min-h-[44px]"
            >
              <span>Get {formatPrice("Rs. 799")} Deal</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>

        {/* SEARCH, SORTER & FILTERS BAR */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
              <input
                id="catalog-search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools (YouTube, CapCut, ChatGPT)..."
                className="w-full pl-11 pr-10 h-[46px] rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xl backdrop-blur-xl"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Price Sorter & Counter requested in Audio */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3">
              <span className="text-xs font-mono text-slate-400">
                Showing <strong className="text-white">{filteredProducts.length}</strong> Products
              </span>

              {/* Price Sorter Dropdown (Low Price, High Price, Recommended) */}
              <div className="flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-xl px-3 py-2 text-xs text-slate-200">
                <ArrowUpDown size={14} className="text-blue-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value="recommended" className="bg-[#060914] text-white">Sort: Recommended</option>
                  <option value="price_asc" className="bg-[#060914] text-white">Price: Low to High</option>
                  <option value="price_desc" className="bg-[#060914] text-white">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="flex items-center overflow-x-auto no-scrollbar snap-x sm:flex-wrap gap-2 pb-1 -mx-2 px-2 sm:mx-0">
            {FILTER_PILLS.map((pill) => {
              const active = activeFilter === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer min-h-[38px] shrink-0 snap-start flex items-center justify-center border ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-lg scale-[1.03]"
                      : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border-white/10"
                  }`}
                >
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RESPONSIVE PRODUCT GRID matching reference screenshot */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
              {filteredProducts.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  index={i}
                  priority={i < 4}
                  onQuickView={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>

            {/* VIEW ALL PRODUCTS PILL BUTTON matching reference screenshot */}
            <div className="flex justify-center mt-10 sm:mt-12">
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setQuery("");
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-full bg-[#0d1527] hover:bg-[#162340] border border-[#38bdf8]/40 text-white font-display font-extrabold text-xs sm:text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:scale-105 transition-all cursor-pointer"
              >
                <LayoutGrid className="text-[#38bdf8]" size={17} />
                <span>View All Products</span>
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 px-4 bg-white/[0.03] rounded-3xl border border-white/10 max-w-md mx-auto backdrop-blur-xl">
            <Search size={44} className="mx-auto text-slate-500 mb-3" />
            <h3 className="text-lg font-extrabold text-white font-display">No matching products found</h3>
            <p className="text-xs text-slate-400 mt-1 font-body">Try searching for another product or reset your filter.</p>
            <button
              onClick={() => { setQuery(""); setActiveFilter("all"); setSortBy("recommended"); }}
              className="mt-5 px-5 py-2.5 rounded-xl text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform cursor-pointer shadow-lg font-display"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* TRUST BADGES FOOTER */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Award className="text-blue-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">100% Official Accounts</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Verified Subscriptions</span>
          </div>

          <div className="flex flex-col items-center">
            <Zap className="text-yellow-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">Instant Delivery</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Minutes Setup</span>
          </div>

          <div className="flex flex-col items-center">
            <RefreshCw className="text-indigo-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">Replacement Warranty</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Full Guarantee Included</span>
          </div>

          <div className="flex flex-col items-center">
            <Headphones className="text-purple-400 mb-2" size={26} />
            <span className="text-xs font-bold text-white font-display">24/7 WhatsApp Support</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Fast Response</span>
          </div>
        </div>

      </div>

      {/* QUICK VIEW MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#060914] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] space-y-6 text-left max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 p-2.5 flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f5f9 70%, #e2e8f0 100%)",
                  }}
                >
                  <LazyImage src={selectedProduct.logo} alt={selectedProduct.name} width={64} height={64} className="w-full h-full object-contain filter drop-shadow-md" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      ⚡ {selectedProduct.duration || "Verified"}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      ★ 4.9 Rating
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">{selectedProduct.name}</h3>
                  <p className="text-xs text-slate-300">{selectedProduct.tagline}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">Product Description</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                  {selectedProduct.description}
                </p>
              </div>

              {selectedProduct.features && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/10">
                        <Check size={14} className="text-blue-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Price in {countryName}:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black font-display text-white">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    <span className="text-xs font-mono text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded border border-white/15">
                      {countryFlag} {currency}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const prodId = selectedProduct.id;
                      setSelectedProduct(null);
                      navigate(`/product/${prodId}`);
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 transition-all border border-white/15"
                  >
                    Full Page
                  </button>

                  <button
                    onClick={() => {
                      openWhatsApp(selectedProduct.name, selectedProduct.duration, selectedProduct.price);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg flex items-center justify-center gap-2 border border-blue-400/40 cursor-pointer"
                  >
                    <ShoppingCart size={16} />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}