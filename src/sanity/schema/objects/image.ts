import { defineField } from "sanity"

export default defineField({
  title: "Image",
  name: "baseImage",
  type: "image",
  fields: [
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "string"
    })
  ]
})
