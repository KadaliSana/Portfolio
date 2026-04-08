"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./Skills.module.css";

const ProSkills = [
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "Transformers", "YOLO", "SciKit-Learn", "OpenCV"],
  },
  {
    category: "Robotics & Systems",
    items: ["ROS2", "SLAM", "Embedded C", "ARM Assembly", "IoT"],
  },
  {
    category: "Backend & Cloud",
    items: ["Python", "Flask", "AWS", "Zeek (Networking)", "PostgreSQL"],
  },
  {
    category: "Tools & Architectures",
    items: ["Git", "Linux", "Microkernels", "DeepFace", "Langchain"],
  },
];

const personalInterests = [
  {
    category: "Creative Arts",
    items: ["Street Photography","Cinematography", "Photo Editing"],
  },
  {
    category: "Maker Hobbies",
    items: ["3D Printing", "Soldering"],
  },
  {
    category: "Strategy & Gaming",
    items: ["Global History", "Geopolitics","Video Games"],
  },
  {
    category: "Life & Health",
    items: ["Strength Training", "Cooking"],
  },
];


export default function Skills() {
  const { mode } = usePortfolio();
  const currentSkills = mode === "Pro" ? ProSkills : personalInterests;

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>
            {mode === "Pro" ? "Skills" : "Interests"}
          </span>
          <h2 className={styles.title}>
            {mode === "Pro" ? "Technologies I Work With" : "Things I'm Passionate About"}
          </h2>
        </div>

        <div className={styles.grid}>
          {currentSkills.map((skill) => (
            <div
              key={skill.category}
              className={styles.card}
            >
              <h3 className={styles.categoryTitle}>
                {skill.category}
              </h3>
              <ul className={styles.list}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.listBullet} />
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
