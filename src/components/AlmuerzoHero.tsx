"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";

export default function AlmuerzoHero() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 });

  useEffect(() => {
    if (titleRef.current && titleVisible) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    if (subtitleRef.current && subtitleVisible) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }
  }, [titleVisible, subtitleVisible]);
  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100vh - 80px)" }}>
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/afv/afv-hero-1.jpg"
          alt="Almuerzo de las fuerzas vivas"
          fill
          className="object-cover object-bottom"
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
      <div className="relative z-10 max-w-2xl px-6 py-12 md:ml-16 text-white flex flex-col gap-4" style={{ position: 'absolute', bottom: '0', left: '0', marginBottom: '2rem' }}>
        <div className="mb-2">
          <span className="inline-block px-4 py-2 bg-[#091b3f]/90 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase rounded-lg border border-white/20">
            Evento Institucional
          </span>
        </div>
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-2 drop-shadow-lg"
          style={{
            opacity: titleVisible ? 1 : 0,
            visibility: titleVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.2s, visibility 0.2s',
          }}
        >
          <span className="font-normal">Almuerzo de las </span>
          <span className="font-bold">Fuerzas Vivas</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-base md:text-lg opacity-90 mb-4 max-w-lg drop-shadow-md"
          style={{
            opacity: subtitleVisible ? 1 : 0,
            visibility: subtitleVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.2s, visibility 0.2s',
          }}
        >
          Donde líderes empresariales, autoridades y referentes de San Rafael se unen para construir 
          el futuro económico y social de nuestra región. Un encuentro que se convierte en motor 
          de desarrollo y progreso.
        </p>
      </div>
      {/* Flecha animada hacia abajo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 drop-shadow-lg"></div>
        </div>
      </div>
    </section>
  );
}
