"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';
import Image from 'next/image';

// Slide type definition
export type HeroSlide = {
  image: string;
  responsiveImages?: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
    default: string;
  };
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
};

interface HeroSliderProps {
  slides: HeroSlide[];
}

// Helper function to get optimal image source based on screen size
const getOptimalImageSrc = (slide: HeroSlide, windowWidth: number | null) => {
  if (!slide.responsiveImages || windowWidth === null) {
    return slide.image;
  }
  
  if (windowWidth <= 768) {
    return slide.responsiveImages.mobile;
  } else if (windowWidth <= 1600) {
    return slide.responsiveImages.tablet; // Use optimized tablet images for laptops/MacBooks
  } else {
    return slide.responsiveImages.desktop;
  }
};

// Helper function to get responsive object position
const getObjectPosition = (windowWidth: number | null) => {
  // Default fallback for SSR and first render
  if (windowWidth === null) return '60% center';
  
  if (windowWidth <= 768) {
    return '65% center'; // Mobile - keep original mobile positioning
  } else if (windowWidth <= 1600) {
    return '65% 35%'; // Laptops including MacBooks - better portrait positioning
  } else {
    return '60% center'; // Large Desktop - original desktop positioning
  }
};

// Helper function to get responsive gradient
const getResponsiveGradient = (windowWidth: number | null) => {
  if (windowWidth === null) {
    return 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)';
  }
  
  if (windowWidth <= 768) {
    // Mobile - keep original mobile gradient (vertical from bottom)
    return 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%)';
  } else if (windowWidth <= 1024) {
    // Tablet/Laptop - improved diagonal gradient for better balance on notebooks
    return 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)';
  } else {
    // Desktop - original desktop gradient
    return 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)';
  }
};

// HeroSlider: Carousel replicating cac.com.ar hero
const AUTOPLAY_INTERVAL = 6000;

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay logic
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    autoplayRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [current, isPaused, slides.length]);

  // Track window width for responsive positioning
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pause on tab inactive
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  }, [current]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) prevSlide();
      if (startX - endX > 50) nextSlide();
    };
    const node = sliderRef.current;
    if (node) {
      node.addEventListener("touchstart", handleTouchStart);
      node.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      if (node) {
        node.removeEventListener("touchstart", handleTouchStart);
        node.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [current]);

  // Slide navigation
  function goTo(idx: number) {
    setCurrent(idx);
  }
  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }
  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Animación de entrada para el slide activo
  // refs para animación por scroll (useScrollReveal)

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden"
      style={{
        height: "calc(100vh - 80px)" // Restamos aproximadamente la altura del header
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero slider"
      aria-live="polite"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          aria-hidden={idx !== current}
        >
          {/* Background image with overlay - Optimized for mobile */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={getOptimalImageSrc(slide, windowWidth)}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-300 ease-out"
              style={{
                objectPosition: getObjectPosition(windowWidth),
                transform: idx === current ? 'scale(1)' : 'scale(1.05)',
                transition: 'transform 0.7s ease-out, object-position 0.3s ease-out'
              }}
              priority={idx === current}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              quality={95}
            />
            {/* Overlay gradient for legibility */}
            <div className="absolute inset-0 z-10">
              <div className="w-full h-full pointer-events-none"
                style={{
                  background: getResponsiveGradient(windowWidth)
                }}
              />
            </div>
            <div className="relative z-20 w-full h-full flex items-end justify-start">
              {/* Slide content */}
              <div className="relative z-30 w-full max-w-2xl px-4 py-8 sm:px-6 md:py-12 lg:ml-16 text-white flex flex-col gap-3 md:gap-4">
                <AnimatedSection 
                  className="flex flex-col gap-1" 
                  animation="fadeInUp" 
                  delay={idx === current ? 0 : 0}
                >
                  <span className="text-sm uppercase tracking-wide opacity-80">{slide.date}</span>
                  <span className="text-xs uppercase tracking-widest font-semibold opacity-80">{slide.category}</span>
                </AnimatedSection>
                <AnimatedTitle
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2"
                  animation="fadeInUp"
                  delay={idx === current ? 200 : 0}
                  duration={0.8}
                >
                  {slide.title}
                </AnimatedTitle>
                <AnimatedText
                  className="text-sm sm:text-base md:text-lg opacity-90 mb-3 md:mb-4 max-w-lg"
                  animation="fadeInUp"
                  delay={idx === current ? 400 : 0}
                  duration={0.6}
                >
                  {slide.excerpt}
                </AnimatedText>
                <AnimatedSection 
                  animation="fadeInUp" 
                  delay={idx === current ? 600 : 0}
                >
                  <a
                    href={slide.href}
                    className="inline-flex items-center border border-white rounded-full px-6 py-2 text-base font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white self-start"
                    aria-label={`Ver más sobre ${slide.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver más <span className="ml-2">→</span>
                  </a>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Controls: Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-40 px-4 max-w-xl w-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-white bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white ${idx === current ? "bg-white" : "bg-white/30"}`}
            aria-label={`Ir al slide ${idx + 1}`}
            aria-current={idx === current}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
      {/* Controls: Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Slide anterior"
        onClick={prevSlide}
      >
        <span aria-hidden>←</span>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Slide siguiente"
        onClick={nextSlide}
      >
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}

// Ejemplo de uso
export const exampleSlides: HeroSlide[] = [
  {
    image: "/images/heros/asamblea.avif", // Ruta corregida sin /public
    date: "18 Ago 2025",
    category: "Institucional",
    title: "Nueva sede inaugurada",
    excerpt: "La Cámara de Comercio de San Rafael inaugura su nueva sede para brindar mejores servicios a sus socios.",
    href: "#",
  },
  {
    image: "/images/heros/afv-expo.jpg",
    date: "10 Ago 2025",
    category: "Evento",
    title: "Expo San Rafael 2025",
    excerpt: "Participa en la mayor exposición comercial y empresarial de la región. Inscripciones abiertas.",
    href: "#",
  },
  {
    image: "/images/heros/premiosslider.jpg",
    date: "05 Ago 2025",
    category: "Noticias",
    title: "Premio a la Innovación",
    excerpt: "Reconocimos a los socios que impulsan la innovación y el desarrollo local. ¡Conoce a los ganadores!",
    href: "#",
  },
  {
    image: "/images/heros/asamblea.avif",
    date: "28 Jul 2025",
    category: "Capacitación",
    title: "Programa de Desarrollo Empresarial",
    excerpt: "Nuevos cursos y talleres para fortalecer las competencias de nuestros empresarios asociados.",
    href: "#",
  },

];
