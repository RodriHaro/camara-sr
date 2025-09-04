import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'beneficio',
  title: 'Beneficios',
  type: 'document',
  fields: [
    defineField({
      name: 'empresa',
      title: 'Nombre de la Empresa',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Nombre de la empresa que ofrece el beneficio'
    }),
    defineField({
      name: 'logo',
      title: 'Logo de la Empresa',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
      description: 'Logo o imagen representativa de la empresa'
    }),
    defineField({
      name: 'rubro',
      title: 'Rubro',
      type: 'string',
      options: {
        list: [
          { title: 'Automotriz', value: 'automotriz' },
          { title: 'Educación', value: 'educacion' },
          { title: 'Electrodomésticos', value: 'electrodomesticos' },
          { title: 'Entretenimiento', value: 'entretenimiento' },
          { title: 'Financiero', value: 'financiero' },
          { title: 'Gastronomía', value: 'gastronomia' },
          { title: 'Hogar', value: 'hogar' },
          { title: 'Hotelería', value: 'hoteleria' },
          { title: 'Servicios', value: 'servicios' },
          { title: 'Tecnología', value: 'tecnologia' },
          { title: 'Turismo', value: 'turismo' },
          { title: 'Otros', value: 'otros' }
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required(),
      description: 'Categoría o rubro de la empresa'
    }),
    defineField({
      name: 'beneficio',
      title: 'Beneficio Ofrecido',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Nombre del beneficio (ej: "Descuento en comidas", "Servicio gratuito")'
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción del Beneficio',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(10).max(200),
      description: 'Descripción breve del beneficio ofrecido (máximo 200 caracteres)'
    }),
    defineField({
      name: 'porcentaje',
      title: 'Porcentaje de Descuento',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
      description: 'Porcentaje de descuento (0-100). Opcional si no aplica'
    }),
    defineField({
      name: 'sitioWeb',
      title: 'Sitio Web',
      type: 'url',
      description: 'URL del sitio web de la empresa'
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'URL de la página de Facebook'
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'URL de la cuenta de Instagram'
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Número de WhatsApp (ej: +54261234567)'
    }),
    defineField({
      name: 'horarios',
      title: 'Horarios de Atención',
      type: 'text',
      rows: 2,
      description: 'Horarios de atención al público'
    }),
    defineField({
      name: 'destacado',
      title: 'Beneficio Destacado',
      type: 'boolean',
      initialValue: false,
      description: 'Marcar si es un beneficio destacado para mostrarlo primero'
    }),
    defineField({
      name: 'activo',
      title: 'Activo',
      type: 'boolean',
      initialValue: true,
      description: 'Desmarcar para ocultar el beneficio sin eliminarlo'
    }),
    defineField({
      name: 'fechaCreacion',
      title: 'Fecha de Creación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'Fecha de creación del beneficio'
    }),
    defineField({
      name: 'orden',
      title: 'Orden de Visualización',
      type: 'number',
      description: 'Número para ordenar los beneficios (menor número = primero)'
    })
  ],
  
  preview: {
    select: {
      title: 'empresa',
      subtitle: 'rubro',
      media: 'logo',
      destacado: 'destacado',
      activo: 'activo'
    },
    prepare(selection) {
      const { title, subtitle, media, destacado, activo } = selection
      return {
        title: `${title}${destacado ? ' ⭐' : ''}${!activo ? ' (Inactivo)' : ''}`,
        subtitle: subtitle || 'Sin rubro definido',
        media
      }
    }
  },

  orderings: [
    {
      title: 'Orden personalizado',
      name: 'orden',
      by: [{ field: 'orden', direction: 'asc' }]
    },
    {
      title: 'Nombre de empresa',
      name: 'empresa',
      by: [{ field: 'empresa', direction: 'asc' }]
    },
    {
      title: 'Fecha de creación',
      name: 'fechaCreacion',
      by: [{ field: 'fechaCreacion', direction: 'desc' }]
    }
  ]
})
