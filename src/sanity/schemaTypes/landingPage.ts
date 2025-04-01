import { HomeIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "description",
      type: "text"
    })
  ]
})
