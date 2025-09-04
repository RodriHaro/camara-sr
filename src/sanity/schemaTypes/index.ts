import { type SchemaTypeDefinition } from 'sanity'
import noticia from '../schemas/noticia'
import homeSelections from '../schemas/homeSelections'
import beneficio from '../schemas/beneficio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [noticia, homeSelections, beneficio],
}
