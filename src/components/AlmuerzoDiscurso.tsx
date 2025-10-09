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
      titulo: "Integración y Liderazgo",
      contenido: "Gabriel Brega definió su gestión con la palabra 'integración': integrando personas, cámaras y regiones. Destacó el lanzamiento de un programa de formación de líderes para instituciones intermedias, buscando impulsar el liderazgo estratégico y la gestión emocional. Resaltó el crecimiento de Cámara Joven como ejemplo del compromiso de la nueva generación con el desarrollo local y el recambio generacional."
    },
    {
      id: "economias-regionales",
      titulo: "Economías Regionales y Producción Primaria",
      contenido: "Brega expresó la difícil situación de las economías regionales, especialmente en vitivinicultura, frutales, olivos y hortalizas. Alertó que cada vez más productores abandonan la actividad y ponen en venta sus fincas y bodegas. Enfatizó que 'sin productor primario no hay uva, no hay vino, no hay frutas, no hay turismo ni economía regional', solicitando medidas urgentes para dar sustentabilidad a estos sectores."
    },
    {
      id: "industria-pymes",
      titulo: "Industria y PyMEs",
      contenido: "Las industrias, en su mayoría PyMEs, atraviesan un momento complejo con menor actividad y reducción de jornadas. Brega solicitó condiciones justas para competir, destacando que el 'coste argentino' con alta presión impositiva, costos laborales crecientes y reglas cambiantes impide competir cuando ingresan importaciones a precios distorsionados. Pidió reglas claras y recordó que detrás de cada industria hay familias, arraigo, comercio y desarrollo local."
    },
    {
      id: "reformas-estructurales",
      titulo: "Reformas Estructurales Necesarias",
      contenido: "Solicitó una reforma previsional que reduzca las contribuciones patronales del 50% actual al 21% (como en Chile), reforma impositiva que elimine el impuesto al cheque y retenciones, y reforma laboral inevitable tras más de 20 años de emergencia. Pidió una mejor distribución de la Coparticipación Federal para bajar impuestos provinciales y municipales, y achicar los Estados para competir en igualdad de condiciones."
    },
    {
      id: "comercio-internacional",
      titulo: "Comercio Internacional y Sistema Pehuenche",
      contenido: "Destacó que Argentina tiene apenas 0,3% de las exportaciones mundiales cuando en 1950 tenía casi el 3%. Solicitó avanzar con la habilitación del Paso Pehuenche para cargas generales, que permitirá unir dos regiones, descomprimir el Paso Los Libertadores y facilitar el comercio internacional. Enfatizó la importancia del Paso Las Leñas como corredor bioceánico que integrará Argentina, Brasil y Uruguay con el Pacífico."
    },
    {
      id: "infraestructura-vial",
      titulo: "Infraestructura y Obras Viales",
      contenido: "Solicitó al Presidente la culminación de la Ruta Nacional 40 Malargüe-Neuquén, fundamental para la actividad hidrocarburífera y minera. Al Gobernador pidió la Ruta Provincial 173 del Cañón del Atuel antes de la temporada turística, y la Ruta Nacional 40 Agua del Toro con conexión a la Nacional 151. También solicitó la ejecución de acueductos vitales: Tigre-Bowen y El Nevado, además de celebrar el acueducto Monte Comán-La Horqueta."
    },
    {
      id: "agricultura-ganaderia",
      titulo: "Agricultura, Ganadería y Lucha Antigranizo",
      contenido: "Pidió al Gobierno provincial considerar el sistema de lucha contra el granizo, proponiendo un aporte conjunto con los Municipios por tres años. Agradeció la entrega de más de 400 antenas satelitales a productores y destacó la efectividad del Plan de Destete precoz, solicitando continuidad por 3 a 5 años. Pidió mejorar caminos y huellas ganaderas mediante consorcios camineros con aportes público-privados."
    },
    {
      id: "mineria-hidrocarburos",
      titulo: "Minería e Hidrocarburos Sostenibles",
      contenido: "Brega afirmó que la agricultura y la minería no son enemigas irreconciliables, citando el ejemplo de Chile donde ambos sectores coexisten con reglas claras y compromiso ambiental. Solicitó que la minería y los hidrocarburos sostenibles sean políticas de Estado, enfatizando que Mendoza lo necesita. Celebró la intervención del Gobernador como querellante en la causa por la venta de acciones de YPF."
    },
    {
      id: "aduana-parque-industrial",
      titulo: "Aduana y Parque Industrial",
      contenido: "Destacó que el Municipio donó más de cinco hectáreas a la Aduana Nacional para la instalación de infraestructura de servicios complementarios en el Parque Industrial de San Rafael. Solicitó al Presidente que se movilice urgentemente esta obra y que se firme el protocolo fitosanitario con China (acordado hace más de 1 año) para dinamizar la exportación de ciruelas secas, dando previsibilidad a los negocios."
    },
    {
      id: "autonomias-municipales",
      titulo: "Autonomías Municipales y Ordenamiento",
      contenido: "Al Intendente, celebró la agenda sobre Autonomías Municipales y pidió que la Carta Magna Municipal sea tratada fuera del calendario electoral (a partir de marzo 2026) para garantizar una discusión amplia con participación de entidades intermedias. Solicitó firmeza contra el comercio informal, aplicación estricta del Código de Edificación, debate del Ordenamiento Territorial y transparencia en los costos de servicios municipales."
    },
    {
      id: "federacion-regional",
      titulo: "Federación de Cámaras y Marca Regional",
      contenido: "Destacó como ejemplo el trabajo conjunto con las Cámaras de General Alvear y Malargüe, logrando la constitución de la Federación de Cámaras de la Región Sur y la Federación Binacional con la 6ta y 7ma Región de Chile. Como regalo a la Cámara y a Mendoza, anunció que registró una marca regional cuyos derechos cederá a todos, para convertirla en una denominación de origen que posicione al sur mendocino como Valle de Uco o Patagonia."
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

        {/* Sección PDF del Discurso Completo */}
        <AnimatedSection
          className="mt-16 bg-gradient-to-br from-[#091b3f] to-blue-900 rounded-3xl p-8 text-white"
          animation="fadeInUp"
          delay={600}
          duration={0.8}
        >
          <div className="text-center mb-8">
            <AnimatedTitle
              as="h3"
              className="text-2xl md:text-3xl font-bold mb-4"
              animation="fadeInUp"
              delay={700}
              duration={0.6}
            >
              Discurso Presidencial Completo
            </AnimatedTitle>
            <AnimatedText
              className="text-lg text-white/90 max-w-2xl mx-auto"
              animation="fadeInUp"
              delay={800}
              duration={0.6}
            >
              Accede al documento completo del discurso pronunciado por Gabriel Brega en el Almuerzo de las Fuerzas Vivas 2025
            </AnimatedText>
          </div>

          {/* Controles del PDF */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/images/DISCURSO - GABRIEL BREGA - AFV 2025-1.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-[#FF4757] hover:bg-[#ff3742] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m6-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Descargar PDF
            </a>
            <a
              href="/images/DISCURSO - GABRIEL BREGA - AFV 2025-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7h10v10M17 7l-10 10" />
              </svg>
              Abrir en nueva pestaña
            </a>
          </div>

          {/* Visor PDF embebido */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '141.42%' /* A4 ratio */ }}>
              <iframe
                src="/images/DISCURSO - GABRIEL BREGA - AFV 2025-1.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="absolute inset-0 w-full h-full rounded-xl border-0"
                title="Discurso Presidencial Completo - Gabriel Brega 2025"
                loading="lazy"
              />
            </div>
            
            {/* Mensaje de fallback para dispositivos que no soportan iframe */}
            <noscript>
              <div className="p-8 text-center text-gray-600">
                <p className="mb-4">Su navegador no soporta la visualización de PDFs.</p>
                <a
                  href="/images/DISCURSO - GABRIEL BREGA - AFV 2025-1.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-[#FF4757] hover:bg-[#ff3742] text-white font-semibold rounded-xl transition-colors"
                >
                  Descargar PDF
                </a>
              </div>
            </noscript>
          </div>

          {/* Información adicional */}
          <div className="mt-6 text-center">
            <p className="text-sm text-white/70">
              Documento oficial • Almuerzo de las Fuerzas Vivas 2025 • CCIA San Rafael
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}