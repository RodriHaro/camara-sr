export const metadata = {
  title: "Almuerzo de las Fuerzas Vivas | Cámara de Comercio de San Rafael",
  description: "Conocé el tradicional Almuerzo de las Fuerzas Vivas de la Cámara de Comercio de San Rafael: historia, reconocimientos, galería y transmisión en vivo.",
  keywords: [
    "almuerzo fuerzas vivas",
    "eventos",
    "cámara de comercio",
    "san rafael",
    "reconocimientos"
  ],
  openGraph: {
    title: "Almuerzo de las Fuerzas Vivas | Cámara de Comercio de San Rafael",
    description: "Conocé el tradicional Almuerzo de las Fuerzas Vivas de la Cámara de Comercio de San Rafael: historia, reconocimientos, galería y transmisión en vivo.",
    url: "https://camarasanrafael.com.ar/almuerzo-fuerzas-vivas",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/afv/afv-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Almuerzo Fuerzas Vivas"
      }
    ],
    locale: "es_AR",
    type: "event"
  }
};
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlmuerzoHero from "@/components/AlmuerzoHero";
import AlmuerzoContent from "@/components/AlmuerzoContent";
import AlmuerzoReconocimientos from "@/components/AlmuerzoReconocimientos";
import AlmuerzoMomentosHistoricos from "@/components/AlmuerzoMomentosHistoricos";
import AlmuerzoDiscurso from "@/components/AlmuerzoDiscurso";
import AlmuerzoGaleria from "@/components/AlmuerzoGaleria";
import AlmuerzoTransmision from "@/components/AlmuerzoTransmision";

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
      
      {/* Transmisión en vivo */}
      <AlmuerzoTransmision />
      
      <Footer />
    </>
  );
}
