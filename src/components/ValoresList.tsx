import Image from 'next/image';
import SectionContainer from './SectionContainer';

interface Valor {
  text: string;
  boldWord: string;
}

interface ValoresListProps {
  valores: Valor[];
  imageSrc: string;
  imageAlt: string;
}

export default function ValoresList({ valores, imageSrc, imageAlt }: ValoresListProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <SectionContainer>
        <h2 className="text-3xl md:text-4xl font-bold text-[#091b3f] text-center mb-16">
          Nuestros Valores
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lista de Valores */}
          <div className="space-y-6">
            {valores.map((valor, index) => {
              const parts = valor.text.split(valor.boldWord);
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#091b3f] rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {parts[0]}
                    <strong className="font-bold text-[#091b3f]">{valor.boldWord}</strong>
                    {parts[1]}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="rounded-3xl shadow-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
