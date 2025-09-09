"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatedCardImage } from "./AnimatedCardImage";

export default function AlmuerzoGaleria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/images/galeria/afv-galeria.jpg",
      alt: "Momento del evento Almuerzo de las Fuerzas Vivas"
    },
    {
      src: "/images/galeria/afv-galeria-2.jpg", 
      alt: "Participantes del almuerzo institucional"
    },
    {
      src: "/images/galeria/afv-galeria-3.jpg",
      alt: "Presentación durante el evento"
    },
    {
      src: "/images/galeria/afv-galeria-4.jpg",
      alt: "Networking entre los asistentes"
    },
    {
      src: "/images/galeria/afv-galeria-5.jpg",
      alt: "Autoridades durante el almuerzo"
    },
    {
      src: "/images/galeria/afv-galeria-6.jpg",
      alt: "Vista general del evento"
    },
    {
      src: "/images/afv/afv-hero.jpg",
      alt: "Momento de intercambio entre participantes"
    },
    {
      src: "/images/galeria/afv-galeria-7.jpg",
      alt: "Cierre del evento institucional"
    }
  ];


  // Animaciones eliminadas. Título y subtítulo siempre visibles.

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#091b3f] mb-4"
          >
            <span className="font-normal">Galería de </span>
            <span className="font-bold">Momentos</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Revive los mejores momentos de nuestros eventos institucionales y 
            descubre el ambiente de camaradería que caracteriza estos encuentros.
          </p>
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedCardImage key={index}>
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCardImage>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] w-auto"
            />
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
