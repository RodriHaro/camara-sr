"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
  delay?: number;
  duration?: number;
  staggerWords?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  children,
  className = '',
  as: Component = 'h2',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  staggerWords = false,
  style = {},
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

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
        threshold: 0.2,
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
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-6';
      case 'fadeInLeft':
        return isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-6';
      case 'fadeInRight':
        return isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-6';
      case 'fadeIn':
        return isVisible ? 'animate-fadeIn' : 'opacity-0';
      default:
        return isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-6';
    }
  };

  if (staggerWords && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <Component
        ref={elementRef}
        className={`${className}`}
        style={style}
        id={id}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all ${getAnimationClass()}`}
            style={{
              transitionDelay: `${delay + (index * 100)}ms`,
              transitionDuration: `${duration}s`
            }}
          >
            {word}{index < words.length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      ref={elementRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
        ...style
      }}
      id={id}
    >
      {children}
    </Component>
  );
};
