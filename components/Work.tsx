"use client";

import { work } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section id="work" className="section-padding relative">
      <div className="container relative">
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-eyebrow"
        >
          {work.eyebrow}
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col mt-8 gap-4">
          {work.projects.map((project, idx) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl transition-all duration-500 hover:glass-panel p-8 md:p-10 -mx-8 md:-mx-10"
              >
                {/* Solid background handled by hover:glass-panel class on parent */}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  
                  {/* Left: Number + Title + Tags */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-sm text-text-muted group-hover:text-accent transition-colors duration-300">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-4xl md:text-5xl font-bold text-text-primary group-hover:text-accent transition-colors duration-500 uppercase tracking-tight relative z-10">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-11 relative z-10">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-text-muted px-3 py-1 border border-border/50 rounded-full group-hover:border-accent/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Description & Buttons */}
                  <div className="flex flex-col lg:items-end text-left lg:text-right max-w-md ml-11 lg:ml-0 gap-6 relative z-10">
                    <p className="font-body text-text-muted text-lg group-hover:text-text-primary transition-colors duration-300">
                      {project.oneliner}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="pill-button pill-button-primary !py-2 !px-5 !text-xs"
                      >
                        View Case Study
                        <span className="ml-2">→</span>
                      </Link>
                      
                      {/* @ts-ignore */}
                      {project.liveUrl && (
                        <a
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-bg hover:bg-accent transition-colors shrink-0"
                          title="Live Demo"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
