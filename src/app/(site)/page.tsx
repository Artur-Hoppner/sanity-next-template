import { client } from "@/sanity/lib/client"
import { LANDINGPAGE_QUERY } from "@/sanity/lib/queries/queries"
import Link from "next/link"
import { LANDINGPAGE_QUERYResult } from "@/types/sanityTypes"

export default async function Home() {
  const options = { next: { revalidate: 60 } }
  // const currentLang = "en"
  const currentLang = "landingPageSingleton" // temp control of lang
  const landingPageData: LANDINGPAGE_QUERYResult = await client.fetch(
    LANDINGPAGE_QUERY,
    { lang: currentLang },
    options
  )

  return (
    <main>
      {landingPageData?.title && (
        <h1 className="p-12 text-5xl">Page title: {landingPageData?.title}</h1>
      )}
      <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
        <h1 className="text-4xl font-bold">Home</h1>
        <hr />
        <Link href="/posts">Posts index &rarr;</Link>
      </section>
      <div className="container mx-auto grid grid-cols-1 gap-6 p-12">
        <h1 className="text-4xl font-bold">Post index</h1>
        <ul className="grid grid-cols-1 divide-y divide-blue-100">
          {landingPageData?.posts?.map((post) => (
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
      </div>
    </main>
  )
}
