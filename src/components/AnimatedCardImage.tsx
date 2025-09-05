"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";

export function AnimatedCardImage({
  children,
  className = "",
  direction = "up",
  duration = 1.1,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  useEffect(() => {
    if (ref.current && visible) {
      let from: any = { opacity: 0 };
      if (direction === "up") from.y = 60;
      if (direction === "down") from.y = -60;
      if (direction === "left") from.x = 60;
      if (direction === "right") from.x = -60;
      gsap.fromTo(
        ref.current,
        from,
        { y: 0, x: 0, opacity: 1, duration, delay, ease: "power3.out" }
      );
    }
  }, [visible]);
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
