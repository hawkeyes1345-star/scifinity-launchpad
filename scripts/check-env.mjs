#!/usr/bin/env node
/**
 * Preflight env-var check. Runs before `npm run build` so deploys
 * (especially Vercel) fail fast with a clear message when Supabase
 * keys are missing — instead of producing a broken bundle that crashes
 * at runtime with a cryptic "Missing Supabase environment variable" error.
 *
 * Skip with SKIP_ENV_CHECK=1 (useful for local one-off builds).
 */

if (process.env.SKIP_ENV_CHECK === "1") {
  console.log("[check-env] SKIP_ENV_CHECK=1 — skipping env validation.");
  process.exit(0);
}

// Client-side (bundled into the browser by Vite at build time).
const CLIENT_REQUIRED = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_PUBLISHABLE_KEY",
  "VITE_SUPABASE_PROJECT_ID",
];

// Server-side (read at runtime by server functions / SSR).
const SERVER_REQUIRED = [
  "SUPABASE_URL",
  "SUPABASE_PUBLISHABLE_KEY",
];

// Strongly recommended — only required if server code uses supabaseAdmin.
// We warn instead of failing so projects that don't use admin operations
// can still build.
const SERVER_RECOMMENDED = [
  "SUPABASE_SERVICE_ROLE_KEY",
];

const missing = [];
for (const name of [...CLIENT_REQUIRED, ...SERVER_REQUIRED]) {
  const v = process.env[name];
  if (!v || v.trim() === "") missing.push(name);
}

const missingRecommended = SERVER_RECOMMENDED.filter(
  (n) => !process.env[n] || process.env[n].trim() === "",
);

if (missing.length > 0) {
  console.error("");
  console.error("❌ Build aborted: required environment variables are missing.");
  console.error("");
  for (const name of missing) console.error(`   • ${name}`);
  console.error("");
  console.error("Fix:");
  console.error("  • Vercel: Project → Settings → Environment Variables");
  console.error("    (add for Production, Preview, and Development)");
  console.error("  • Local:  add to .env (Supabase values are auto-provided by Lovable Cloud)");
  console.error("");
  console.error("See VERCEL_DEPLOY.md for the full list.");
  console.error("");
  process.exit(1);
}

if (missingRecommended.length > 0) {
  console.warn("");
  console.warn("⚠️  Optional server env vars not set:");
  for (const name of missingRecommended) console.warn(`   • ${name}`);
  console.warn("   Admin-only server operations (supabaseAdmin) will fail at runtime.");
  console.warn("");
}

console.log("[check-env] ✅ All required Supabase env vars present.");
