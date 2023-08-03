<template>
    <Button @click="deckStore.clear()" icon="delete" rounded="right" :disabled="!deckStore.count" />
</template>

<script>
    import Button from "@/components/nav/buttons/Button"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "DeleteButton",
        components: { Button },
        setup() {
            const deckStore = useDeckStore()

            return { deckStore }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>