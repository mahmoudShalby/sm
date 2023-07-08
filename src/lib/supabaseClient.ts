import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://ikiufosunuoyrdhnodeb.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlraXVmb3N1bnVveXJkaG5vZGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MzUyNDcsImV4cCI6MjAwNDMxMTI0N30.9hDvAR7XHvu4f8_Co4xoj3zfTufH6YAVsSv0ApC2ONc'
)
