import "server-only"
import { draftMode } from "next/headers"
import { type QueryOptions, type QueryParams } from "next-sanity"
import { sanityCacheSettings } from "./sanityCacheSettings"
import { client } from "./client"
import { token } from "./token"

const isDev = process?.env.NODE_ENV === "development"

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidateAs
}: {
  query: string
  revalidateAs: keyof typeof sanityCacheSettings
  params?: QueryParams
  skipDraftMode?: boolean
}) {
  const { isEnabled: isDraftMode } = await draftMode()
  const REVALIDATE_SKIP_CACHE = 1
  const REVALIDATE_CACHE_AS_SETTING = sanityCacheSettings[revalidateAs]

  return client.fetch<QueryResponse>(query, params, {
    perspective: "published",
    token: token,
    ...(isDraftMode &&
      ({
        token: token,
        perspective: "previewDrafts"
      } satisfies QueryOptions)),
    next: {
      revalidate:
        isDev || isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_AS_SETTING
    }
  })
}
