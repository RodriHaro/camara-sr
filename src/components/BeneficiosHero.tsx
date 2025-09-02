"use client";
import Image from "next/image";

export default function BeneficiosHero() {
  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100vh - 200px)" }}>
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/heros/beneficios3.png"
          alt="Beneficios exclusivos"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091b3f]/5 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#091b3f]/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 py-12 md:ml-16 text-white flex flex-col gap-4" style={{ position: 'absolute', bottom: '0', left: '0', marginBottom: '2rem' }}>
        <span className="text-xs uppercase tracking-widest font-semibold opacity-80">Cámara de Comercio</span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2 drop-shadow-lg">
          Empresas que nos acompañan al almuerzo de las fuerzas vivas
        </h1>
        <p className="text-base md:text-lg opacity-90 mb-4 max-w-lg drop-shadow-md">
          Conectamos empresas, impulsamos el crecimiento y fortalecemos el tejido empresarial de San Rafael. Juntos, transformamos desafíos en oportunidades de desarrollo.
        </p>
      </div>

      {/* Flecha animada hacia abajo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 drop-shadow-lg"></div>
        </div>
      </div>
    </section>
  );
}
