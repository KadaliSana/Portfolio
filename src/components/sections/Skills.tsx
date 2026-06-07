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

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>
            Skills
          </span>
          <h2 className={styles.title}>
            Technologies I Work With
          </h2>
        </div>

        <div className={styles.grid}>
          {ProSkills.map((skill) => (
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
