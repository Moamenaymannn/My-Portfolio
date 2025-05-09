import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://opeeprqecnchqdoscsup.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZWVwcnFlY25jaHFkb3Njc3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MzMxNDUsImV4cCI6MjA2MjMwOTE0NX0.yWBF4iWZ2x-PMuIPZ1g1aGswyi9azVo5xQrr_yC0pZo'

export const supabase = createClient(supabaseUrl, supabaseKey)
