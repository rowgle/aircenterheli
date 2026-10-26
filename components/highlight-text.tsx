"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
}

export function HighlightText({ children, className = "" }: HighlightTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const text = textRef.current;
    if (!container || !highlight || !text) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          highlight.style.transform = "scaleX(1)";
          text.style.color = "#ffffff";
        } else {
          highlight.style.transform = "scaleX(0)";
          text.style.color = "rgb(10, 10, 10)";
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <span
        ref={highlightRef}
        className="absolute inset-0 bg-black transition-transform duration-700 ease-out"
        style={{
          left: "-0.08em",
          right: "-0.08em",
          top: "0.05em",
          bottom: "0.02em",
          transform: "scaleX(0)",
          transformOrigin: "left center",
        }}
      />
      <span
        ref={textRef}
        className="relative z-10 transition-colors duration-500"
        style={{ color: "rgb(10, 10, 10)" }}
      >
        {children}
      </span>
    </span>
  );
}