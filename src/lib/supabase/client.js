import { createClient } from "@supabase/supabase-js";

/**
 * Shared browser Supabase client (anon key — safe for the frontend).
 * Never import a service_role key here; privileged work runs in Edge Functions.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Warn (don't crash) so the app still renders before Supabase is wired up.
  // Requests will fail clearly once a feature actually calls the client.
  console.warn(
    "[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY — using placeholder client. Copy .env.example to .env.local to enable data features."
  );
}

// Placeholder values keep createClient from throwing when env is unset.
export const supabase = createClient(
  supabaseUrl || "http://localhost:54321",
  supabaseAnonKey || "public-anon-placeholder-key",
  {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
