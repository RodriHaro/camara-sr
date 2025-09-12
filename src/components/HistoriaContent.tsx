import Image from 'next/image';
import { ReactNode } from 'react';
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedImage } from './AnimatedImage';

interface HistoriaContentProps {
  historyBlocks: Array<{
    title: string | ReactNode;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageFirst: boolean;
  }>;
}

export default function HistoriaContent({ historyBlocks }: HistoriaContentProps) {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8" style={{ maxWidth: '140rem' }}>
        {/* Contenedor azul único con título, subtítulo y bloques de historia */}
        <div className="bg-[#0f172a] rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white opacity-5 rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white opacity-5 rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
          
          <div className="relative z-10">
            {/* Bloques de historia */}
            <div className="space-y-16 sm:space-y-24 md:space-y-32">
              {historyBlocks.map((block, index) => (
                <div key={index} className={
                  index === 0 
                    ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-3xl md:max-w-7xl mx-auto"
                    : "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start max-w-3xl md:max-w-7xl mx-auto"
                }>
                  
                  {index === 0 ? (
                    <>
                      {/* Primer bloque: Solo texto - Título centrado */}
                      <AnimatedSection
                        className="col-span-1 md:col-span-2 text-center mb-2 px-2 pt-6 md:pt-10"
                        animation="fadeInUp"
                        delay={0}
                        duration={0.8}
                      >
                        <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                          {block.title}
                        </h4>
                      </AnimatedSection>
                      {/* Primer bloque: Solo texto - Descripción centrada debajo del título */}
                      <AnimatedSection
                        className="col-span-1 md:col-span-2 text-center px-2"
                        animation="fadeInUp"
                        delay={0}
                        duration={0.7}
                      >
                        <div className="text-white text-opacity-90 leading-relaxed max-w-full md:max-w-4xl mx-auto">
                          <div 
                            className="text-base sm:text-lg"
                            dangerouslySetInnerHTML={{ __html: block.description }}
                          />
                        </div>
                      </AnimatedSection>
                    </>
                  ) : index === 1 ? (
                    <>
                      {/* Segundo bloque: Título sobre imagen vertical izquierda */}
                      <AnimatedSection
                        className="relative flex flex-col items-center justify-start md:order-1 self-start px-2"
                        animation="fadeInLeft"
                        delay={0}
                        duration={0.8}
                      >
                        <h4 className="text-2xl sm:text-3xl md:text-5xl text-white text-center mb-4">
                          <span className="font-bold">Fundación</span> <span className="font-normal">y</span> <span className="font-bold">Origen</span>
                        </h4>
                        <div className="w-full max-w-full md:max-w-2xl relative">
                          <div className="bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                            <Image
                              src={block.imageSrc}
                              alt={block.imageAlt}
                              width={600}
                              height={800}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                      </AnimatedSection>
                      
                      {/* Imagen horizontal derecha con descripción debajo */}
                      <AnimatedSection
                        className="md:order-2"
                        animation="fadeInRight"
                        delay={0}
                        duration={0.8}
                      >
                        <div className="w-full max-w-full md:max-w-2xl mb-6">
                          <div className="bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                            <Image
                              src="/images/institucional/camara-historia-2.webp"
                              alt="Imagen histórica de calle con edificios vintage"
                              width={800}
                              height={400}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="text-white text-opacity-90 leading-relaxed">
                          <div 
                            className="text-lg font-normal"
                            dangerouslySetInnerHTML={{ __html: block.description }}
                          />
                        </div>
                      </AnimatedSection>
                    </>
                  ) : index === 2 ? (
                    <>
                      {/* Flecha animada hacia abajo */}
                      <AnimatedSection
                        className="col-span-2 flex justify-center mb-8"
                        animation="fadeInUp"
                        delay={0}
                        duration={0.6}
                      >
                        <div className="animate-bounce">
                          <svg 
                            className="w-12 h-12 text-white opacity-60" 
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
                      </AnimatedSection>
                      
                      {/* Tercer bloque: Imagen y texto unificados */}
                      <AnimatedSection
                        className="col-span-2"
                        animation="fadeInUp"
                        delay={0}
                        duration={0.8}
                      >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                          {/* Imagen */}
                          <div className={`flex flex-col items-center justify-center ${
                            block.imageFirst ? 'md:order-1' : 'md:order-2'
                          } px-2`}>
                            <div className="w-full max-w-full md:max-w-4xl">
                              <div className="bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                                <Image
                                  src={block.imageSrc}
                                  alt={block.imageAlt}
                                  width={1000}
                                  height={500}
                                  className="w-full h-full object-cover"
                                  unoptimized
                                />
                              </div>
                            </div>
                          </div>

                          {/* Contenido */}
                          <div className={`${
                            block.imageFirst ? 'md:order-2' : 'md:order-1'
                          }`}>
                            <h4 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                              <span className="font-normal">Evolución</span> <span className="font-bold">Institucional</span>
                            </h4>
                            <div className="text-white text-opacity-90 leading-relaxed">
                              <div 
                                className="text-lg font-normal"
                                dangerouslySetInnerHTML={{ __html: block.description }}
                              />
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    </>
                  ) : index === 3 ? (
                    <>
                      {/* Cuarto bloque: Todo unificado */}
                      <AnimatedSection
                        className="col-span-2"
                        animation="fadeInUp"
                        delay={0}
                        duration={0.8}
                      >
                        {/* Título */}
                        <div className="text-left mb-8">
                          <div style={{ width: '800px', maxWidth: '800px' }}>
                            <h4 className="text-4xl md:text-5xl text-white leading-tight">
                              <span className="font-bold">Acción</span> <span className="font-normal">y</span> <span className="font-bold">Compromiso</span> <span className="font-normal">Diario</span>
                            </h4>
                          </div>
                        </div>
                        
                        {/* Imagen grande */}
                        <div className="w-full max-w-6xl mx-auto mb-8">
                          <div className="bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                            <Image
                              src="/images/heros/asamblea.avif"
                              alt="Imagen de asamblea histórica de la Cámara de Comercio"
                              width={1200}
                              height={600}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                        
                        {/* Descripción debajo de la imagen */}
                        <div className="text-center pb-8 md:pb-12">
                          <div className="text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
                            <div 
                              className="text-lg"
                              dangerouslySetInnerHTML={{ __html: block.description }}
                            />
                          </div>
                        </div>
                      </AnimatedSection>
                    </>
                  ) : (
                    <>
                      {/* Otros bloques: Imagen y texto */}
                      <div className={`flex flex-col items-center justify-center ${
                        block.imageFirst ? 'md:order-1' : 'md:order-2'
                      } px-2`}>
                        <div className="w-full max-w-full md:max-w-2xl">
                          <div className="bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                            <Image
                              src={block.imageSrc}
                              alt={block.imageAlt}
                              width={800}
                              height={400}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className={`${
                        block.imageFirst ? 'md:order-2' : 'md:order-1'
                      }`}>
                        <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                          {block.title}
                        </h4>
                        <div className="text-white text-opacity-90 leading-relaxed">
                          <div 
                            className="text-lg font-normal"
                            dangerouslySetInnerHTML={{ __html: block.description }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
