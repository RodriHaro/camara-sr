import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useScrollReveal<T extends HTMLElement>(options?: {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}): [MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const revealed = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    if (revealed.current && options?.once !== false) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          revealed.current = true;
          if (options?.once !== false) observer.disconnect();
        } else if (!options?.once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: options?.rootMargin || "0px",
        threshold: options?.threshold ?? 0.2,
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref.current]);

  return [ref, isVisible];
}
