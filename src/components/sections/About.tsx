export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-xl">
              <svg
                className="w-32 h-32 text-indigo-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <span className="inline-block text-indigo-600 font-semibold uppercase tracking-widest text-sm mb-4">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Passionate developer building things for the web
            </h2>
            <p className="text-gray-500 text-lg mb-4 leading-relaxed">
              I&apos;m a full-stack developer with a passion for building
              beautiful, accessible, and high-performance web applications.
              With expertise in React, Next.js, Node.js, and cloud
              technologies, I love turning complex problems into elegant
              solutions.
            </p>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              When I&apos;m not coding, you can find me contributing to
              open-source projects, writing technical blog posts, or exploring
              the latest developments in web technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">3+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">20+</p>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-600">10+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
