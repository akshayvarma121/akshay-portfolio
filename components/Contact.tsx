"use client";

import { useState } from "react";
import { contact } from "@/lib/content";
import MagneticButton from "./MagneticButton";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow for the contact section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,255,71,0.03)_0%,rgba(5,5,5,0)_70%)] rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <div className="section-eyebrow justify-center mb-8">{contact.eyebrow}</div>

        {/* Massive Headline */}
        <h2 className="display-title mb-12 text-balance">
          LET'S BUILD<br/>SOMETHING GREAT.
        </h2>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-4xl justify-center items-center mb-16 flex-wrap">
          {/* Email Button */}
          <MagneticButton>
            <button
              onClick={handleCopy}
              className="pill-button pill-button-primary w-full sm:w-auto"
            >
              {copied ? "Email Copied!" : "Copy Email"}
              <span className="text-xl leading-none">↗</span>
            </button>
          </MagneticButton>

          {/* GitHub Button */}
          <MagneticButton>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button pill-button-secondary w-full sm:w-auto"
            >
              GitHub
              <span className="text-xl leading-none">↗</span>
            </a>
          </MagneticButton>

          {/* LinkedIn Button */}
          <MagneticButton>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button pill-button-secondary w-full sm:w-auto"
            >
              LinkedIn
              <span className="text-xl leading-none">↗</span>
            </a>
          </MagneticButton>

          {/* LeetCode Button */}
          {contact.leetcode && (
            <MagneticButton>
              <a
                href={contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button pill-button-secondary w-full sm:w-auto"
              >
                LeetCode
                <span className="text-xl leading-none">↗</span>
              </a>
            </MagneticButton>
          )}
        </div>

        {/* Footer/Note */}
        <div className="glass-panel py-6 px-12 inline-block">
          <p className="font-body text-text-muted text-sm italic m-0">
            {contact.note}
          </p>
          {contact.kruze && (
            <p className="font-mono text-xs text-text-muted mt-2 m-0 uppercase tracking-widest">
              <a href={contact.kruze} className="text-accent hover:underline">Kruze Space</a>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
