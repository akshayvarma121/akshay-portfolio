"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Terminal from "@/components/Terminal";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

import { footer } from "@/lib/content";

export default function Home() {
  const [heroComplete, setHeroComplete] = useState<boolean>(false);
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
        <Terminal onComplete={() => setHeroComplete(true)} />

        {/* Scroll Indicator */}
        {heroComplete && !scrolled && (
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

