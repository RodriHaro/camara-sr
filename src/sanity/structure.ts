import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
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
        ),
      S.divider(),
      S.listItem()
        .title('Beneficios')
        .child(
          S.documentTypeList('beneficio')
            .title('Todos los Beneficios')
            .defaultOrdering([
              { field: 'empresa', direction: 'asc' }
            ])
            .filter('_type == "beneficio"')
        )
    ])
