import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import { schemas } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Cámara de Comercio Santa Rosa',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('Configuración de Página Principal')
              .child(
                S.documentTypeList('homeSelections')
                  .title('Configuraciones de Home')
                  .defaultOrdering([
                    { field: 'activa', direction: 'desc' },
                    { field: 'fechaCreacion', direction: 'desc' }
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Noticias')
              .child(
                S.documentTypeList('noticia')
                  .title('Todas las Noticias')
                  .defaultOrdering([
                    { field: 'fechaPublicacion', direction: 'desc' }
                  ])
                  .filter('_type == "noticia"')
              ),
            S.listItem()
              .title('Noticias Destacadas')
              .child(
                S.documentTypeList('noticia')
                  .title('Noticias Destacadas')
                  .defaultOrdering([
                    { field: 'fechaPublicacion', direction: 'desc' }
                  ])
                  .filter('_type == "noticia" && destacada == true')
              ),
            S.listItem()
              .title('Borradores')
              .child(
                S.documentTypeList('noticia')
                  .title('Noticias en Borrador')
                  .defaultOrdering([
                    { field: 'fechaPublicacion', direction: 'desc' }
                  ])
                  .filter('_type == "noticia" && publicada == false')
              )
          ])
    }),
    visionTool()
  ],
  schema: {
    types: schemas
  }
})
