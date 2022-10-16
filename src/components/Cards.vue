<template>
    <main>
        <Card
            v-for="card in cards"
            :key="card?.id"
            :card="card"
        />
    </main>
</template>

<script>
    import Card from "@/components/card/Card"

    export default {
        name: "Cards",
        components: { Card },
        props: [ "cards" ]
    }
</script>

<style scoped>
    main {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: var(--gap);
    }

    main.deck-cards {
        grid-template-columns: repeat(4, 1fr);
        flex: 3;
    }

    @media screen and (max-width: 1200px) {
        main.deck-cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 992px) {
        main {
            grid-template-columns: repeat(4, 1fr);
        }

        main.deck-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 768px) {
        main {
            grid-template-columns: repeat(3, 1fr);
        }

        main.deck-cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 576px) {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>