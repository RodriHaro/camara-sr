"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";

export function AnimatedSectionTitle({
  title,
  subtitle,
  className = "",
  titleClass = "",
  subtitleClass = "",
  color = "white",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  titleClass?: string;
  subtitleClass?: string;
  color?: string;
}) {
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 });

  useEffect(() => {
    if (titleRef.current && titleVisible) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    if (subtitleRef.current && subtitleVisible) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }
  }, [titleVisible, subtitleVisible]);

  return (
    <div className={`text-center mb-12 relative z-10 ${className}`}>
      <h2
        ref={titleRef}
        className={`text-4xl md:text-5xl mb-4 font-bold leading-tight ${titleClass}`}
        style={{
          color,
          opacity: titleVisible ? 1 : 0,
          visibility: titleVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.2s, visibility 0.2s',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className={`text-lg max-w-2xl mx-auto ${subtitleClass}`}
          style={{
            color: color === "white" ? "#fff" : color,
            opacity: subtitleVisible ? 1 : 0,
            visibility: subtitleVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.2s, visibility 0.2s',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
