import { getAllNewsSlugs } from "@/lib/sanity.service";
import { NextResponse } from "next/server";

const BASE_URL = "https://camarasanrafael.com.ar";

export async function GET() {
  // Slugs de noticias dinámicas
  let newsSlugs: string[] = [];
  try {
    newsSlugs = await getAllNewsSlugs();
  } catch (e) {
    newsSlugs = [];
  }

  // Páginas estáticas principales
  const staticUrls = [
    "",
    "/beneficios",
    "/socios",
    "/institucional/historia",
    "/institucional/vision-mision-valores",
    "/institucional/directorio",
    "/almuerzo-fuerzas-vivas",
    "/noticias"
  ];

  // URLs de noticias
  const newsUrls = newsSlugs.map(slug => `/noticias/${slug}`);

  const urls = [...staticUrls, ...newsUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (url) => `  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <changefreq>${url.startsWith("/noticias/") ? "daily" : "monthly"}</changefreq>\n    <priority>${url === "" ? "1.0" : url.startsWith("/noticias/") ? "0.7" : "0.8"}</priority>\n  </url>`
    )
    .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
