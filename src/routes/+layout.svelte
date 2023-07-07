<script lang="ts">
    import '../app.css'
    import { fade } from 'svelte/transition'

    export let data
</script>

{#key data.url}
<div transition:fade class='h-screen grid place-items-center bg-gradient-to-tr from-sky-600 via-violet-500 to-emerald-600 text-white'>
    <slot />
</div>
{/key}
