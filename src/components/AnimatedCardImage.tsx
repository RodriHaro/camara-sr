"use client";

import { AnimatedImage } from './AnimatedImage';

export function AnimatedCardImage({
  children,
  className = "",
  animation = "scaleIn",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'zoomIn';
  delay?: number;
}) {
  return (
    <AnimatedImage
      className={className}
      animation={animation}
      delay={delay}
      duration={0.7}
    >
      {children}
    </AnimatedImage>
  );
}
