import { fail } from '@sveltejs/kit'
import { supabase } from '$lib/supabaseClient.js'

export const actions = {
    default: async ({ request }) => {
        // get data
        const data = await request.formData()
        const email = data.get("email")
        const password = data.get("password")

        // validate data
        const emailRexEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (typeof email !== "string" || !emailRexEx.test(email))
            return fail(400, { message: "Please write a correct email adress." })
            
        if (typeof password !== 'string' || password.length < 8)
            return fail(400, { message: "Password's length should be 8 or higher." })

        // register
        supabase.auth.signUp({ email, password })

        return { success: true }
    }
}