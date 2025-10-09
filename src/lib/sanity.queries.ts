// GROQ queries for Sanity data

// Get active home configuration with all referenced news
export const HOME_SELECTIONS_QUERY = `
  *[_type == "homeSelections" && activa == true][0] {
    _id,
    nombre,
    activa,
    heroSlides[]-> {
      _id,
      titulo,
      slug,
      resumen,
      imagen {
        asset-> {
          _id,
          url
        },
        alt
      },
      categoria,
      fechaPublicacion,
      autor
    }
  }
`

// Get all published news with pagination
export const NEWS_LIST_QUERY = `
  *[_type == "noticia" && publicada == true] | order(fechaPublicacion desc) [$start...$end] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get total count of published news
export const NEWS_COUNT_QUERY = `
  count(*[_type == "noticia" && publicada == true])
`

// Get news by category with pagination
export const NEWS_BY_CATEGORY_QUERY = `
  *[_type == "noticia" && publicada == true && categoria == $categoria] | order(fechaPublicacion desc) [$start...$end] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get count of news by category
export const NEWS_COUNT_BY_CATEGORY_QUERY = `
  count(*[_type == "noticia" && publicada == true && categoria == $categoria])
`

// Get single news by slug
export const NEWS_BY_SLUG_QUERY = `
  *[_type == "noticia" && slug.current == $slug && publicada == true][0] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    contenido,
    archivoPdf {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      }
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get related news (same category, excluding current)
export const RELATED_NEWS_QUERY = `
  *[_type == "noticia" && publicada == true && categoria == $categoria && _id != $currentId] | order(fechaPublicacion desc) [0...4] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get latest news (for sidebar, footer, etc.)
export const LATEST_NEWS_QUERY = `
  *[_type == "noticia" && publicada == true] | order(fechaPublicacion desc) [0...$limit] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get featured news
export const FEATURED_NEWS_QUERY = `
  *[_type == "noticia" && publicada == true && destacada == true] | order(fechaPublicacion desc) [0...$limit] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Search news by title or content
export const SEARCH_NEWS_QUERY = `
  *[_type == "noticia" && publicada == true && (titulo match "*" + $searchTerm + "*" || pt::text(contenido) match "*" + $searchTerm + "*")] | order(fechaPublicacion desc) [$start...$end] {
    _id,
    titulo,
    slug,
    resumen,
    imagen {
      asset-> {
        _id,
        url
      },
      alt
    },
    categoria,
    fechaPublicacion,
    autor
  }
`

// Get count of search results
export const SEARCH_NEWS_COUNT_QUERY = `
  count(*[_type == "noticia" && publicada == true && (titulo match "*" + $searchTerm + "*" || pt::text(contenido) match "*" + $searchTerm + "*")])
`

// Get all categories with news count
export const CATEGORIES_WITH_COUNT_QUERY = `
  {
    "categorias": [
      {
        "value": "institucional",
        "label": "Institucional",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "institucional"])
      },
      {
        "value": "eventos",
        "label": "Eventos",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "eventos"])
      },
      {
        "value": "comunicados",
        "label": "Comunicados",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "comunicados"])
      },
      {
        "value": "actividades",
        "label": "Actividades",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "actividades"])
      },
      {
        "value": "economia",
        "label": "Economía",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "economia"])
      },
      {
        "value": "politica",
        "label": "Política",
        "count": count(*[_type == "noticia" && publicada == true && categoria == "politica"])
      }
    ]
  }
`

// Get all slugs for static generation
export const ALL_NEWS_SLUGS_QUERY = `
  *[_type == "noticia" && publicada == true && defined(slug.current)].slug.current
`

// BENEFICIOS QUERIES

// Get all active benefits
export const BENEFICIOS_QUERY = `
  *[_type == "beneficio" && activo == true] | order(destacado desc, orden asc, empresa asc) {
    _id,
    empresa,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    },
    rubro,
    beneficio,
    descripcion,
    porcentaje,
    sitioWeb,
    facebook,
    instagram,
    whatsapp,
    destacado,
    fechaCreacion
  }
`

// Get benefits by rubro
// Get benefits by rubro
export const BENEFICIOS_BY_RUBRO_QUERY = `
  *[_type == "beneficio" && activo == true && rubro == $rubro] | order(destacado desc, orden asc, empresa asc) {
    _id,
    empresa,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    },
    rubro,
    beneficio,
    descripcion,
    porcentaje,
    sitioWeb,
    facebook,
    instagram,
    whatsapp,
    destacado,
    fechaCreacion
  }
`

// Get featured benefits
export const BENEFICIOS_DESTACADOS_QUERY = `
  *[_type == "beneficio" && activo == true && destacado == true] | order(orden asc, empresa asc) [0...$limit] {
    _id,
    empresa,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    },
    rubro,
    beneficio,
    descripcion,
    porcentaje,
    sitioWeb
  }
`

// Get all rubros with benefit count
export const RUBROS_WITH_COUNT_QUERY = `
  {
    "rubros": [
      {
        "value": "automotriz",
        "label": "Automotriz",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "automotriz"])
      },
      {
        "value": "educacion",
        "label": "Educación",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "educacion"])
      },
      {
        "value": "electrodomesticos",
        "label": "Electrodomésticos",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "electrodomesticos"])
      },
      {
        "value": "entretenimiento",
        "label": "Entretenimiento",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "entretenimiento"])
      },
      {
        "value": "financiero",
        "label": "Financiero",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "financiero"])
      },
      {
        "value": "gastronomia",
        "label": "Gastronomía",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "gastronomia"])
      },
      {
        "value": "hogar",
        "label": "Hogar",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "hogar"])
      },
      {
        "value": "hoteleria",
        "label": "Hotelería",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "hoteleria"])
      },
      {
        "value": "servicios",
        "label": "Servicios",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "servicios"])
      },
      {
        "value": "tecnologia",
        "label": "Tecnología",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "tecnologia"])
      },
      {
        "value": "turismo",
        "label": "Turismo",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "turismo"])
      },
      {
        "value": "otros",
        "label": "Otros",
        "count": count(*[_type == "beneficio" && activo == true && rubro == "otros"])
      }
    ]
  }
`
