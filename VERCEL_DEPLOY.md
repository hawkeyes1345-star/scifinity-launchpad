# Deploying to Vercel

This project is a **TanStack Start** app. Lovable's preview/publish builds it
for **Cloudflare Workers**, but it can also be deployed to **Vercel** using
TanStack Start's built-in Vercel preset.

The build switches targets based on the `DEPLOY_TARGET` env var:

- unset (default) → Cloudflare Workers (Lovable preview & publish)
- `vercel` → Vercel serverless output (`.vercel/output/`)

## One-time setup

1. **Push this project to GitHub** via Lovable's `+` menu → GitHub → Connect project.
2. In Vercel, click **Add New… → Project** and import the GitHub repo.
3. Vercel will read `vercel.json` automatically. **Do not** override the build
   command or output directory in the Vercel UI — `vercel.json` already sets:
   - Build command: `DEPLOY_TARGET=vercel npm run build`
   - Framework preset: none (TanStack Start emits Vercel's build output directly)

## Environment variables (required)

Add these in **Vercel → Project Settings → Environment Variables** for
Production, Preview, and Development:

| Name | Value | Notes |
|---|---|---|
| `VITE_SUPABASE_URL` | from your `.env` | exposed to client (safe) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | from your `.env` | exposed to client (safe) |
| `VITE_SUPABASE_PROJECT_ID` | from your `.env` | exposed to client (safe) |
| `SUPABASE_URL` | same as `VITE_SUPABASE_URL` | server-side |
| `SUPABASE_PUBLISHABLE_KEY` | same as the VITE_ one | server-side |
| `SUPABASE_SERVICE_ROLE_KEY` | from Lovable Cloud backend settings | **secret** — server only |

Lovable Cloud's database stays the same — Vercel just becomes a second
frontend that talks to the same backend.

## Deploy

After importing the repo and adding env vars, click **Deploy**. Future pushes
to the connected branch auto-deploy.

## Caveats

- Lovable keeps writing changes against the Cloudflare config. That's fine —
  the Vercel build is opt-in via `DEPLOY_TARGET=vercel` and doesn't interfere.
- Don't delete `wrangler.jsonc` or `src/server.ts` — they're used by the
  Cloudflare build path that powers Lovable preview and the `.lovable.app`
  published URL.
- Auth redirect URLs: if you use a custom Vercel domain, add it to Supabase's
  allowed redirect URLs (Lovable Cloud → Auth settings).
