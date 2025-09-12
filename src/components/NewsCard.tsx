import React from "react";
import Link from "next/link";
import { NewsItem } from "./NewsCardLarge";
import { AnimatedSection } from "./AnimatedSection";

interface NewsCardProps {
  news: NewsItem;
}

// Card estándar para la grilla de noticias
export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <AnimatedSection
      animation="fadeInUp"
      delay={0} // Delay fijo para evitar errores de hidratación
      duration={0.6}
    >
      <Link href={news.href} className="group block">
        <article className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        {/* Imagen */}
        <div className="relative overflow-hidden h-48">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Fecha sobre la imagen */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-gray-800 text-xs font-medium">
              {news.date}
            </span>
          </div>
        </div>
        
        {/* Contenido */}
        <div className="p-6">
          {/* Categoría */}
          <span className="inline-block bg-[#091b3f]/10 text-[#091b3f] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
            {news.category}
          </span>
          
          {/* Título */}
          <h3 className="text-gray-900 text-lg font-bold leading-tight mb-3 group-hover:text-[#091b3f] transition-colors">
            {news.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {news.excerpt}
          </p>
          
          {/* CTA */}
          <div className="flex justify-end">
            <span className="inline-flex items-center text-[#091b3f] font-semibold text-sm hover:text-yellow-600 transition-colors">
              Ver noticia →
            </span>
          </div>
        </div>
      </article>
    </Link>
    </AnimatedSection>
  );
};
