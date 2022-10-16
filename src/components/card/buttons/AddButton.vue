<template>
    <Button @click="deckStore.addCard(card)" icon="add_circle_outline" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "AddButton",
        props: [ "card" ],
        components: { Button },
        setup() {
            const deckStore = useDeckStore()

            return { deckStore }
        }
    }
</script>