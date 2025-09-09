"use client";

import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';

export default function BeneficiosInfo() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-8">
          <AnimatedTitle
            as="h2"
            className="text-4xl md:text-5xl font-bold text-[#091b3f] mb-6 leading-tight"
            animation="fadeInUp"
            duration={0.8}
          >
            Descubre todos nuestros beneficios
          </AnimatedTitle>
          <AnimatedText
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            animation="fadeInUp"
            delay={200}
            duration={0.6}
          >
            Explora nuestra amplia gama de descuentos, promociones y servicios
            especiales para empresas de San Rafael
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
