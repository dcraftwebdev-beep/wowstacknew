import { supabase } from "@lib/supabase/client.js";

/**
 * Data-access layer for contact submissions.
 * Components never touch the Supabase client directly — they call these functions,
 * so the storage detail stays swappable and testable.
 *
 * @param {{name: string, email: string, message: string}} payload
 * @returns {Promise<{ok: boolean, error?: string}>}
 */
export async function submitContact(payload) {
  const { error } = await supabase.from("contact_messages").insert({
    name: payload.name,
    email: payload.email,
    message: payload.message,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
