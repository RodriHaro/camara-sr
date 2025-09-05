"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from './useScrollReveal';

export default function BeneficiosInfo() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [subtitleRef, subtitleVisible] = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 });
  useEffect(() => {
    if (titleRef.current && titleVisible) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
    if (subtitleRef.current && subtitleVisible) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, [titleVisible, subtitleVisible]);

  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-8">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#091b3f] mb-6 leading-tight"
          >
            Descubre todos nuestros beneficios
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Explora nuestra amplia gama de descuentos, promociones y servicios
            especiales para empresas de San Rafael
          </p>
        </div>
      </div>
    </section>
  );
}
