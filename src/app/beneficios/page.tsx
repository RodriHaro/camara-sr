export const metadata = {
  title: "Beneficios para Socios | Cámara de Comercio de San Rafael",
  description: "Descubre todos los beneficios exclusivos para socios de la Cámara de Comercio de San Rafael: descuentos, asesoramiento, convenios y más para potenciar tu empresa.",
  keywords: [
    "beneficios socios",
    "descuentos",
    "cámara de comercio",
    "san rafael",
    "empresas",
    "convenios",
    "asesoramiento"
  ],
  openGraph: {
    title: "Beneficios para Socios | Cámara de Comercio de San Rafael",
    description: "Descubre todos los beneficios exclusivos para socios de la Cámara de Comercio de San Rafael: descuentos, asesoramiento, convenios y más para potenciar tu empresa.",
    url: "https://camarasanrafael.com.ar/beneficios",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/beneficios/beneficios-hero.avif",
        width: 1200,
        height: 630,
        alt: "Beneficios para socios"
      }
    ],
    locale: "es_AR",
    type: "website"
  }
};
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeneficiosHero from "@/components/BeneficiosHero";
import BeneficiosInfo from "@/components/BeneficiosInfo";
import BeneficiosClientPage from "@/components/BeneficiosClientPage";
import BeneficiosGrowth from "@/components/BeneficiosGrowth";
import { getBeneficios, getRubrosWithCount } from "@/lib/sanity.service";

// Nota: El metadata se maneja en layout.tsx

export default async function BeneficiosPage() {
  // Fetch benefits and rubros from Sanity
  const [beneficios, rubros] = await Promise.all([
    getBeneficios(),
    getRubrosWithCount()
  ]);

  // Prepare rubros for the client component
  const rubrosWithAll = [
    { value: '', label: 'Todos', count: beneficios.length },
    ...rubros
  ];

  return (
    <>
      <Header />
      <main className="bg-white pt-[88px]">
        <BeneficiosHero />
        <BeneficiosInfo />
        
        {/* Pass data to client component for state management */}
        <BeneficiosClientPage 
          beneficios={beneficios}
          rubros={rubrosWithAll}
        />

        <BeneficiosGrowth />
      </main>
      <Footer />
    </>
  );
}
