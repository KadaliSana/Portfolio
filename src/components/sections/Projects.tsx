"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./Projects.module.css";

const ProProjects = [
  {
    title: "Shield",
    description:
      "Intrusion Detection System utilizing Zeek for real-time traffic monitoring. Implemented an AI suite featuring Transformers, Random/Isolation Forests, and a risk scoring engine.",
    tags: ["Python", "PyTorch", "Networking", "Transformers", "Sklearn"],
    liveUrl: "https://github.com/KadaliSana/Sheild",
    githubUrl: "https://github.com/KadaliSana/Sheild",
  },
  {
    title: "CleanID",
    description:
      "Locally hosted PII detector utilizing YOLO-World for object detection, Regex, and Moondream VLM for context. Integrated with Langchain and Gemini for real-time redaction.",
    tags: ["YOLO", "OpenCV", "Langchain", "Python"],
    liveUrl: "https://github.com/KadaliSana/CleanID",
    githubUrl: "https://github.com/KadaliSana/CleanID",
  },
  {
    title: "CrowdSentinel",
    description:
      "IoT-based crowd stampede risk prediction. Streamed real-time video to AWS KVS, using YOLO and LSTM risk engines, paired with a live tracking dashboard and SSE push alerts.",
    tags: ["AWS KVS", "IoT", "Flask", "YOLO", "LSTM"],
    liveUrl: "https://github.com/KadaliSana/CrowdSentinel",
    githubUrl: "https://github.com/KadaliSana/CrowdSentinel",
  },
  {
    title: "SaleriOS",
    description:
      "Engineered an RTOS based on microkernel architecture for Raspberry Pi 4 using QEMU. Implemented custom C stdlib, boot mechanism, and TTY console.",
    tags: ["C", "ARM", "Assembly", "Raspberry Pi"],
    liveUrl: "https://github.com/KadaliSana/SaleriOS",
    githubUrl: "https://github.com/KadaliSana/SaleriOS",
  }
];

const personalProjects = [
  {
    title: "Custom Ortho Keyboard",
    description:
      "Designed and hand-wired a 40% ortholinear mechanical keyboard. Flashed custom QMK firmware and implemented custom recursive layer logic.",
    tags: ["Hardware", "Firmware", "QMK", "Electronics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Street Frames",
    description:
      "A personal digital gallery of urban street photography. Experimented with high-contrast monochrome styles and negative space compositions.",
    tags: ["Photography", "Art", "Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "HomeGrid IoT",
    description:
      "A lightweight home automation server running on a Raspberry Pi Zero to monitor plant soil moisture and automate desk lighting using MQTT.",
    tags: ["IoT", "Raspberry Pi", "MQTT", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
  const { mode } = usePortfolio();
  const currentProjects = mode === "Pro" ? ProProjects : personalProjects;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>
            {mode === "Pro" ? "Projects" : "Personal Work"}
          </span>
          <h2 className={styles.title}>
            {mode === "Pro" ? "Things I've Built" : "Ideas & Experiments"}
          </h2>
        </div>

        <div className={styles.grid}>
          {currentProjects.map((project) => (
            <div
              key={project.title}
              className={`group ${styles.card}`}
            >
              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>

              <p className={styles.projectDesc}>
                {project.description}
              </p>

              {/* Tags */}
              <div className={styles.tagsContainer}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={styles.tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className={styles.linksContainer}>
                <a
                  href={project.liveUrl}
                  className={`${styles.demoLink} cursor-target`}
                >
                  {mode === "Pro" ? "Live Demo" : "View Story"}
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  className={`${styles.githubLink} cursor-target`}
                >
                  GitHub
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
