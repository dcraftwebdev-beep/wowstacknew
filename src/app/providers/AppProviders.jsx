import { SupabaseProvider } from "./SupabaseProvider.jsx";

/**
 * Compose all app-wide context providers here so main.jsx stays flat.
 * Add ThemeProvider, AuthProvider, QueryClientProvider, etc. as they arrive.
 */
export default function AppProviders({ children }) {
  return <SupabaseProvider>{children}</SupabaseProvider>;
}
