import { Metadata } from "next";

export const metadata: Metadata = {
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
  type: "article"
  }
};

export default function AlmuerzoFuerzasVivasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
