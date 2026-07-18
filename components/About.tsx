"use client";

import { about } from "@/lib/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        {/* IRL / Behind the scenes Gallery */}
        <div className="mb-24">
          <div className="section-eyebrow">
            BEHIND THE SCENES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.gallery.map((img, i) => (
              <div key={i} className="glass-panel p-2 rounded-3xl overflow-hidden group h-72 md:h-[400px] relative cursor-pointer">
                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/15 rounded-3xl transition-colors duration-500 z-20 pointer-events-none shadow-inner" />
                
                {/* Photo Description (shows on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6 md:p-8 rounded-3xl">
                  <p className="text-text-primary text-base md:text-lg font-body leading-snug text-balance">
                    {img.description}
                  </p>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Gallery image ${i + 1}`}
                  className={`w-full h-full ${img.fit} ${img.position} grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-[20px] relative z-10`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Eyebrow */}
        <div className="section-eyebrow">{about.eyebrow}</div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left bio column */}
          <div className="flex-1 max-w-2xl">
            <h2 className="display-title mb-8 text-4xl md:text-5xl">
              BEHIND<br/>THE CODE.
            </h2>
            
            <div className="flex flex-col gap-6 font-body text-text-primary text-lg leading-relaxed mb-12">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-xl font-medium" : "text-text-muted text-base"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Currently status grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 flex flex-col justify-center">
                <span className="font-mono text-xs text-accent uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Currently Building
                </span>
                <span className="font-body text-text-primary font-medium">
                  {about.currently.building}
                </span>
              </div>
              <div className="glass-panel p-6 flex flex-col justify-center">
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-text-muted"></span>
                  Currently Reading
                </span>
                <span className="font-body text-text-primary font-medium">
                  {about.currently.reading}
                </span>
              </div>
            </div>
          </div>

          {/* Right avatar column */}
          {about.avatar && (
            <div className="w-full max-w-sm lg:w-1/3 group relative pt-4 pr-4">
              {/* L-shaped border effect */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 border-t-2 border-r-2 border-accent rounded-tr-2xl opacity-50 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-100 z-0"></div>
              
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border glass-panel z-10">
                <img
                  src={about.avatar}
                  alt="Akshay Varma"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
