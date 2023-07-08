import { fail } from '@sveltejs/kit'
import { supabase } from '$lib/supabaseClient.js'

const validateRequestFormData = (getFormData) => {
	// get data
	const data = await getFormData()
	const email = data.get('email')
	const password = data.get('password')

	// validate data
	const emailRexEx =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (typeof email !== 'string' || !emailRexEx.test(email))
		return fail(400, { message: 'Please write a correct email adress.' })

	if (typeof password !== 'string' || password.length < 8)
		return fail(400, { message: "Password's length should be 8 or higher." })
}

export const actions = {
  register: async ({ request }) => {
		// validate form data
		const isDataValid = validateRequestFormData(request.formData)
		if (isDataValid)
		return isDataValid

		// register
		supabase.auth.signUp({ email, password })

		return { success: true }
	},
	login: async ({ request }) => {
		// validate form data
		const isDataValid = validateRequestFormData(request.formData)
		if (isDataValid)
		return isDataValid

		// login
		supabase.auth.
		return { success: true }
	}
}
