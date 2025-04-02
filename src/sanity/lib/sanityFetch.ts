import "server-only"
import { draftMode } from "next/headers"
import { type QueryParams } from "next-sanity"
import { sanityCacheSettings } from "./sanityCacheSettings"
import { client } from "./client"
import { token } from "./token"

const isDev = process?.env.NODE_ENV === "development"

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidateAs,
  skipDraftMode
}: {
  query: string
  revalidateAs: keyof typeof sanityCacheSettings
  params?: QueryParams
  skipDraftMode?: boolean
}) {
  const isDraftMode = skipDraftMode ? false : draftMode()
  const REVALIDATE_SKIP_CACHE = 1
  const REVALIDATE_CACHE_AS_SETTING = sanityCacheSettings[revalidateAs]

  return client.fetch<QueryResponse>(query, params, {
    perspective: isDraftMode ? "drafts" : "published",
    token,
    useCdn: !isDraftMode,
    next: {
      revalidate:
        isDev || isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_AS_SETTING
    }
  })
}
