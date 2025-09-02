import Image from 'next/image';

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
    <section className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '140rem' }}>
        {/* Contenedor azul oscuro con decoraciones de fondo */}
        <div className="bg-[#0f172a] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Nuestros Valores
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Lista de Valores */}
              <div className="space-y-6">
                {valores.map((valor, index) => {
                  const parts = valor.text.split(valor.boldWord);
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#E1AD01] rounded-full mt-3"></div>
                      <p className="text-lg text-white/90 leading-relaxed">
                        {parts[0]}
                        <strong className="font-bold text-[#E1AD01]">{valor.boldWord}</strong>
                        {parts[1]}
                      </p>
                    </div>
                  );
                })}
              </div>
              
              {/* Imagen */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={400}
                      height={300}
                      className="rounded-2xl w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
