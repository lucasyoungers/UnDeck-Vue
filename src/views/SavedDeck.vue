<template>
    <section class="deck">
        <Cards :cards="cards" class="deck-cards" />
        <Aside />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import Aside from "@/components/Aside"
    import getSavedDeck from "@/composables/getSavedDeck"
    import { useRoute } from "vue-router"

    export default {
        name: "SavedDeck",
        components: { Cards, Aside },
        setup() {
            const route = useRoute()

            const { cards, loadSavedDeck } = getSavedDeck(route.params?.id)
            loadSavedDeck()

            return { cards }
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