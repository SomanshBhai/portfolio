import { createClient } from "@supabase/supabase-js";

const rawSupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Always use only the Supabase project origin.
// This prevents paths like /rest/v1 from being used as the Auth base URL.
const supabaseUrl = new URL(rawSupabaseUrl).origin;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);