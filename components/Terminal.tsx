"use client";

import { useEffect, useState, useRef } from "react";
import { terminal } from "@/lib/content";

interface TerminalProps {
  onComplete: () => void;
}

export default function Terminal({ onComplete }: TerminalProps) {
  const [mounted, setMounted] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Keep a stable ref for onComplete to prevent useEffect re-triggering
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleSkip = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setDisplayedLines(terminal.lines.map((l) => l.text));
    setCompleted(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio-terminal-skipped", "true");
    }
    onCompleteRef.current();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Listen for Escape key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Check if user has already seen the animation in this session
    const isSkipped =
      typeof window !== "undefined" &&
      sessionStorage.getItem("portfolio-terminal-skipped") === "true";

    // prefers-reduced-motion check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (isSkipped || mediaQuery.matches) {
      setDisplayedLines(terminal.lines.map((l) => l.text));
      setCompleted(true);
      onCompleteRef.current();
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    let lineIdx = 0;
    let charIdx = 0;

    const runTyping = () => {
      if (lineIdx >= terminal.lines.length) {
        setCompleted(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("portfolio-terminal-skipped", "true");
        }
        onCompleteRef.current();
        return;
      }

      const line = terminal.lines[lineIdx];

      if (line.text === "") {
        setDisplayedLines((prev) => [...prev, ""]);
        lineIdx++;
        charIdx = 0;
        const delay = line.delay ?? 0;
        timerRef.current = setTimeout(runTyping, delay);
        return;
      }

      setDisplayedLines((prev) => {
        const next = [...prev];
        if (next[lineIdx] === undefined) {
          next[lineIdx] = "";
        }
        return next;
      });

      const typeChar = () => {
        if (charIdx < line.text.length) {
          const nextChar = line.text[charIdx];
          setDisplayedLines((prev) => {
            const next = [...prev];
            next[lineIdx] = (next[lineIdx] || "") + nextChar;
            return next;
          });
          charIdx++;
          timerRef.current = setTimeout(typeChar, 38); // 38ms typing interval
        } else {
          lineIdx++;
          charIdx = 0;
          const delay = line.delay ?? 0;
          timerRef.current = setTimeout(runTyping, delay);
        }
      };

      typeChar();
    };

    runTyping();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [mounted]);

  // Server-side / pre-mount placeholder matching initial server structure
  if (!mounted) {
    return <div className="terminal-container" />;
  }

  return (
    <div className="terminal-container">
      {/* Skip Button */}
      {!completed && (
        <button
          onClick={handleSkip}
          className="project-link"
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "11px",
            cursor: "pointer",
            outline: "none",
            userSelect: "none",
          }}
        >
          Skip [Esc]
        </button>
      )}

      {displayedLines.map((lineText, idx) => {
        const isActive = !completed && idx === displayedLines.length - 1;
        const lineConfig = terminal.lines[idx];

        let style: React.CSSProperties = { color: "var(--text-primary)" };
        if (lineConfig?.colour === "accent") {
          style = { color: "var(--accent)" };
        } else if (lineConfig?.colour === "muted") {
          style = { color: "var(--text-muted)" };
        }

        if (lineText === "") {
          return (
            <div key={idx} style={{ height: "1.8em" }}>
              {isActive && <span className="cursor">▋</span>}
            </div>
          );
        }

        return (
          <div key={idx} style={style}>
            {lineText}
            {isActive && <span className="cursor">▋</span>}
          </div>
        );
      })}
    </div>
  );
}
