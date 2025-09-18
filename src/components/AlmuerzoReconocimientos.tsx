"use client";
import Image from "next/image";
import { AnimatedCardImage } from "./AnimatedCardImage";
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';

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


  // Animaciones eliminadas. Título y subtítulo siempre visibles.

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <AnimatedTitle
            as="h2"
            className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6"
            animation="fadeInUp"
            duration={0.8}
          >
            Reconocimientos y Distinciones 2024
          </AnimatedTitle>
          <AnimatedText
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animation="fadeInUp"
            delay={200}
            duration={0.6}
          >
            Empresas y personalidades destacadas por su contribución al desarrollo empresarial y económico de San Rafael.
          </AnimatedText>
        </div>

        {/* Grid de reconocimientos */}
        <AnimatedSection
          className="grid md:grid-cols-2 gap-8 auto-rows-fr"
          animation="fadeInUp"
          delay={400}
          duration={0.8}
        >
          {reconocimientos.map((reconocimiento) => (
            <AnimatedCardImage key={reconocimiento.id}>
              <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Imagen sin badge */}
                <div className="relative h-64 mx-6 mt-6 mb-4 flex-shrink-0">
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
                <div className="p-6 pt-2 flex-grow flex flex-col">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#091b3f] text-center md:text-left w-full md:w-auto">
                      {reconocimiento.empresa}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#091b3f] text-white text-xs font-medium rounded-full text-center w-full md:w-auto flex-shrink-0">
                      {reconocimiento.categoria}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {reconocimiento.descripcion}
                  </p>
                </div>
              </div>
            </AnimatedCardImage>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
