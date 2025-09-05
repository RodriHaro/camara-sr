"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useScrollReveal } from "./useScrollReveal";

export default function AlmuerzoContent() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const [textRef, textVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  useEffect(() => {
    if (titleRef.current && titleVisible) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    if (textRef.current && textVisible) {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }
  }, [titleVisible, textVisible]);

  return (
    <section className="py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '100rem' }}>
        {/* Contenedor azul con todo el contenido */}
        <div className="bg-[#091b3f] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Rectángulos decorativos estilo CAC */}
          <div className="absolute top-8 left-8 w-64 h-32 bg-white/10 rounded-2xl" style={{backdropFilter: 'blur(2px)'}}></div>
          <div className="absolute top-24 right-16 w-96 h-40 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
          <div className="absolute bottom-16 right-32 w-56 h-32 bg-white/10 rounded-3xl" style={{backdropFilter: 'blur(2px)'}}></div>
          
          <div className="relative z-10">
            {/* Título centrado */}
            <div className="text-center mb-16">
              <h2
                ref={titleRef}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                style={{
                  opacity: titleVisible ? 1 : 0,
                  visibility: titleVisible ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s, visibility 0.2s',
                }}
              >
                <span className="font-normal">Tradicional </span>
                <span className="font-bold">Almuerzo de las Fuerzas Vivas</span>
              </h2>
            </div>

            {/* Contenido principal en grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Texto */}
              <div className="order-2 lg:order-1">
                <div
                  ref={textRef}
                  className="prose prose-lg text-white"
                  style={{
                    opacity: textVisible ? 1 : 0,
                    visibility: textVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.2s, visibility 0.2s',
                  }}
                >
                  <p className="text-xl leading-relaxed mb-6 text-white text-opacity-90">
                    Cada año, en octubre, desarrollamos el ya tradicional <strong className="text-white">Almuerzo de las Fuerzas Vivas</strong>, 
                    evento que nuclea a cerca de <strong className="text-white">700 invitados</strong>, entre ellos destacados empresarios 
                    nacionales, provinciales y regionales; funcionarios y legisladores de distintos niveles 
                    gubernamentales, y autoridades militares, policiales y eclesiásticas.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white text-opacity-90">
                    Año a año la fecha de realización varía y -en la medida de lo posible- se realiza en dos 
                    días significativos para la historia de San Rafael: <strong className="text-white">el 2 de octubre</strong> (se conmemora 
                    el traslado de las autoridades y organismos públicos de la Villa Cabecera -hoy Villa 25 de Mayo- 
                    a la Colonia Francesa, actual ubicación de la ciudad) o <strong className="text-white">el 24 de octubre</strong>, Día del 
                    Santo Patrono San Rafael Arcángel.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white text-opacity-90">
                    A lo largo de la historia, el Almuerzo de las Fuerzas Vivas se ha realizado en distintas 
                    locaciones del departamento, entre ellas el <strong className="text-white">Predio Ferial Alto del Algarrobal</strong>, 
                    propiedad de la entidad.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-white text-opacity-90">
                    Durante el evento, el Presidente de la institución brinda un discurso en el que plantea 
                    problemáticas regionales y departamentales, y el Gobernador responde a los pedidos 
                    con su propia alocución.
                  </p>
                  <div className="p-6 rounded-2xl shadow-lg bg-white/10" style={{backdropFilter: 'blur(2px)'}}>
                    <p className="text-lg font-semibold text-white">
                      "Un encuentro que reúne a los principales referentes del sector empresarial, político, social y académico 
                      de San Rafael para fortalecer los lazos de cooperación y desarrollo regional."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Imagen */}
              <div className="order-1 lg:order-2">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white bg-opacity-10">
                  <Image
                    src="/images/galeria/afv-content.jpg"
                    alt="Evento Almuerzo de las Fuerzas Vivas"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
