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
      id: "industria",
      titulo: "Industria",
      icono: "🏭",
      puntos: [
        "Celebró haber logrado celeridad en trámites ante el RNE y RNPA, pidiendo menores tiempos",
        "Solicitó encauzar el Certificado de Bomberos según el Código de Edificación",
        "Pidió una ordenanza de Promoción Industrial Municipal",
        "Proyecto de Ley Industrial para casos excepcionales como el incendio de Plastiandino"
      ]
    },
    {
      id: "comercio",
      titulo: "Comercio",
      icono: "🏪",
      puntos: [
        "Destacó la erradicación del comercio callejero informal",
        "Pidió finalizar la obra del Gasoducto GasAndes",
        "Solicitó mejoras en el Aeropuerto con sistema ILS",
        "Requirió oficinas de Aduana y Migraciones para internacionalización"
      ]
    },
    {
      id: "infraestructura",
      titulo: "Infraestructura",
      icono: "🛤️",
      puntos: [
        "Proyecto Ferrocarril Unión Pacífico para acceso a puertos",
        "Proyecto Ejecutivo de Paso de Las Leñas",
        "El Baqueano y Acueducto Tigre - Bowen",
        "Mejoramiento de rutas y reparación de Ruta Nacional 143",
        "Colector Cloacal Norte 2 para más de 6,500 vecinos"
      ]
    },
    {
      id: "ganaderia",
      titulo: "Ganadería",
      icono: "🐄",
      puntos: [
        "Terminar obras del Acueducto Monte Comán-La Horqueta",
        "Desregular traslado y comercialización del mercado de carnes",
        "Desterrar la inseguridad rural",
        "Finalizar base contra incendio en Monte Comán",
        "Extender beneficios Ley 7.074 a recría sobre campos naturales"
      ]
    },
    {
      id: "construccion",
      titulo: "Construcción",
      icono: "🏗️",
      puntos: [
        "Prioridad a empresas del sur en obras provinciales",
        "Ampliar capacidad RACOP para empresas locales",
        "Evitar subcontratación de empresas de mayor magnitud",
        "Mayor plazo para discusión del Código de Aguas"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6">
              Discurso Presidencial
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
              src="/images/afv/gabriel-brega-discurso.jpg"
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
                    <span className="text-2xl">{seccion.icono}</span>
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
                  <div className="pt-4 space-y-3">
                    {seccion.puntos.map((punto, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 bg-[#FF4757] rounded-full"></div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{punto}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota sobre los 1.023 millones */}
        <div className="mt-12 bg-gradient-to-r from-[#091b3f] to-blue-900 rounded-3xl p-8 text-white">
          <h4 className="text-xl font-bold mb-4">💰 Inversión en Infraestructura</h4>
          <p className="text-lg leading-relaxed">
            Respecto a los <strong>1.023 millones de dólares</strong> correspondientes a las pérdidas 
            ocasionadas por la Promoción Industrial, Brega solicitó que se instrumenten importantes 
            obras para la región sur que han sido agregadas al Banco de Proyectos provincial.
          </p>
        </div>
      </div>
    </section>
  );
}
