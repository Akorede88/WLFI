import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxpmjvqqdzazuuwmyscb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cG1qdnFxZHphenV1d215c2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMTE3ODIsImV4cCI6MjA3Mzg4Nzc4Mn0.LliSxCYBTqqHK2ViDHaE16NjjD-Vp4-iraV88SfzQu0  ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);