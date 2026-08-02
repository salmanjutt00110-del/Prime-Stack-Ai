import { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  CheckCircle2, 
  Copy, 
  Check, 
  Globe, 
  FileCode, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Cpu, 
  Layers, 
  ArrowRight, 
  BarChart3, 
  Terminal, 
  ExternalLink, 
  Share2, 
  BookOpen, 
  Award, 
  Download, 
  RefreshCw, 
  AlertCircle, 
  Key, 
  FileText, 
  Layout, 
  ImageIcon, 
  Link as LinkIcon, 
  Bot,
  HelpCircle,
  TrendingUp,
  Sliders,
  Code2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { DOMAIN, generateSeoGuideSchema, generateBreadcrumbSchema } from "@/lib/seoSchema";
import { toast } from "sonner";

export default function SeoGuide() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");
  
  // Custom user domain state for prompt generator
  const [targetDomain, setTargetDomain] = useState("");
  const [targetTargetModel, setTargetModel] = useState("ChatGPT");

  // Search Console Verification state
  const [verifyDomain, setVerifyDomain] = useState("example.com");
  const [verificationMethod, setVerificationMethod] = useState("dns");

  // Schema Generator state
  const [schemaType, setSchemaType] = useState("Organization");
  const [schemaName, setSchemaName] = useState("My Brand");
  const [schemaUrl, setSchemaUrl] = useState("https://example.com");

  // Interactive Checklist State
  const [checklistItems, setChecklistItems] = useState([
    { id: "sitemap", label: "Sitemap.xml generated & submitted to GSC", category: "Technical", points: 10, checked: true },
    { id: "mobile", label: "Mobile responsiveness & touch target optimization", category: "Technical", points: 10, checked: true },
    { id: "https", label: "HTTPS / SSL Security certificate active", category: "Technical", points: 10, checked: true },
    { id: "speed", label: "Fast Loading Speed (Core Web Vitals LCP < 2.5s)", category: "Performance", points: 10, checked: true },
    { id: "meta", label: "Metadata added (Title 50-60 chars & Description 150-160)", category: "On-Page", points: 10, checked: true },
    { id: "headings", label: "Proper heading hierarchy used (Single H1, H2, H3)", category: "On-Page", points: 10, checked: true },
    { id: "links", label: "Internal linking structure & descriptive anchor text", category: "On-Page", points: 10, checked: false },
    { id: "images", label: "Images optimized with WebP, alt text & width/height", category: "Image SEO", points: 10, checked: true },
    { id: "schema", label: "Structured Data Schema JSON-LD injected", category: "Technical", points: 10, checked: true },
    { id: "robots", label: "Robots.txt created & linking sitemap.xml", category: "Technical", points: 10, checked: true }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate real-time SEO score
  const totalScore = useMemo(() => {
    return checklistItems.reduce((acc, item) => item.checked ? acc + item.points : acc, 0);
  }, [checklistItems]);

  const toggleChecklist = (id) => {
    setChecklistItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleCopyText = (text, type = "prompt") => {
    navigator.clipboard.writeText(text);
    if (type === "prompt") {
      setCopiedPrompt(true);
      toast.success("AI SEO Optimization Prompt copied to clipboard!");
      setTimeout(() => setCopiedPrompt(false), 2500);
    } else {
      setCopiedCode(type);
      toast.success(`${type} snippet copied!`);
      setTimeout(() => setCopiedCode(""), 2500);
    }
  };

  // Base prompt text provided in user request
  const rawPrompt = `You are an advanced SEO analyst, technical SEO engineer, conversion copywriter, semantic search optimizer, and Google ranking specialist.

Analyze my complete website thoroughly${targetDomain ? ` (${targetDomain})` : ""}.

Tasks:
- Analyze all pages
- Find high-ranking SEO keywords
- Generate SEO optimized headings and content
- Improve semantic relevance
- Suggest internal links
- Suggest schema markup
- Optimize readability
- Detect weak sections
- Improve technical SEO
- Rewrite AI-generic copy
- Generate metadata
- Suggest blog ideas
- Prioritize fixes by impact

Output:
- SEO audit summary
- Critical issues
- Keyword opportunities
- Technical SEO improvements
- Content improvements
- Final SEO score`;

  // Dynamic Schema Generator Output
  const generatedSchemaJson = useMemo(() => {
    if (schemaType === "Organization") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": schemaName || "My Brand",
        "url": schemaUrl || "https://example.com",
        "logo": `${schemaUrl || "https://example.com"}/logo.png`,
        "sameAs": [
          "https://twitter.com/mybrand",
          "https://facebook.com/mybrand"
        ]
      }, null, 2);
    } else if (schemaType === "WebSite") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": schemaName || "My Brand",
        "url": schemaUrl || "https://example.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${schemaUrl || "https://example.com"}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }, null, 2);
    } else if (schemaType === "Article") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": schemaName || "Comprehensive SEO Guide 2026",
        "url": schemaUrl || "https://example.com/article",
        "datePublished": "2026-01-01",
        "author": {
          "@type": "Organization",
          "name": "Prime Tools Hub"
        }
      }, null, 2);
    } else {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": schemaName || "Premium Digital Tool",
        "description": "Genuine digital subscription with instant activation.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "29.99",
          "availability": "https://schema.org/InStock"
        }
      }, null, 2);
    }
  }, [schemaType, schemaName, schemaUrl]);

  const guideSchema = generateSeoGuideSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "SEO Guide 2026", url: "/seo-guide" }]);
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [guideSchema, breadcrumbSchema]
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 font-sans selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      <SEOHead
        title="Complete Website SEO Guide (2026) — Rank #1 on Google & AI Engines"
        description="Comprehensive 2026 Website SEO Guide: Google Search Console registration, technical SEO checklist, image SEO, schema generator, and AI prompt for ranking on Google, Perplexity & ChatGPT."
        keywords="Website SEO Guide 2026, Google Search Console Setup, Technical SEO Checklist, AI SEO Prompt, Image SEO, Backlink Building, Schema Generator"
        canonicalUrl={`${DOMAIN}/seo-guide`}
        ogImage={`${DOMAIN}/prime-tools-logo.webp`}
        schemaJson={combinedSchema}
      />
      
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#0a0f1d] via-[#02040a] to-[#02040a]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-violet-600/20 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ name: "SEO Guide 2026", url: "/seo-guide" }]} />

          <div className="text-center mt-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00ff88] text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official 2026 Search Engine Standard</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
            >
              Complete Website <span className="bg-gradient-to-r from-[#00ff88] via-emerald-400 to-cyan-400 bg-clip-text text-transparent">SEO Guide</span> (2026)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              How to Rank Your Website on Google, Bing, Perplexity &amp; ChatGPT Search Engine Algorithms.
            </motion.p>

            {/* Quick Stat Pill Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto"
            >
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur text-left">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4" /> GSC Setup
                </div>
                <div className="text-sm font-bold text-white">DNS &amp; HTML Verify</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur text-left">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold mb-1">
                  <Zap className="w-4 h-4" /> Core Vitals
                </div>
                <div className="text-sm font-bold text-white">INP &lt; 200ms</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur text-left">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                  <Bot className="w-4 h-4" /> AI Prompt
                </div>
                <div className="text-sm font-bold text-white">ChatGPT &amp; Gemini</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur text-left">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <BarChart3 className="w-4 h-4" /> Live Auditor
                </div>
                <div className="text-sm font-bold text-[#00ff88]">{totalScore}/100 Score</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Sticky Table of Contents Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00ff88]" /> Guide Navigation
              </h3>

              <nav className="space-y-1 text-sm font-medium">
                <a href="#intro" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <Globe className="w-4 h-4 text-emerald-400" /> What is SEO?
                </a>
                <a href="#gsc-setup" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <Search className="w-4 h-4 text-cyan-400" /> Search Console
                </a>
                <a href="#technical-seo" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <Zap className="w-4 h-4 text-violet-400" /> Technical Essentials
                </a>
                <a href="#content-seo" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <FileText className="w-4 h-4 text-amber-400" /> Content &amp; Image SEO
                </a>
                <a href="#backlinks" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <LinkIcon className="w-4 h-4 text-pink-400" /> Backlinks Strategy
                </a>
                <a href="#ai-websites" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <Cpu className="w-4 h-4 text-indigo-400" /> Modern AI SEO
                </a>
                <a href="#ai-prompt" className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                  <Bot className="w-4 h-4" /> AI SEO Prompt
                </a>
                <a href="#audit-calculator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-amber-400 font-bold bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all">
                  <BarChart3 className="w-4 h-4" /> Live Score Auditor
                </a>
                <a href="#schema-generator" className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Schema Tool
                </a>
              </nav>

              {/* Realtime Score Widget */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Your Site SEO Score</span>
                  <span className="font-bold text-[#00ff88]">{totalScore}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-[#00ff88] h-full transition-all duration-500" 
                    style={{ width: `${totalScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Guide Sections */}
          <div className="lg:col-span-9 space-y-16">

            {/* SECTION 1: Introduction */}
            <section id="intro" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-[#00ff88]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Introduction &amp; What is SEO?</h2>
                    <p className="text-xs text-slate-400">Foundational Principles for 2026 Algorithms</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    This comprehensive guide explains how to register your website in Google Search Console, optimize technical SEO, improve organic rankings, and leverage cutting-edge AI prompts to generate high-intent, conversion-driven content.
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
                    <strong className="text-white font-bold">What is SEO?</strong><br />
                    <strong>SEO (Search Engine Optimization)</strong> helps search engines (Google, Bing, Perplexity, Gemini, ChatGPT) understand, trust, and rank your website higher in search engine result pages (SERPs).
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-white/5">
                      <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Search Intent
                      </h4>
                      <p className="text-xs text-slate-400">Solve exact user queries rather than relying on keyword stuffing.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-white/5">
                      <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Core Web Vitals
                      </h4>
                      <p className="text-xs text-slate-400">Fast rendering (LCP), responsiveness (INP), and visual stability (CLS).</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-white/5">
                      <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-violet-400" /> Structured Data
                      </h4>
                      <p className="text-xs text-slate-400">JSON-LD Schema tags for rich snippets and AI indexing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Google Search Console Setup */}
            <section id="gsc-setup" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Google Search Console Setup</h2>
                    <p className="text-xs text-slate-400">Step-by-step Indexing &amp; Verification Workflow</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Open Google Search Console",
                      desc: "Navigate to search.google.com/search-console and sign in with your primary Google account."
                    },
                    {
                      step: "2",
                      title: "Add your Domain or URL Property",
                      desc: "Enter your domain name (e.g. primetoolshub.store) under Domain Property to cover all subdomains and protocol variants (http, https, www)."
                    },
                    {
                      step: "3",
                      title: "Verify ownership using DNS or HTML methods",
                      desc: "Select DNS TXT record or HTML tag meta verification to confirm you control the website."
                    },
                    {
                      step: "4",
                      title: "Submit your sitemap.xml",
                      desc: "Go to Sitemaps section in GSC dashboard and submit https://yourdomain.com/sitemap.xml."
                    },
                    {
                      step: "5",
                      title: "Monitor Indexing and Keyword Performance",
                      desc: "Track total clicks, impressions, average CTR, and target keyword rankings weekly."
                    }
                  ].map((s) => (
                    <div key={s.step} className="p-4 sm:p-5 rounded-2xl bg-slate-800/60 border border-white/5 flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold flex items-center justify-center shrink-0 text-sm">
                        {s.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-white text-base">{s.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-400">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Verification Code Snippet Builder */}
                <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" /> Interactive Verification Snippet Generator
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setVerificationMethod("dns")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${verificationMethod === "dns" ? "bg-cyan-500 text-black font-bold" : "bg-slate-800 text-slate-400"}`}
                      >
                        DNS TXT Record
                      </button>
                      <button
                        onClick={() => setVerificationMethod("meta")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${verificationMethod === "meta" ? "bg-cyan-500 text-black font-bold" : "bg-slate-800 text-slate-400"}`}
                      >
                        HTML Meta Tag
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-slate-400">Enter Your Website Domain:</label>
                    <input
                      type="text"
                      value={verifyDomain}
                      onChange={(e) => setVerifyDomain(e.target.value)}
                      placeholder="example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    />

                    <div className="relative mt-3">
                      <pre className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs sm:text-sm text-cyan-300 font-mono overflow-x-auto">
                        {verificationMethod === "dns"
                          ? `Host / Name: @ or ${verifyDomain}\nRecord Type: TXT\nValue: google-site-verification=abc123xyz_456789_GSC_${verifyDomain.replace(/[^a-zA-Z0-9]/g, "")}`
                          : `<meta name="google-site-verification" content="google-site-verification=abc123xyz_456789_GSC_${verifyDomain.replace(/[^a-zA-Z0-9]/g, "")}" />`
                        }
                      </pre>
                      <button
                        onClick={() => handleCopyText(
                          verificationMethod === "dns"
                            ? `google-site-verification=abc123xyz_456789_GSC_${verifyDomain.replace(/[^a-zA-Z0-9]/g, "")}`
                            : `<meta name="google-site-verification" content="google-site-verification=abc123xyz_456789_GSC_${verifyDomain.replace(/[^a-zA-Z0-9]/g, "")}" />`,
                          "verification snippet"
                        )}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
                        aria-label="Copy verification code"
                      >
                        {copiedCode === "verification snippet" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: Technical SEO Essentials */}
            <section id="technical-seo" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Technical SEO Essentials</h2>
                    <p className="text-xs text-slate-400">Core Performance &amp; Crawling Architecture</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Zap,
                      title: "Fast Loading Speed",
                      color: "text-emerald-400",
                      desc: "Keep Largest Contentful Paint (LCP) under 2.5 seconds. Optimize JS bundles, use modern WebP images, and leverage CDN caching."
                    },
                    {
                      icon: Globe,
                      title: "Mobile Responsiveness",
                      color: "text-cyan-400",
                      desc: "Ensure viewport tags exist (<meta name='viewport' content='width=device-width, initial-scale=1.0'>) and interactive buttons meet minimum touch target sizes (48px+)."
                    },
                    {
                      icon: ShieldCheck,
                      title: "HTTPS Enabled",
                      color: "text-emerald-400",
                      desc: "Enforce active SSL security certificates. Redirect HTTP traffic to HTTPS via 301 permanent redirects and enforce HSTS headers."
                    },
                    {
                      icon: FileCode,
                      title: "Clean URLs",
                      color: "text-amber-400",
                      desc: "Use short, lowercase, hyphen-separated canonical URLs without query clutter (e.g. /product/chatgpt-plus)."
                    },
                    {
                      icon: FileText,
                      title: "Proper Metadata",
                      color: "text-violet-400",
                      desc: "Title tag: 50-60 characters with primary keyword. Meta description: 150-160 characters with strong call-to-action."
                    },
                    {
                      icon: Terminal,
                      title: "Robots.txt & Sitemap Setup",
                      color: "text-pink-400",
                      desc: "Maintain a valid robots.txt file pointing directly to your sitemap.xml and sitemap-images.xml endpoints."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-800/60 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-white text-base">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: Content & Image SEO */}
            <section id="content-seo" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Content SEO &amp; Image SEO</h2>
                    <p className="text-xs text-slate-400">On-Page Optimization &amp; Visual Search Assets</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Content SEO Card */}
                  <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/5 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-400" /> Content SEO Strategy
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Match User Intent:</strong> Address direct questions, transactional queries, and comparison needs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Heading Hierarchy:</strong> Single <code>&lt;h1&gt;</code> per page followed by logical <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> subheadings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Internal Linking:</strong> Connect related pages with descriptive anchor texts to pass link equity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Natural Keywords:</strong> Avoid unnatural keyword stuffing; optimize for LSI and semantic terms.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Image SEO Card */}
                  <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/5 space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-cyan-400" /> Image SEO Standards
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                        <span><strong>Compressed Formats:</strong> Convert legacy PNG/JPG files to modern <strong>WebP or AVIF</strong> formats.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                        <span><strong>Meaningful Filenames:</strong> Use <code>chatgpt-plus-pakistan.webp</code> instead of <code>IMG1002.png</code>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                        <span><strong>Descriptive Alt Text:</strong> Provide accurate <code>alt="ChatGPT Plus Official Subscription"</code> for screen readers &amp; image search.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff88] shrink-0 mt-0.5" />
                        <span><strong>Responsive Sizing:</strong> Set explicit <code>width</code> and <code>height</code> attributes to prevent CLS layout shifts.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: Backlink Strategies */}
            <section id="backlinks" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-pink-500/20 border border-pink-500/30 text-pink-400">
                    <LinkIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Backlink Building Strategies</h2>
                    <p className="text-xs text-slate-400">Authority Building &amp; Off-Page Signals</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Niche Blogs & Guest Posts", desc: "Publish authoritative guest articles on industry sites with contextually relevant links." },
                    { title: "Product Hunt Launches", desc: "Launch your products/tools on Product Hunt, Betalist, and Hacker News to earn high-DR backlinks." },
                    { title: "Social Sharing & Signals", desc: "Distribute content across LinkedIn, Twitter/X, Reddit, and Facebook to generate referral traffic." },
                    { title: "Directories & Profiles", desc: "List your business in trusted local and international business directories." },
                    { title: "Free Tools & Calculators", desc: "Build useful free web tools (like prompt generators) that naturally attract editorial links." },
                    { title: "PR & Media Mentions", desc: "Reach out to tech journalists and bloggers with press releases and data insights." }
                  ].map((b, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-800/60 border border-white/5 space-y-1.5">
                      <div className="font-bold text-white text-sm flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-pink-400" /> {b.title}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 6: Modern SEO for AI Websites */}
            <section id="ai-websites" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Modern SEO for AI Websites</h2>
                    <p className="text-xs text-slate-[#00ff88]">Ranking in the Era of ChatGPT &amp; Perplexity AI</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-4 text-xs sm:text-sm text-slate-300">
                  <p className="leading-relaxed">
                    Search engine algorithms in 2026 heavily penalize generic, unedited AI content mills. To rank effectively:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                      <h4 className="font-bold text-white text-sm text-emerald-400">Semantic HTML5 Structure</h4>
                      <p className="text-xs text-slate-400">Use proper tags (header, main, section, article, nav, footer) so AI crawlers parse page hierarchy accurately.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                      <h4 className="font-bold text-white text-sm text-cyan-400">Human-Centric Copywriting</h4>
                      <p className="text-xs text-slate-400">Rewrite generic AI copy. Add real-world proof, unique insights, original screenshots, and verified statistics.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                      <h4 className="font-bold text-white text-sm text-violet-400">Schema JSON-LD Graph</h4>
                      <p className="text-xs text-slate-400">Inject structured Organization, Product, FAQ, and WebSite JSON-LD graph to empower AI answer engines.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-1">
                      <h4 className="font-bold text-white text-sm text-amber-400">Fast Performance &amp; Accessibility</h4>
                      <p className="text-xs text-slate-400">Pass ARIA accessibility checks and ensure instantaneous mobile page loads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: AI SEO Optimization Prompt */}
            <section id="ai-prompt" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-emerald-500/40 backdrop-blur relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[#00ff88]">
                      <Bot className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">AI SEO Optimization Prompt</h2>
                      <p className="text-xs text-emerald-400 font-semibold">Works with ChatGPT, Claude, Gemini, Cursor &amp; Windsurf</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyText(rawPrompt, "prompt")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00ff88] text-black font-extrabold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPrompt ? "Copied to Clipboard!" : "Copy AI SEO Prompt"}</span>
                  </button>
                </div>

                {/* Optional Custom Domain Input for Prompt */}
                <div className="mb-4 p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Customize Prompt With Your Website URL:
                    </label>
                    <span className="text-[11px] text-slate-400">Target AI Engine: <strong>{targetTargetModel}</strong></span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <input
                      type="text"
                      value={targetDomain}
                      onChange={(e) => setTargetDomain(e.target.value)}
                      placeholder="e.g. https://primetoolshub.store"
                      className="sm:col-span-8 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all"
                    />
                    <select
                      value={targetTargetModel}
                      onChange={(e) => setTargetModel(e.target.value)}
                      className="sm:col-span-4 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all"
                    >
                      <option value="ChatGPT">ChatGPT Plus</option>
                      <option value="Claude 3.5">Claude 3.5 Sonnet</option>
                      <option value="Gemini 2.0">Google Gemini Pro</option>
                      <option value="Cursor / Windsurf">Cursor / Windsurf AI</option>
                    </select>
                  </div>
                </div>

                {/* Prompt Code Block */}
                <div className="relative">
                  <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {rawPrompt}
                  </pre>
                </div>
              </div>
            </section>

            {/* SECTION 8: Interactive SEO Audit Score Calculator */}
            <section id="audit-calculator" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">2026 Website SEO Checklist &amp; Score Audit</h2>
                      <p className="text-xs text-slate-400">Interactive Checklist &amp; Real-time Performance Grade</p>
                    </div>
                  </div>

                  <div className="px-5 py-2.5 rounded-2xl bg-slate-950 border border-amber-500/40 text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Audit Grade</div>
                    <div className="text-2xl font-black text-[#00ff88]">{totalScore} / 100</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {checklistItems.map((item) => (
                    <label
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        item.checked
                          ? "bg-emerald-950/20 border-emerald-500/40 text-white"
                          : "bg-slate-800/40 border-white/5 text-slate-400 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          item.checked ? "bg-emerald-500 border-emerald-500 text-black" : "border-slate-600"
                        }`}>
                          {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-white/5">
                          {item.category}
                        </span>
                        <span className="text-xs font-bold text-emerald-400">+{item.points} pts</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 9: Schema Markup Code Generator */}
            <section id="schema-generator" className="scroll-mt-28 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Schema.org JSON-LD Generator Tool</h2>
                    <p className="text-xs text-slate-400">Generate Google Rich Snippets Markup Instantly</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-400 mb-1 block">Schema Type:</label>
                      <select
                        value={schemaType}
                        onChange={(e) => setSchemaType(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Organization">Organization Schema</option>
                        <option value="WebSite">WebSite Schema</option>
                        <option value="Article">Article / TechGuide Schema</option>
                        <option value="Product">Product Offer Schema</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-400 mb-1 block">Entity / Brand Name:</label>
                      <input
                        type="text"
                        value={schemaName}
                        onChange={(e) => setSchemaName(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-400 mb-1 block">Canonical URL:</label>
                      <input
                        type="text"
                        value={schemaUrl}
                        onChange={(e) => setSchemaUrl(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs text-cyan-300 font-mono overflow-x-auto max-h-72">
                      {`<script type="application/ld+json">\n${generatedSchemaJson}\n</script>`}
                    </pre>
                    <button
                      onClick={() => handleCopyText(`<script type="application/ld+json">\n${generatedSchemaJson}\n</script>`, "schema markup")}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
                      aria-label="Copy schema markup"
                    >
                      {copiedCode === "schema markup" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Final Advice */}
            <section className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/40 border border-emerald-500/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[#00ff88] mx-auto flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-white">Final Advice for Long-Term Ranking Success</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                SEO is a long-term game. Focus on useful content, fast performance, strong branding, technical optimization, and consistent publishing. Keep testing your sitemaps and monitoring Search Console metrics weekly.
              </p>
              <div className="pt-2">
                <a
                  href="/#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all"
                >
                  Explore Prime Tools Catalog <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
