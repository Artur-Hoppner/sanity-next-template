import { defineQuery } from "next-sanity"

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id,
  title,
  slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  body,
  mainImage
}`)

export const LANDINGPAGE_QUERY =
  defineQuery(`*[_type == "landingPage" && _id == $lang][0]{
  _id,
  title,
  slug,
  "posts": *[_type == "post" && defined(slug.current)][0...12]{
    _id,
    title,
    slug
  }
}`)
