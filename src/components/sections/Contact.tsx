"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Wire up to your preferred email/form service (e.g. Resend, Formspree).
    // Currently this only shows a success message — no data is actually sent.
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>
            Contact
          </span>
          <h2 className={styles.title}>
            Get In Touch
          </h2>
          <p className={styles.description}>
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className={styles.formCard}>
          {status === "success" && (
            <div className={styles.successMessage}>
              Thanks for reaching out! I&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGrid}>
              <div>
                <label
                  htmlFor="name"
                  className={styles.label}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={styles.input}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={styles.label}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className={styles.input}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className={styles.label}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or just say hi..."
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
