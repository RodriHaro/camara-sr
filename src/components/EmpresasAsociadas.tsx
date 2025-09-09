"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState, useEffect } from "react";
import { AnimatedTitle } from './AnimatedTitle';
import { AnimatedText } from './AnimatedText';
import { AnimatedSection } from './AnimatedSection';


export default function EmpresasAsociadas() {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  // Función para obtener los logos de cada slide
  const getSlideItems = (slideIndex: number) => {
    switch (slideIndex) {
      case 0:
        return memberLogos.slice(20);  // Primer slide: 12 logos
      case 1:
        return memberLogos.slice(10, 20); // Segundo slide: 10 logos
      case 2:
        return memberLogos.slice(0, 10); // Tercer slide: resto (10 logos)
      default:
        return [];
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedTitle
            as="h2"
            className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-4"
            animation="fadeInUp"
            duration={0.8}
          >
            Únete a las empresas que nos acompañan en el Almuerzo de las Fuerzas Vivas
          </AnimatedTitle>
          <AnimatedText
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            animation="fadeInUp"
            delay={200}
            duration={0.6}
          >
            Forma parte de la comunidad empresarial más importante de San Rafael
          </AnimatedText>
        </div>

        {/* Empresas destacadas - Carrusel interactivo */}
        <AnimatedSection
          className="mb-12"
          animation="fadeInUp"
          delay={400}
          duration={0.8}
        >
          {/* Carrusel container */}
          <div className="relative bg-gray-50 rounded-2xl p-8">
            {/* Slides container */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {getSlideItems(slideIndex).map((company, index) => (
                        <div key={index} className="group">
                          <Link href={company.url} target="_blank" rel="noopener noreferrer">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#091b3f]/20 h-32 flex items-center justify-center">
                              <Image
                                src={company.logo}
                                alt={`Logo de ${company.name}`}
                                width={160}
                                height={80}
                                className="object-contain max-w-full max-h-20 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                unoptimized
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación */}
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Slide anterior"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Slide siguiente"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-[#091b3f] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
