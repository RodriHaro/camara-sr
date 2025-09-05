import Image from 'next/image';

interface VisionCard {
  icon: string;
  title: string;
  description: string;
}

interface Valor {
  text: string;
  boldWord: string;
}

interface VisionValoresProps {
  visionCards: VisionCard[];
  valores: Valor[];
  imageSrc: string;
  imageAlt: string;
}

export default function VisionValores({ visionCards, valores, imageSrc, imageAlt }: VisionValoresProps) {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto px-2 sm:px-4 lg:px-8" style={{ maxWidth: '140rem' }}>
        {/* Contenedor azul oscuro con decoraciones de fondo */}
  <div className="bg-[#0f172a] rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-white opacity-10 rounded-full -translate-y-16 sm:-translate-y-32 translate-x-16 sm:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white opacity-10 rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
          
          <div className="relative z-10">
            {/* Sección de Visión */}
            <div className="mb-10 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 sm:mb-8 pt-4">
                Nuestra Visión
              </h2>
              <p className="text-base sm:text-lg text-white/80 text-center mb-8 sm:mb-16 max-w-2xl sm:max-w-4xl mx-auto">
                Nuestra Visión Compartida al Centenario de nuestra Institución es:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {visionCards.map((card, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 border border-white/20"
                  >
                    <div className="mb-3 sm:mb-4 lg:mb-6 text-center">
                      {card.title === "Ser Referentes" ? (
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto text-[#FF4757]">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full fill-current">
                            <g data-name="7-User-Check">
                              <path d="M2 29c0-.78 1.92-1.7 3.24-2h.11l8-3a1 1 0 0 0 .65-1v-2.69a1 1 0 0 0-.57-.9A6 6 0 0 1 10 14a1 1 0 0 0-1-1v-2a1 1 0 0 0 1-1V8a6 6 0 0 1 12 0v2a1 1 0 0 0 1 1v2h2v-2a2 2 0 0 0-1-1.73V8A8 8 0 0 0 8 8v1.27A2 2 0 0 0 7 11v2a2 2 0 0 0 1 1.75 8.07 8.07 0 0 0 4 6.16v1.39L4.7 25c-.91.23-4.7 1.37-4.7 4v2a1 1 0 0 0 1 1h14v-2H2z"/>
                              <path d="M24 16a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>
                              <path d="m23 24.59-1.29-1.29-1.41 1.41 2 2a1 1 0 0 0 1.41 0l4-4-1.41-1.41z"/>
                            </g>
                          </svg>
                        </div>
                      ) : card.title === "Fomentar el Desarrollo" ? (
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto text-[#FF4757]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22.049" height="21.066" viewBox="0 0 22.049 21.066" className="w-full h-full fill-current">
                            <path d="M22.049 19.066h-2.05V4H22l-3.908-4-4.043 4h1.95v15.066h-3V9H15l-3.908-4L7 9h1.999v10.066h-3V14H8l-3.908-4L0 14h1.999v5.066H.049v2h22v-2z"/>
                          </svg>
                        </div>
                      ) : card.title === "Ser Parte de la Red" ? (
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto text-[#FF4757]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="w-full h-full fill-current">
                            <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"/>
                          </svg>
                        </div>
                      ) : card.title === "Mayor Valoración" ? (
                        <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto text-[#FF4757]">
                          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full fill-current">
                            <path d="M113.262 107.856 95.371 76.867A42.573 42.573 0 0 0 64 5.51a42.572 42.572 0 0 0-31.368 71.357l-17.891 30.989a2.092 2.092 0 0 0 2.559 3.031l14.332-5.687 2.244 15.257a2.1 2.1 0 0 0 3.887.747l18.09-31.327a42.777 42.777 0 0 0 8.147.779 42.777 42.777 0 0 0 8.147-.779l18.088 31.329a2.1 2.1 0 0 0 3.887-.747l2.25-15.259 14.332 5.684a2.092 2.092 0 0 0 2.559-3.031zm-76.112 6.033-1.75-11.911a2.1 2.1 0 0 0-3-1.581l-11.053 4.384L35.712 79.9a42.508 42.508 0 0 0 15.908 8.928zM64 86.455a38.372 38.372 0 1 1 0-76.744 38.372 38.372 0 1 1 0 76.744zM95.6 100.4a2.1 2.1 0 0 0-3 1.581l-1.752 11.911-14.464-25.064A42.508 42.508 0 0 0 92.292 79.9l14.366 24.883z"/>
                            <path d="M83.621 40.728a4.744 4.744 0 0 0-1.836-1.513 4.754 4.754 0 0 0-2.347-.43l-8.277.016-2.648-8.201v-.01A4.662 4.662 0 0 0 64 27.335a4.662 4.662 0 0 0-4.506 3.26v.01L56.846 38.8l-8.277-.016a4.754 4.754 0 0 0-2.347.43 4.744 4.744 0 0 0-1.836 1.513 4.757 4.757 0 0 0 1.052 6.626h.007l6.977 5.049-2.684 8.198a2.037 2.037 0 0 0-.06.226 4.734 4.734 0 0 0 7.357 5.066L64 60.813l6.964 5.08a4.734 4.734 0 0 0 7.357-5.066 2.037 2.037 0 0 0-.06-.226l-2.678-8.188 6.977-5.049h.007a4.757 4.757 0 0 0 1.052-6.626zm-3.476 3.206c-.043.029-.084.06-.125.093l-8.132 5.883a2.1 2.1 0 0 0-.763 2.346l3.11 9.509c.011.042.022.083.036.125a.581.581 0 0 1 .023.266.541.541 0 0 1-.451.454.559.559 0 0 1-.415-.1l-8.168-5.954a2.089 2.089 0 0 0-1.26-.417 2.089 2.089 0 0 0-1.257.417l-8.167 5.957a.559.559 0 0 1-.415.1.541.541 0 0 1-.451-.454.581.581 0 0 1 .023-.266c.014-.041.025-.083.036-.125l3.11-9.509a2.1 2.1 0 0 0-.763-2.346l-8.131-5.884a2.126 2.126 0 0 0-.125-.093.547.547 0 0 1-.184-.326.554.554 0 0 1 .074-.372l.061-.085a.522.522 0 0 1 .172-.132h.007a.571.571 0 0 1 .28-.053 2.161 2.161 0 0 0 .292 0l9.807.019a2.093 2.093 0 0 0 1.992-1.453l3.115-9.648a.553.553 0 0 1 .276-.322.6.6 0 0 1 .5 0 .553.553 0 0 1 .276.322l3.115 9.648a2.093 2.093 0 0 0 1.992 1.453l9.807-.019a2.161 2.161 0 0 0 .292 0 .571.571 0 0 1 .28.053h.007a.522.522 0 0 1 .172.132l.061.085a.554.554 0 0 1 .074.372.547.547 0 0 1-.183.324z"/>
                            <path d="M87.52 24.566A33.155 33.155 0 0 0 64 14.825a33.259 33.259 0 0 0 0 66.517 33.258 33.258 0 0 0 23.52-56.776zM84.55 68.63A28.968 28.968 0 0 1 64 77.141a29.057 29.057 0 1 1 0-58.115 29.058 29.058 0 0 1 20.547 49.6z"/>
                          </svg>
                        </div>
                      ) : (
                        <div className="text-3xl lg:text-4xl">{card.icon}</div>
                      )}
                    </div>
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

            {/* Separador decorativo */}
            <div className="flex justify-center mb-10 sm:mb-20">
              <div className="w-16 sm:w-24 h-px bg-[#FF4757]"></div>
            </div>

            {/* Sección de Valores */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-16">
                Nuestros Valores
              </h2>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
                {/* Lista de Valores */}
                <div className="space-y-4 sm:space-y-6 relative w-full">
                  {valores.map((valor, index) => {
                    const parts = valor.text.split(valor.boldWord);
                    return (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4 relative">
                        {/* Flecha apuntando hacia el valor */}
                        <div className="flex-shrink-0 mt-1 text-[#FF4757]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                          {parts[0]}
                          <strong className="font-bold text-[#FF4757]">{valor.boldWord}</strong>
                          {parts[1]}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* Imagen */}
                <div className="flex justify-center lg:justify-end w-full mb-6 lg:mb-0">
                  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1 sm:p-2">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={480}
                        height={360}
                        className="rounded-xl sm:rounded-2xl w-full h-auto object-cover"
                        unoptimized
                      />
                    </div>
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
