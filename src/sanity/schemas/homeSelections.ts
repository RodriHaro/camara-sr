import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeSelections',
  title: 'Selecciones de Página Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la Configuración',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Nombre descriptivo para esta configuración (ej: "Enero 2024", "Semana especial")'
    }),
    defineField({
      name: 'activa',
      title: 'Configuración Activa',
      type: 'boolean',
      initialValue: false,
      description: 'Solo una configuración puede estar activa a la vez'
    }),
    defineField({
      name: 'heroSlides',
      title: 'Slides del Hero (4 noticias)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'noticia' }],
          options: {
            filter: 'publicada == true && destacada == true'
          }
        }
      ],
      validation: Rule => Rule.required().length(4).unique(),
      description: 'Selecciona exactamente 4 noticias destacadas para el slider principal'
    }),
    defineField({
      name: 'fechaCreacion',
      title: 'Fecha de Creación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }),
    defineField({
      name: 'fechaActivacion',
      title: 'Fecha de Activación',
      type: 'datetime',
      readOnly: true,
      description: 'Se actualiza automáticamente cuando se activa la configuración'
    })
  ],
  preview: {
    select: {
      title: 'nombre',
      activa: 'activa',
      fechaCreacion: 'fechaCreacion'
    },
    prepare(selection) {
      const { title, activa, fechaCreacion } = selection
      const fecha = fechaCreacion ? new Date(fechaCreacion).toLocaleDateString('es-ES') : 'Sin fecha'
      return {
        title: activa ? `🔴 ${title} (ACTIVA)` : title,
        subtitle: `Creada: ${fecha}`
      }
    }
  },
  orderings: [
    {
      title: 'Configuración activa primero',
      name: 'activaFirst',
      by: [
        { field: 'activa', direction: 'desc' },
        { field: 'fechaCreacion', direction: 'desc' }
      ]
    },
    {
      title: 'Más recientes primero',
      name: 'fechaCreacionDesc',
      by: [
        { field: 'fechaCreacion', direction: 'desc' }
      ]
    }
  ]
})
