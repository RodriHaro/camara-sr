import React from "react";
import Link from "next/link";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  href: string;
}

interface NewsCardLargeProps {
  news: NewsItem;
}

// Card grande para la sección de últimas noticias en home
export const NewsCardLarge: React.FC<NewsCardLargeProps> = ({ news }) => {
  return (
    <Link href={news.href} className="group block">
      <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-96 md:h-[28rem]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${news.image})` }}
          role="img"
          aria-label={news.title}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Contenido */}
        <div className="relative h-full flex flex-col justify-between p-6">
          {/* Fecha arriba izquierda */}
          <div className="flex-none">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
              {news.date}
            </span>
          </div>
          
          {/* Título y CTA abajo */}
          <div className="flex-none">
            <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight mb-4 group-hover:text-blue-100 transition-colors">
              {news.title}
            </h3>
            <div className="flex justify-end">
              <span className="inline-flex items-center text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                Ver noticia →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
