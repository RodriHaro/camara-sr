"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { NewsCard } from "../../components/NewsCard";
import { NewsChips } from "../../components/NewsChips";
import { NewsSearch } from "../../components/NewsSearch";
import { NewsItem } from "../../components/NewsCardLarge";

// Mock data para las noticias
const mockNewsData: NewsItem[] = [
  {
    id: "1",
    title: "Nueva sede de la Cámara de Comercio",
    excerpt: "Inauguramos nuestra nueva sede para brindar mejores servicios a nuestros socios y a la comunidad empresarial de San Rafael.",
    image: "/api/placeholder/400/300",
    date: "15 Ago 2025",
    category: "Institucional",
    href: "/noticias/nueva-sede-camara-comercio",
  },
  {
    id: "2",
    title: "Expo San Rafael 2025: Un éxito total",
    excerpt: "La exposición comercial más importante de la región concluyó con récord de participación y excelentes resultados para todos los expositores.",
    image: "/api/placeholder/400/300",
    date: "12 Ago 2025",
    category: "Eventos",
    href: "/noticias/expo-san-rafael-2025-exito",
  },
  {
    id: "3",
    title: "Premio a la Innovación Empresarial",
    excerpt: "Reconocemos a las empresas socias que han destacado por su innovación y contribución al desarrollo económico local.",
    image: "/api/placeholder/400/300",
    date: "08 Ago 2025",
    category: "Reconocimientos",
    href: "/noticias/premio-innovacion-empresarial",
  },
  {
    id: "4",
    title: "Capacitación en Marketing Digital",
    excerpt: "Nueva serie de talleres gratuitos para socios sobre estrategias de marketing digital y comercio electrónico.",
    image: "/api/placeholder/400/300",
    date: "05 Ago 2025",
    category: "Capacitación",
    href: "/noticias/capacitacion-marketing-digital",
  },
  {
    id: "5",
    title: "Convenio con Banco de San Rafael",
    excerpt: "Firmamos un acuerdo que beneficiará a nuestros socios con tasas preferenciales y condiciones especiales de financiamiento.",
    image: "/api/placeholder/400/300",
    date: "02 Ago 2025",
    category: "Convenios",
    href: "/noticias/convenio-banco-san-rafael",
  },
  {
    id: "6",
    title: "Misión Comercial a Chile",
    excerpt: "Organizamos una misión comercial para fortalecer lazos comerciales con empresas chilenas y abrir nuevos mercados.",
    image: "/api/placeholder/400/300",
    date: "28 Jul 2025",
    category: "Comercio Internacional",
    href: "/noticias/mision-comercial-chile",
  },
];

const categories = [
  "Todas",
  "Institucional", 
  "Eventos", 
  "Reconocimientos", 
  "Capacitación", 
  "Convenios", 
  "Comercio Internacional"
];

export default function NoticiasPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(mockNewsData);

  // Filtrar noticias por categoría y búsqueda
  useEffect(() => {
    let filtered = mockNewsData;

    // Filtrar por categoría
    if (activeCategory !== "Todas") {
      filtered = filtered.filter(news => news.category === activeCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(filtered);
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    // En una implementación real, aquí podrías hacer una llamada a la API
    console.log("Búsqueda realizada:", searchQuery);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header de la página */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 
              className="text-4xl md:text-5xl font-extrabold text-[#091b3f] mb-4"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              Noticias
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Mantente al día con las últimas novedades de la Cámara de Comercio de San Rafael
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Filtros y búsqueda */}
          <div className="mb-12">
            <NewsChips 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <NewsSearch
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
            />
          </div>

          {/* Grilla de noticias */}
          <div 
            id="news-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="region"
            aria-label="Lista de noticias"
          >
            {filteredNews.length > 0 ? (
              filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron noticias que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("Todas");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-[#091b3f] hover:text-yellow-600 font-semibold"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>

          {/* Paginación simple (placeholder) */}
          {filteredNews.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex gap-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled
                >
                  ← Anterior
                </button>
                <span className="px-4 py-2 bg-[#091b3f] text-white rounded-lg">1</span>
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
