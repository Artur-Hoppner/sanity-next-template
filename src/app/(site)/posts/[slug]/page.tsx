import { POST_QUERY } from "@/sanity/lib/queries/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { notFound } from "next/navigation"
import Link from "next/link"
import { POST_QUERYResult } from "@/types/sanityTypes"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const response = await sanityFetch({
    query: POST_QUERY,
    params: await params
  })

  const post: POST_QUERYResult = response?.data

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  )
}
