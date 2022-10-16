<template>
    <section>
        <DeckButton />
        <DeleteButton />
    </section>
</template>

<script>
    import DeckButton from "@/components/nav/buttons/DeckButton"
    import DeleteButton from "@/components/nav/buttons/DeleteButton"

    export default {
        name: "DeckControls",
        components: { DeckButton, DeleteButton }
    }
</script>

<style scoped>
    section {
        display: flex;
    }
</style>