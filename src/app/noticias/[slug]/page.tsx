import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { ArticleShare } from "../../../components/ArticleShare";
import { ReadMore } from "../../../components/ReadMore";
import { NewsItem } from "../../../components/NewsCardLarge";

// Tipos para el artículo completo
interface Article {
  id: string;
  slug: string;
  title: string;
  lead: string;
  content: string;
  image: string;
  date: string;
  category: string;
  section?: string;
  author?: string;
}

// Mock data para artículos
const mockArticles: Article[] = [
  {
    id: "1",
    slug: "nueva-sede-camara-comercio",
    title: "Nueva sede de la Cámara de Comercio de San Rafael",
    lead: "Inauguramos nuestra nueva sede con el objetivo de brindar mejores servicios a nuestros socios y fortalecer el desarrollo empresarial de la región.",
    content: `
      <p>La Cámara de Comercio de San Rafael ha inaugurado oficialmente su nueva sede ubicada en el corazón comercial de la ciudad, marcando un hito importante en la historia de la institución.</p>
      
      <p>Esta moderna instalación cuenta con amplios espacios de trabajo, salas de reuniones equipadas con la última tecnología, y un auditorio con capacidad para 200 personas que servirá para eventos, capacitaciones y asambleas.</p>
      
      <h2>Servicios mejorados</h2>
      <p>La nueva sede permitirá ofrecer servicios más eficientes a nuestros socios, incluyendo:</p>
      <ul>
        <li>Asesoramiento empresarial personalizado</li>
        <li>Capacitaciones especializadas</li>
        <li>Espacios de networking y colaboración</li>
        <li>Centro de información comercial</li>
      </ul>
      
      <p>El presidente de la Cámara destacó que "esta nueva sede representa nuestro compromiso con el crecimiento económico de San Rafael y el apoyo constante a nuestros empresarios".</p>
      
      <h2>Inversión en el futuro</h2>
      <p>La inversión realizada refleja la confianza en el potencial de crecimiento de la región y el compromiso de la institución con la modernización de sus servicios para estar a la altura de las necesidades del siglo XXI.</p>
    `,
    image: "/images/heros/asamblea.avif",
    date: "2025-08-18",
    category: "Institucional",
    section: "Noticias",
    author: "Cámara de Comercio"
  }
];

// Mock data para artículos relacionados
const relatedArticles: NewsItem[] = [
  {
    id: "2",
    title: "Expo San Rafael 2025: Un éxito total",
    excerpt: "La exposición comercial más importante de la región concluyó con récord de participación.",
    image: "/api/placeholder/400/300",
    date: "12 Ago 2025",
    category: "Eventos",
    href: "/noticias/expo-san-rafael-2025-exito",
  },
  {
    id: "3",
    title: "Premio a la Innovación Empresarial",
    excerpt: "Reconocemos a las empresas que han destacado por su innovación.",
    image: "/api/placeholder/400/300",
    date: "08 Ago 2025",
    category: "Reconocimientos",
    href: "/noticias/premio-innovacion-empresarial",
  },
  {
    id: "4",
    title: "Capacitación en Marketing Digital",
    excerpt: "Nueva serie de talleres gratuitos para socios sobre marketing digital.",
    image: "/api/placeholder/400/300",
    date: "05 Ago 2025",
    category: "Capacitación",
    href: "/noticias/capacitacion-marketing-digital",
  },
];

// Función mock para obtener artículo por slug
function getArticle(slug: string): Article | null {
  return mockArticles.find(article => article.slug === slug) || null;
}

// Función para formatear fecha en español
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const currentUrl = `https://camara-sr.com.ar/noticias/${article.slug}`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <article className="mx-auto px-4 py-12" style={{ maxWidth: '90rem' }}>
          {/* Encabezado del artículo */}
          <header className="mb-12">
            {/* Fecha */}
            <time 
              dateTime={article.date}
              className="block text-sm text-gray-500 mb-4 uppercase tracking-wide"
            >
              {formatDate(article.date)}
            </time>

            {/* Breadcrumb */}
            {article.section && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li className="uppercase font-semibold">{article.category}</li>
                  <li aria-hidden="true">›</li>
                  <li className="uppercase font-semibold">{article.section}</li>
                </ol>
              </nav>
            )}

            {/* Título */}
              <h1 className="font-medium text-[#091b3f] mb-6" style={{ fontSize: '4rem', letterSpacing: '-.005rem', lineHeight: '4rem' }}>
              {article.title}
            </h1>

            {/* Lead/Bajada */}
            <p className="text-gray-700 mb-8 max-w-4xl" style={{ fontSize: '1.25rem', lineHeight: '2rem' }}>
              {article.lead}
            </p>

            {/* Compartir */}
            <ArticleShare title={article.title} url={currentUrl} />
          </header>

          {/* Imagen destacada */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Contenido del artículo */}
          <div 
            className="prose prose-lg prose-gray max-w-none mb-16"
            style={{ fontSize: '1.25rem', lineHeight: '2rem' }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:text-black [&>p]:text-[1.25rem] [&>p]:leading-[2rem] [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:text-black [&>li]:mb-2 [&>li]:text-black [&_strong]:font-bold [&_b]:font-bold"
            />
          </div>

          {/* Sección Seguir leyendo */}
          <ReadMore articles={relatedArticles} />
        </article>
      </main>
    </>
  );
}

// Generar metadata para SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  
  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${article.title} | Cámara de Comercio de San Rafael`,
    description: article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      images: [article.image],
    },
  };
}
