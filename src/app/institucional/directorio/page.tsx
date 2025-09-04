import DirectorioContent from "@/components/DirectorioContent";

export const metadata = {
  title: "Directorio 2025/2026 | Cámara de Comercio San Rafael",
  description: "Conoce a nuestro directorio 2025/2026: presidente, vicepresidentes, directores titulares y suplentes, comisiones específicas y staff de la Cámara de Comercio de San Rafael.",
  keywords: "directorio, presidente, vicepresidente, directores, cámara comercio san rafael, autoridades",
};

export default function DirectorioPage() {
  return (
    <div className="bg-white">
      <DirectorioContent />
    </div>
  );
}
