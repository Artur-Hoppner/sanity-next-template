import { POSTS_QUERY } from "@/sanity/lib/queries/queries"
import Link from "next/link"
import { POSTS_QUERYResult } from "@/types/sanityTypes"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { notFound } from "next/navigation"

export default async function Home() {
  const posts: POSTS_QUERYResult = await sanityFetch({
    query: POSTS_QUERY,
    revalidateAs: "generalPages"
  })

  if (!posts) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Post index</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  )
}
