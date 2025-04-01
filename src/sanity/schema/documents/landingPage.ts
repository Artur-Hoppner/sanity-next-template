import { HomeIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"
import { image } from "../objects/common/index"

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    image({ required: true }),
    defineField({
      name: "image",
      type: "baseImage"
    }),
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
