import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'noticia',
  title: 'Noticia',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(50).max(200)
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Institucional', value: 'institucional' },
          { title: 'Eventos', value: 'eventos' },
          { title: 'Comunicados', value: 'comunicados' },
          { title: 'Actividades', value: 'actividades' },
          { title: 'Economía', value: 'economia' },
          { title: 'Política', value: 'politica' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      initialValue: 'Cámara de Comercio de Santa Rosa'
    }),
    defineField({
      name: 'destacada',
      title: 'Noticia Destacada',
      type: 'boolean',
      initialValue: false,
      description: 'Las noticias destacadas pueden aparecer en el slider principal'
    }),
    defineField({
      name: 'publicada',
      title: 'Publicada',
      type: 'boolean',
      initialValue: false,
      description: 'Solo las noticias publicadas serán visibles en el sitio web'
    })
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagen',
      subtitle: 'categoria',
      publicada: 'publicada'
    },
    prepare(selection) {
      const { title, media, subtitle, publicada } = selection
      return {
        title: publicada ? title : `[BORRADOR] ${title}`,
        media,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'Sin categoría'
      }
    }
  },
  orderings: [
    {
      title: 'Fecha de publicación, más reciente',
      name: 'fechaPublicacionDesc',
      by: [
        { field: 'fechaPublicacion', direction: 'desc' }
      ]
    },
    {
      title: 'Título A-Z',
      name: 'tituloAsc',
      by: [
        { field: 'titulo', direction: 'asc' }
      ]
    }
  ]
})
