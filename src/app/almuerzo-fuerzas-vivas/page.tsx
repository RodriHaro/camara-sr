"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlmuerzoHero from "@/components/AlmuerzoHero";
import AlmuerzoContent from "@/components/AlmuerzoContent";
import AlmuerzoReconocimientos from "@/components/AlmuerzoReconocimientos";
import AlmuerzoMomentosHistoricos from "@/components/AlmuerzoMomentosHistoricos";
import AlmuerzoDiscurso from "@/components/AlmuerzoDiscurso";
import AlmuerzoGaleria from "@/components/AlmuerzoGaleria";

export default function AlmuerzoFuerzasVivasPage() {
  return (
    <>
      <Header />
      <AlmuerzoHero />
      
      {/* Tradicional almuerzo de las fuerzas vivas */}
      <AlmuerzoContent />
      
      {/* Reconocimientos y distinciones */}
      <AlmuerzoReconocimientos />
      
      {/* Momentos históricos */}
      <AlmuerzoMomentosHistoricos />
      
      {/* Discurso presidencial */}
      <AlmuerzoDiscurso />
      
      {/* Galería de fotos */}
      <AlmuerzoGaleria />
      
      <Footer />
    </>
  );
}
