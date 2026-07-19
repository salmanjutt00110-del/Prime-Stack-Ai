import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

export default function ProductsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) =>
      [p.name, p.duration, p.tag, ...p.features].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="products" className="relative py-[120px] px-4 sm:px-6 overflow-hidden">
      {/* Background ambient auroras */}
      <div className="absolute inset-0 -z-10 pointer-events-none ps-aurora w-full h-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER (Rebuilt from scratch) */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* Small Gradient Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border bg-white/5 border-white/10 text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-default"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              ✨ PREMIUM COLLECTION
            </span>
          </motion.div>

          {/* Gradient Heading */}
          <h2
            className="mt-6 font-display font-bold leading-[1.1] tracking-tight text-[clamp(2.2rem,5vw,3.2rem)] bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 bg-clip-text text-transparent cursor-default"
          >
            <Animated3DText text="Premium AI Tools & Digital Services" variant="heading" />
          </h2>

          {/* Subtitle */}
          <motion.p
            className="mt-5 text-white/60 text-base sm:text-lg max-w-[700px] leading-relaxed font-body"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from our premium collection of AI tools, creator services, subscriptions, and digital products with instant activation and trusted support.
          </motion.p>

          {/* Referral Reward Offer Banner */}
          <motion.div
            className="mt-6 p-5 rounded-2xl border text-xs sm:text-sm max-w-[700px] leading-relaxed relative overflow-hidden text-center cursor-default bg-white/5 border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 50%, rgba(236,72,153,0.06) 100%)",
              borderColor: "rgba(139, 92, 246, 0.15)",
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ scale: 1.01, borderColor: "rgba(139, 92, 246, 0.3)" }}
          >
            {/* Shimmer sweep */}
            <span className="ps-shimmer absolute inset-0" />
            <div className="flex items-center justify-center gap-2 flex-wrap text-white/90">
              <span className="text-base shrink-0">🎁</span>
              <span className="font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Referral Reward Offer:
              </span>
              <span>
                Invite <strong>5 friends</strong> to buy any subscription (Gemini, ChatGPT, Canva, etc.), share the purchase proofs with us on WhatsApp, and receive a <strong>18-Month Google Gemini Pro</strong> subscription completely <strong>FREE!</strong>
              </span>
            </div>
          </motion.div>

          {/* Search bar */}
          <motion.div
            className="mt-10 w-full max-w-md relative"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, features, duration..."
              className="w-full pl-11 pr-10 py-3.5 rounded-full text-sm text-white placeholder-white/35 outline-none transition-all duration-300 focus:ring-1 focus:ring-purple-500 border border-white/10 bg-white/5 backdrop-blur-md"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        </div>

        {/* PRODUCT GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/50 text-sm">
              No products found for "{query}". Try a different search.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/15 hover:bg-white/8 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[28px]">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}