const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    items: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
  },
  {
    category: "Design",
    icon: "✏️",
    items: ["Figma", "Responsive Design", "Accessibility", "UI/UX Principles"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold uppercase tracking-widest text-sm mb-4">
            Skills
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
