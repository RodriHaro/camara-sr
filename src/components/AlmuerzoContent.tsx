"use client";
import Image from "next/image";

export default function AlmuerzoContent() {
  return (
    <section className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '100rem' }}>
        {/* Contenedor azul con todo el contenido */}
        <div className="bg-[#091b3f] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Rectángulos decorativos estilo CAC */}
          <div className="absolute top-8 left-8 w-64 h-32 bg-white/10 rounded-2xl" style={{backdropFilter: 'blur(2px)'}}></div>
          <div className="absolute top-24 right-16 w-96 h-40 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
          <div className="absolute bottom-16 right-32 w-56 h-32 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
          
          <div className="relative z-10">
            {/* Título centrado */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                <span className="font-normal">Tradicional </span>
                <span className="font-bold">Almuerzo de las Fuerzas Vivas</span>
              </h2>
            </div>

            {/* Contenido principal en grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Texto */}
              <div className="order-2 lg:order-1">
                <div className="prose prose-lg text-white">
                  <p className="text-xl leading-relaxed mb-6 text-white text-opacity-90">
                    La Cámara de Comercio, Industria y Agropecuaria de San Rafael desarrolló el jueves 24 de octubre 
                    su tradicional Almuerzo de las Fuerzas Vivas en el Centro de Congresos y Exposiciones "Alfredo R. Bufano".
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white text-opacity-90">
                    Participaron cerca de <strong className="text-white">700 personas</strong>, destacándose el gobernador, Lic. <strong className="text-white">Alfredo Cornejo</strong> junto a integrantes 
                    de su Gabinete y ministros; el intendente, don <strong className="text-white">Omar Chafí Félix</strong>; mandatarios de distintos departamentos 
                    de la provincia, representantes de los poderes Ejecutivo, Legislativo y Judicial; socios de la institución; 
                    integrantes de distintas cámaras empresariales; autoridades militares, policiales y eclesiásticas, y periodistas.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white text-opacity-90">
                    El tradicional evento inició con la interpretación del Himno Nacional Argentino por parte de la 
                    Banda de Música de la Policía de Mendoza <strong className="text-white">"Felipe Rodríguez Servín"</strong>.
                  </p>
                  <div className="p-6 rounded-2xl shadow-lg bg-white/10" style={{backdropFilter: 'blur(2px)'}}>
                    <p className="text-lg font-semibold text-white">
                      "Un encuentro que reúne a los principales referentes del sector empresarial, político, social y académico 
                      de San Rafael para fortalecer los lazos de cooperación y desarrollo regional."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Imagen */}
              <div className="order-1 lg:order-2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white bg-opacity-10">
                  <Image
                    src="/images/galeria/afv-content.jpg"
                    alt="Evento Almuerzo de las Fuerzas Vivas"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
