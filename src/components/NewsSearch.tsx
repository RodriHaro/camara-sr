"use client";
import React from "react";

interface NewsSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
}

// Buscador de noticias con icono y botón
export const NewsSearch: React.FC<NewsSearchProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="relative max-w-lg">
        <div className="relative">
          {/* Icono de búsqueda */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          {/* Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar noticias..."
            className="w-full pl-12 pr-16 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#091b3f]/20 focus:border-[#091b3f] transition-colors"
            aria-label="Buscar noticias"
          />
          
          {/* Botón de búsqueda */}
          <button
            type="submit"
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#091b3f] hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#091b3f]/20 rounded-full"
            aria-label="Buscar"
          >
            <span className="font-semibold">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};
