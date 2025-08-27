import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almuerzo de las Fuerzas Vivas | Cámara de Comercio de San Rafael",
  description: "Evento institucional anual que reúne a los principales referentes del sector empresarial, político, social y académico de San Rafael para fortalecer los lazos de cooperación y desarrollo regional.",
};

export default function AlmuerzoFuerzasVivasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
