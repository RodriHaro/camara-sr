"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedImage } from './AnimatedImage';

export default function AlmuerzoDiscurso() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const discursoSecciones = [
    {
      id: "presentacion",
      titulo: "Presentación del Discurso",
      contenido: "Tras los emotivos galardones, el presentador del evento, Daniel Lorenzo, invitó a subir al escenario al presidente de la institución, Gabriel Brega, quien pronunció su primer discurso anual como presidente de la misma."
    },
    {
      id: "industria",
      titulo: "Industria",
      contenido: "En materia de Industria, Brega celebró haber logrado celeridad en trámites ante el Registro Nacional de Establecimientos (RNE) y el Registro Nacional de Productos Alimenticios (RNPA), aunque pidió que los tiempos sean cada vez sean menores. También, a la Municipalidad, que se encauce el Certificado de Bomberos, que se ha trabajado fuera de lo que reglamenta el Código de Edificación. Asimismo, le solicitó al Gobierno de Mendoza que ponga en agenda el proyecto Ferrocarril Unión Pacífico, con el fin de tener acceso a los puertos, tanto del Atlántico como del Pacífico."
    },
    {
      id: "comercio",
      titulo: "Comercio",
      contenido: "A la hora de hablar de Comercio, destacó la erradicación del comercio callejero informal, algo en lo que la institución venía trabajando desde hace años. Por otro lado, pidió que finalice la obra del el Gasoducto GasAndes, como así también las obras realizadas en el Aeropuerto Suboficial Ayudante Santiago Germanó, incluyendo el sistema ILS que permite el control y guiado de aviones en maniobras de aterrizaje cuando las condiciones climáticas no son las adecuadas (pedido reiterado de la CCIA), una nueva autobomba y oficinas de Aduana y Migraciones, para conseguir la internacionalización del espacio."
    },
    {
      id: "desarrollo",
      titulo: "Desarrollo y Promoción",
      contenido: "Brega solicitó que no haya tanta demora al momento de realizar trámites municipales, con el fin de lograr 'un polo de desarrollo atractivo para el sector privado', y pidió que se emita una ordenanza de Promoción Industrial Municipal y de apoyo al Régimen de Incentivos de Grandes Inversiones de flexibilización impositiva, aduanera y cambiaria. Celebró la concreción de la Federación Territorial de Cámaras de la Región Sur y, en otro sentido, les pidió a la Provincia y al Municipio que adopten el instituto jurídico del Silencio Positivo, para evitar el 'cajoneo' de expedientes."
    },
    {
      id: "infraestructura",
      titulo: "Infraestructura",
      contenido: "En el apartado de Infraestructura, pidió que se concrete la obra del Acueducto Ganadero, para dotar de agua para ganadería a la zona este del departamento. Asimismo, solicitó que se concrete la obra de la Ruta Provincial 150 que une San Rafael con General Alvear. También pidió que se concrete la obra de la Ruta Nacional 143 que une San Rafael con Malargüe, y que se reactive la obra del Puente Piedras Blancas, que conecta la ciudad con la zona este del departamento."
    },
    {
      id: "turismo",
      titulo: "Turismo",
      contenido: "En el sector Turismo, celebró las obras realizadas en el Aeropuerto, pero pidió que se concrete la obra del sistema ILS que permite el control y guiado de aviones en maniobras de aterrizaje cuando las condiciones climáticas no son las adecuadas (pedido reiterado de la CCIA), una nueva autobomba y oficinas de Aduana y Migraciones, para conseguir la internacionalización del espacio."
    },
    {
      id: "mineria",
      titulo: "Minería",
      contenido: "En materia de Minería, Brega pidió que se concrete la obra del Acueducto Ganadero, para dotar de agua para ganadería a la zona este del departamento. También solicitó que se concrete la obra de la Ruta Provincial 150 que une San Rafael con General Alvear."
    },
    {
      id: "agro",
      titulo: "Sector Agropecuario",
      contenido: "En el sector Agropecuario, pidió que se concrete la obra del Acueducto Ganadero, para dotar de agua para ganadería a la zona este del departamento. También solicitó que se concrete la obra de la Ruta Provincial 150 que une San Rafael con General Alvear, y que se reactive la obra del Puente Piedras Blancas."
    },
    {
      id: "agua",
      titulo: "Código de Aguas",
      contenido: "También pidió que la Provincia otorgue un plazo aún mayor para dar una firme discusión del Código de Aguas, a fin de ser escuchadas todas las partes y determinar su reforma y compilación."
    },
    {
      id: "fundacion-cede",
      titulo: "Fundación Ce.D.E.",
      contenido: "Por último, y haciendo referencia a la labor de la Específica Fundación Ce.D.E., contó que se está trabajando para establecer una amplia base de datos, y determinar, entre otros, el Índice de Precios al Consumidor, el Índice Inmobiliario y de la Construcción... todos ellos de San Rafael, dando, además, continuidad a las bases efectuada por el ex IDR y ex IDC. También se trabaja con proyectos de financiamiento internacional; viabilizar el Parque Industrial y gestionar ante la Aduana el funcionamiento de Zona Industrial Aduanera."
    }
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con imagen y texto alineados */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna izquierda: texto */}
          <AnimatedSection
            animation="fadeInLeft"
            delay={0}
            duration={0.8}
          >
            <AnimatedTitle
              as="h2"
              className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6"
              animation="fadeInUp"
              duration={0.8}
            >
              <span className="font-normal">Discurso </span>
              <span className="font-bold">Presidencial</span>
            </AnimatedTitle>
            <AnimatedText
              className="text-xl text-gray-600 mb-6"
              animation="fadeInUp"
              delay={200}
              duration={0.6}
            >
              Gabriel Brega pronunció su primer discurso anual como presidente de la CCIA, 
              abordando los principales desafíos y proyectos para el desarrollo de San Rafael.
            </AnimatedText>
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Presidente CCIA San Rafael</p>
              <p className="font-bold text-[#091b3f] text-lg">Gabriel Brega</p>
            </div>
          </AnimatedSection>
          {/* Columna derecha: imagen */}
          <AnimatedImage
            className="relative h-80 rounded-3xl overflow-hidden shadow-lg"
            animation="fadeInRight"
            delay={200}
            duration={0.8}
          >
            <Image
              src="/images/afv/gabriel-brega-discurso.webp"
              alt="Gabriel Brega durante su discurso presidencial"
              fill
              className="object-cover"
            />
          </AnimatedImage>
        </div>

        {/* Acordeón del discurso */}
        <AnimatedSection
          className="space-y-4"
          animation="fadeInUp"
          delay={400}
          duration={0.8}
        >
          {discursoSecciones.map((seccion) => (
            <div
              key={seccion.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Header del acordeón */}
              <button
                onClick={() => toggleSection(seccion.id)}
                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-bold text-[#091b3f]">
                      {seccion.titulo}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                      openSection === seccion.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Contenido del acordeón */}
              {openSection === seccion.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {seccion.contenido}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}