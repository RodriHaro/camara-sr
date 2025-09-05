export const metadata = {
  title: "Noticias | Cámara de Comercio de San Rafael",
  description: "Mantente al día con las últimas noticias, novedades y comunicados de la Cámara de Comercio de San Rafael. Información relevante para empresas y la comunidad.",
  keywords: [
    "noticias",
    "novedades",
    "comunicados",
    "cámara de comercio",
    "san rafael",
    "empresas"
  ],
  openGraph: {
    title: "Noticias | Cámara de Comercio de San Rafael",
    description: "Mantente al día con las últimas noticias, novedades y comunicados de la Cámara de Comercio de San Rafael. Información relevante para empresas y la comunidad.",
    url: "https://camarasanrafael.com.ar/noticias",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/institucional/asamblea-1.webp",
        width: 1200,
        height: 630,
        alt: "Noticias Cámara de Comercio de San Rafael"
      }
    ],
    locale: "es_AR",
    type: "article"
  }
};
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NewsListClient } from "../../components/NewsListClient";
import { getNewsList, getCategoriesWithCount } from "../../lib/sanity.service";
import { CATEGORY_FILTERS } from "../../lib/sanity.mapper";

export default async function NewsPage() {
  // Fetch news and categories from Sanity
  const { news } = await getNewsList({ page: 1, pageSize: 50 }); // Fetch more for client-side filtering
  const categories = await getCategoriesWithCount();
  
  // Prepare categories for the client component
  const categoriesWithAll = [
    { value: '', label: 'Todas' },
    ...categories
  ];

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
          <NewsListClient 
            initialNews={news}
            categories={categoriesWithAll}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
