import { defineField } from "sanity"

export const image = ({ required = false }: { required?: boolean }) =>
  defineField({
    title: "Image",
    name: "baseImage",
    type: "image",
    fields: [
      defineField({
        name: "alt",
        title: "Alternative Text",
        type: "string",
        validation: (Rule) =>
          Rule.custom((altText, context) => {
            const parent = context?.parent as { asset?: unknown }
            const hasImage = !!parent?.asset
            const missingAlt = !altText?.trim()

            if (hasImage && missingAlt) {
              return "Alternative text is required when image is provided"
            }

            return true
          })
      })
    ],
    validation: required
      ? (Rule) => Rule.required().error("Image is required")
      : undefined
  })
