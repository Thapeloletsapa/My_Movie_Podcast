import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yxuzhzvrinkytuoibjtb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dXpoenZyaW5reXR1b2lianRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4ODM5NjgsImV4cCI6MjAzNDQ1OTk2OH0.vlphGVn8HYbhdk4i8uVCiq_MwWDNA7Vv4QcLsONiAi8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
