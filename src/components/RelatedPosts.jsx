import BlogCard from "@/components/BlogCard";
import { getRelatedBlogPosts } from "@/data/blogPosts";

export default function RelatedPosts({ currentId, postIds = [] }) {
  const posts = getRelatedBlogPosts(currentId, postIds);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-white/10">
      <h2 className="text-2xl font-extrabold text-white mb-6">Aur Parhen (Related Guides)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
