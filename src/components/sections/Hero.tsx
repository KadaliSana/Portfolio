"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { mode } = usePortfolio();

  const content = {
    Pro: {
      badge: "Welcome to my portfolio",
      title: "Hi, I'm ",
      highlight: "Navneet Sai Kadali",
      subtitle: "AI engineer & Robotics developer",
      description: "I build autonomous systems and explore machine learning technologies. Passionate about developing scalable technical solutions and leading innovative teams.",
      primaryBtn: "View My Work",
      secondaryBtn: "Get In Touch"
    },
    personal: {
      badge: "The person behind the screen",
      title: "I'm just ",
      highlight: "Navneet",
      subtitle: "Explorer, Maker & Tinkerer",
      description: "Beyond the code, I'm passionate about exploring new technologies, DIY electronics, and understanding how the world works. Welcome to my personal creative space.",
      primaryBtn: "See My Hobbies",
      secondaryBtn: "Let's Connect"
    }
  }[mode];

  return (
    <section
      id="hero"
      className={styles.heroSection}
    >
      <div className={styles.container}>
          <span className={styles.badge}>
            {content.badge}
          </span>

          <h1 className={styles.title}>
            {content.title}
            <span className={styles.titleHighlight}>
              {content.highlight}
            </span>
          </h1>

          <p className={styles.subtitle}>
            {content.subtitle}
          </p>

          <p className={styles.description}>
            {content.description}
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="#projects"
              className={`${styles.primaryBtn} cursor-target`}
            >
              {content.primaryBtn}
            </a>
            <a
              href="#contact"
              className={`${styles.secondaryBtn} cursor-target`}
            >
              {content.secondaryBtn}
            </a>
          </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <svg
            className={styles.scrollIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
