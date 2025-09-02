interface VisionCard {
  icon: string;
  title: string;
  description: string;
}

interface VisionCardsProps {
  cards: VisionCard[];
}

export default function VisionCards({ cards }: VisionCardsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '140rem' }}>
        {/* Contenedor azul oscuro con decoraciones de fondo */}
        <div className="bg-[#0f172a] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Nuestra Visión
            </h2>
            <p className="text-lg text-white/80 text-center mb-16 max-w-4xl mx-auto">
              Compartida al Centenario de nuestra Institución es:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 border border-white/20"
                >
                  <div className="text-3xl lg:text-4xl mb-4 lg:mb-6 text-center">{card.icon}</div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/80 leading-relaxed text-center">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
