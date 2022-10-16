<template>
    <section class="deck">
        <Cards v-if="cards.length" :cards="cards" class="deck-cards" />
        <Aside />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import Aside from "@/components/Aside"

    export default {
        name: "Deck",
        components: { Cards, Aside },
        props: [ "cards" ]
    }
</script>

<style scoped>
    .deck {
        margin: 0 var(--gap) var(--gap);
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