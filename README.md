Personal portfolio built with Next.js (App Router), TypeScript (strict), and Tailwind CSS.

Core features:

- URL-based locales: `/en` and `/id`
- Server Components by default
- Projects content fetched from an external JSON source (no rebuild/redeploy for updates)

## Getting Started

First, install dependencies and run the dev server.

```bash
corepack pnpm install
corepack pnpm dev
```

Note (Windows): if `npm` is blocked by PowerShell execution policy, use `corepack pnpm` as shown above.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Routes are locale-prefixed under `src/app/[locale]/*`.

- Home: `/en`, `/id`
- Projects: `/en/projects`, `/id/projects`

## Projects Data (External)

Set an external JSON endpoint (e.g. GitHub Raw, a small REST endpoint, or a headless CMS) via env var:

- `PROJECTS_JSON_URL` — must return `{ "projects": Project[] }`

Create `.env.local`:

```bash
PROJECTS_JSON_URL="https://example.com/projects.json"
```

### Quick Start (GitHub Raw)

This repo includes a sample payload at `content/projects.json` that you can host as a raw file.

1) Commit and push this repo to GitHub.

2) Copy the Raw URL for `content/projects.json`:

- `https://raw.githubusercontent.com/<user>/<repo>/<branch>/content/projects.json`

3) Set the env var:

- Local: put it in `.env.local`
- Vercel: Project → Settings → Environment Variables → add `PROJECTS_JSON_URL`

After you update the JSON in GitHub, the site updates automatically (server fetch uses revalidation).

## Private Debug/Admin (Optional)

This project includes a private debug UI to edit projects content without redeploying:

- UI: `/debug`
- API: `/api/admin/projects` (GET/PUT)

Security model:

- Protected by Basic Auth at the edge proxy (set `DEBUG_BASIC_AUTH="username:password"`).
- The API writes back to GitHub using the Contents API (set `GITHUB_*` env vars).

Important: set these env vars in Vercel (Project → Settings → Environment Variables) for production.

The server fetch uses `revalidate: 300` to support near real-time updates without redeploying.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
