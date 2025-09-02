"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Beneficio {
  id: number;
  nombre: string;
  descuento: string;
  direccion: string;
  rubro: string;
  telefono?: string;
  email?: string;
  web?: string;
  logo?: string;
}

// Mapeo de logos para cada beneficio
const LOGOS_MAPPING: { [key: string]: string } = {
  "Resto Soft": "/beneficios/resto.jpg",
  "CTNET": "/beneficios/ctnet.png",
  "Red Brillante": "/beneficios/red_brillante_2.jpg",
  "Primera Intervención": "/beneficios/primera_intervencion_2.jpg",
  "ICA Instituto de Capacitación Aeronáutica": "/beneficios/ica_aviones.jpg",
  "Universidad Siglo 21": "/beneficios/universidad_siglo_21.jpg",
  "Mellis Pizza": "/beneficios/Los-Mellis.jpg",
  "Del Centro": "/beneficios/Del-Centro-RTO.jpg",
  "Amancay": "/beneficios/amancay.png",
  "Mattevi": "/beneficios/mattevi.jpg",
  "Blend Espacios Verdes": "/beneficios/Blend.jpg",
  "Micreze": "/beneficios/Micreze.jpg",
  "Nordpont": "/beneficios/Nordpont.jpg",
  "Previnsan": "/beneficios/previsan.jpg",
  "Grupo Alvarez": "/beneficios/grupo_alvarez_2.jpg",
  "Iselin Envíos": "/beneficios/Iselin-Envios.jpg",
  "Andreani Postal": "/beneficios/andreani.jpg",
  "ID Legal": "/beneficios/id_legal.jpg",
  "Banco Comafi": "/beneficios/comafi.jpg",
  "Sumo": "/beneficios/sumo.jpg",
  "Viejo Bodegón": "/beneficios/viejo-bodegon.jpg",
  "Fundación Educativa Santísima Trinidad": "/beneficios/fesat.png"
};

// Datos reales de beneficios
const BENEFICIOS_MOCK: Beneficio[] = [
  // Servicios varios
  {
    id: 1,
    nombre: "Resto Soft",
    descuento: "10 % de descuento en efectivo o transferencia en servicios contratados, instalación inicial y/o soporte mensual para licencias nuevas. Contactarse al 261-4729704.",
    direccion: "",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Resto Soft"],
  },
  {
    id: 2,
    nombre: "CTNET",
    descuento: "50 % de descuento por los primeros tres meses, en el servicio de internet FTTH CTNET PREMIUM. Contactarse al 260-4050789.",
    direccion: "Cmte. José A. Salas 200",
    rubro: "servicios",
    logo: LOGOS_MAPPING["CTNET"],
  },
  {
    id: 3,
    nombre: "Red Brillante",
    descuento: "15 % de descuento solo con retiro en local (pago en efectivo o QR). Av. Pedro Vargas 1.731.",
    direccion: "Av. Pedro Vargas 1731",
    rubro: "casa",
    logo: LOGOS_MAPPING["Red Brillante"],
  },

  // Capacitación
  {
    id: 4,
    nombre: "Primera Intervención",
    descuento: "20 % de descuento. Contactar al 2613726854.",
    direccion: "",
    rubro: "capacitacion",
    logo: LOGOS_MAPPING["Primera Intervención"],
  },
  {
    id: 5,
    nombre: "ICA Instituto de Capacitación Aeronáutica",
    descuento: "15 % de descuento en las cuotas de todos los cursos aeronáuticos y de comercio exterior. Contactarse al 260-4692747.",
    direccion: "",
    rubro: "capacitacion",
    logo: LOGOS_MAPPING["ICA Instituto de Capacitación Aeronáutica"],
  },
  {
    id: 6,
    nombre: "Universidad Siglo 21",
    descuento: "10 % de descuento en efectivo. Contactar al 2604653017.",
    direccion: "",
    rubro: "capacitacion",
    logo: LOGOS_MAPPING["Universidad Siglo 21"],
  },
  {
    id: 7,
    nombre: "Fundación Educativa Santísima Trinidad",
    descuento: "10 % de descuento en efectivo. Contactarse al 260-4400290.",
    direccion: "San Lorenzo 231",
    rubro: "capacitacion",
    logo: LOGOS_MAPPING["Fundación Educativa Santísima Trinidad"],
  },

  // Restó
  {
    id: 8,
    nombre: "Mellis Pizza",
    descuento: "10 % de descuento solo pago en efectivo. Day y Castelli.",
    direccion: "Ricardo Day y Castelli",
    rubro: "resto",
    logo: LOGOS_MAPPING["Mellis Pizza"],
  },
  {
    id: 9,
    nombre: "Sumo",
    descuento: "10 % de descuento todos los mediodías, y en la noche, de domingo a miércoles. Contactarse al 260-4550000.",
    direccion: "San Rafael",
    rubro: "resto",
    logo: LOGOS_MAPPING["Sumo"],
  },
  {
    id: 10,
    nombre: "Viejo Bodegón",
    descuento: "10 % de descuento todos los mediodías, y en la noche, de domingo a miércoles. Contactarse al 260-4550000.",
    direccion: "Av. San Martín 123",
    rubro: "resto",
    logo: LOGOS_MAPPING["Viejo Bodegón"],
  },

  // Moda
  {
    id: 11,
    nombre: "Del Centro",
    descuento: "10 % de descuento en efectivo. Contactarse al 260-4825109.",
    direccion: "Av. Mitre 2091",
    rubro: "auto",
    logo: LOGOS_MAPPING["Del Centro"],
  },
  {
    id: 12,
    nombre: "Amancay",
    descuento: "13 % de descuento en efectivo (no acumulable con otras promociones). Contactarse al 260-4394430 o dirigirse a Av. Hipólito Yrigoyen 53.",
    direccion: "Av. Hipólito Yrigoyen 53",
    rubro: "casa",
    logo: LOGOS_MAPPING["Amancay"],
  },
  {
    id: 13,
    nombre: "Mattevi",
    descuento: "8 % de descuento en todos los productos. Contactarse al 2604-375902.",
    direccion: "Av. Bartolomé Mitre 1438, San Rafael",
    rubro: "casa",
    logo: LOGOS_MAPPING["Mattevi"],
  },

  // Casa
  {
    id: 14,
    nombre: "Blend Espacios Verdes",
    descuento: "10 % de descuento en productos, solo en efectivo. Contactarse al 260-4009458.",
    direccion: "Coronel H. Plaza 417",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Blend Espacios Verdes"],
  },

  // Belleza
  {
    id: 15,
    nombre: "Micreze",
    descuento: "15 % de descuento efectivo. Contactar al 260-4696600.",
    direccion: "20 de Junio 332",
    rubro: "casa",
    logo: LOGOS_MAPPING["Micreze"],
  },

  // Auto
  {
    id: 16,
    nombre: "Nordpont",
    descuento: "10 % de descuento. Contactarse al 260-4655829.",
    direccion: "Tel: 260-4655829",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Nordpont"],
  },
  {
    id: 17,
    nombre: "Previnsan",
    descuento: "15 % de descuento en mantenimiento anual de extintores y 10 % en venta de extintores y señalización industrial, solo en efectivo. Contactarse al 261-5558315.",
    direccion: "Av. Ing. Julio Balloffet 981",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Previnsan"],
  },

  // Servicios varios (los ponemos en "otros" pero podríamos crear una nueva categoría)
  {
    id: 18,
    nombre: "Grupo Alvarez",
    descuento: "20 % de descuento o 3x2 en publicidad. Contactarse al 260-4697595.",
    direccion: "",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Grupo Alvarez"],
  },
  {
    id: 19,
    nombre: "Iselin Envíos",
    descuento: "40 % de descuento sobre el valor del flete de encomiendas, solo efectivo. Contactarse al 260-4650494.",
    direccion: "Terminal Nestor Kirchner Local 18",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Iselin Envíos"],
  },
  {
    id: 20,
    nombre: "Andreani Postal",
    descuento: "30 % de descuento. Contactar al 2604318944.",
    direccion: "Chile 512",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Andreani Postal"],
  },
  {
    id: 21,
    nombre: "ID Legal",
    descuento: "20 % de descuento en registros de marca. Solo efectivo o transferencia. Contactarse al 2625-673011.",
    direccion: "",
    rubro: "servicios",
    logo: LOGOS_MAPPING["ID Legal"],
  },
  {
    id: 22,
    nombre: "Banco Comafi",
    descuento: "ofrece para sus nuevos clientes, la bonificación anual de la cuota de socio. Para más información de las condiciones, contactarse al 2613424774.",
    direccion: "",
    rubro: "servicios",
    logo: LOGOS_MAPPING["Banco Comafi"],
  },
];

interface BeneficiosGridProps {
  selectedRubro?: string;
}



export default function BeneficiosGrid({ selectedRubro = "todos" }: BeneficiosGridProps) {
  const [beneficios, setBeneficios] = useState<Beneficio[]>(BENEFICIOS_MOCK);
  const [filteredBeneficios, setFilteredBeneficios] = useState<Beneficio[]>(BENEFICIOS_MOCK);

  useEffect(() => {
    if (selectedRubro === "todos") {
      setFilteredBeneficios(beneficios);
    } else {
      setFilteredBeneficios(beneficios.filter(b => b.rubro === selectedRubro));
    }
  }, [selectedRubro, beneficios]);

  if (filteredBeneficios.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No se encontraron beneficios
        </h3>
        <p className="text-gray-500">
          No hay beneficios disponibles para esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#091b3f]">
          Beneficios disponibles
        </h2>
        <span className="text-gray-600">
          {filteredBeneficios.length} {filteredBeneficios.length === 1 ? 'beneficio' : 'beneficios'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBeneficios.map((beneficio) => (
          <div
            key={beneficio.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100"
          >
            {/* Logo del beneficio */}
            <div className="h-48 bg-white border-b border-gray-100 flex items-center justify-center p-4">
              {beneficio.logo ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={beneficio.logo}
                    alt={`Logo de ${beneficio.nombre}`}
                    width={200}
                    height={150}
                    className="max-w-full max-h-full object-contain"
                    priority={false}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#091b3f] rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {beneficio.nombre
                        .split(' ')
                        .slice(0, 2)
                        .map(word => word.charAt(0))
                        .join('')
                        .toUpperCase()}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-[#091b3f] leading-tight">
                    {beneficio.nombre.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-[#091b3f] mb-4">
                {beneficio.nombre}
              </h3>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-[#091b3f] text-center">
                  {(() => {
                    const match = beneficio.descuento.match(/\d+\s*%/);
                    if (match) {
                      return `${match[0].replace(/\s+/, '')} DE DESCUENTO`;
                    }
                    return beneficio.descuento.length > 30 ? 'BENEFICIO ESPECIAL' : 'BENEFICIO';
                  })()}
                </div>
              </div>

              {(() => {
                const match = beneficio.descuento.match(/\d+\s*%/);
                if (match) {
                  // Para descuentos con %, mostrar solo la parte adicional sin el porcentaje ni "descuento"
                  let descuentoText = beneficio.descuento.replace(match[0], '').trim();
                  descuentoText = descuentoText.replace(/de\s+descuento/gi, '').trim();
                  descuentoText = descuentoText.replace(/descuento/gi, '').trim();
                  // Limpiar comas y espacios extra al inicio
                  descuentoText = descuentoText.replace(/^[,\s]+/, '').trim();
                  if (descuentoText) {
                    // Capitalizar la primera letra
                    descuentoText = descuentoText.charAt(0).toUpperCase() + descuentoText.slice(1);
                    return (
                      <div className="text-sm text-gray-600 mb-4 leading-relaxed px-2">
                        {descuentoText}
                      </div>
                    );
                  }
                  return null;
                } else if (beneficio.descuento.length > 30) {
                  return (
                    <div className="text-sm text-gray-600 mb-4 leading-relaxed px-2">
                      {beneficio.descuento}
                    </div>
                  );
                }
                return null;
              })()}

              <div className="space-y-1 text-xs text-gray-500">
                {beneficio.direccion && (
                  <div className="flex items-center justify-center">
                    {beneficio.direccion.toLowerCase().includes('tel:') ? (
                      <>
                        <span className="mr-1">📞</span>
                        <a 
                          href={`tel:${beneficio.direccion.replace('Tel:', '').trim()}`}
                          className="text-[#091b3f] hover:underline"
                        >
                          {beneficio.direccion.replace('Tel:', '').trim()}
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="mr-1">📍</span>
                        <span>{beneficio.direccion}</span>
                      </>
                    )}
                  </div>
                )}
                
                {beneficio.telefono && (
                  <div className="flex items-center justify-center">
                    <span className="mr-1">📞</span>
                    <a 
                      href={`tel:${beneficio.telefono}`}
                      className="text-[#091b3f] hover:underline"
                    >
                      {beneficio.telefono}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
