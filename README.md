This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, pnpm run the development server:

```bash
pnpm dev

```

### Generate typegen

sanity-typegen.json controles where extracted schemas and typegen is generated.
npx sanity@latest schema extract --path=./src/types/extract.json
npx sanity@latest typegen generate
