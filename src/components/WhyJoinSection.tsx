"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { client } from "@/lib/sanity.client";
import { AnimatedSection } from "./AnimatedSection";
import { AnimatedTitle } from "./AnimatedTitle";
import { AnimatedText } from "./AnimatedText";
import { AnimatedImage } from "./AnimatedImage";

export default function WhyJoinSection() {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [scrollPosition3, setScrollPosition3] = useState(0);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentContainer = useRef<HTMLDivElement | null>(null);
  const currentSetScroll = useRef<React.Dispatch<React.SetStateAction<number>> | null>(null);

  // Función mejorada para manejar el inicio del drag
  const handleStart = (clientX: number, container: HTMLDivElement, setScroll: React.Dispatch<React.SetStateAction<number>>) => {
    isDragging.current = true;
    startX.current = clientX;
    currentContainer.current = container;
    currentSetScroll.current = setScroll;
    document.body.style.userSelect = 'none';
  };

  // Función mejorada para manejar el movimiento
  const handleMove = (clientX: number) => {
    if (!isDragging.current || !currentContainer.current || !currentSetScroll.current) return;

    const diff = startX.current - clientX;
    
    currentSetScroll.current(prev => {
      const newPosition = prev + diff * 0.8; // Factor de suavidad
      // Verificación adicional para evitar null
      if (!currentContainer.current) return prev;
      const maxScroll = currentContainer.current.scrollWidth - currentContainer.current.clientWidth;
      return Math.max(0, Math.min(newPosition, maxScroll));
    });
    
    startX.current = clientX;
  };

  // Función para terminar el drag
  const handleEnd = () => {
    isDragging.current = false;
    currentContainer.current = null;
    currentSetScroll.current = null;
    document.body.style.userSelect = '';
  };

  // Event handlers para touch
  const createTouchHandlers = (container: HTMLDivElement | null, setScroll: React.Dispatch<React.SetStateAction<number>>) => {
    if (!container) return {};
    return {
      onTouchStart: (e: React.TouchEvent) => {
        e.preventDefault();
        handleStart(e.touches[0].clientX, container, setScroll);
      },
      onTouchMove: (e: React.TouchEvent) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      },
      onTouchEnd: handleEnd
    };
  };

  // Event handlers para mouse
  const createMouseHandlers = (container: HTMLDivElement | null, setScroll: React.Dispatch<React.SetStateAction<number>>) => {
    if (!container) return {};
    return {
      onMouseDown: (e: React.MouseEvent) => {
        e.preventDefault();
        if (container) handleStart(e.clientX, container, setScroll);
      },
      onMouseMove: (e: React.MouseEvent) => {
        handleMove(e.clientX);
      },
      onMouseUp: handleEnd,
      onMouseLeave: handleEnd
    };
  };

  // Agregar event listeners globales para el drag
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleMove(e.clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        handleEnd();
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Logos de empresas socias con sus enlaces
  const memberLogos = [
    { name: "Hexámetro", logo: "/images/socios/hexametro.webp", url: "https://hexametro.com.ar/" },
    { name: "Pampa Energía", logo: "/images/socios/pampa.webp", url: "https://pampa.com/" },
    { name: "Plastiandino", logo: "/images/socios/plastiandino.webp", url: "https://www.plastiandino.com/" },
    { name: "Yeso Selenita", logo: "/images/socios/selenita.webp", url: "http://yesoselenita.com/" },
    { name: "Irrigación", logo: "/images/socios/Irrigacion.webp", url: "https://www.irrigacion.gov.ar/web/" },
    { name: "Hierrosan", logo: "/images/socios/hierrosan.webp", url: "https://www.hierrosan.com/" },
    { name: "Municipalidad San Rafael", logo: "/images/socios/Municipalidad.webp", url: "https://www.sanrafael.gov.ar/" },
    { name: "Gobierno de Mendoza", logo: "/images/socios/Gobierno.webp", url: "https://www.mendoza.gov.ar/" },
    { name: "Turismo Buttini", logo: "/images/socios/buttini.webp", url: "https://www.abuttini.com/" },
    { name: "Camiletti", logo: "/images/socios/Camiletti-Inicio.webp", url: "http://camilettisa.com/" },
    { name: "U.E.C", logo: "/images/socios/uec.png", url: "https://www.facebook.com/UECSanRafael/?locale=es_LA" },
    { name: "Nazca Obras Civiles", logo: "/images/socios/nazca.jpg", url: "https://www.instagram.com/nazcaobrasciviles/" },
    { name: "Finca los Alamos", logo: "/images/socios/los_dos_alamos.jpg", url: "https://bombalyaldao.com.ar/finca-los-alamos/?v=47f45e65244c" },
    { name: "Lorenzo Automotores", logo: "/images/socios/lorenzo.jpg", url: "https://lorenzoautomotores.com.ar/" },
    { name: "Linkin", logo: "/images/socios/linkin.jpg", url: "https://web.linkingpos.com/" },
    { name: "Constructora Horizonte S.A", logo: "/images/socios/horizonte.jpg", url: "https://www.instagram.com/constructora_horizonte_sa/" },
    { name: "Hiper Cerámico", logo: "/images/socios/hiper_ceramico.jpg", url: "https://hiperceramico.com.ar/" },
    { name: "El Encuentro", logo: "/images/socios/el_encuentro.jpg", url: "https://www.instagram.com/elencuentromayorista/?hl=es-la" },
    { name: "Banco Credicoop", logo: "/images/socios/credicoop.jpg", url: "https://www.bancocredicoop.coop/personas" },
    { name: "Maderera Lopez", logo: "/images/socios/Maderera-Lopez.jpg", url: "https://www.facebook.com/madereralopezsr/?locale=es_LA" },
    { name: "Calzados Los Gallegos", logo: "/images/socios/LOS-GALLEGOS.jpg", url: "https://www.calzadoslosgallegos.com.ar/" },
    { name: "Iselín Envíos", logo: "/images/socios/Iselin.jpg", url: "https://www.iselin.com.ar/" },
    { name: "Grupo Dial", logo: "/images/socios/GRUPO_DIAL.jpg", url: "https://grupodial.com/" },
    { name: "Diario Mendoza Sur", logo: "/images/socios/DIARIO_MENDOZA_SUR.jpg", url: "https://www.diariomendozasur.com/" },
    { name: "Dial Radio TV", logo: "/images/socios/DIAL-RADIO-TV.jpg", url: "https://grupodial.com/index.php/dial-radio-tv/" },
    { name: "Vittec", logo: "/images/socios/Vittec-Inicio.jpg", url: "https://vittec.odoo.com/" },
    { name: "PROCALC S.A", logo: "/images/socios/Procalc-Inicio.jpg", url: "https://www.instagram.com/procalcs.a/" },
    { name: "Ganadera del Sur", logo: "/images/socios/Ganadera-del-Sur-Inicio.jpg", url: "https://ganaderadelsur.com.ar/" },
    { name: "FAS Electricidad", logo: "/images/socios/Fas-Inicio.jpg", url: "https://www.instagram.com/faselectricidad/?hl=es-la" },
    { name: "Cereales El Diamante", logo: "/images/socios/El-Diamante-Inicio.jpg", url: "https://www.facebook.com/cerealeseldiamante/?locale=es_LA" },
    { name: "Corporación del Sur", logo: "/images/socios/Corporacion-del-Sur-Inicio-4.jpg", url: "https://corporaciondelsur.com/" },
    { name: "CTNET", logo: "/images/socios/CTC-Inicio.jpg", url: "https://www.cabletelevisoracolor.com/" },
    { name: "Bodegas Bianchi", logo: "/images/socios/Bianchi-Inicio.jpg", url: "https://www.bodegasbianchi.com.ar/" },
  ];

  const benefits = [
    {
      icon: "🤝",
      title: "Representación Institucional",
      description: "Tu voz ante gobiernos e instituciones locales, provinciales y nacionales"
    },
    {
      icon: "💼",
      title: "Networking Empresarial",
      description: "Conecta con +650 empresas y amplía tu red de contactos comerciales"
    },
    {
      icon: "📈",
      title: "Beneficios Exclusivos",
      description: "Acceso a descuentos y promociones especiales en servicios y productos"
    },
    {
      icon: "🎓",
      title: "Capacitación Continua",
      description: "Cursos, seminarios y jornadas de actualización empresarial"
    },
    {
      icon: "⚖️",
      title: "Asesoramiento Especializado",
      description: "Consultoría legal, contable y en comercio internacional"
    },
    {
      icon: "🌍",
      title: "Proyección Internacional",
      description: "Oportunidades de exportación y desarrollo de mercados externos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-0">
        
        {/* Header */}
        <div className="text-center mb-16 px-8">
          <AnimatedTitle
            className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-4"
            animation="fadeInUp"
            duration={0.8}
          >
            Unite a las más de 650 empresas que ya confían en nosotros<br />
            y nos acompañaron en el almuerzo de las fuerzas vivas.
          </AnimatedTitle>
          <AnimatedText
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            animation="fadeInUp"
            delay={200}
            duration={0.6}
          >
            Forma parte de la comunidad empresarial más importante de San Rafael
          </AnimatedText>
        </div>

        {/* Empresas Socias */}
        <AnimatedSection
          className="mb-16"
          animation="fadeInUp"
          delay={300}
        >
          {/* Tres filas de logos con drag en toda la fila */}
          <div className="space-y-8">
            {/* Fila 1 */}
            <div 
              className="overflow-hidden max-w-full px-4 py-4 cursor-grab active:cursor-grabbing"
              {...createTouchHandlers(containerRef1.current, setScrollPosition1)}
              {...createMouseHandlers(containerRef1.current, setScrollPosition1)}
            >
              <div 
                ref={containerRef1}
                className="flex transition-transform duration-200 ease-out select-none"
                style={{ transform: `translateX(-${scrollPosition1}px)` }}
              >
                {memberLogos.slice(0, 11).map((company, index) => (
                  <div key={index} className="flex-shrink-0 mx-2 md:mx-6 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-36 min-w-[120px] md:min-w-[160px]">
                    <Link href={company.url} target="_blank" rel="noopener noreferrer">
                      <div className={`w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                        company.logo.includes('uec.png') || company.logo.includes('Vittec') || company.logo.includes('DIAL-RADIO-TV') || company.logo.includes('Iselin.jpg') || company.logo.includes('hierrosan') || company.logo.includes('Municipalidad') || company.logo.includes('CTNET') ? 'p-0' : 
                        company.logo.includes('Bianchi')
                          ? 'p-0.5' : 'p-1'
                      }`}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={100}
                          height={100}
                          quality={100}
                          unoptimized={true}
                          priority={index < 6}
                          className={`rounded-full ${
                            company.logo.includes('uec.png') ? 'w-full h-full object-contain' : 'w-full h-full object-cover'
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Fila 2 */}
            <div 
              className="overflow-hidden max-w-full px-4 py-4 cursor-grab active:cursor-grabbing"
              {...createTouchHandlers(containerRef2.current, setScrollPosition2)}
              {...createMouseHandlers(containerRef2.current, setScrollPosition2)}
            >
              <div 
                ref={containerRef2}
                className="flex transition-transform duration-200 ease-out select-none"
                style={{ transform: `translateX(-${scrollPosition2}px)` }}
              >
                {memberLogos.slice(11, 22).map((company, index) => (
                  <div key={index} className="flex-shrink-0 mx-2 md:mx-6 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-36 min-w-[120px] md:min-w-[160px]">
                    <Link href={company.url} target="_blank" rel="noopener noreferrer">
                      <div className={`w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                        company.logo.includes('uec.png') || company.logo.includes('Vittec') || company.logo.includes('DIAL-RADIO-TV') || company.logo.includes('Iselin.jpg') || company.logo.includes('hierrosan') || company.logo.includes('Municipalidad') || company.logo.includes('CTNET') ? 'p-0' : 
                        company.logo.includes('Bianchi')
                          ? 'p-0.5' : 'p-1'
                      }`}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={100}
                          height={100}
                          quality={100}
                          unoptimized={true}
                          className={`rounded-full ${
                            company.logo.includes('uec.png') ? 'w-full h-full object-contain' : 'w-full h-full object-cover'
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Fila 3 */}
            <div 
              className="overflow-hidden max-w-full px-4 py-4 cursor-grab active:cursor-grabbing"
              {...createTouchHandlers(containerRef3.current, setScrollPosition3)}
              {...createMouseHandlers(containerRef3.current, setScrollPosition3)}
            >
              <div 
                ref={containerRef3}
                className="flex transition-transform duration-200 ease-out select-none"
                style={{ transform: `translateX(-${scrollPosition3}px)` }}
              >
                {memberLogos.slice(22).map((company, index) => (
                  <div key={index} className="flex-shrink-0 mx-2 md:mx-6 rounded-lg p-4 transition-all duration-300 flex items-center justify-center h-36 min-w-[120px] md:min-w-[160px]">
                    <Link href={company.url} target="_blank" rel="noopener noreferrer">
                      <div className={`w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg border border-[#091b3f] hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                        company.logo.includes('uec.png') || company.logo.includes('Vittec') || company.logo.includes('DIAL-RADIO-TV') || company.logo.includes('Iselin.jpg') || company.logo.includes('hierrosan') || company.logo.includes('Municipalidad') || company.logo.includes('CTNET') ? 'p-0' : 
                        company.logo.includes('Bianchi')
                          ? 'p-0.5' : 'p-1'
                      }`}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={100}
                          height={100}
                          quality={100}
                          unoptimized={true}
                          className={`rounded-full ${
                            company.logo.includes('uec.png') ? 'w-full h-full object-contain' : 'w-full h-full object-cover'
                          }`}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-2">
              Y muchas empresas más que forman parte de nuestra comunidad empresarial
            </p>
            <p className="text-gray-400 text-xs">
              👆 Desliza para ver más empresas
            </p>
          </div>
        </AnimatedSection>



        {/* Call to Action */}
        <div className="relative rounded-3xl mx-8 px-8 py-20 md:py-28 text-center overflow-hidden">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img 
              src="/images/heros/cta.avif"
              alt="Imagen histórica representativa de la Cámara de Comercio de San Rafael"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-[#091b3f]/80"></div>
          </div>
          {/* Rectángulos decorativos reposicionados */}
          <div className="relative z-10">
            <AnimatedTitle
              as="h3"
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              animation="fadeInUp"
              delay={0}
            >
              ¿Listo para formar parte?
            </AnimatedTitle>
            <AnimatedText
              className="text-lg text-white/80 mb-8 max-w-2xl mx-auto"
              animation="fadeInUp"
              delay={200}
            >
              Únete a la comunidad empresarial más importante de San Rafael y potencia el crecimiento de tu empresa
            </AnimatedText>
            <AnimatedSection
              className="flex flex-col sm:flex-row gap-4 justify-center"
              animation="fadeInUp"
              delay={400}
            >
              <Link 
                href="/contacto"
                className="bg-[#FF4757] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e13c4a] transition-colors duration-200 inline-flex items-center justify-center"
              >
                Quiero ser socio
                <span className="ml-2">→</span>
              </Link>
              <Link 
                href="/beneficios"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:border-[#FF4757] hover:text-[#FF4757] transition-all duration-200 inline-flex items-center justify-center"
              >
                Ver todos los beneficios
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

