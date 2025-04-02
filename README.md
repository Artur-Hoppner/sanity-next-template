This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Add env variavles to .env in root. .env.example contains list of env variables
2. First, pnpm run the development server:
```bash
pnpm dev
```

### Generate sanity types


```bash
pnpm run typegen
```
Using this command will generate all sanity types in `/src/types/sanityTypes.ts`.
This includes types directly from sanity schemas and from all groq queries created in folder `/src/sanity/lib/queries/`. The query variabliable will have the same name but with suffix Result. Example **POST_QUERY** will become **POST_QUERYResult**
`sanity-typegen.json` controls where extracted schemas and types is generated.
