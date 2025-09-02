import SectionHero from '@/components/SectionHero';
import HistoriaContent from '@/components/HistoriaContent';

export default function HistoriaPage() {
  // Datos reales de la historia de la Cámara de Comercio de San Rafael
  const historyBlocks = [
    {
      title: "Impulsando el desarrollo de San Rafael",
      description: "A lo largo de más de un siglo, hemos sido el motor del crecimiento empresarial en San Rafael, facilitando la integración y el desarrollo de nuevos emprendimientos, promoviendo la innovación tecnológica la capacitación profesional.",
      imageSrc: "/img/historia-desarrollo.jpg",
      imageAlt: "Imagen representativa del desarrollo empresarial y económico de San Rafael",
      imageFirst: false
    },
    {
      title: "Fundación y Origen",
      description: "Nuestra historia comenzó con la fundación de la institución, el 9 de febrero de 1919, año en el que tomaban gran impulso las actividades agrícolas-ganaderas en el país. Nació como una necesidad de cooperación, entre los hombres de trabajo que tenían la responsabilidad de encauzar el incipiente adelanto agrícola de la región.\n\nAquel día se realizó una asamblea de 63 caracterizados vecinos, representantes del comercio e industrias del departamento, decidiendo por unanimidad constituir la Cámara de Comercio, Industrias y Agricultura.",
      imageSrc: "/images/institucional/camara-historia-1.webp",
      imageAlt: "Imagen histórica de la fundación de la Cámara de Comercio de San Rafael",
      imageFirst: true
    },
    {
      title: "Evolución Institucional",
      description: "Con el correr de los años se modificó el nombre por el de Cámara de Comercio, Industria y Agropecuaria de San Rafael, que es el que posee en la actualidad. La CCIA es el lugar de resonancia natural de los hechos acontecidos en la historia del departamento en los últimos 106 años; hemos protagonizado la gestación de muchos de sus proyectos y logros.",
      imageSrc: "/images/institucional/camara-historia-3.jpg",
      imageAlt: "Imagen representativa del crecimiento institucional de la CCIA",
      imageFirst: false
    },
    {
      title: "Acción y Compromiso Diario",
      description: "Los verbos gestionar, agrupar, formar, fundar, estimular, organizar, fomentar, crear, peticionar, indican acción, y ello es lo que ocurre diariamente en nuestra Cámara, por la variedad de hechos y temas que deben ser tratados para la defensa de los intereses de nuestros asociados y los generales de la comunidad, que llegan hasta la sala de sesiones.",
      imageSrc: "/img/historia-liderazgo.jpg",
      imageAlt: "Imagen representativa del liderazgo y compromiso diario de la CCIA",
      imageFirst: true
    }
  ];



  return (
    <>
      {/* Hero Section */}
      <SectionHero
        title="Nuestra Historia"
        subtitle="Más de un siglo de trayectoria impulsando el crecimiento económico de San Rafael, fortaleciendo el tejido empresarial y promoviendo la excelencia profesional para el desarrollo sostenible de nuestra región."
        backgroundImage="/images/institucional/hero-historia.jpg"
        backgroundImageAlt="Imagen histórica representativa de la Cámara de Comercio de San Rafael"
        showInstitucionalBadge={true}
        highlightWord="Historia"
      />

      {/* Contenido de Historia en contenedor azul único */}
      <HistoriaContent historyBlocks={historyBlocks} />
    </>
  );
}
