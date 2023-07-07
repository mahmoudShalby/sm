<script lang="ts">
    import Form from "$lib/components/Form.svelte"
    import { fade, scale } from "svelte/transition"

    const inputs = [
        { name: "email", type: "email" },
        { name: "password", type: "password" },
    ]

    let tab = 'check first time'
</script>

{#if tab === 'check first time'}
    <div class="container w-[max(25vw,370px)]">
        <h1 class="text-3xl mb-4">Is this your first time here?</h1>
        <div class="grid grid-cols-2 gap-x-2">
            <button class="emerald" on:click={() => tab = 'auth'}>Yes</button>
            <button>No</button>
        </div>
    </div>
{:else if tab === 'auth'}
    <Form title="Enter your school" {inputs} action="">
        <button type="submit" class="font-bold">Finished!</button>
    </Form>
{/if}
