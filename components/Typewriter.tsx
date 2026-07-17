"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Typewriter({ text, delay = 0 }: { text: string, delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    
    const startTyping = () => {
      let currentText = "";
      let index = 0;
      
      intervalId = setInterval(() => {
        if (index < text.length) {
          currentText += text.charAt(index);
          setDisplayText(currentText);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 70); // 70ms per character
    };

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <span className="inline-block relative">
      {displayText}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[6px] h-[1em] bg-accent ml-1 align-middle"
        style={{ marginTop: "-2px" }}
      />
    </span>
  );
}
