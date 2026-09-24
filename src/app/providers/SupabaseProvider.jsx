import { createContext, useContext } from "react";
import { supabase } from "@lib/supabase/client.js";

const SupabaseContext = createContext(supabase);

/** Exposes the shared Supabase client via context. */
export function SupabaseProvider({ children }) {
  return (
    <SupabaseContext.Provider value={supabase}>{children}</SupabaseContext.Provider>
  );
}

/** Hook: const supabase = useSupabase(); */
export function useSupabase() {
  return useContext(SupabaseContext);
}
