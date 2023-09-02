import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ynelnrwkkzountvgevde.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluZWxucndra3pvdW50dmdldmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5NjA0MDAsImV4cCI6MjAwODUzNjQwMH0.9F-p90AfChdO4qMGETB3KKcPHXxLktLeFo9HEs4rw4Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
