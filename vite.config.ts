// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set DEPLOY_TARGET=vercel to build for Vercel. Default = Cloudflare Workers
// (used by Lovable preview / publish). See VERCEL_DEPLOY.md.
const isVercel = process.env.DEPLOY_TARGET === "vercel";

export default defineConfig({
  // On Vercel we use TanStack Start's built-in Vercel preset and skip the
  // Cloudflare plugin + our Worker-specific server entry wrapper.
  cloudflare: isVercel ? false : undefined,
  tanstackStart: isVercel
    ? { target: "vercel" }
    : { server: { entry: "server" } },
});
