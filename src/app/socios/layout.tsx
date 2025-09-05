import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hacete socio | Cámara de Comercio de San Rafael',
  description: 'Sumate a la Cámara de Comercio de San Rafael y accedé a beneficios exclusivos, asesoramiento y una red de apoyo para tu empresa.',
};

export default function SociosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
