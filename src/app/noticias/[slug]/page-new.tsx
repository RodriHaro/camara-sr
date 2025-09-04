import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { ArticleShare } from "../../../components/ArticleShare";
import { ReadMore } from "../../../components/ReadMore";
import { getNewsBySlug, getAllNewsSlugs } from "../../../lib/sanity.service";
import { PortableText } from '@portabletext/react';
import { NewsCard } from "../../../components/NewsCard";

interface PageProps {
  params: {
    slug: string;
  };
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
  const newsData = await getNewsBySlug(params.slug);
  
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
            src={value.asset.url}
            alt={value.alt || ''}
            className="w-full rounded-lg shadow-lg"
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
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
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

          {/* Article header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-[#091b3f] text-white px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#091b3f] mb-6 leading-tight">
              {news.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <time dateTime={news.date}>{news.date}</time>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {news.excerpt}
            </p>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {news.content && (
              <PortableText 
                value={news.content} 
                components={portableTextComponents}
              />
            )}
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <ArticleShare 
              title={news.title}
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
          </div>
        </article>

        {/* Related news */}
        {relatedNews && relatedNews.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#091b3f] mb-8 text-center">
                Noticias Relacionadas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.slice(0, 3).map((relatedItem) => (
                  <NewsCard key={relatedItem.id} news={relatedItem} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Read more section */}
        <ReadMore articles={relatedNews.slice(0, 3)} />
      </main>
    </>
  );
}
