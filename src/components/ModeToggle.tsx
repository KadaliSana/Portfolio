"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import styles from "./ModeToggle.module.css";

export default function ModeToggle() {
  const { mode, toggleMode } = usePortfolio();

  return (
    <div className={`${styles.toggleContainer} cursor-target`}>
      <div className={styles.iconWrap}>
        {mode === "Pro" ? (
          <Briefcase size={14} />
        ) : (
          <User size={14} />
        )}
      </div>

      <div 
        className={styles.switch} 
        onClick={toggleMode}
        role="button"
        aria-label="Toggle between Pro and personal mode"
      >
        <motion.div
          className={styles.knob}
          animate={{
            x: mode === "Pro" ? 0 : "1.5rem",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
    </div>
  );
}
