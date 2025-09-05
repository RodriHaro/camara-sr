"use client";
import { useState } from "react";
import Image from "next/image";

export default function AlmuerzoDiscurso() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

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
      titulo: "Proyectos de Infraestructura",
      contenido: "Respecto a los 1.023 millones de dólares correspondientes a las pérdidas ocasionadas por la Promoción Industrial, solicitó que se instrumenten importantes obras para la región sur, que han sido agregadas al Banco de Proyectos: El Proyecto Ejecutivo de Paso de Las Leñas con los fundamentos vertidos unánimemente por la Cámara hace más de 20 años, y acordado con las cámaras de General Alvear y Malargüe como obra indispensable para el resurgimiento de sur; El Baqueano; El Acueducto Tigre - Bowen; El mejoramiento de las rutas; La reparación de la Ruta Nacional 143, desde Tunuyán a San Rafael; El Colector Cloacal Norte 2, que beneficia a más de 6.500 vecinos y hoy se encuentran en emergencia sanitaria; Trenes y vías de comunicación, entre otras. En esa línea, adelantó que se han mantenido varios encuentros con grupos del sector privado que han ofrecido compartir la ejecución de estas obras, bajo su total y exclusivo riesgo, en algunos casos mediante la ejecución de los proyectos 'Llave en mano' y en otros a través del financiamiento internacional. Invitó al Gobierno provincial a consensuar y buscar los puntos básicos con el objetivo de concretarlas."
    },
    {
      id: "sistema-antigranizo",
      titulo: "Sistema Antigranizo y Aspectos Previsionales",
      contenido: "Por otra parte, resaltó la labor de la Cámara para promover el funcionamiento del Sistema de Lucha Antigranizo, y destacó que la institución participará formalmente del Comité Ejecutivo del Fideicomiso para la Administración del Patrimonio, procurando controlar que la utilización de los fondos recaudados y la operación del Sistema sean eficiente y transparente. En materia previsional, subrayó el apoyo que la Cámara brindó a la desregulación laboral que proponía el DNU 70/23 del Poder Ejecutivo Nacional, presentándose ante la Corte Nacional como Amigo del Tribunal contra las medidas de amparo formuladas por la CGT."
    },
    {
      id: "parque-industrial",
      titulo: "Parque Industrial y Proyectos Especiales",
      contenido: "El dirigente celebró haber acordado con el Municipio el convenio definitivo para ordenar la titularidad del edificio de propiedad de la Cámara que actualmente se radica en el ingreso del Parque Industrial y donde lleva a cabo sus actividades la Dirección General de Aduanas. Brega informó, en otro pasaje de su alocución, que la Cámara viene trabajando hace varios meses en presentar un proyecto de Ley Industrial para mitigación de casos excepcionales, como lo fuese el incendio de Plastiandino; para ello, se viene elaborando y financiando con fondos propios, y será presentado a los legisladores en 2025."
    },
    {
      id: "ganaderia",
      titulo: "Ganadería",
      contenido: "Para el sector ganadero pidió terminar las obras del Acueducto (Monte Comán-La Horqueta); desregular el traslado y la comercialización del mercado de carnes; desterrar definitivamente el flagelo de la inseguridad rural; agilizar el trámite y pago a productores ganaderos del aporte establecido por la Ley 7.074 correspondiente al año 2023; finalizar la base contra incendio ubicada en Monte Comán para el combate del fuego en nuestros campos; extender los beneficios de la Ley 7.074 a recría sobre campos naturales. También, que Vialidad Mendoza distribuya áridos en puntos críticos de las rutas ganaderas para mejorar sus accesos."
    },
    {
      id: "construccion",
      titulo: "Construcción",
      contenido: "A la hora de hablar de Construcción, solicitó que se le dé prioridad a empresas del sur, en el marco de las obras anunciadas hace unos días por el Gobierno provincial. En tal sentido, propuso ponderar las capacidades de obras que efectúa el Registro de Antecedentes de Constructoras de Obras Públicas (RACOP) para que amplíen su capacidad de contratación y de ese modo ser oferentes directos en los procesos a licitar, evitando así la subcontratación de empresas de mayor magnitud."
    },
    {
      id: "codigo-aguas",
      titulo: "Código de Aguas",
      contenido: "También pidió que la Provincia otorgue un plazo aún mayor para dar una firme discusión del Código de Aguas, a fin de ser escuchadas todas las partes y determinar su reforma y compilación."
    },
    {
      id: "fundacion-cede",
      titulo: "Fundación Ce.D.E.",
      contenido: "Por último, y haciendo referencia a la labor de la Específica Fundación Ce.D.E., contó que se está trabajando para establecer una amplia base de datos, y determinar, entre otros, el Índice de Precios al Consumidor, el Índice Inmobiliario y de la Construcción... todos ellos de San Rafael, dando, además, continuidad a las bases efectuada por el ex IDR y ex IDC. También se trabaja con proyectos de financiamiento internacional; viabilizar el Parque Industrial y gestionar ante la Aduana el funcionamiento de Zona Industrial Aduanera."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#091b3f] mb-6">
              <span className="font-normal">Discurso </span>
              <span className="font-bold">Presidencial</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Gabriel Brega pronunció su primer discurso anual como presidente de la CCIA, 
              abordando los principales desafíos y proyectos para el desarrollo de San Rafael.
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Presidente CCIA San Rafael</p>
              <p className="font-bold text-[#091b3f] text-lg">Gabriel Brega</p>
            </div>
          </div>
          
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/afv/gabriel-brega-discurso.webp"
              alt="Gabriel Brega durante su discurso presidencial"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Acordeón del discurso */}
        <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
}
