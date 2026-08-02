import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCTS } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { DOMAIN, generateBreadcrumbSchema } from "@/lib/seoSchema";
import { ChevronRight, Cpu, Layers, ShieldCheck, Zap, MessageCircle, FileText } from "lucide-react";

export default function HtmlSitemap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Categorize products
  const aiProducts = ALL_PRODUCTS.filter(p => 
    p.id.includes("chatgpt") || p.id.includes("gemini") || p.id.includes("veo") || p.id.includes("grok") || p.id.includes("lovable") || p.id.includes("heygen") || p.id.includes("notion")
  );

  const creatorProducts = ALL_PRODUCTS.filter(p => 
    p.id.includes("canva") || p.id.includes("capcut") || p.id.includes("tiktok") || p.id.includes("figma")
  );

  const vpnProducts = ALL_PRODUCTS.filter(p => 
    p.id.includes("surfshark") || p.id.includes("nord")
  );

  const otherProducts = ALL_PRODUCTS.filter(p => 
    p.id.includes("youtube")
  );

  const agencyServices = [
    { name: "Website Development (50% OFF Offer)", link: "/#agency-services" },
    { name: "Meta Ads (Facebook & Instagram Ads Scaling)", link: "/#agency-services" },
    { name: "TikTok Ads & Video Reels Editing", link: "/#agency-services" },
    { name: "Brand Identity & Vector Logo Design", link: "/#agency-services" },
    { name: "360Â° Social Media Management", link: "/#agency-services" },
  ];

  const corePages = [
    { name: "Home â€” Premium AI Marketplace", link: "/" },
    { name: "Complete Website SEO Guide (2026)", link: "/seo-guide" },
    { name: "Verified Customer Reviews & Proofs", link: "/reviews" },
    { name: "Bulk Purchase Discounts & Reseller Pricing", link: "/#bulk-offers" },
    { name: "Tiered Rewards & Free Gifts", link: "/#products" },
    { name: "Frequently Asked Questions (FAQ)", link: "/#faq" },
    { name: "Contact Support & Order Verification", link: "/#contact" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "HTML Sitemap", url: "/html-sitemap" }]);

  return (
    <div className="relative min-h-screen bg-[#02040a] text-white flex flex-col justify-between overflow-x-hidden">
      <SEOHead
        title="HTML Sitemap â€” Full Product & Page Index â€” Prime Tools Hub"
        description="Comprehensive HTML Sitemap for Prime Tools Hub. Easily navigate all premium AI tools, creator accounts, VPN subscriptions, agency services, and customer review pages."
        canonicalUrl={`${DOMAIN}/html-sitemap`}
        schemaJson={breadcrumbSchema}
      />
      <Navbar />

      <main id="main-content" className="flex-grow pt-32 sm:pt-36 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Visual Breadcrumb Navigation */}
          <Breadcrumb items={[{ name: "HTML Sitemap", url: "/html-sitemap" }]} />

          {/* Page Header */}
          <div className="mt-6 mb-12 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400 uppercase tracking-widest">
              Site Index &amp; Internal Link Navigation
            </span>
            <h1 className="mt-3 font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Prime Tools Hub â€” <span className="ps-grad-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">HTML Sitemap</span>
            </h1>
            <p className="mt-3 text-base text-slate-300 max-w-2xl font-body leading-relaxed">
              Complete hierarchical index of all product listings, digital agency services, verified review collections, and essential marketplace resources for users and search crawlers.
            </p>
          </div>

          {/* Grid of Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. AI Tools & Subscriptions */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Cpu size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">AI Tools &amp; Subscriptions</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                {aiProducts.map(p => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="flex items-center justify-between group text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        <ChevronRight size={14} className="text-purple-400 shrink-0" />
                        <span className="line-clamp-1">{p.name}</span>
                      </span>
                      <span className="text-[11px] font-mono text-purple-300/70 shrink-0">{p.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Creator & Design Tools */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                  <Layers size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">Creator &amp; Design Tools</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                {creatorProducts.map(p => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="flex items-center justify-between group text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        <ChevronRight size={14} className="text-pink-400 shrink-0" />
                        <span className="line-clamp-1">{p.name}</span>
                      </span>
                      <span className="text-[11px] font-mono text-pink-300/70 shrink-0">{p.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. VPN & Privacy Services */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">VPN &amp; Privacy Services</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                {vpnProducts.map(p => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="flex items-center justify-between group text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        <ChevronRight size={14} className="text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{p.name}</span>
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300/70 shrink-0">{p.price}</span>
                    </Link>
                  </li>
                ))}
                {otherProducts.map(p => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="flex items-center justify-between group text-slate-300 hover:text-white transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        <ChevronRight size={14} className="text-red-400 shrink-0" />
                        <span className="line-clamp-1">{p.name}</span>
                      </span>
                      <span className="text-[11px] font-mono text-red-300/70 shrink-0">{p.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Digital Agency Services */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Zap size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">Digital Agency Services</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                {agencyServices.map(s => (
                  <li key={s.name}>
                    <a
                      href={s.link}
                      className="flex items-center group text-slate-300 hover:text-white transition-colors"
                    >
                      <ChevronRight size={14} className="text-blue-400 shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform ml-1.5">{s.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Essential Pages & Resources */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <FileText size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">Essential Pages &amp; Resources</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                {corePages.map(cp => (
                  <li key={cp.name}>
                    <a
                      href={cp.link}
                      className="flex items-center group text-slate-300 hover:text-white transition-colors"
                    >
                      <ChevronRight size={14} className="text-emerald-400 shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform ml-1.5">{cp.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Local City Pages */}
            <div className="rounded-2xl p-6 border bg-white/[0.02] border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <MessageCircle size={20} />
                </div>
                <h2 className="font-display font-bold text-lg text-white">Local City Pages (Pakistan)</h2>
              </div>
              <ul className="space-y-3 font-body text-sm">
                <li>
                  <Link to="/lahore" className="flex items-center group text-slate-300 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-amber-400 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform ml-1.5">Lahore â€” AI Tools &amp; Subscriptions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/karachi" className="flex items-center group text-slate-300 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-amber-400 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform ml-1.5">Karachi â€” Fast Digital Delivery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/islamabad" className="flex items-center group text-slate-300 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-amber-400 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform ml-1.5">Islamabad &amp; Pindi â€” Subscriptions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faisalabad" className="flex items-center group text-slate-300 hover:text-white transition-colors">
                    <ChevronRight size={14} className="text-amber-400 shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform ml-1.5">Faisalabad â€” Affordable AI Tools</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
