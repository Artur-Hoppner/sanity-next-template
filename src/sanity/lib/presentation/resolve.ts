import { defineLocations, PresentationPluginOptions } from "sanity/presentation"

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    landingPage: defineLocations({
      select: {
        title: "title",
        slug: "slug.current"
      },
      resolve: (doc) => ({
        locations: doc?.slug ? [{ title: "Home", href: `${doc.slug}` }] : [],
        ...(doc?.slug
          ? {
              message: "View Presentation mode",
              tone: "positive"
            }
          : {
              message: "Warning: This document does not have a slug set",
              tone: "critical"
            })
      })
    })
  }
}
