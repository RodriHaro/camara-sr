import SectionContainer from './SectionContainer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] text-center mb-16">
          Línea del Tiempo
        </h2>
        
        <div className="relative">
          {/* Línea horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#091b3f] to-blue-400 transform -translate-y-1/2 hidden lg:block" />
          
          {/* Eventos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {events.map((event, index) => (
              <div key={index} className="relative text-center">
                {/* Punto en la línea */}
                <div className="relative z-10 mx-auto w-6 h-6 bg-[#091b3f] rounded-full border-4 border-white shadow-lg mb-6" />
                
                {/* Contenido */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-[#091b3f] mb-3">
                    {event.year}
                  </div>
                  <h3 className="text-lg font-semibold text-[#091b3f] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
