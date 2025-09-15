'use client';

import Image from 'next/image';
import { useEffect, useState, ReactNode } from 'react';
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeroProps {
  title: string | ReactNode;
  subtitle: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  showInstitucionalBadge?: boolean;
  showSociosBadge?: boolean;
  highlightWord?: string;
  customGradient?: string;
}

export default function SectionHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundImageAlt = '',
  showInstitucionalBadge = false,
  showSociosBadge = false,
  highlightWord = '',
  customGradient
}: SectionHeroProps) {
  // Función para dividir el título y resaltar la palabra específica
  const renderTitle = (title: string | ReactNode, highlightWord?: string) => {
    if (typeof title !== 'string') return title;
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span style={{ color: '#FF4757' }}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  // Hook para objectPosition responsive en cliente (más robusto)
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const objectPosition = windowWidth !== null && windowWidth <= 640 ? '64% center' : '60% center';


  return (
    <section 
      className="relative h-[90vh] w-full flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={backgroundImageAlt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        priority
        unoptimized
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none`}
        style={{
          background: windowWidth !== null && windowWidth <= 640
            ? 'linear-gradient(to right, rgba(15,23,42,0.93) 0%, rgba(30,41,59,0.85) 60%, rgba(0,0,0,0.28) 100%)'
            : undefined
        }}
      >
        {windowWidth === null || windowWidth > 640 ? (
            <div
              className={customGradient || ''}
              style={{
                width: '100%',
                height: '100%',
                background: customGradient ? undefined : 'linear-gradient(to right, rgba(15,23,42,1) 0%, rgba(30,41,59,0.88) 50%, rgba(30,41,59,0.32) 75%, rgba(0,0,0,0.10) 100%)'
              }}
            />
        ) : null}
      </div>
      {/* Content */}
      <div className="relative z-10 w-full pl-6 md:pl-46">
        <div className="max-w-7xl">
          <div className="text-left max-w-2xl">
            {showInstitucionalBadge && (
              <AnimatedSection className="mb-6" animation="fadeInUp" delay={0}>
                <span className="inline-block px-4 py-2 bg-[#091b3f]/90 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase rounded-lg border border-white/20">
                  Institucional
                </span>
              </AnimatedSection>
            )}
            {showSociosBadge && (
              <AnimatedSection className="mb-6" animation="fadeInUp" delay={0}>
                <span className="inline-block px-4 py-2 bg-[#091b3f]/90 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase rounded-lg border border-white/20">
                  Socios
                </span>
              </AnimatedSection>
            )}
            <AnimatedTitle
              as="h1"
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              animation="fadeInUp"
              delay={200}
              duration={0.8}
            >
              {renderTitle(title, highlightWord)}
            </AnimatedTitle>
            <AnimatedText
              className="text-xl text-white/90 leading-relaxed"
              animation="fadeInUp"
              delay={400}
              duration={0.6}
            >
              {subtitle}
            </AnimatedText>
          </div>
        </div>
      </div>
      {/* Flecha animada hacia abajo */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-8 h-8 text-white opacity-80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
