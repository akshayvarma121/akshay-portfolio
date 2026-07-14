"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";

import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

import { footer } from "@/lib/content";

export default function Home() {
  const heroComplete = true; // No longer waiting for terminal animation
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section
        style={{
          height: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg)",
          position: "relative",
          width: "100%",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            maxWidth: "720px",
            width: "100%",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent)",
              fontSize: "13px",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}
          >
            Hi, my name is
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Akshay Varma.
          </h1>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "var(--text-muted)",
              marginBottom: "2rem",
            }}
          >
            I build software that ships.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "16px",
              lineHeight: 1.6,
              maxWidth: "540px",
              marginBottom: "3rem",
            }}
          >
            I'm a Full-Stack Software Engineer focused on building robust, scalable 
            applications. I own problems end-to-end—from system design and 
            database architecture to seamless frontend execution.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="#work" className="project-cta-btn" style={{ padding: "12px 24px", fontSize: "14px" }}>
              Check out my work
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {!scrolled && (
          <div
            className="pulse-indicator"
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              fontSize: "14px",
              userSelect: "none",
            }}
          >
            ↓
          </div>
        )}
      </section>

      {/* Portfolio Content (Work, About, Contact, Footer) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={heroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ width: "100%" }}
      >
        <div id="work">
          <Work />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <footer
          style={{
            padding: "40px 0 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            {footer.text}
          </div>
        </footer>
      </motion.div>
    </>
  );
}

