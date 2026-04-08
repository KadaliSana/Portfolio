"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Toggle button — always visible */}
      <button
        className={styles.toggleBtn}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <svg
          className={styles.toggleIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop overlay on mobile */}
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}

      {/* Sidebar panel */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
        <div className={styles.logo}></div>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footer}>
          Kadali Navneet Sai <br />
          © {new Date().getFullYear()}
        </div>
      </aside>
    </>
  );
}
