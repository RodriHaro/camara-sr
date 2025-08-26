import Image from 'next/image';
import SectionContainer from './SectionContainer';

interface HistoryBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  year?: string;
}

export default function HistoryBlock({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  imageFirst = false,
  year 
}: HistoryBlockProps) {
  return (
    <div className="py-20">
      <SectionContainer>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imageFirst ? 'lg:grid-flow-col' : ''
        }`}>
          {/* Imagen */}
          <div className={`flex justify-center ${
            imageFirst ? 'lg:order-1' : 'lg:order-2'
          }`}>
            <div className="relative w-full max-w-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={350}
                className="rounded-3xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>

          {/* Contenido */}
          <div className={`${
            imageFirst ? 'lg:order-2' : 'lg:order-1'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {title}
            </h2>
            <div className="prose prose-lg text-white/90 leading-relaxed">
              {description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
