"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  as: Component = 'p',
  animation = 'fadeInUp',
  delay = 100,
  duration = 0.6,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-4';
      case 'fadeInLeft':
        return isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-4';
      case 'fadeInRight':
        return isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-4';
      case 'fadeIn':
        return isVisible ? 'animate-fadeIn' : 'opacity-0';
      default:
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-4';
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
        ...style
      }}
    >
      {children}
    </Component>
  );
};
