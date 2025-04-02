"use client"

import { useDraftModeEnvironment } from "next-sanity/hooks"

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment()
  console.log("env", environment)
  if (environment !== "live" && environment !== "unknown") {
    return null
  }

  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/api/draft-mode/disable"
      className="fixed right-4 bottom-4 bg-gray-50 px-4 py-2"
    >
      Disable Draft Mode
    </a>
  )
}
