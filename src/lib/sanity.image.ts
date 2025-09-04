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

// Hero image optimized for full width display
export function heroImageUrl(source: SanityImageSource) {
  return urlFor(source)
    .width(1920)
    .height(600)
    .fit('crop')
    .crop('center')
    .format('webp')
    .quality(95)
    .url()
}

// Card image optimized for news cards
export function cardImageUrl(source: SanityImageSource) {
  return urlFor(source)
    .width(400)
    .height(250)
    .fit('crop')
    .crop('center')
    .format('webp')
    .quality(85)
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
