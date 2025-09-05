import DirectorioContent from "@/components/DirectorioContent";

export const metadata = {
  title: "Directorio | Cámara de Comercio de San Rafael",
  description: "Conoce a nuestro directorio: presidente, vicepresidentes, directores titulares y suplentes, comisiones específicas y staff de la Cámara de Comercio de San Rafael.",
  keywords: "directorio, presidente, vicepresidente, directores, cámara comercio san rafael, autoridades",
};

export default function DirectorioPage() {
  return (
    <div className="bg-white">
      <DirectorioContent />
    </div>
  );
}
