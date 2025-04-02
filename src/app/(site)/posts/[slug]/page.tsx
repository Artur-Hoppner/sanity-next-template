import { POST_QUERY } from "@/sanity/lib/queries/queries"
import { notFound } from "next/navigation"
import Link from "next/link"
import { POST_QUERYResult } from "@/types/sanityTypes"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

export async function generateStaticParams() {
  // TODO: LOCALIZATION
  const posts = await sanityFetch<{ slug: { current: string } }[]>({
    // TODO: move groq to queries
    query: `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
    revalidateAs: "generalPages",
    skipDraftMode: true
  })

  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // TODO: LOCALIZATION
  const post: POST_QUERYResult = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    revalidateAs: "generalPages"
  })

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
