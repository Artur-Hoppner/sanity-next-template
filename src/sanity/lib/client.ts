import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId } from "../env"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3002"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: { studioUrl: baseUrl, enabled: true }
})
