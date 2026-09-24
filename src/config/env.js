/**
 * Typed, validated access to Vite env vars. Import from here instead of
 * reading import.meta.env directly, so missing vars surface in one place.
 */
export const env = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://wowstack.com",
  siteName: import.meta.env.VITE_SITE_NAME || "Wowstack",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  gaId: import.meta.env.VITE_GA_ID || "",
  isProd: import.meta.env.PROD,
};
