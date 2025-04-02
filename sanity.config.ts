"use client"
import { visionTool } from "@sanity/vision"
import { defineConfig, isDev } from "sanity"
import { structureTool } from "sanity/structure"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schema } from "./src/sanity/schema"
import { structure } from "./src/sanity/structure"
import { HomeIcon } from "@sanity/icons"
import { presentationTool } from "sanity/presentation"
import { resolve } from "@/sanity/lib/presentation/resolve"

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: isDev ? `dataset ${dataset}` : "Template Project",
  icon: HomeIcon,
  schema,
  plugins: isDev
    ? [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion }),
        presentationTool({
          resolve,
          previewUrl: {
            previewMode: {
              enable: "/api/draft-mode/enable",
              disable: "/api/draft-mode/disable"
            }
          }
        })
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
      ]
    : [
        structureTool({ structure }),
        presentationTool({
          resolve,
          previewUrl: {
            previewMode: {
              enable: "/api/draft-mode/enable",
              disable: "/api/draft-mode/disable"
            }
          }
        })
      ]
})
