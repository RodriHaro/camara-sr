"use client";
import Image from "next/image";
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedImage } from './AnimatedImage';

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

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#091b3f] to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <AnimatedTitle
            as="h2"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            animation="fadeInUp"
            duration={0.8}
          >
            Momentos <span style={{ color: '#FF4757' }}>Históricos</span>
          </AnimatedTitle>
          <AnimatedText
            className="text-xl text-white/90 max-w-3xl mx-auto"
            animation="fadeInUp"
            delay={200}
            duration={0.6}
          >
            Repasamos los hitos más importantes del último año para la Cámara y la región.
          </AnimatedText>
        </div>
        <div className="space-y-16">
          {momentos.map((momento, index) => (
            <AnimatedSection
              key={momento.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              animation="fadeInUp"
              delay={300 + (index * 150)}
              duration={0.7}
            >
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
            </AnimatedSection>
            ))}
          </div>
      </div>
    </section>
  );
}
