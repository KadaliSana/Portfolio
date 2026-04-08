import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Portfolio",
  description: "Thoughts on web development, design, and engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block text-indigo-600 font-semibold uppercase tracking-widest text-sm mb-4">
            Blog
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Thoughts & Tutorials
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Articles on web development, design systems, and the tools I use
            every day.
          </p>
        </div>

        {/* Post list */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-500 leading-relaxed mb-5">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
                <span className="ml-auto text-indigo-600 font-semibold group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
