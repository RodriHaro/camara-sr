"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlmuerzoHero from "@/components/AlmuerzoHero";
import AlmuerzoContent from "@/components/AlmuerzoContent";
import AlmuerzoGaleria from "@/components/AlmuerzoGaleria";

export default function AlmuerzoFuerzasVivasPage() {
  return (
    <>
      <Header />
      <AlmuerzoHero />
      
      {/* Sección de contenido con texto e imagen */}
      <AlmuerzoContent />
      
      {/* Galería de fotos */}
      <AlmuerzoGaleria />
      
      <Footer />
    </>
  );
}
