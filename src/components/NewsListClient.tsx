"use client";
import React, { useState, useEffect } from "react";
import { NewsCard } from "./NewsCard";
import { NewsChips } from "./NewsChips";
import { NewsSearch } from "./NewsSearch";
import { NewsItem } from "./NewsCardLarge";
import { AnimatedSection } from "./AnimatedSection";

interface NewsListClientProps {
  initialNews: NewsItem[];
  categories: Array<{ value: string; label: string; count?: number }>;
}

export const NewsListClient: React.FC<NewsListClientProps> = ({ 
  initialNews, 
  categories 
}) => {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(initialNews);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  useEffect(() => {
    let filtered = initialNews;

    // Filter by category
    if (activeCategory !== "Todas") {
      // Find the category value by label
      const categoryObj = categories.find(cat => cat.label === activeCategory);
      if (categoryObj && categoryObj.value) {
        filtered = filtered.filter(news => news.category === categoryObj.label);
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(query) ||
        news.excerpt.toLowerCase().includes(query)
      );
    }

    setFilteredNews(filtered);
  }, [activeCategory, searchQuery, initialNews]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    // In a real implementation, you could trigger a server-side search here
    console.log("Búsqueda realizada:", searchQuery);
  };

  return (
    <>
      {/* Filtros y búsqueda */}
      <AnimatedSection
        className="mb-12"
        animation="fadeInUp"
        delay={0}
        duration={0.8}
      >
        <NewsChips 
          categories={categories.map(cat => cat.label)}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <NewsSearch
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      </AnimatedSection>

      {/* Grilla de noticias */}
      <AnimatedSection
        animation="fadeInUp"
        delay={0}
        duration={0.8}
      >
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
      </AnimatedSection>

      {/* Paginación simple (placeholder) */}
      {filteredNews.length > 0 && (
        <AnimatedSection
          animation="fadeInUp"
          delay={0}
          duration={0.6}
        >
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
        </AnimatedSection>
      )}
    </>
  );
};
