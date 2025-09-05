"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";
import { AnimatedCardImage } from "./AnimatedCardImage";

export default function AlmuerzoMomentosHistoricos() {
  const momentos = [
    {
      id: 1,
      titulo: "Federación de Cámaras del Sur",
      subtitulo: "Un hecho histórico para la región",
      descripcion: "Gabriel Brega, Ramiro Labay (Cámara de General Alvear) y Víctor Arce (Cámara de Malargüe) firmaron una Carta de Intención para la conformación de la Federación de Cámaras del Sur. Es la primera vez que las tres instituciones gremiales empresarias de la región trabajan mancomunadamente.",
      imagen: "/images/afv/federacion-camaras-sur.webp",
      personajes: ["Gabriel Brega", "Ramiro Labay", "Víctor Arce"]
    },
    {
      id: 2,
      titulo: "Reconocimiento de Propiedad",
      subtitulo: "Formalización del terreno de la Aduana",
      descripcion: "Omar Félix, Gabriel Brega y Gerardo Garino (Presidente Fundación Ce.D.E.) firmaron el Acta de Reconocimiento de Propiedad Titular del terreno donde se emplazan las instalaciones de la Fundación en el Parque Industrial, avance significativo para el nodo logístico del oasis sur.",
      imagen: "/images/afv/reconocimiento-propiedad.webp",
      personajes: ["Omar Félix", "Gabriel Brega", "Gerardo Garino"]
    },
    {
      id: 3,
      titulo: "Reconocimiento Diario Los Andes",
      subtitulo: "Día del Santo Patrono San Rafael Arcángel",
      descripcion: "Autoridades del prestigioso medio entregaron una tapa impresa de un ejemplar de 1887 a la Municipalidad de San Rafael y la CCIA. Un momento emotivo que conecta la historia con el presente.",
      imagen: "/images/afv/reconocimiento-los-andes.webp",
      personajes: ["Pablo Dellazoppa", "Florencia Afranllie", "Omar Félix", "Gabriel Brega"]
    }
  ];

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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#091b3f] to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{
              opacity: titleVisible ? 1 : 0,
              visibility: titleVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.2s, visibility 0.2s',
            }}
          >
            Momentos Históricos del Evento
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-white/90 max-w-3xl mx-auto"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              visibility: subtitleVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.2s, visibility 0.2s',
            }}
          >
            Hitos que marcarán el futuro del desarrollo empresarial y institucional de la región sur de Mendoza.
          </p>
        </div>

        {/* Momentos históricos */}
        <div className="space-y-16">
          {momentos.map((momento, index) => (
            <AnimatedCardImage key={momento.id} direction={index % 2 === 1 ? "left" : "right"} delay={0.1 * index}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Imagen */}
                <div className={`relative h-80 rounded-3xl overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}>
                  <Image
                    src={momento.imagen}
                    alt={momento.titulo}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-[#FF4757] text-white text-sm font-medium rounded-full mb-4">
                      Momento Histórico
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {momento.titulo}
                  </h3>
                  
                  <h4 className="text-xl font-medium text-[#E1AD01] mb-6">
                    {momento.subtitulo}
                  </h4>
                  
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {momento.descripcion}
                  </p>

                  {/* Personajes involucrados */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <h5 className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wide">
                      Participantes
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {momento.personajes.map((personaje, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 text-white text-sm rounded-lg"
                        >
                          {personaje}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCardImage>
          ))}
        </div>
      </div>
    </section>
  );
}
