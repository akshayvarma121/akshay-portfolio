"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = nav.links.map((link) => link.href.replace("#", ""));
    const observerOptions = {
      root: null,
      rootMargin: "-48px 0px 0px 0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        const mostInView = intersectingEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio ? current : prev;
        });
        setActiveSection(mostInView.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "48px",
        width: "100%",
        zIndex: 50,
        background: "rgba(13, 13, 13, 0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side Monogram */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            color: "var(--text-primary)",
            fontWeight: 600,
            userSelect: "none",
          }}
        >
          {nav.monogram}
        </span>

        {/* Right Side (Desktop Links) */}
        <div className="hidden md:flex items-center gap-6">
          {nav.links.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${activeSection === sectionId ? "active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="mobile-menu-btn md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-dropdown md:hidden">
          {nav.links.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${activeSection === sectionId ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
