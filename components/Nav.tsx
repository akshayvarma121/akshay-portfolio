"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = nav.links.map((link) => link.href.replace("#", ""));
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 rounded-2xl border ${scrolled ? 'bg-bg/80 backdrop-blur-md border-border shadow-lg py-3 px-6' : 'bg-transparent border-transparent py-2 px-2'}`}>
          {/* Left Side Monogram */}
          <a
            href="#"
            className="font-display text-xl font-bold text-text-primary tracking-tighter hover:text-accent transition-colors"
          >
            {nav.monogram}
          </a>

          {/* Right Side (Desktop Links) */}
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative font-body text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px]' : ''}`}></span>
              <span className={`w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 glass-panel flex flex-col gap-4 md:hidden"
          >
            {nav.links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-body text-lg font-medium p-2 rounded-lg transition-colors ${
                    isActive ? "text-accent bg-accent/10" : "text-text-primary"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
