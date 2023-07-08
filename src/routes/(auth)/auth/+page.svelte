<script lang="ts">
	import Form from '$lib/components/Form.svelte'
	import { quadIn, quadOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'

	const inputs = [
		{ name: 'email', type: 'email' },
		{ name: 'password', type: 'password' }
	]

	let tab = 'check first time'
	let auth: 'login' | 'register'
</script>

{#key tab}
	<div in:fade={{ duration: 100, easing: quadIn }}>
		<!-- TODO: set tabs in a separated component -->
		{#if tab === 'check first time'}
			<div class="container w-[max(25vw,370px)]">
				<h1 class="text-3xl mb-4">Is this your first time here?</h1>
				<div class="grid grid-cols-2 gap-x-2">
					<button
						class="emerald"
						on:click={() => {
							auth = 'login'
							tab = 'auth'
						}}>Yes</button
					>
					<button
						class="red"
						on:click={() => {
							auth = 'register'
							tab = 'auth'
						}}>No</button
					>
				</div>
			</div>
		{:else if tab === 'auth'}
			<Form title="Enter your school" {inputs} action={`?/${auth}`}>
				<button type="submit" class="font-bold">Finished!</button>
			</Form>
		{/if}
	</div>
{/key}
