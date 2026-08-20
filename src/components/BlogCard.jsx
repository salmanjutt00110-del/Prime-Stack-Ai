import { Link } from "react-router-dom";
import { Clock, Calendar, ChevronRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORY_COLORS = {
  "Pricing Guide": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "Comparison": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "List Post": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "How-To": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "How-To (Roman Urdu)": "bg-pink-500/15 text-pink-400 border-pink-500/30",
};

export default function BlogCard({ post, featured = false }) {
  if (!post) return null;

  const badgeClass = CATEGORY_COLORS[post.category] || "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";

  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-white/20 transition-all overflow-hidden flex flex-col justify-between ${
        featured ? "md:grid md:grid-cols-2 gap-6 p-6 md:p-8" : "p-5"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}>
            <Tag size={12} />
            <span>{post.category}</span>
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link to={`/blog/${post.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg">
          {featured ? (
            <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight mb-3">
              {post.title}
            </h2>
          ) : (
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug mb-2 line-clamp-2">
              {post.title}
            </h3>
          )}
        </Link>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3 font-body">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          <span>{new Date(post.datePublished).toLocaleDateString("en-PK", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
        >
          <span>Poora Parhen</span>
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
