"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";
import { AnimatedCardImage } from "./AnimatedCardImage";

export default function AlmuerzoReconocimientos() {
  const reconocimientos = [
    {
      id: 1,
      empresa: "Cereales El Diamante",
      categoria: "Desarrollo Regional",
      descripcion: "Por asumir riesgos y apostar al desarrollo regional sanrafaelino",
      imagen: "/images/afv/cereales-el-diamante.jpg"
    },
    {
      id: 2,
      empresa: "ROSIN ONG",
      categoria: "Joven Emprendedor 2024",
      descripcion: "Por su innovación y creatividad, generando nuevos negocios",
      imagen: "/images/afv/rosin-ong.webp"
    },
    {
      id: 3,
      empresa: "Los Gallegos Deportes",
      categoria: "Trayectoria Empresarial",
      descripcion: "Por su trayectoria y antigüedad en el medio (50 años), expandiéndose en el departamento",
      imagen: "/images/afv/los-gallegos-deportes.webp"
    },
    {
      id: 4,
      empresa: "Mauricio Marín",
      categoria: "Participación Institucional",
      descripcion: "Por su participación activa en la CCIA durante la actual gestión",
      imagen: "/images/afv/mauricio-marin.webp"
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
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6"
            style={{
              opacity: titleVisible ? 1 : 0,
              visibility: titleVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.2s, visibility 0.2s',
            }}
          >
            Reconocimientos y Distinciones 2024
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              visibility: subtitleVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.2s, visibility 0.2s',
            }}
          >
            Empresas y personalidades destacadas por su contribución al desarrollo empresarial y económico de San Rafael.
          </p>
        </div>

        {/* Grid de reconocimientos */}
        <div className="grid md:grid-cols-2 gap-8">
          {reconocimientos.map((reconocimiento, idx) => (
            <AnimatedCardImage key={reconocimiento.id} direction="up" delay={0.1 * idx}>
              <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Imagen sin badge */}
                <div className="relative h-64 mx-6 mt-6 mb-4">
                  <Image
                    src={reconocimiento.imagen}
                    alt={`${reconocimiento.empresa} - ${reconocimiento.categoria}`}
                    fill
                    className={`object-cover rounded-2xl ${
                      reconocimiento.empresa === "Cereales El Diamante" 
                        ? "object-[center_30%]" 
                        : "object-top"
                    }`}
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 pt-2">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#091b3f] text-center md:text-left w-full md:w-auto">
                      {reconocimiento.empresa}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#091b3f] text-white text-xs font-medium rounded-full text-center w-full md:w-auto">
                      {reconocimiento.categoria}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {reconocimiento.descripcion}
                  </p>
                </div>
              </div>
            </AnimatedCardImage>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Luego de que los presentes compartieran un brindis, y mientras degustaban el plato servido por 
            <strong> Graciela Hisa Catering</strong>, llegó el momento de las distinciones a empresas y personalidades, 
            ya clásicas en cada Almuerzo.
          </p>
        </div>
      </div>
    </section>
  );
}
