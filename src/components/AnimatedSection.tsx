"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -50px 0px'
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
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
      case 'fadeInLeft':
        return isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-8';
      case 'fadeInRight':
        return isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-8';
      case 'fadeIn':
        return isVisible ? 'animate-fadeIn' : 'opacity-0';
      case 'scaleIn':
        return isVisible ? 'animate-scaleIn' : 'opacity-0 scale-95';
      default:
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};
