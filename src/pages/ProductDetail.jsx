import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, Check, ShieldCheck, PackageCheck, ListChecks,
  MessageCircle, AlertTriangle, ClipboardList, Star,
} from "lucide-react";
import { ALL_PRODUCTS, BUYING_STEPS } from "@/data/products";
import { openWhatsApp, WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import BulkPurchaseBanner from "@/components/BulkPurchaseBanner";
import { motion } from "framer-motion";

import { generateProductSchema } from "@/lib/seoSchema";

// Helper to convert hex to rgb for background blending
function hexToRgb(hex) {
  if (!hex) return null;
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function Section({ icon: Icon, title, accent, children }) {
  return (
    <motion.div
      className="rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{
        y: -4,
        borderColor: `${accent}40`,
        boxShadow: `0 12px 40px rgba(0,0,0,0.45), 0 0 25px ${accent}1a`,
        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Moving glass shine effect on hover */}
      <span className="ps-shimmer absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center gap-2.5 mb-4 relative z-10">
        <div
          className="flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
          style={{ width: 34, height: 34, background: `${accent}1a`, border: `1px solid ${accent}33` }}
        >
          <Icon size={17} style={{ color: accent }} />
        </div>
        <h3 className="font-display font-semibold text-white text-lg">{title}</h3>
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function List({ items, accent }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
          <Check size={16} className="mt-0.5 shrink-0" style={{ color: accent }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const productSchema = generateProductSchema(product);
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://primetoolshub.store/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://primetoolshub.store/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.name,
          "item": `https://primetoolshub.store/product/${product.id}`
        }
      ]
    };

    const schemaData = [productSchema, breadcrumbSchema].filter(Boolean);

    let scriptEl = document.getElementById("detail-product-jsonld");
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = "detail-product-jsonld";
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById("detail-product-jsonld");
      if (el) el.remove();
    };
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6">
        <Navbar />
        <main className="flex flex-col items-center justify-center pt-24 pb-12">
          <h1 className="font-display text-2xl font-bold mb-3">Product not found</h1>
          <p className="text-white/50 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 hover:bg-white/8 transition-colors"
          >
            Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const accent = product.color;
  const rgb = hexToRgb(accent) || [5, 5, 5];
  
  // Create dynamic dark background mixing black with product accent color
  const bgBaseColor = `rgb(${Math.max(4, Math.round(rgb[0] * 0.045))}, ${Math.max(4, Math.round(rgb[1] * 0.045))}, ${Math.max(4, Math.round(rgb[2] * 0.045))})`;

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      {/* Dynamic background container */}
      <motion.div
        className="absolute inset-0 -z-20 min-h-screen"
        animate={{ backgroundColor: bgBaseColor }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Interactive particles matching product color */}
      <div className="absolute inset-0 -z-10 opacity-35 pointer-events-none overflow-hidden">
        <ParticleBackground color={accent} count={45} />
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-x-0 top-0 h-[450px]"
          style={{
            background: `radial-gradient(ellipse 75% 55% at 50% 0%, ${accent}22, transparent 70%)`,
          }}
        />
        <motion.div
          className="absolute rounded-full blur-[130px]"
          style={{ width: 450, height: 450, top: 40, left: "55%" }}
          animate={{ background: `${accent}35` }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <main className="flex-grow pt-32 sm:pt-36">
        {/* back */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        {/* hero */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {product.tag && (
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
                style={{ background: `${accent}15`, borderColor: `${accent}30`, color: accent }}
              >
                {product.tag}
              </span>
            )}
            <h1 className="font-display font-bold text-white text-[clamp(2.1rem,5vw,3.2rem)] leading-[1.05] tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-white/60 text-base leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              {product.oldPrice && (
                <span className="text-white/35 text-lg line-through">{product.oldPrice}</span>
              )}
              <span className="text-3xl font-bold" style={{ color: accent }}>{product.price}</span>
              <span className="ps-pulse px-2.5 py-1 rounded-full text-xs font-bold bg-white/8 border border-white/15 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                10% OFF
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-white/50 text-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-1">Trusted by 500+ happy clients</span>
            </div>

            <div className="mt-7 flex items-center gap-3 flex-wrap">
              <motion.button
                onClick={() => openWhatsApp(product.name, product.duration, product.price)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 relative overflow-hidden active:scale-95 shadow-[0_4px_20px_rgba(139,92,246,0.2)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.35)] ps-gradient-border-anim"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                  backgroundSize: "200% 200%"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="ps-shimmer absolute inset-0" />
                <MessageCircle size={16} className="relative z-10 shrink-0" />
                <span className="relative z-10">Buy on WhatsApp</span>
              </motion.button>
              <a
                href="#details"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                View Details
              </a>
            </div>

            {/* Bulk Purchase Offer Callout */}
            <BulkPurchaseBanner variant="compact" productName={product.name} />
          </motion.div>

          {/* logo card */}
          <div className="flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 rounded-[2rem] blur-[60px]" style={{ background: `${accent}40` }} />
              <div
                className="ps-float relative flex items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 60px ${accent}20`,
                }}
              >
                <span className="ps-shimmer absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden" />
                 <img
                  src={product.logo}
                  alt={product.name}
                  className="relative w-[76%] h-[76%] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* key features strip */}
        <motion.div
          className="mx-auto max-w-5xl px-4 sm:px-6 pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl p-5"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            <Stat icon={PackageCheck} label="Duration" value={product.duration} accent={accent} />
            <Stat icon={ShieldCheck} label="Warranty" value={product.warrantyPolicy[0]} accent={accent} small />
            <Stat icon={ListChecks} label="Features" value={`${product.features.length} included`} accent={accent} />
            <Stat icon={MessageCircle} label="Delivery" value="WhatsApp" accent={accent} />
          </div>
        </motion.div>

        {/* detail sections */}
        <div id="details" className="mx-auto max-w-5xl px-4 sm:px-6 py-6 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Section icon={ListChecks} title="Key Features" accent={accent}>
              <List items={product.features} accent={accent} />
            </Section>
            <Section icon={PackageCheck} title="What's Included" accent={accent}>
              <List items={product.whatsIncluded} accent={accent} />
            </Section>
          </div>

          {product.requirements && product.requirements.length > 0 && (
            <div>
              <Section icon={ClipboardList} title="Requirements" accent={accent}>
                <List items={product.requirements} accent={accent} />
              </Section>
            </div>
          )}

          <div>
            <Section icon={AlertTriangle} title="Terms of Use" accent={accent}>
              <List items={product.termsOfUse} accent={accent} />
            </Section>
          </div>

          <div>
            <Section icon={ShieldCheck} title="Warranty & Support Policy" accent={accent}>
              <List items={product.warrantyPolicy} accent={accent} />
            </Section>
          </div>

          {/* buying instructions */}
          <motion.div
            className="rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(24px)",
            }}
            whileHover={{
              y: -3,
              borderColor: `${accent}35`,
              boxShadow: `0 12px 40px rgba(0,0,0,0.35), 0 0 20px ${accent}10`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="ps-shimmer absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="font-display font-semibold text-white text-lg mb-5 relative z-10">How to Buy This Product</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {BUYING_STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="relative rounded-xl p-4 transition-all duration-300 hover:bg-white/5 border border-white/5"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="absolute top-3 right-4 font-display font-bold text-3xl text-white/5">{i + 1}</div>
                  <div className="text-sm font-semibold text-white mb-1">{s.title}</div>
                  <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* bottom CTA */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-12">
          <motion.div
            className="rounded-2xl p-8 text-center relative overflow-hidden group transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${accent}1a, rgba(139,92,246,0.08))`,
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(24px)",
            }}
            whileHover={{
              borderColor: `${accent}40`,
              boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 30px ${accent}1a`,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="ps-shimmer absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl relative z-10">
              Ready to get {product.name}?
            </h3>
            <p className="mt-2 text-white/60 text-sm max-w-md mx-auto relative z-10">
              Order now on WhatsApp — your product details are pre-filled. Pay, activate, and start using premium access.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 flex-wrap relative z-10">
              <motion.button
                onClick={() => openWhatsApp(product.name, product.duration, product.price)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 relative overflow-hidden active:scale-95 shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_6px_30px_rgba(139,92,246,0.4)] ps-gradient-border-anim"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                  backgroundSize: "200% 200%"
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="ps-shimmer absolute inset-0" />
                <MessageCircle size={16} className="relative z-10 shrink-0" />
                <span className="relative z-10">Buy on WhatsApp</span>
              </motion.button>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/12 hover:bg-white/8 transition-all hover:scale-[1.02]"
              >
                Ask a Question
              </a>
            </div>
            <p className="mt-4 text-white/30 text-xs relative z-10">WhatsApp: +{WHATSAPP_NUMBER}</p>
          </motion.div>
        </div>

        {/* explore more */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 text-center">
          <Link to="/#products" className="text-sm text-white/60 hover:text-white transition-colors">
            ← Explore more products
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Stat({ icon: Icon, label, value, accent, small }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={18} style={{ color: accent }} className="shrink-0" />
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wide text-white/40">{label}</div>
        <div className={`text-white font-medium ${small ? "text-xs truncate" : "text-sm"} truncate`}>{value}</div>
      </div>
    </div>
  );
}