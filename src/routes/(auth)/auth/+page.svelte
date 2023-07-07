<script lang="ts">
    import Form from "$lib/components/Form.svelte"
    import { writable } from "svelte/store"

    const inputs = [
        { name: "email", type: "email" },
        { name: "password", type: "password" },
    ]

    let tab = writable(1)
    const changeTab = (to: number) => tab.set(to)
</script>

{$tab}
{#if $tab === 1}
    <div class="container w-[max(25vw,370px)]">
        <h1 class="text-3xl mb-4">Is this your first time here?</h1>
        <div class="grid grid-cols-2 gap-x-2">
            <button class="emerald" on:click={() => changeTab(2)}>Yes</button>
            <button>No</button>
        </div>
    </div>
{:else if $tab === 2}
    <Form title="Enter your school" {inputs} action="">
        <button type="submit" class="font-bold">Finished!</button>
    </Form>
{/if}
