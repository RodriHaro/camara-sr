"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeneficiosHero from "@/components/BeneficiosHero";
import BeneficiosInfo from "@/components/BeneficiosInfo";
import BeneficiosFilters from "@/components/BeneficiosFilters";
import BeneficiosGrid from "@/components/BeneficiosGrid";
import BeneficiosGrowth from "@/components/BeneficiosGrowth";

// Nota: El metadata se maneja en layout.tsx para componentes "use client"

export default function BeneficiosPage() {
  const [selectedRubro, setSelectedRubro] = useState("todos");

  const handleRubroChange = (rubro: string) => {
    setSelectedRubro(rubro);
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <BeneficiosHero />
        <BeneficiosInfo />
        
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeneficiosFilters 
              selectedRubro={selectedRubro}
              onRubroChange={handleRubroChange}
            />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BeneficiosGrid selectedRubro={selectedRubro} />
          </div>
        </section>

        <BeneficiosGrowth />
      </main>
      <Footer />
    </>
  );
}
