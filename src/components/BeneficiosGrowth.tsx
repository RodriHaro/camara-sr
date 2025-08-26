import Image from 'next/image';

export default function BeneficiosGrowth() {
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '100rem' }}>
        {/* Contenedor azul único con título, subtítulo y ambas filas */}
        <div className="bg-[#0f172a] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            {/* Título y subtítulo */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Impulsando el crecimiento empresarial
              </h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-white text-opacity-90">
                <strong>+650 empresas</strong> de San Rafael confían en nosotros para crecer, innovar y 
                liderar el desarrollo económico regional. Somos la voz del sector empresarial ante 
                instituciones y gobiernos.
              </p>
            </div>

            {/* Primera fila: Foto a la izquierda, 4 items a la derecha */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
              {/* Foto izquierda */}
              <div className="flex items-center justify-center">
                <div className="w-[40rem] h-[24rem] bg-white bg-opacity-10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/beneficios/info/beneficios-info.jpg"
                    alt="Beneficios empresariales"
                    width={640}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 4 items a la derecha */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Asesoramiento Legal</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Consultoría jurídica especializada para empresas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Gestión Contable</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Soporte financiero y contable profesional
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Comercio Internacional</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                     Asesoramiento especializado para tu negocio.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Sector Agropecuario</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Especialización en agricultura, ganadería y vitivinicultura
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda fila: 4 items a la izquierda, foto a la derecha */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* 4 items a la izquierda */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Consultoría Estratégica</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Crecimiento organizacional y desarrollo empresarial
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Promoción Empresarial</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Visibilidad y networking para tu negocio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Representación Institucional</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Tu voz ante gobiernos e instituciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-300 border-2 border-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Innovación y Desarrollo</h4>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      Impulso a nuevos proyectos y tecnologías
                    </p>
                  </div>
                </div>
              </div>

              {/* Foto derecha */}
              <div className="flex items-center justify-center">
                <div className="w-[40rem] h-[24rem] bg-white bg-opacity-10 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/beneficios/info/beneficios-info-2.jpg"
                    alt="Crecimiento empresarial"
                    width={640}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
