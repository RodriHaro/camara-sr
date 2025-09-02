import Image from 'next/image';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  showInstitucionalBadge?: boolean;
  highlightWord?: string;
}

export default function SectionHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundImageAlt = '',
  showInstitucionalBadge = false,
  highlightWord = ''
}: SectionHeroProps) {
  // Función para dividir el título y resaltar la palabra específica
  const renderTitle = (title: string, highlightWord: string) => {
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span style={{ color: '#E1AD01' }}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section 
      className="relative h-[90vh] w-full flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={backgroundImageAlt}
        fill
        className="object-cover"
        style={{ 
          objectPosition: '70% 50%',
          transform: 'translateX(20%)'
        }}
        priority
        unoptimized
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/99 via-blue-950/98 via-blue-900/90 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-2xl">
            {showInstitucionalBadge && (
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#091b3f]/90 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase rounded-lg border border-white/20">
                  Institucional
                </span>
              </div>
            )}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {renderTitle(title, highlightWord)}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Flecha animada hacia abajo */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-8 h-8 text-white opacity-80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
