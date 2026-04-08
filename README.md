# Portfolio

A personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Skills, Projects, and Contact sections |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Individual blog post |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

| What | Where |
|------|-------|
| Your name / bio | `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx` |
| Skills list | `src/components/sections/Skills.tsx` |
| Projects | `src/components/sections/Projects.tsx` |
| Blog posts | `src/lib/posts.ts` |
| Social links | `src/components/Footer.tsx`, `src/components/sections/Contact.tsx` |
| Site metadata | `src/app/layout.tsx` |

## Tech Stack

- [Next.js 15](https://nextjs.org/) – App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed easily on [Vercel](https://vercel.com/)
