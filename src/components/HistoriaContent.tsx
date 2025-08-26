import Image from 'next/image';

interface HistoriaContentProps {
  historyBlocks: Array<{
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageFirst: boolean;
  }>;
}

export default function HistoriaContent({ historyBlocks }: HistoriaContentProps) {
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '140rem' }}>
        {/* Contenedor azul único con título, subtítulo y bloques de historia */}
        <div className="bg-[#0f172a] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            {/* Bloques de historia */}
            <div className="space-y-32">
              {historyBlocks.map((block, index) => (
                <div key={index} className={
                  index === 0 
                    ? "grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
                    : "grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto"
                }>
                  
                  {index === 0 ? (
                    <>
                      {/* Primer bloque: Solo texto - Título centrado */}
                      <div className="col-span-2 text-center mb-2">
                        <h4 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                          {block.title}
                        </h4>
                      </div>
                      
                      {/* Primer bloque: Solo texto - Descripción centrada debajo del título */}
                      <div className="col-span-2 text-center">
                        <div className="text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
                          <div 
                            className="text-lg"
                            dangerouslySetInnerHTML={{ __html: block.description }}
                          />
                        </div>
                      </div>
                    </>
                  ) : index === 1 ? (
                    <>
                      {/* Segundo bloque: Título sobre imagen vertical izquierda */}
                      <div className="relative flex flex-col items-center justify-start md:order-1 self-start">
                        <h4 className="text-4xl md:text-5xl text-white text-center mb-4">
                          <span className="font-bold">Fundación</span> <span className="font-normal">y</span> <span className="font-bold">Origen</span>
                        </h4>
                        <div className="w-full max-w-2xl relative">
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
                      </div>
                      
                      {/* Imagen horizontal derecha con descripción debajo */}
                      <div className="md:order-2">
                        <div className="w-full max-w-2xl mb-6">
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
                      </div>
                    </>
                  ) : index === 2 ? (
                    <>
                      {/* Flecha animada hacia abajo */}
                      <div className="col-span-2 flex justify-center mb-8">
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
                      </div>
                      
                      {/* Tercer bloque: Imagen y texto */}
                      <div className={`flex items-center justify-center ${
                        block.imageFirst ? 'md:order-1' : 'md:order-2'
                      }`}>
                        <div className="w-full max-w-4xl">
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
                    </>
                  ) : index === 3 ? (
                    <>
                      {/* Cuarto bloque: Solo texto - Título y descripción arriba */}
                      <div className="text-left row-span-1 col-start-1 self-start" style={{ width: '800px', maxWidth: '800px' }}>
                        <h4 className="text-4xl md:text-5xl text-white leading-tight" style={{ marginBottom: '-10px' }}>
                          <span className="font-bold">Acción</span> <span className="font-normal">y</span> <span className="font-bold">Compromiso</span> <span className="font-normal">Diario</span>
                        </h4>
                      </div>
                      
                      {/* Cuarto bloque: Imagen grande debajo del título */}
                      <div className="col-span-2">
                        <div className="w-full max-w-6xl mx-auto">
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
                      </div>
                      
                      {/* Cuarto bloque: Descripción debajo de la imagen */}
                      <div className="col-span-2 text-center">
                        <div className="text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
                          <div 
                            className="text-lg"
                            dangerouslySetInnerHTML={{ __html: block.description }}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Otros bloques: Imagen y texto */}
                      <div className={`flex items-center justify-center ${
                        block.imageFirst ? 'md:order-1' : 'md:order-2'
                      }`}>
                        <div className="w-full max-w-2xl">
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
