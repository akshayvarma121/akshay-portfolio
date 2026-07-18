"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";

import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

import Typewriter from "@/components/Typewriter";
import MagneticButton from "@/components/MagneticButton";

import { footer, contact } from "@/lib/content";

export default function Home() {
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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        {/* Animated Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(232,255,71,0.08)_0%,rgba(5,5,5,0)_60%)] rounded-full blur-[100px] -z-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,rgba(5,5,5,0)_60%)] rounded-full blur-[80px] -z-10 mix-blend-screen" />

        <div className="container relative z-10 flex flex-col items-center justify-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl flex flex-col items-center"
          >
            <div className="font-mono text-text-muted text-sm md:text-base tracking-widest uppercase mb-6 flex items-center justify-center gap-4">
              <Typewriter text="Akshay Varma" delay={500} />
            </div>
            
            <h1 className="display-title mb-6 text-balance">
              I BUILD<br />
              <span className="bg-accent text-bg px-3 py-1 inline-block shadow-sm">SOFTWARE</span><br />
              THAT SHIPS.
            </h1>
            
            <p className="font-body text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-12 mx-auto">
              I’m a full-stack engineer who genuinely enjoys the whole process of building software. From sketching out the database to polishing the final UI, I like taking full ownership of a project and shipping things that actually work in the real world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
              <MagneticButton>
                <a href="#work" className="pill-button pill-button-primary">
                  View My Work
                  <span className="ml-2">↓</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#about" className="pill-button pill-button-secondary">
                  More About Me
                </a>
              </MagneticButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 md:gap-10 font-mono text-xs md:text-sm tracking-widest uppercase relative z-20">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors cursor-pointer">
                GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors cursor-pointer">
                LinkedIn
              </a>
              <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors cursor-pointer">
                LeetCode
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-text-muted text-sm tracking-widest flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? 'none' : 'auto' }}
        >
          <span className="uppercase text-[10px]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent"></div>
        </motion.div>
      </section>

      {/* Portfolio Content (Work, About, Contact, Footer) */}
      <div className="relative z-20 bg-bg">
        <div>
          <Work />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Contact />
        </div>

        <footer className="py-12 text-center border-t border-border mt-12 flex flex-col items-center gap-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-xs text-text-muted hover:text-accent uppercase tracking-widest transition-colors cursor-pointer"
          >
            ↑ Scroll to Top
          </button>
        </footer>
      </div>
    </>
  );
}
