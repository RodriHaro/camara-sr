// SEO dinámico para cada noticia
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsData = await getNewsBySlug(slug);
  if (!newsData || !newsData.news) {
    return {
      title: 'Noticia no encontrada | Cámara de Comercio de San Rafael',
      description: 'La noticia solicitada no existe o fue eliminada.',
    };
  }
  const { news } = newsData;
  return {
    title: `${news.title} | Noticias | Cámara de Comercio de San Rafael`,
    description: news.excerpt || 'Noticia de la Cámara de Comercio de San Rafael.',
    keywords: [
      'noticias',
      'cámara de comercio',
      'san rafael',
      news.category
    ],
    openGraph: {
      title: `${news.title} | Noticias | Cámara de Comercio de San Rafael`,
      description: news.excerpt || 'Noticia de la Cámara de Comercio de San Rafael.',
      url: `https://camarasanrafael.com.ar/noticias/${slug}`,
      siteName: 'Cámara de Comercio de San Rafael',
      images: [
        {
          url: news.image || '/images/institucional/asamblea-1.webp',
          width: 1200,
          height: 630,
          alt: news.title
        }
      ],
      locale: 'es_AR',
      type: 'article'
    }
  };
}
import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArticleShare } from "../../../components/ArticleShare";
import { getNewsBySlug, getAllNewsSlugs } from "../../../lib/sanity.service";
import { PortableText } from '@portabletext/react';
import { NewsCard } from "../../../components/NewsCard";
import { AnimatedSection } from "../../../components/AnimatedSection";
import { AnimatedTitle } from "../../../components/AnimatedTitle";
import { AnimatedText } from "../../../components/AnimatedText";
import { urlFor } from "../../../lib/sanity.image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all news articles
export async function generateStaticParams() {
  try {
    const slugs = await getAllNewsSlugs();
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const newsData = await getNewsBySlug(slug);
  
  if (!newsData) {
    notFound();
  }

  const { news, relatedNews } = newsData;

  // PortableText components for rendering rich content
  const portableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <img
            src={urlFor(value).width(600).height(400).fit('fillmax').format('webp').quality(95).url()}
            alt={value.alt || 'imagen'}
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      ),
    },
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-bold text-[#091b3f] mt-8 mb-4">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-semibold text-[#091b3f] mt-6 mb-3">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-700 leading-relaxed mb-4">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-[#091b3f] pl-6 my-6 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg">
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-semibold text-[#091b3f]">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic">{children}</em>
      ),
      underline: ({ children }: any) => (
        <span className="underline">{children}</span>
      ),
      link: ({ children, value }: any) => (
        <a 
          href={value.href}
          className="text-[#091b3f] hover:text-[#E1AD01] underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
      number: ({ children }: any) => <li className="ml-4">{children}</li>,
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-[88px]">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <AnimatedSection
            className="mb-8 text-sm text-gray-600"
            animation="fadeInUp"
            delay={0}
            duration={0.5}
          >
            <nav>
              <a href="/" className="hover:text-[#091b3f] transition-colors">
                Inicio
              </a>
              <span className="mx-2">›</span>
              <a href="/noticias" className="hover:text-[#091b3f] transition-colors">
                Noticias
              </a>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{news.title}</span>
            </nav>
          </AnimatedSection>

          {/* Article header */}
          <header className="mb-8">
            <AnimatedSection
              className="mb-4"
              animation="fadeInUp"
              delay={100}
              duration={0.6}
            >
              <span className="inline-block bg-[#091b3f] text-white px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
            </AnimatedSection>
            
            <AnimatedTitle
              as="h1"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#091b3f] mb-6 leading-tight"
              animation="fadeInUp"
              delay={200}
              duration={0.8}
            >
              {news.title}
            </AnimatedTitle>
            
            <AnimatedSection
              className="flex items-center gap-4 text-gray-600 mb-6"
              animation="fadeInUp"
              delay={300}
              duration={0.6}
            >
              <time dateTime={news.date}>{news.date}</time>
            </AnimatedSection>
            
            <AnimatedText
              className="text-xl text-gray-700 leading-relaxed font-medium"
              animation="fadeInUp"
              delay={400}
              duration={0.7}
            >
              {news.excerpt}
            </AnimatedText>
          </header>

          {/* Share buttons */}
          <AnimatedSection
            className="mb-8 pb-8 border-b border-gray-200"
            animation="fadeInUp"
            delay={500}
            duration={0.6}
          >
            <ArticleShare 
              title={news.title}
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
          </AnimatedSection>

          {/* Featured image */}
          <AnimatedSection
            className="mb-8"
            animation="fadeInUp"
            delay={600}
            duration={0.8}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full rounded-lg shadow-lg"
            />
          </AnimatedSection>

          {/* Article content */}
          <AnimatedSection
            className="prose prose-lg max-w-none"
            animation="fadeInUp"
            delay={700}
            duration={0.8}
          >
            {news.content && (
              <PortableText 
                value={news.content} 
                components={portableTextComponents}
              />
            )}
          </AnimatedSection>
        </article>

        {/* Related news */}
        {relatedNews && relatedNews.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <AnimatedTitle
                as="h2"
                className="text-3xl font-bold text-[#091b3f] mb-8 text-center"
                animation="fadeInUp"
                delay={800}
                duration={0.8}
              >
                Noticias Relacionadas
              </AnimatedTitle>
              <AnimatedSection
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                animation="fadeInUp"
                delay={900}
                duration={0.8}
              >
                {relatedNews.slice(0, 3).map((relatedItem) => (
                  <NewsCard key={relatedItem.id} news={relatedItem} />
                ))}
              </AnimatedSection>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
