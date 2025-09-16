import React from "react";
import Link from "next/link";
import { NewsItem } from "./NewsCardLarge";

interface ReadMoreProps {
  articles: NewsItem[];
}

// Sección "Seguir leyendo" con artículos relacionados
export const ReadMore: React.FC<ReadMoreProps> = ({ articles }) => {
  return (
    <section className="mt-16 pt-12 border-t border-gray-200" aria-labelledby="read-more-title">
      <h2 
        id="read-more-title"
        className="text-3xl font-bold text-[#091b3f] mb-8"
      >
        Seguir leyendo
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.id} href={article.href} className="group block">
            <article className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-64">
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${article.image})`,
                  // High-quality rendering optimizations
                  imageRendering: 'crisp-edges' as any,
                  WebkitImageRendering: '-webkit-optimize-contrast' as any,
                  msInterpolationMode: 'bicubic' as any,
                  // Hardware acceleration
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                } as React.CSSProperties}
                role="img"
                aria-label={article.title}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Contenido */}
              <div className="relative h-full flex flex-col justify-between p-6">
                {/* Fecha arriba */}
                <div className="flex-none">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {article.date}
                  </span>
                </div>
                
                {/* Título y CTA abajo */}
                <div className="flex-none">
                  <h3 className="text-white text-lg font-bold leading-tight mb-3 group-hover:text-yellow-300 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                      Ver noticia →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
