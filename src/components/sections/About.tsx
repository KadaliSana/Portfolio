"use client";

import styles from "./About.module.css";
import Image from "next/image";
import myImage from "./images/image.png";

export default function About() {
  const content = {
    badge: "About Me",
    title: "Passionate developer building things for the web",
    paragraphs: [
      "I am a B.Tech Computer Science and Engineering (Information Security) student at Vellore Institute of Technology, graduating in 2027. My passion lies in Robotics, AI, and Autonomous Systems.",
      "As the Vice Captain and former Autonomous Systems Lead for RoverX, I've engineered cutting-edge autonomous navigation stacks and led technical development for international competitions. I also consult as a freelance robotics developer, focusing on computer vision and RTAB-Map SLAM.",
      "In my spare time, I explore large language models, build embedded operating systems from scratch, and architect real-time risk prediction engines."
    ],
    stats: [
      { value: "2nd", label: "Rover Design Challenge" },
      { value: "1", label: "Patent Application" },
      { value: "Best", label: "Autonomous Mission" }
    ]
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentLayout}>
          <div className={styles.photoContainer}>
            <div className={styles.photoWrap}>
              <Image 
                src={myImage} 
                alt="My Photo" 
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          <div className={styles.bioContainer}>
            <span className={styles.badge}>
              {content.badge}
            </span>
            <h2 className={styles.title}>
              {content.title}
            </h2>
            {content.paragraphs.map((p, i) => (
              <p key={i} className={i === content.paragraphs.length - 1 ? styles.paragraphLast : styles.paragraph}>
                {p}
              </p>
            ))}

            <div className={styles.statsContainer}>
              {content.stats.map((stat, i) => (
                <div key={i} className="flex items-center">
                  <div className={styles.statItem}>
                    <p className={styles.statValue}>
                      {stat.value}
                    </p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                  {i < content.stats.length - 1 && <div className={styles.divider} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
