"use client";
import Image from "next/image";

export default function AlmuerzoTradicional() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6">
              Tradicional Almuerzo de las Fuerzas Vivas
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                El <strong>Almuerzo de las Fuerzas Vivas</strong> es uno de los eventos más importantes 
                del calendario institucional de San Rafael, donde líderes empresariales, autoridades 
                y referentes de la región se congregan para analizar el presente y proyectar el futuro 
                económico y social de nuestra comunidad.
              </p>
              
              <p>
                Este encuentro anual se ha consolidado como un espacio fundamental de <strong>diálogo, 
                networking y construcción de consensos</strong>, donde se abordan los principales desafíos 
                y oportunidades que enfrenta el tejido empresarial sanrafaelino.
              </p>
              
              <p>
                La tradición del evento incluye la <strong>bendición de los alimentos</strong> por parte 
                de autoridades eclesiásticas, el reconocimiento a empresas y personalidades destacadas, 
                y la presentación de proyectos estratégicos para el desarrollo regional.
              </p>
            </div>

            {/* Características del evento */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🤝</span>
                  <span className="font-bold text-[#091b3f]">Networking</span>
                </div>
                <p className="text-sm text-gray-600">
                  Conexión entre líderes empresariales y autoridades
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🏆</span>
                  <span className="font-bold text-[#091b3f]">Reconocimientos</span>
                </div>
                <p className="text-sm text-gray-600">
                  Distinciones a empresas y personalidades destacadas
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📈</span>
                  <span className="font-bold text-[#091b3f]">Desarrollo</span>
                </div>
                <p className="text-sm text-gray-600">
                  Proyectos estratégicos para el crecimiento regional
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🌟</span>
                  <span className="font-bold text-[#091b3f]">Tradición</span>
                </div>
                <p className="text-sm text-gray-600">
                  Evento anual consolidado en el calendario institucional
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/afv/salon-principal.jpg"
              alt="Salón principal durante el Almuerzo de las Fuerzas Vivas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-bold mb-2">Evento Institucional</h4>
              <p className="text-white/90">
                Donde líderes y autoridades construyen el futuro de San Rafael
              </p>
            </div>
          </div>
        </div>

        {/* Bendición religiosa */}
        <div className="mt-16 bg-gradient-to-r from-[#091b3f] to-blue-900 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bendición de los Alimentos</h3>
              <p className="text-white/90 leading-relaxed">
                Como es tradición en cada almuerzo, el obispo de la Diócesis de San Rafael, 
                <strong> monseñor fray Carlos María Domínguez</strong>, realizó una emotiva 
                bendición de alimentos, momento que simboliza la unión entre la comunidad 
                empresarial y los valores espirituales que guían nuestro desarrollo.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-4">
                <span className="text-4xl">🙏</span>
              </div>
              <p className="text-sm text-white/80">
                Monseñor fray Carlos María Domínguez<br/>
                Obispo de la Diócesis de San Rafael
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
