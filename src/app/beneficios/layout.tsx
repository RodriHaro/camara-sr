import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios | Cámara de Comercio de San Rafael",
  description: "Accedé a descuentos y promociones exclusivas en comercios y servicios de San Rafael para socios de la Cámara de Comercio.",
};

export default function BeneficiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
