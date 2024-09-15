<template>
    <section class="deck">
        <Cards :cards="deckStore.deck" class="deck-cards" />
        <Aside />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import Aside from "@/components/Aside"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "Deck",
        components: { Cards, Aside },
        setup() {
            const deckStore = useDeckStore()

            return { deckStore }
        }
    }
</script>

<style scoped>
    .deck {
        display: flex;
        column-gap: var(--gap);
        row-gap: var(--gap);
    }

    @media screen and (max-width: 768px) {
        .deck {
            flex-direction: column;
        }
    }
</style>