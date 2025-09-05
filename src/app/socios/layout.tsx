import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Socios | Cámara de Comercio de San Rafael",
  description: "Conoce los beneficios, requisitos y cómo asociarte a la Cámara de Comercio de San Rafael. Sé parte de la comunidad empresarial más importante de Mendoza.",
  keywords: [
    "socios",
    "asociate",
    "beneficios",
    "cámara de comercio",
    "san rafael",
    "empresas"
  ],
  openGraph: {
    title: "Socios | Cámara de Comercio de San Rafael",
    description: "Conoce los beneficios, requisitos y cómo asociarte a la Cámara de Comercio de San Rafael. Sé parte de la comunidad empresarial más importante de Mendoza.",
    url: "https://camarasanrafael.com.ar/socios",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/institucional/asamblea.avif",
        width: 1200,
        height: 630,
        alt: "Socios Cámara de Comercio de San Rafael"
      }
    ],
    locale: "es_AR",
    type: "website"
  }
};

export default function SociosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
