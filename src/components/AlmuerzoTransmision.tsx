"use client";
import Image from "next/image";

export default function AlmuerzoTransmision() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contenido */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6">
              Transmisión en vivo
            </h2>
            {/* Imagen debajo del título */}
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/images/afv/transmision.jpg"
                alt="Transmisión en vivo del Almuerzo de las Fuerzas Vivas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
