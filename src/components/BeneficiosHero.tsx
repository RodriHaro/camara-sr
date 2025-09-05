"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BeneficiosHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' });
    }
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 0.3, ease: 'power3.out' });
    }
  }, []);
  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/beneficios/beneficios-hero.avif"
          alt="Beneficios exclusivos"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091b3f]/5 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#091b3f]/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl"></div>
        </div>
      </div>
      <div className="relative z-10 w-full pl-6 md:pl-46">
        <div className="max-w-7xl">
          <div className="text-left max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold opacity-80 text-white">Cámara de Comercio</span>
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold leading-tight mb-2 drop-shadow-lg text-white mt-4">
              Empresas que nos acompañan al almuerzo de las fuerzas vivas
            </h1>
            <p ref={subtitleRef} className="text-base md:text-lg opacity-90 mb-4 max-w-lg drop-shadow-md text-white">
              Conectamos empresas, impulsamos el crecimiento y fortalecemos el tejido empresarial de San Rafael. Juntos, transformamos desafíos en oportunidades de desarrollo.
            </p>
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
