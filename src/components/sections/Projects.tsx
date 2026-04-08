const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Next.js, Stripe payments, and a PostgreSQL database. Features include product search, cart management, and order tracking.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates using WebSockets. Supports drag-and-drop boards, labels, and team assignments.",
    tags: ["React", "Node.js", "WebSockets", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "✅",
  },
  {
    title: "AI Chat Interface",
    description:
      "A modern chat interface powered by OpenAI's API. Features markdown rendering, conversation history, and customizable system prompts.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "🤖",
  },
  {
    title: "Developer Blog",
    description:
      "A high-performance blog built with Next.js and MDX. Features syntax highlighting, reading time estimation, and an RSS feed.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "📝",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with 7-day forecasts, interactive maps, and location search powered by the OpenWeatherMap API.",
    tags: ["React", "OpenWeatherMap API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "🌤️",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website! A responsive, accessible, and performant website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    emoji: "🎯",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold uppercase tracking-widest text-sm mb-4">
            Projects
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Things I&apos;ve Built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all flex flex-col"
            >
              {/* Project icon */}
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                {project.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  className="text-sm font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
