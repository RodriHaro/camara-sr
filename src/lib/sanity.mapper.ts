import { NewsItem } from '../components/NewsCardLarge'
import { heroImageUrl, heroImageUrlResponsive, cardImageUrl } from './sanity.image'

// Type definitions for Sanity data
export interface SanityNoticia {
  _id: string
  titulo: string
  slug: {
    current: string
  }
  resumen: string
  imagen: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  categoria: string
  fechaPublicacion: string
  autor: string
  contenido?: any[] // Portable Text array
}

export interface SanityHomeSelections {
  _id: string
  nombre: string
  activa: boolean
  heroSlides: SanityNoticia[]
  noticiasDestacadas: SanityNoticia[]
}

// Mapper functions
export function mapSanityToNewsItem(sanityNews: SanityNoticia): NewsItem {
  return {
    id: sanityNews._id,
    title: sanityNews.titulo,
    excerpt: sanityNews.resumen,
    image: cardImageUrl(sanityNews.imagen),
    date: formatDate(sanityNews.fechaPublicacion),
    category: formatCategory(sanityNews.categoria),
    href: `/noticias/${sanityNews.slug.current}`
  }
}

export function mapSanityToHeroSlide(sanityNews: SanityNoticia) {
  const responsiveImages = heroImageUrlResponsive(sanityNews.imagen);
  
  return {
    id: sanityNews._id,
    title: sanityNews.titulo,
    excerpt: sanityNews.resumen,
    image: heroImageUrl(sanityNews.imagen), // Main high-quality image
    responsiveImages, // Include responsive images for better mobile optimization
    date: formatDate(sanityNews.fechaPublicacion),
    category: formatCategory(sanityNews.categoria),
    href: `/noticias/${sanityNews.slug.current}`
  }
}

export function mapSanityHomeSelections(sanityData: SanityHomeSelections) {
  if (!sanityData) return null
  
  return {
    id: sanityData._id,
    name: sanityData.nombre,
    active: sanityData.activa,
    heroSlides: sanityData.heroSlides?.map(mapSanityToHeroSlide) || [],
    featuredNews: sanityData.noticiasDestacadas?.map(mapSanityToNewsItem) || []
  }
}

// Helper functions
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

function formatCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    'institucional': 'Institucional',
    'eventos': 'Eventos',
    'comunicados': 'Comunicados',
    'actividades': 'Actividades',
    'economia': 'Economía',
    'politica': 'Política'
  }
  
  return categoryMap[category] || category
}

// Date helpers for sorting and filtering
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function isRecentNews(dateString: string, daysThreshold = 7): boolean {
  const newsDate = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - newsDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays <= daysThreshold
}

// Pagination helpers
export interface PaginationParams {
  page: number
  pageSize: number
}

export function getPaginationParams(page: number = 1, pageSize: number = 12) {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  
  return { start, end }
}

export function calculatePagination(totalCount: number, currentPage: number, pageSize: number) {
  const totalPages = Math.ceil(totalCount / pageSize)
  const hasNextPage = currentPage < totalPages
  const hasPrevPage = currentPage > 1
  
  return {
    totalPages,
    hasNextPage,
    hasPrevPage,
    totalCount
  }
}

// Category filter helpers
export const CATEGORY_FILTERS = [
  { value: '', label: 'Todas las categorías' },
  { value: 'institucional', label: 'Institucional' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'comunicados', label: 'Comunicados' },
  { value: 'actividades', label: 'Actividades' },
  { value: 'economia', label: 'Economía' },
  { value: 'politica', label: 'Política' }
]

export function getCategoryLabel(categoryValue: string): string {
  const category = CATEGORY_FILTERS.find(cat => cat.value === categoryValue)
  return category?.label || 'Categoría desconocida'
}
