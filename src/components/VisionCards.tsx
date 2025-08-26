import SectionContainer from './SectionContainer';

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
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] text-center mb-8">
          Nuestra Visión
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Nuestra Visión Compartida al Centenario de nuestra Institución es:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gradient-to-br from-blue-50 to-white"
            >
              <div className="text-3xl lg:text-4xl mb-4 lg:mb-6 text-center">{card.icon}</div>
              <h3 className="text-lg lg:text-xl font-bold text-[#091b3f] mb-3 lg:mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
