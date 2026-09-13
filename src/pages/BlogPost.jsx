import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedPosts from "@/components/RelatedPosts";
import GoogleAd from "@/components/GoogleAd";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { ALL_PRODUCTS } from "@/data/products";
import {
  generateBlogPostSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  DOMAIN,
} from "@/lib/seoSchema";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function BlogPost() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const pageUrl = `${DOMAIN}/blog/${post.slug}`;
  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Related product lookup
  const relatedProduct = ALL_PRODUCTS.find(
    (p) => p.id === post.relatedProductSlug || p.id.startsWith(post.relatedProductSlug || "")
  );

  // Schemas
  const articleSchema = generateBlogPostSchema(post);
  const faqSchema = post.faqs ? generateFAQSchema(post.faqs, `${pageUrl}#faq`) : null;
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems, pageUrl);

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])].filter(Boolean),
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this guide: ${post.title}\n\n${pageUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Basic markdown-to-HTML parser for formatted headings, lists, tables, bold text
  const renderFormattedContent = (content) => {
    const lines = content.trim().split("\n");
    const elements = [];
    let inTable = false;
    let tableRows = [];
    let listItems = [];
    let inList = false;

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-4 space-y-2 list-disc list-inside text-slate-300">
            {listItems.map((li, idx) => (
              <li key={idx} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: li }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (inTable && tableRows.length > 0) {
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip separator row

        elements.push(
          <div key={`table-${elements.length}`} className="my-6 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#12141c] text-white border-b border-white/10">
                <tr>
                  {headerRow.map((cell, idx) => (
                    <th key={idx} className="px-4 py-3 font-bold" dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#0c0d12]">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-slate-300" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const formatInline = (text) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic text-slate-300">$1</em>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">$1</a>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Table line
      if (line.startsWith("|")) {
        flushList();
        inTable = true;
        const cells = line
          .split("|")
          .map((c) => c.trim())
          .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
        tableRows.push(cells.map(formatInline));
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Horizontal rule
      if (line.startsWith("---")) {
        flushList();
        elements.push(<hr key={`hr-${i}`} className="my-8 border-white/10" />);
        continue;
      }

      // Headings
      if (line.startsWith("# ")) {
        flushList();
        continue; // Skip main title as rendered in header
      }
      if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={`h2-${i}`} className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight">
            {line.replace("## ", "")}
          </h2>
        );
        continue;
      }
      if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={`h3-${i}`} className="text-xl font-bold text-white mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
        continue;
      }

      // Unordered list
      if (line.startsWith("* ") || line.startsWith("- ")) {
        inList = true;
        listItems.push(formatInline(line.replace(/^(\*|-)\s+/, "")));
        continue;
      }

      // Ordered list
      if (/^\d+\.\s+/.test(line)) {
        flushList();
        elements.push(
          <p key={`ol-${i}`} className="my-2 text-slate-300 leading-relaxed pl-4 border-l-2 border-emerald-500/40" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        );
        continue;
      }

      // Regular paragraph
      if (line.trim().length > 0) {
        flushList();
        elements.push(
          <p key={`p-${i}`} className="my-4 text-slate-300 text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
        );
      }
    }

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        canonicalUrl={pageUrl}
        ogType="article"
        ogImage={post.image?.startsWith("http") ? post.image : `${DOMAIN}${post.image}`}
        keywords={post.tags?.join(", ") || post.primaryKeyword}
        schemaJson={schemaGraph}
      />

      <Navbar />

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={breadcrumbItems} />

        {/* Article Header */}
        <header className="mb-10 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
            <Sparkles size={12} />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm text-slate-400 pb-6 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-emerald-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{new Date(post.datePublished).toLocaleDateString("en-PK", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{post.readTime} ({post.wordCount} words)</span>
            </div>
          </div>
        </header>

        {/* Social Share Bar */}
        <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#0c0d12] border border-white/10 mb-8">
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-2">
            <Share2 size={14} className="text-emerald-400" />
            <span>Share Guide</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#25D366] text-black hover:bg-[#20ba5a] transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none">
          {renderFormattedContent(post.content)}
        </article>

        {/* AdSense Unit */}
        <GoogleAd className="my-8" />

        {/* Related Product CTA Box */}
        {relatedProduct && (
          <div className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0c0d12] to-violet-950/40 border border-emerald-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Is Tool Ko Khareedna Chahte Hain?</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{relatedProduct.name} in Pakistan</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg">
                  Get verified subscription starting from <strong className="text-emerald-400">{relatedProduct.price}</strong> with instant 15-minute WhatsApp delivery and full duration warranty.
                </p>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><Zap size={12} className="text-emerald-400" /> Instant Delivery</span>
                  <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-blue-400" /> 100% Warranty</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => openWhatsApp(relatedProduct.name, relatedProduct.duration, relatedProduct.price)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Pe Order Karein</span>
                </button>
                <Link
                  to={`/product/${relatedProduct.id}`}
                  className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0d12] border border-white/10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-xl shrink-0">
            PTH
          </div>
          <div>
            <h4 className="font-bold text-white text-sm sm:text-base">PrimeToolsHub Team</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Pakistan ka #1 trusted AI tools platform — 5,000+ verified customers across Lahore, Karachi, Islamabad, and 50+ cities nationwide.
            </p>
            <Link to="/" className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-2 inline-block">
              ← Visit Storefront
            </Link>
          </div>
        </div>

        {/* Related Posts Section */}
        <RelatedPosts currentId={post.id} postIds={post.relatedPosts} />
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
