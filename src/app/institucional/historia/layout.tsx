import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historia | Cámara de Comercio de San Rafael',
  description: 'Conoce la historia y el legado de la Cámara de Comercio, Industria y Agropecuaria de San Rafael. Más de un siglo impulsando el desarrollo empresarial y la comunidad.',
};

export default function HistoriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
