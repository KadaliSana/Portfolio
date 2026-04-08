export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    date: "2024-11-10",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Dev"],
    excerpt:
      "Next.js 15 ships with the new App Router, React Server Components, and Turbopack. Here's everything you need to know to hit the ground running.",
    content: `
## Introduction

Next.js 15 is a major release that brings exciting improvements to the React framework. In this post we'll explore the key features and how to use them in your projects.

## The App Router

The App Router is now the recommended way to build Next.js applications. It introduces a new file-system based routing paradigm co-located with your components.

\`\`\`
app/
  layout.tsx       # Root layout (required)
  page.tsx         # Home page  /
  about/
    page.tsx       # About page  /about
  blog/
    [slug]/
      page.tsx     # Dynamic blog post  /blog/:slug
\`\`\`

## React Server Components

Server Components let you render UI on the server and send only the necessary HTML to the client — no JavaScript bundle required for those components.

\`\`\`tsx
// This component runs on the server by default
export default async function ProductList() {
  const products = await fetchProducts(); // Direct DB call, no API needed
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
\`\`\`

## Turbopack

Turbopack replaces webpack as the default bundler in development mode, delivering significantly faster hot-module replacement and cold starts.

## Conclusion

Next.js 15 is a fantastic upgrade. The combination of the App Router, Server Components, and Turbopack makes it the best version of the framework yet.
    `.trim(),
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips & Tricks",
    date: "2024-10-22",
    readTime: "7 min read",
    tags: ["CSS", "Tailwind", "Design"],
    excerpt:
      "Tailwind CSS changed the way I write styles. After two years of daily use, here are the patterns and utilities I rely on most.",
    content: `
## Why Tailwind?

Utility-first CSS sounds counter-intuitive at first, but it eliminates context-switching, keeps your styles co-located with your markup, and results in a much smaller CSS bundle.

## The @apply Directive

When a set of utilities is repeated across many elements, extract it with \`@apply\`:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl
           hover:bg-indigo-700 transition-colors shadow-lg;
  }
}
\`\`\`

## Arbitrary Values

Need a one-off value? Use bracket notation instead of extending the config:

\`\`\`html
<div class="w-[37rem] top-[117px] bg-[#1da1f2]">...</div>
\`\`\`

## Dark Mode

Tailwind's dark mode support is first-class. Add \`dark\` to your \`tailwind.config\` and use \`dark:\` variants:

\`\`\`html
<body class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
\`\`\`

## JIT Mode

Just-in-Time mode is now the default. It generates styles on demand, keeping your development bundle tiny and fast.

## Conclusion

Once you internalize the utility classes, Tailwind becomes incredibly productive. The docs are excellent — keep them open until the class names become second nature.
    `.trim(),
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices in 2024",
    date: "2024-09-15",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    excerpt:
      "TypeScript adoption has exploded. These are the patterns and compiler options that separate good TypeScript from great TypeScript.",
    content: `
## Enable Strict Mode

Always start with \`"strict": true\` in your \`tsconfig.json\`. It enables a suite of important checks including \`strictNullChecks\` and \`noImplicitAny\`.

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

## Prefer \`type\` over \`interface\` for Unions

Use \`interface\` for object shapes that may be extended, but \`type\` for everything else:

\`\`\`ts
type Status = "idle" | "loading" | "success" | "error";

type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };
\`\`\`

## Use \`satisfies\`

The \`satisfies\` operator validates an expression against a type without widening it:

\`\`\`ts
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
} satisfies Record<string, string | number[]>;

// palette.red is still number[], not string | number[]
\`\`\`

## Avoid \`any\` — Use \`unknown\`

When you don't know the type, reach for \`unknown\` instead of \`any\`. It forces you to narrow the type before using it.

## Conclusion

TypeScript is only as strong as your configuration. Strict mode plus thoughtful use of utility types will catch entire classes of bugs before they reach production.
    `.trim(),
  },
  {
    slug: "building-accessible-react-apps",
    title: "Building Accessible React Apps",
    date: "2024-08-30",
    readTime: "6 min read",
    tags: ["React", "Accessibility", "a11y"],
    excerpt:
      "Accessibility is not an afterthought — it's a core requirement. Here's how to build inclusive React applications from day one.",
    content: `
## Why Accessibility Matters

An estimated 1 billion people worldwide live with some form of disability. Building accessible applications ensures everyone can use your product — and often improves usability for everyone.

## Semantic HTML First

Before reaching for ARIA, use semantic HTML. Browsers expose semantics to assistive technologies for free:

\`\`\`html
<!-- ❌ Bad -->
<div class="button" onclick="...">Click me</div>

<!-- ✅ Good -->
<button type="button" onClick={...}>Click me</button>
\`\`\`

## Managing Focus

When content changes dynamically (modals, toasts, page transitions), move focus appropriately:

\`\`\`tsx
const modalRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (isOpen) modalRef.current?.focus();
}, [isOpen]);
\`\`\`

## Color Contrast

All text must meet WCAG AA contrast ratios: 4.5:1 for normal text, 3:1 for large text. Use tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Test with a Screen Reader

The only way to truly validate accessibility is to use a screen reader. macOS VoiceOver (Cmd + F5) and NVDA on Windows are free and widely used.

## Conclusion

Start with semantic HTML, manage focus thoughtfully, ensure sufficient contrast, and test with real assistive technologies. Accessibility is a feature, not a fix.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
