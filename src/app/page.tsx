export const metadata = {
  title: "Cámara de Comercio de San Rafael | Sitio Oficial",
  description: "Bienvenido a la Cámara de Comercio, Industria y Agropecuaria de San Rafael. Información institucional, beneficios, eventos, noticias y contacto para empresas y la comunidad empresarial de Mendoza.",
  keywords: [
    "cámara de comercio san rafael",
    "industria",
    "agropecuaria",
    "mendoza",
    "empresas",
    "beneficios",
    "eventos",
    "noticias",
    "socios"
  ],
  openGraph: {
    title: "Cámara de Comercio de San Rafael | Sitio Oficial",
    description: "Bienvenido a la Cámara de Comercio, Industria y Agropecuaria de San Rafael. Información institucional, beneficios, eventos, noticias y contacto para empresas y la comunidad empresarial de Mendoza.",
    url: "https://camarasanrafael.com.ar/",
    siteName: "Cámara de Comercio de San Rafael",
    images: [
      {
        url: "/images/institucional/asamblea-1.webp",
        width: 1200,
        height: 630,
        alt: "Cámara de Comercio de San Rafael"
      }
    ],
    locale: "es_AR",
    type: "website"
  }
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSlider, exampleSlides } from "../components/HeroSlider";
import { LatestNews } from "../components/LatestNews";
import WhyJoinSection from "../components/WhyJoinSection";
import Link from "next/link";
import { AnimatedSectionTitle } from "../components/AnimatedSectionTitle";
import { AnimatedCardImage } from "../components/AnimatedCardImage";
import { getHomeSelections, getFallbackHomeData } from "../lib/sanity.service";

export default async function Home() {
  // Fetch home selections from Sanity
  const homeData = await getHomeSelections();

  // Use Sanity data if available, otherwise fall back to example data
  const heroSlides =
    homeData?.heroSlides && homeData.heroSlides.length > 0
      ? homeData.heroSlides
      : exampleSlides;

  const featuredNews = homeData?.featuredNews || [];

  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <div className="overflow-x-hidden w-full">
        <HeroSlider slides={heroSlides} />
      </div>
      <LatestNews featuredNews={featuredNews} />s
      {/* Sección de Navegación Rápida Institucional */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="mx-auto px-4" style={{ maxWidth: "100rem" }}>
          <div className="bg-[#091b3f] rounded-3xl py-12 px-6 md:px-16 relative overflow-hidden">
            {/* Rectángulos decorativos estilo CAC */}
            <div
              className="absolute top-8 left-8 w-64 h-32 bg-white/10 rounded-2xl"
              style={{ backdropFilter: "blur(2px)" }}
            ></div>
            <div
              className="absolute top-24 right-16 w-96 h-40 bg-white/10 rounded-3xl"
              style={{ backdropFilter: "blur(2px)" }}
            ></div>
            <div
              className="absolute bottom-8 left-32 w-40 h-24 bg-white/10 rounded-2xl"
              style={{ backdropFilter: "blur(2px)" }}
            ></div>
            <div
              className="absolute bottom-16 right-32 w-56 h-32 bg-white/10 rounded-3xl"
              style={{ backdropFilter: "blur(2px)" }}
            ></div>
            <AnimatedSectionTitle
              title={
                <>
                  <span className="font-normal">Conoce Nuestra </span>
                  <span className="font-bold">Institución</span>
                </>
              }
              subtitle="Descubre los principios que nos guían y la historia que nos define como Cámara de Comercio de San Rafael"
              color="white"
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              {/* Botón Visión, Misión y Valores */}
              <AnimatedCardImage direction="up" duration={1.1}>
                <div className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80">
                  <Link
                    href="/institucional/vision-mision-valores"
                    className="block h-full relative"
                  >
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
                          Conoce los principios fundamentales que guían nuestro
                          compromiso con el desarrollo empresarial
                        </p>
                        <span className="inline-flex items-center justify-center text-white font-semibold hover:text-[#E1AD01] transition-colors">
                          Descubrir más
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedCardImage>

              {/* Botón Historia */}
              <AnimatedCardImage direction="up" duration={1.1} delay={0.15}>
                <div className="relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-80">
                  <Link
                    href="/institucional/historia"
                    className="block h-full relative"
                  >
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
                          Más de un siglo de trayectoria impulsando el
                          crecimiento económico de San Rafael
                        </p>
                        <span className="inline-flex items-center justify-center text-white font-semibold hover:text-[#E1AD01] transition-colors">
                          Descubrir más
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedCardImage>
            </div>
          </div>
        </div>
      </section>
      {/* Sección de Eventos */}
      <section className="py-16 bg-[#091b3f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contenido de texto a la izquierda */}
            <div className="lg:col-span-2 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-full">
                <div className="mb-6 w-full text-center lg:text-left lg:items-start">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 w-full lg:text-left pb-4">
                    Almuerzo de las Fuerzas Vivas
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed w-full lg:text-left">
                    Nuestro encuentro anual más importante, donde reunimos a los
                    principales líderes empresariales, políticos e
                    institucionales de San Rafael para fortalecer los lazos y
                    promover el desarrollo de nuestra región.
                  </p>
                </div>
                <div className="space-y-6 w-full">
                  <Link
                    href="/almuerzo-fuerzas-vivas"
                    className="inline-flex items-center bg-white text-[#091b3f] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF4757] hover:text-white transition-colors text-lg mx-auto lg:mx-0"
                  >
                    Conocer Más sobre el Evento
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Imagen más grande a la derecha */}
            <div className="lg:col-span-3 relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/afv/afv-hero.jpg"
                  alt="Almuerzo de las Fuerzas Vivas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección de Empresas Asociadas */}
      <WhyJoinSection />
      {/* Sección de Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-4">
              Contactanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Encuentra toda nuestra información de
              contacto y ubicación
            </p>
          </div>

          {/* Cambié lg:grid-cols-2 → md:grid-cols-2 */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda: Información de Contacto */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-[15px] sm:text-base">
                <h3 className="text-2xl font-bold text-[#091b3f] mb-6">
                  Información de Contacto
                </h3>

                {/* Dirección */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#091b3f] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#091b3f] mb-1">
                      Dirección
                    </h4>
                    <p className="text-gray-600">
                      Av. El Libertador 78
                      <br />
                      San Rafael, Mendoza
                      <br />
                      Argentina (5600)
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#091b3f] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#091b3f] mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600">
                      <a
                        href="https://wa.me/5492604404500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FF4757] transition-colors duration-200 font-medium"
                      >
                        2604 404500
                      </a>
                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#091b3f] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#091b3f] mb-1">
                      Emails
                    </h4>
                    <p className="text-gray-600 text-[14px] sm:text-base">
                      <a
                        href="mailto:info@camarasanrafael.com.ar"
                        className="hover:text-[#091b3f] transition-colors"
                      >
                        contacto@camarasanrafael.com.ar
                        <br />
                        prensa@camarasanrafael.com.ar
                        <br />
                        administracion@camarasanrafael.com.ar
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Google Maps */}
            <div className="w-full">
              <div className="aspect-[16/9] md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow">
                <iframe
                  title="Ubicación de la Cámara de Comercio de San Rafael"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8855442891597!2d-68.3375!3d-34.6175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679a81b9f8b5c6d%3A0x4c8f5c5f8b5c5c5c!2sAv.%20El%20Libertador%2078%2C%20M5600%20San%20Rafael%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1693852800000!5m2!1ses!2sar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
