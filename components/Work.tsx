"use client";

import { work } from "@/lib/content";
import TiltCard from "./TiltCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section id="work" className="section-padding relative">
      <div className="container">
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-eyebrow"
        >
          {work.eyebrow}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
          {work.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className="group relative h-full p-8 rounded-3xl border border-border glass-panel transition-all duration-500 hover:border-accent hover:shadow-[0_0_40px_-10px_rgba(232,255,71,0.15)] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />

                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-display text-2xl font-bold text-text-primary tracking-tight">
                        {project.title}
                      </h3>
                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border shrink-0">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                          {project.stat}
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                      {project.oneliner}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <Link
                        href={`/work/${project.slug}`}
                        className="font-mono text-xs uppercase tracking-widest text-text-primary hover:text-accent transition-colors flex items-center gap-2 group/link"
                      >
                        View Case Study
                        <span className="group-hover/link:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                      
                      {/* @ts-ignore */}
                      {project.liveUrl && (
                        <a
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors"
                          title="Live Demo"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
