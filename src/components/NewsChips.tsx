"use client";
import React from "react";

interface NewsChipsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

// Chips de categorías con scroll horizontal en mobile
export const NewsChips: React.FC<NewsChipsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8">
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max md:flex-wrap md:min-w-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#091b3f]/20 ${
                activeCategory === category
                  ? "bg-[#091b3f]/10 text-[#091b3f] ring-2 ring-[#091b3f]/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls="news-grid"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
