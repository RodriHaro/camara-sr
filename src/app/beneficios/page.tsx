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
      <main className="bg-white">
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
