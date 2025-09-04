"use client";
import { useState } from "react";
import BeneficiosFilters from "@/components/BeneficiosFilters";
import BeneficiosGrid from "@/components/BeneficiosGrid";
import { Beneficio, RubroWithCount } from "@/types/beneficio";

interface BeneficiosClientPageProps {
  beneficios: Beneficio[];
  rubros: RubroWithCount[];
}

export default function BeneficiosClientPage({ beneficios, rubros }: BeneficiosClientPageProps) {
  const [selectedRubro, setSelectedRubro] = useState("");

  const handleRubroChange = (rubro: string) => {
    setSelectedRubro(rubro);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <BeneficiosFilters
            selectedRubro={selectedRubro}
            onRubroChange={handleRubroChange}
            rubros={rubros}
          />
          
          <BeneficiosGrid 
            selectedRubro={selectedRubro} 
            beneficios={beneficios}
          />
        </div>
      </div>
    </>
  );
}
