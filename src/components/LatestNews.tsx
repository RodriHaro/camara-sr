import React from "react";
import Link from "next/link";
import { NewsCardLarge, NewsItem } from "./NewsCardLarge";

// Datos de ejemplo para las últimas noticias
const latestNewsData: NewsItem[] = [
  {
    id: "1",
    title: "Nueva sede de la Cámara de Comercio",
    excerpt: "Inauguramos nuestra nueva sede para brindar mejores servicios a nuestros socios y a la comunidad empresarial.",
    image: "/api/placeholder/600/400",
    date: "15 Ago 2025",
    category: "Institucional",
    href: "/noticias/nueva-sede-camara-comercio",
  },
  {
    id: "2",
    title: "Expo San Rafael 2025: Un éxito total",
    excerpt: "La exposición comercial más importante de la región concluyó con récord de participación y excelentes resultados.",
    image: "/api/placeholder/600/400",
    date: "12 Ago 2025",
    category: "Eventos",
    href: "/noticias/expo-san-rafael-2025-exito",
  },
  {
    id: "3",
    title: "Convenio con Universidad Nacional de Cuyo",
    excerpt: "Firmamos un importante acuerdo para promover la capacitación profesional y el desarrollo de emprendimientos innovadores.",
    image: "/api/placeholder/600/400",
    date: "8 Ago 2025",
    category: "Capacitación",
    href: "/noticias/convenio-universidad-cuyo",
  },
  {
    id: "4",
    title: "Programa de Financiamiento PYME",
    excerpt: "Lanzamos un nuevo programa de créditos blandos para pequeñas y medianas empresas del departamento.",
    image: "/api/placeholder/600/400",
    date: "5 Ago 2025",
    category: "Financiamiento",
    href: "/noticias/programa-financiamiento-pyme",
  },
];

// Sección de últimas noticias para la página principal
export const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="latest-news-title">
      <div className="mx-auto px-4" style={{ maxWidth: '100rem' }}>
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 
            id="latest-news-title"
            className="text-4xl md:text-5xl text-[#091b3f] mb-4"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="font-normal">Últimas </span>
            <span className="font-extrabold">Noticias</span>
          </h2>
        </div>
        
        {/* Grid de cards grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {latestNewsData.map((news) => (
            <NewsCardLarge key={news.id} news={news} />
          ))}
        </div>
        
        {/* Botón Ver todas */}
        <div className="text-center">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 bg-[#091b3f] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#091b3f]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#091b3f]/20 shadow-lg hover:shadow-xl"
            aria-label="Ver todas las noticias"
          >
            Ver todas las noticias
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
