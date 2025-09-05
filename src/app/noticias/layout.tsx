import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias | Cámara de Comercio de San Rafael',
  description: 'Mantente al día con las últimas noticias, novedades y comunicados de la Cámara de Comercio, Industria y Agropecuaria de San Rafael.',
};

export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
