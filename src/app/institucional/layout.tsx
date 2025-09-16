import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Institucional - Cámara de Comercio de San Rafael',
  description: 'Conoce nuestra misión, visión y valores que guían nuestro compromiso con el desarrollo empresarial de San Rafael.',
};

export default function InstitucionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
