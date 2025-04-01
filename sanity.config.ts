"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig, isDev } from "sanity"
import { structureTool } from "sanity/structure"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schema } from "./src/sanity/schemaTypes"
import { structure } from "./src/sanity/structure"
import { HomeIcon } from "@sanity/icons"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: isDev ? `dataset ${dataset}` : "Template Project",
  icon: HomeIcon,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: isDev
    ? [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion })
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
      ]
    : [structureTool({ structure })]
})
