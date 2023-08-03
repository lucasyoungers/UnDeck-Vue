<template>
    <Button @click="deckStore.remove(card.id)" icon="remove_circle_outline" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "RemoveButton",
        components: { Button },
        props: [ "card" ],
        setup() {
            const deckStore = useDeckStore()

            return { deckStore }
        }
    }
</script>