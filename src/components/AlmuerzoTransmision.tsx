"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";

export default function AlmuerzoTransmision() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [imgRef, imgVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (titleRef.current && titleVisible) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    if (textRef.current && textVisible) {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }
    if (imgRef.current && imgVisible) {
      gsap.fromTo(
        imgRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }
  }, [titleVisible, textVisible, imgVisible]);

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda: Título y texto */}
          <div className="order-2 lg:order-1">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6"
              style={{
                opacity: titleVisible ? 1 : 0,
                visibility: titleVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.2s, visibility 0.2s',
              }}
            >
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
            <div
              ref={textRef}
              className="space-y-4 text-lg text-gray-600 leading-relaxed"
              style={{
                opacity: textVisible ? 1 : 0,
                visibility: textVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.2s, visibility 0.2s',
              }}
            >
              <p>
                Como desde hace algunos años, el evento fue <strong>transmitido a través de YouTube</strong> y
                replicado en las redes sociales de la Cámara. En la previa y durante la velada, se desarrolló
                un living con entrevistas a distintos integrantes del Directorio y presidentes de Específicas
                de la institución, como así también a diferentes personalidades presentes, entre ellas el
                gobernador, <strong>Alfredo Cornejo</strong>.
              </p>

              <div className="bg-blue-50 p-4 rounded-2xl border-l-4 border-[#091b3f]">
                <p className="text-[#091b3f] font-medium">
                  A cargo de la conducción estuvieron los periodistas <strong>Daniel Ferre</strong> y <strong>Gabriel Carrizo</strong>.
                </p>
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
          <div
            ref={imgRef}
            className="hidden lg:block order-1 lg:order-2"
            style={{
              opacity: imgVisible ? 1 : 0,
              visibility: imgVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.2s, visibility 0.2s',
              transform: imgVisible ? 'none' : 'translateY(40px)',
            }}
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/afv/transmision.jpg"
                alt="Transmisión en vivo del Almuerzo de las Fuerzas Vivas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
