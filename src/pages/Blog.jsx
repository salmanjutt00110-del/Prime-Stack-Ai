import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import GoogleAd from "@/components/GoogleAd";
import { blogPosts } from "@/data/blogPosts";
import { generateBlogListSchema, generateWebPageSchema, DOMAIN } from "@/lib/seoSchema";
import { Sparkles, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Pricing Guide", "Comparison", "How-To", "List Post"];
const POSTS_PER_PAGE = 9;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const page = parseInt(searchParams.get("page") || "1", 10);

  const filteredPosts = useMemo(() => {
    let result = blogPosts.filter((p) => p.published);
    if (selectedCategory !== "All") {
      if (selectedCategory === "How-To") {
        result = result.filter((p) => p.category.startsWith("How-To"));
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }
    return result;
  }, [selectedCategory]);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured && p.published) || blogPosts[0];
  }, []);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, page]);

  const pageUrl = `${DOMAIN}/blog`;
  const breadcrumbItems = [{ name: "Blog", url: "/blog" }];

  const blogListSchema = generateBlogListSchema(blogPosts);
  const webPageSchema = generateWebPageSchema({
    name: "Blog — AI Tools Pakistan Guide | PrimeToolsHub",
    description: "Pakistan mein AI tools ke baare mein complete guides, prices, reviews aur tutorials. CapCut Pro, Canva Pro, ChatGPT Plus guides 🇵🇰",
    url: pageUrl,
    breadcrumbItems,
  });

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [webPageSchema, blogListSchema].filter(Boolean),
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Blog — AI Tools Pakistan Guide | PrimeToolsHub"
        description="Pakistan mein AI tools ke baare mein complete guides, prices, reviews aur tutorials. CapCut Pro, Canva Pro, ChatGPT Plus guides 🇵🇰"
        canonicalUrl={pageUrl}
        ogType="website"
        keywords="ai tools blog pakistan, chatgpt plus guide pakistan, canva pro price pkr, capcut pro guide urdu, best ai tools 2026"
        schemaJson={schemaGraph}
      />

      <Navbar />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen size={14} />
            <span>Guides, Pricing &amp; Tutorials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Tools Pakistan — Complete Guides &amp; Pricing
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Stay ahead with comprehensive tutorials, in-depth pricing guides, and comparisons on ChatGPT Plus, Canva Pro, CapCut, and top digital subscriptions in Pakistan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchParams({ page: "1" });
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-[#0c0d12] text-slate-400 border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (only on page 1 and 'All' category) */}
        {page === 1 && selectedCategory === "All" && featuredPost && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles size={14} />
              <span>Featured Guide</span>
            </div>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* AdSense Unit */}
        <GoogleAd className="my-8" />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 py-8 border-t border-white/10">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0c0d12] border border-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
            >
              <ChevronLeft size={14} />
              <span>Previous</span>
            </button>
            <span className="text-xs text-slate-400">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0c0d12] border border-white/10 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
            >
              <span>Next</span>
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
