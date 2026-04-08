"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import styles from "./About.module.css";
import { Camera, Music, Gamepad2 } from "lucide-react";
import Image from "next/image";
import myImage from "./images/image.png";

export default function About() {
  const { mode } = usePortfolio();

  const content = {
    Pro: {
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
    },
    personal: {
      badge: "The Human Element",
      title: "Exploring more than just lines of code",
      paragraphs: [
        "When I'm not in front of a terminal, I'm usually exploring the physical world. I have a deep fascination with how things work, which led me into the world of DIY electronics and mechanical tinkering.",
        "I'm also an avid photographer, capture-ing moments that blend technology and nature. I believe that creativity in code is fueled by diverse experiences outside of it.",
        "Gaming and music are my go-to's for a quick reset. I love strategy games that challenge my logic and finding new rhythms that inspire my focus."
      ],
      stats: [
        { value: "50+", label: "Cities Explored", icon: <Camera size={14} /> },
        { value: "∞", label: "Curiosity Level", icon: <Music size={14} /> },
        { value: "12", label: "Personal Projects", icon: <Gamepad2 size={14} /> }
      ]
    }
  }[mode];

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

import { User } from "lucide-react";
