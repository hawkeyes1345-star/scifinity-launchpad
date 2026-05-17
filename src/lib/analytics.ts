// Lightweight GA4 / dataLayer event helper.
// Safe to call before gtag loads — falls back to dataLayer push and no-ops on the server.

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  } catch {
    // ignore analytics failures
  }
}
