import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hacete Socio - Cámara de Comercio de San Rafael',
    description: 'Sumate a más de 30 beneficios exclusivos, asesoramiento legal y contable, representación empresarial y apoyo al crecimiento de nuestra comunidad.',
    openGraph: {
      title: 'Hacete Socio - Cámara de Comercio de San Rafael',
      description: 'Sumate a más de 30 beneficios exclusivos, asesoramiento legal y contable, representación empresarial y apoyo al crecimiento de nuestra comunidad.',
      type: 'website',
    },
  };
}