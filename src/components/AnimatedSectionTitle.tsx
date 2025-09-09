"use client";

import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';

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
  return (
    <div className={`text-center mb-12 relative z-10 ${className}`}>
      <AnimatedTitle
        className={`text-4xl md:text-5xl mb-4 font-bold leading-tight ${titleClass}`}
        style={{ color }}
        animation="fadeInUp"
        duration={0.8}
      >
        {title}
      </AnimatedTitle>
      {subtitle && (
        <AnimatedText
          className={`text-lg max-w-2xl mx-auto ${subtitleClass}`}
          style={{ color: color === "white" ? "#fff" : color }}
          animation="fadeInUp"
          delay={200}
          duration={0.6}
        >
          {subtitle}
        </AnimatedText>
      )}
    </div>
  );
}
