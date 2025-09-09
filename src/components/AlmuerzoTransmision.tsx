"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function AlmuerzoTransmision() {


  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda: Título y texto */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6">
              Transmisión en vivo
            </h2>
            {/* Imagen solo en mobile debajo del título */}
            <div className="block lg:hidden">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/afv/transmision.jpg"
                  alt="Transmisión en vivo del Almuerzo de las Fuerzas Vivas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <div className="text-lg text-gray-700 mb-8">
                Disfruta la transmisión en vivo del evento más importante del año para la Cámara de Comercio de San Rafael.
              </div>
              <p>
                Asimismo, cerca de <strong>cuarenta medios de toda la provincia</strong> se hicieron presentes
                para cubrir el Almuerzo, demostrando la relevancia e impacto mediático del evento en la región.
              </p>
            </div>

            {/* Información adicional */}
            <div className="mt-6 bg-gradient-to-r from-[#091b3f] to-blue-900 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🎙️</span>
                <h4 className="text-lg font-bold">Cobertura Multimedia</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                El living de entrevistas permitió a los espectadores conocer de cerca las perspectivas
                de los líderes empresariales y autoridades presentes en este importante evento institucional.
              </p>
            </div>
          </div>
          {/* Columna derecha: Imagen en desktop */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/afv/transmision.jpg"
                  alt="Transmisión en vivo del Almuerzo de las Fuerzas Vivas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

