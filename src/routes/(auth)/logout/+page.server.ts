import { supabase } from "$lib/supabaseClient"
import { redirect } from "@sveltejs/kit"

export const load = () => {
    supabase.auth.signOut()
    throw redirect(308, '/auth')
}
