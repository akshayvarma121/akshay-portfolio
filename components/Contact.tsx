"use client";

import { useState } from "react";
import { contact } from "@/lib/content";

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

  // Extract display label for links (e.g. github.com/username)
  const getDisplayLink = (url: string) => {
    return url.replace("https://", "").replace("www.", "");
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        {/* Eyebrow */}
        <div className="section-eyebrow">{contact.eyebrow}</div>

        {/* Contact list items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* Email button copy */}
          <button
            onClick={handleCopy}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "15px",
              color: "var(--text-primary)",
              cursor: "pointer",
              textAlign: "left",
              outline: "none",
            }}
          >
            {copied ? "copied ✓" : contact.email}
          </button>

          {/* GitHub link */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              fontSize: "15px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {getDisplayLink(contact.github)}
          </a>

          {/* LinkedIn link */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              fontSize: "15px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            {getDisplayLink(contact.linkedin)}
          </a>
        </div>

        {/* Message below */}
        <div
          style={{
            marginTop: "32px",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "14px",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          {contact.note}
        </div>
      </div>
    </section>
  );
}
