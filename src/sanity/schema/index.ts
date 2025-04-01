import { type SchemaTypeDefinition } from "sanity"

import documents from "./documents/index"
import objects from "./objects/index"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects]
}
