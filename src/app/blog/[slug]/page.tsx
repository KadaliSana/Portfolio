import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Render the markdown-like content as plain paragraphs / code blocks
  const sections = post.content.split("\n\n");

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Article body */}
        <article className="prose prose-gray prose-indigo max-w-none">
          {sections.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  {block.slice(3)}
                </h2>
              );
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, lines.length - 1).join("\n");
              return (
                <pre
                  key={i}
                  className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto text-sm leading-relaxed my-6"
                >
                  <code>{code}</code>
                </pre>
              );
            }
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">
                {block}
              </p>
            );
          })}
        </article>

        <hr className="border-gray-100 mt-12 mb-8" />

        {/* Footer nav */}
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            ← All Posts
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
