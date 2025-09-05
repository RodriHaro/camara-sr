export const metadata = {
  title: "Socios | Cámara de Comercio de San Rafael",
  description: "Conoce los beneficios, requisitos y cómo asociarte a la Cámara de Comercio de San Rafael. Sé parte de la comunidad empresarial más importante de Mendoza.",
  keywords: [
    "socios",
    "asociate",
    "beneficios",
    "cámara de comercio",
    "san rafael",
    "empresas"
  ],
  openGraph: {
    title: "Socios | Cámara de Comercio de San Rafael",
    description: "Conoce los beneficios, requisitos y cómo asociarte a la Cámara de Comercio de San Rafael. Sé parte de la comunidad empresarial más importante de Mendoza.",
    url: "https://camarasanrafael.com.ar/socios",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/institucional/asamblea.avif",
        width: 1200,
        height: 630,
        alt: "Socios Cámara de Comercio de San Rafael"
      }
    ],
    locale: "es_AR",
    type: "website"
  }
};

"use client";
import { Metadata } from 'next';
import SectionHero from '@/components/SectionHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmpresasAsociadas from '@/components/EmpresasAsociadas';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScrollReveal } from '@/components/useScrollReveal';
import { AnimatedCardImage } from '@/components/AnimatedCardImage';


interface Beneficio {
  id: number;
  titulo: string;
  descripcion: string;
}

const BENEFICIOS: Beneficio[] = [
  {
    id: 1,
    titulo: 'Más de 30 beneficios exclusivos',
    descripcion: 'Descuentos especiales en comercios, restaurantes y servicios de toda la región.'
  },
  {
    id: 2,
    titulo: 'Recomendaciones legales y contables',
    descripcion: 'Asesoramiento profesional en temas jurídicos y contables para tu empresa.'
  },
  {
    id: 3,
    titulo: 'Representación y aporte al crecimiento',
    descripcion: 'Formá parte activa del desarrollo económico y empresarial de nuestra comunidad.'
  },
  {
    id: 4,
    titulo: 'Asesoramiento integral',
    descripcion: 'Apoyo especializado en actividades comerciales, agrícolas, ganaderas y vitivinícolas.'
  }
];

export default function SociosPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WPP_NUMBER || '5492604404500';
  const whatsappMessage = encodeURIComponent('Hola, quisiera asociarme a la Cámara de Comercio');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Animaciones para sección Beneficios
  const [benefTitleRef, benefTitleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [benefSubtitleRef, benefSubtitleVisible] = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 });

  useEffect(() => {
    if (benefTitleRef.current && benefTitleVisible) {
      gsap.fromTo(
        benefTitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }
    if (benefSubtitleRef.current && benefSubtitleVisible) {
      gsap.fromTo(
        benefSubtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, [benefTitleVisible, benefSubtitleVisible]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Crecé junto a los líderes de San Rafael"
        subtitle="Sumate a nuestra comunidad empresarial y accede a beneficios únicos para hacer crecer tu negocio"
        backgroundImage="/images/institucional/asamblea.avif"
        backgroundImageAlt="Empresarios de San Rafael en asamblea de la Cámara de Comercio"
        customGradient="bg-gradient-to-r from-slate-900/90 via-blue-900/40 to-black/10"
        showSociosBadge={true}
      />

      {/* Beneficios Section */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="beneficios-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="beneficios-title"
              ref={benefTitleRef}
              className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-6"
              style={{
                opacity: benefTitleVisible ? 1 : 0,
                visibility: benefTitleVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.2s, visibility 0.2s',
              }}
            >
              Beneficios de ser socio
            </h2>
            <p
              ref={benefSubtitleRef}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                opacity: benefSubtitleVisible ? 1 : 0,
                visibility: benefSubtitleVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.2s, visibility 0.2s',
              }}
            >
              Al asociarte, obtenés acceso inmediato a una amplia gama de servicios y beneficios diseñados especialmente para potenciar tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {BENEFICIOS.map((beneficio, idx) => (
              <AnimatedCardImage key={beneficio.id} direction="up" delay={0.1 * idx}>
                <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[180px] flex items-stretch">
                  <div className="flex items-start space-x-4 w-full">
                    <div className="flex-shrink-0 mt-1" aria-hidden="true">
                      <div className="w-6 h-6 bg-[#FF4757] rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-[#091b3f] mb-3">
                        {beneficio.titulo}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {beneficio.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCardImage>
            ))}
          </div>

          {/* Botón para ver todos los beneficios */}
          <div className="mt-12 text-center">
            <a
              href="/beneficios"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#091b3f] hover:bg-[#091b3f]/90 text-white font-medium text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#091b3f]/30"
            >
              Ver todos los descuentos disponibles
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Más de 30 comercios con descuentos exclusivos para socios
            </p>
          </div>
        </div>
      </section>

      {/* Empresas Asociadas */}
      <EmpresasAsociadas />

      {/* CTA Section */}
      {(() => {
        const [ctaTitleRef, ctaTitleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
        const [ctaSubtitleRef, ctaSubtitleVisible] = useScrollReveal<HTMLParagraphElement>({ threshold: 0.3 });
        const [ctaBtnRef, ctaBtnVisible] = useScrollReveal<HTMLAnchorElement>({ threshold: 0.2 });
        useEffect(() => {
          if (ctaTitleRef.current && ctaTitleVisible) {
            gsap.fromTo(
              ctaTitleRef.current,
              { y: 60, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
            );
          }
          if (ctaSubtitleRef.current && ctaSubtitleVisible) {
            gsap.fromTo(
              ctaSubtitleRef.current,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
            );
          }
          if (ctaBtnRef.current && ctaBtnVisible) {
            gsap.fromTo(
              ctaBtnRef.current,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
            );
          }
        }, [ctaTitleVisible, ctaSubtitleVisible, ctaBtnVisible]);
        return (
          <section className="py-16 lg:py-20 mb-24 lg:mb-32 bg-gradient-to-br from-slate-900 via-[#091b3f] to-slate-800" aria-labelledby="cta-title">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2
                id="cta-title"
                ref={ctaTitleRef}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{
                  opacity: ctaTitleVisible ? 1 : 0,
                  visibility: ctaTitleVisible ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s, visibility 0.2s',
                }}
              >
                ¿Listo para sumarte?
              </h2>
              <p
                ref={ctaSubtitleRef}
                className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
                style={{
                  opacity: ctaSubtitleVisible ? 1 : 0,
                  visibility: ctaSubtitleVisible ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s, visibility 0.2s',
                }}
              >
                Contactanos hoy mismo y comenzá a disfrutar de todos los beneficios de ser socio de la Cámara de Comercio.
              </p>
              {/* Botón principal WhatsApp */}
              <a
                ref={ctaBtnRef}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4757] hover:bg-[#FF4757]/90 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF4757]/50"
                aria-label="Escribinos por WhatsApp para asociarte"
                style={{
                  opacity: ctaBtnVisible ? 1 : 0,
                  visibility: ctaBtnVisible ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s, visibility 0.2s',
                }}
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
          </section>
        );
      })()}
    </main>
    <Footer />
  </>
  );
}
