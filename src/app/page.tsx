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
      <section className="py-16 bg-white overflow-hidden">
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
              <div className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80">
                <Link href="/institucional/vision-mision-valores" className="block h-full relative">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/institucional/asamblea-1.webp" 
                      alt="Visión, Misión y Valores de la Cámara de Comercio"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay para mejorar legibilidad del texto */}
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  
                  {/* Contenido sobre la imagen */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="bg-black/40 rounded-xl p-10 border border-white/20 w-full h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3">
                        Visión, Misión y Valores
                      </h3>
                      <p className="text-white/90 mb-4">
                        Conoce los principios fundamentales que guían nuestro compromiso con el desarrollo empresarial
                      </p>
                      <span className="inline-flex items-center justify-center text-white font-semibold hover:text-[#E1AD01] transition-colors">
                        Descubrir más
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Botón Historia */}
              <div className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80">
                <Link href="/institucional/historia" className="block h-full relative">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/institucional/camara-historia-1.webp" 
                      alt="Historia de la Cámara de Comercio"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay para mejorar legibilidad del texto */}
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>
                  
                  {/* Contenido sobre la imagen */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-center items-center text-center text-white">
                    <div className="bg-black/40 rounded-xl p-10 border border-white/20 w-full h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-3">
                        Nuestra Historia
                      </h3>
                      <p className="text-white/90 mb-4">
                        Más de un siglo de trayectoria impulsando el crecimiento económico de San Rafael
                      </p>
                      <span className="inline-flex items-center justify-center text-white font-semibold hover:text-[#E1AD01] transition-colors">
                        Descubrir más
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
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
