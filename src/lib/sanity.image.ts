import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { client } from '../sanity/lib/client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper functions for common image transformations
export function imageUrl(source: SanityImageSource, width?: number, height?: number) {
  let url = urlFor(source)
  
  if (width) {
    url = url.width(width)
  }
  
  if (height) {
    url = url.height(height)
  }
  
  return url.format('webp').quality(85).url()
}

// Hero image optimized for full width display with high resolution support
export function heroImageUrl(source: SanityImageSource) {
  return urlFor(source)
    .maxWidth(3840)  // Maximum width (won't upscale beyond original)
    .maxHeight(1200) // Maximum height (won't upscale beyond original)
    .fit('crop')
    .crop('center')
    .format('webp') // WebP for better compression with quality
    .quality(98)    // High quality but not excessive
    .auto('format') // Let Sanity choose the best format
    .url();
}

// Hero image with responsive sizes for different screen sizes
export function heroImageUrlResponsive(source: SanityImageSource) {
  const baseUrl = urlFor(source).fit('crop').crop('center').format('webp').quality(95);
  
  return {
    // Mobile (up to 768px) - Keep original mobile settings
    mobile: baseUrl.width(768).height(400).dpr(2).url(),
    // Tablet (768px to 1024px) - Improved for laptops with better focal point
    tablet: baseUrl.width(1024).height(600).crop('focalpoint').focalPoint(0.62, 0.5).dpr(2).url(),
    // Desktop (1024px to 1920px) - Keep original desktop settings
    desktop: baseUrl.width(1920).height(800).dpr(2).url(),
    // Large screens (1920px+) - Keep original large settings
    large: baseUrl.width(2560).height(800).dpr(2).url(),
    // Default fallback (highest quality) - Keep original
    default: baseUrl.width(2560).height(800).dpr(2).url()
  };
}

// Card image optimized for news cards with high resolution support
export function cardImageUrl(source: SanityImageSource) {
  return urlFor(source)
    .maxWidth(800)  // Higher resolution for cards (won't upscale beyond original)
    .maxHeight(500) // Proportional height (won't upscale beyond original)
    .fit('crop')
    .crop('center')
    .format('webp') // WebP for better compression
    .quality(98)    // Higher quality for crisp cards
    .auto('format') // Let Sanity choose the best format
    .url()
}

// Thumbnail for small previews
export function thumbnailUrl(source: SanityImageSource) {
  return urlFor(source)
    .width(150)
    .height(150)
    .fit('crop')
    .crop('center')
    .format('webp')
    .quality(80)
    .url()
}
