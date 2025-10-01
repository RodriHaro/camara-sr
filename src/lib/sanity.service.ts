import { client } from '../sanity/lib/client'
import {
  HOME_SELECTIONS_QUERY,
  NEWS_LIST_QUERY,
  NEWS_COUNT_QUERY,
  NEWS_BY_CATEGORY_QUERY,
  NEWS_COUNT_BY_CATEGORY_QUERY,
  NEWS_BY_SLUG_QUERY,
  RELATED_NEWS_QUERY,
  LATEST_NEWS_QUERY,
  FEATURED_NEWS_QUERY,
  SEARCH_NEWS_QUERY,
  SEARCH_NEWS_COUNT_QUERY,
  CATEGORIES_WITH_COUNT_QUERY,
  ALL_NEWS_SLUGS_QUERY,
  BENEFICIOS_QUERY,
  BENEFICIOS_BY_RUBRO_QUERY,
  BENEFICIOS_DESTACADOS_QUERY,
  RUBROS_WITH_COUNT_QUERY
} from './sanity.queries'
import {
  SanityNoticia,
  SanityHomeSelections,
  mapSanityHomeSelections,
  mapSanityToNewsItem,
  getPaginationParams,
  calculatePagination,
  PaginationParams
} from './sanity.mapper'

// Cache options for different types of content
const CACHE_OPTIONS = {
  home: { next: { revalidate: 60 } }, // 1 minute for home page
  news: { next: { revalidate: 30 } }, // 1 minute for news (faster updates)
  static: { next: { revalidate: 3600 } } // 1 hour for mostly static content
}

// Home page data
export async function getHomeSelections() {
  try {
    const data: SanityHomeSelections = await client.fetch(
      HOME_SELECTIONS_QUERY,
      {},
      CACHE_OPTIONS.home
    )
    
    return mapSanityHomeSelections(data)
  } catch (error) {
    console.error('Error fetching home selections:', error)
    return null
  }
}

// News listing with pagination
export async function getNewsList(params: PaginationParams & { category?: string }) {
  const { start, end } = getPaginationParams(params.page, params.pageSize)
  
  try {
    let newsData: SanityNoticia[]
    let totalCount: number
    
    if (params.category) {
      // Fetch by category
      [newsData, totalCount] = await Promise.all([
        client.fetch(
          NEWS_BY_CATEGORY_QUERY,
          { categoria: params.category, start, end },
          CACHE_OPTIONS.news
        ),
        client.fetch(
          NEWS_COUNT_BY_CATEGORY_QUERY,
          { categoria: params.category },
          CACHE_OPTIONS.news
        )
      ])
    } else {
      // Fetch all news
      [newsData, totalCount] = await Promise.all([
        client.fetch(
          NEWS_LIST_QUERY,
          { start, end },
          CACHE_OPTIONS.news
        ),
        client.fetch(
          NEWS_COUNT_QUERY,
          {},
          CACHE_OPTIONS.news
        )
      ])
    }
    
    const pagination = calculatePagination(totalCount, params.page, params.pageSize)
    
    return {
      news: newsData.map(mapSanityToNewsItem),
      pagination
    }
  } catch (error) {
    console.error('Error fetching news list:', error)
    return {
      news: [],
      pagination: {
        totalPages: 0,
        hasNextPage: false,
        hasPrevPage: false,
        totalCount: 0
      }
    }
  }
}

// Single news article
export async function getNewsBySlug(slug: string) {
  try {
    const newsData: SanityNoticia = await client.fetch(
      NEWS_BY_SLUG_QUERY,
      { slug },
      CACHE_OPTIONS.news
    )
    
    if (!newsData) {
      return null
    }
    
    // Get related news
    const relatedNews: SanityNoticia[] = await client.fetch(
      RELATED_NEWS_QUERY,
      {
        categoria: newsData.categoria,
        currentId: newsData._id
      },
      CACHE_OPTIONS.news
    )
    
    return {
      news: {
        ...mapSanityToNewsItem(newsData),
        content: newsData.contenido
      },
      relatedNews: relatedNews.map(mapSanityToNewsItem)
    }
  } catch (error) {
    console.error('Error fetching news by slug:', error)
    return null
  }
}

// Latest news for sidebar, footer, etc.
export async function getLatestNews(limit: number = 5) {
  try {
    const newsData: SanityNoticia[] = await client.fetch(
      LATEST_NEWS_QUERY,
      { limit },
      CACHE_OPTIONS.news
    )
    
    return newsData.map(mapSanityToNewsItem)
  } catch (error) {
    console.error('Error fetching latest news:', error)
    return []
  }
}

// Featured news
export async function getFeaturedNews(limit: number = 4) {
  try {
    const newsData: SanityNoticia[] = await client.fetch(
      FEATURED_NEWS_QUERY,
      { limit },
      CACHE_OPTIONS.news
    )
    
    return newsData.map(mapSanityToNewsItem)
  } catch (error) {
    console.error('Error fetching featured news:', error)
    return []
  }
}

// Search news
export async function searchNews(searchTerm: string, params: PaginationParams) {
  const { start, end } = getPaginationParams(params.page, params.pageSize)
  
  try {
    const [newsData, totalCount]: [SanityNoticia[], number] = await Promise.all([
      client.fetch(
        SEARCH_NEWS_QUERY,
        { searchTerm, start, end },
        CACHE_OPTIONS.news
      ),
      client.fetch(
        SEARCH_NEWS_COUNT_QUERY,
        { searchTerm },
        CACHE_OPTIONS.news
      )
    ])
    
    const pagination = calculatePagination(totalCount, params.page, params.pageSize)
    
    return {
      news: newsData.map(mapSanityToNewsItem),
      pagination,
      searchTerm
    }
  } catch (error) {
    console.error('Error searching news:', error)
    return {
      news: [],
      pagination: {
        totalPages: 0,
        hasNextPage: false,
        hasPrevPage: false,
        totalCount: 0
      },
      searchTerm
    }
  }
}

// Get categories with count
export async function getCategoriesWithCount() {
  try {
    const data = await client.fetch(
      CATEGORIES_WITH_COUNT_QUERY,
      {},
      CACHE_OPTIONS.static
    )
    
    return data.categorias || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// Get all news slugs for static generation
export async function getAllNewsSlugs() {
  try {
    const slugs: string[] = await client.fetch(
      ALL_NEWS_SLUGS_QUERY,
      {},
      CACHE_OPTIONS.static
    )
    
    return slugs
  } catch (error) {
    console.error('Error fetching news slugs:', error)
    return []
  }
}

// Fallback data for when Sanity is not available
export function getFallbackHomeData() {
  return {
    id: 'fallback',
    name: 'Datos de emergencia',
    active: true,
    heroSlides: []
  }
}

export function getFallbackNewsData() {
  return {
    news: [],
    pagination: {
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
      totalCount: 0
    }
  }
}

// BENEFICIOS SERVICES

// Get all benefits
export async function getBeneficios(rubro?: string) {
  try {
    const query = rubro ? BENEFICIOS_BY_RUBRO_QUERY : BENEFICIOS_QUERY
    const params = rubro ? { rubro } : {}
    
    const beneficios = await client.fetch(
      query,
      params,
      CACHE_OPTIONS.static
    )
    
    return beneficios
  } catch (error) {
    console.error('Error fetching beneficios:', error)
    return []
  }
}

// Get featured benefits
export async function getBeneficiosDestacados(limit: number = 6) {
  try {
    const beneficios = await client.fetch(
      BENEFICIOS_DESTACADOS_QUERY,
      { limit },
      CACHE_OPTIONS.static
    )
    
    return beneficios
  } catch (error) {
    console.error('Error fetching beneficios destacados:', error)
    return []
  }
}

// Get rubros with count
export async function getRubrosWithCount() {
  try {
    const data = await client.fetch(
      RUBROS_WITH_COUNT_QUERY,
      {},
      CACHE_OPTIONS.static
    )
    
    // Filter out rubros with 0 count
    return data.rubros.filter((rubro: any) => rubro.count > 0)
  } catch (error) {
    console.error('Error fetching rubros with count:', error)
    return []
  }
}
