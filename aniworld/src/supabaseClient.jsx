import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jmqkjvbdbcalwdwsuwcc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcWtqdmJkYmNhbHdkd3N1d2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MDM1NDcsImV4cCI6MjAzNDQ3OTU0N30.V6aDdxMu2cjfWmLC-r4NaXadOUYx1SxKyHM1DaM_v3I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
