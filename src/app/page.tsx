import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSlider, exampleSlides } from "../components/HeroSlider";
import { LatestNews } from "../components/LatestNews";
import WhyJoinSection from "../components/WhyJoinSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider slides={exampleSlides} />
      <LatestNews />
      
      {/* Sección de Navegación Rápida Institucional */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '100rem' }}>
          <div className="bg-[#091b3f] rounded-3xl py-12 px-6 md:px-16 relative overflow-hidden">
            {/* Rectángulos decorativos estilo CAC */}
            <div className="absolute top-8 left-8 w-64 h-32 bg-white/10 rounded-2xl" style={{backdropFilter: 'blur(2px)'}}></div>
            <div className="absolute top-24 right-16 w-96 h-40 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
            <div className="absolute bottom-8 left-32 w-40 h-24 bg-white/10 rounded-2xl" style={{backdropFilter: 'blur(2px)'}}></div>
            <div className="absolute bottom-16 right-32 w-56 h-32 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                <span className="font-normal">Conoce Nuestra </span>
                <span className="font-bold">Institución</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Descubre los principios que nos guían y la historia que nos define como Cámara de Comercio de San Rafael
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              {/* Botón Visión, Misión y Valores */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Link href="/institucional/vision-mision-valores" className="block p-8 text-center">
                  <div className="w-16 h-16 bg-[#091b3f] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#091b3f] mb-3">
                    Visión, Misión y Valores
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Conoce los principios fundamentales que guían nuestro compromiso con el desarrollo empresarial
                  </p>
                  <span className="inline-flex items-center text-[#091b3f] font-semibold hover:text-[#E1AD01] transition-colors">
                    Descubrir más
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Botón Historia */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Link href="/institucional/historia" className="block p-8 text-center">
                  <div className="w-16 h-16 bg-[#091b3f] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#091b3f] mb-3">
                    Nuestra Historia
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Más de un siglo de trayectoria impulsando el crecimiento económico de San Rafael
                  </p>
                  <span className="inline-flex items-center text-[#091b3f] font-semibold hover:text-[#E1AD01] transition-colors">
                    Descubrir más
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Empresas Asociadas */}
      <WhyJoinSection />
      <Footer />
    </>
  );
}
