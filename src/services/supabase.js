import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lbuvslbljbyjhxwhgskf.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxidXZzbGJsamJ5amh4d2hnc2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1MTk4MjMsImV4cCI6MjAwMzA5NTgyM30.bsvdBPqKF7UqwdqsFuOUKJNTd5pcscc_Ww22BhoIw_o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
