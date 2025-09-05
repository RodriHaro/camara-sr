import SectionHero from '@/components/SectionHero';
import VisionValores from '@/components/VisionValores';
import SectionContainer from '@/components/SectionContainer';

export default function VisionMisionValoresPage() {
  // Datos reales de la Cámara de Comercio de San Rafael
  const visionCards = [
    {
      icon: "🎯",
      title: "Ser Referentes",
      description: "En la toma de decisiones de las empresas de la región, siendo consultados por su experiencia y conocimiento del sector empresarial."
    },
    {
      icon: "🚀",
      title: "Fomentar el Desarrollo",
      description: "Económico de la región, promoviendo el crecimiento sustentable y la prosperidad de la comunidad empresarial."
    },
    {
      icon: "🤝",
      title: "Ser Parte de la Red",
      description: "De consulta de los actores políticos, contribuyendo con nuestra experiencia en la formulación de políticas públicas."
    },
    {
      icon: "⭐",
      title: "Mayor Valoración",
      description: "De socios y de la comunidad a través de su participación activa, fortaleciendo el vínculo institucional."
    }
  ];

  // Datos reales para los valores
  const valores = [
    {
      text: "RESPETO por cada empresa y persona que forma parte de nuestra comunidad empresarial",
      boldWord: "RESPETO"
    },
    {
      text: "CONFIANZA en nuestras relaciones y en el futuro de la región",
      boldWord: "CONFIANZA"
    },
    {
      text: "COMPROMISO con el desarrollo sustentable y el crecimiento de San Rafael",
      boldWord: "COMPROMISO"
    },
    {
      text: "COMUNICACIÓN efectiva y transparente con todos nuestros socios y la comunidad",
      boldWord: "COMUNICACIÓN"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionHero
        title="Nuestra misión, visión y valores"
        subtitle="Representar a las empresas de la región, impulsar y defender sus actividades, promoviendo el desarrollo sustentable de la comunidad"
        backgroundImage="/images/heros/rotonda-vision.png"
        backgroundImageAlt="Imagen representativa de la visión institucional de la Cámara de Comercio"
        showInstitucionalBadge={true}
        highlightWord="misión"
  customGradient="bg-gradient-to-r from-slate-950/80 via-blue-900/40 via-40% to-transparent"
      />

      {/* Sección de Visión y Valores Combinadas */}
      <VisionValores
        visionCards={visionCards}
        valores={valores}
        imageSrc="/images/institucional/valores.avif"
        imageAlt="Imagen representativa de los valores institucionales"
      />
    </>
  );
}
