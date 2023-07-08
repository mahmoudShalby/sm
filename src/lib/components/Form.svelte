<script lang="ts">
	import { fade } from 'svelte/transition'
	import { quadOut } from 'svelte/easing'

	export let title: string, inputs: { name: string; type?: string }[], action: string
</script>

<form method="post" action={action ?? ''} class="container w-[max(25vw,256px)]">
	<h1 class="text-3xl">{title}</h1>
	{#each inputs as { name, type }, key}
		<div class="flex-y">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="text-start mb-1">{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
			<input
				type={type ?? 'text'}
				{name}
				placeholder={`${name[0].toUpperCase()}${name.slice(1)}`}
			/>
		</div>
	{/each}
	<slot />
</form>
