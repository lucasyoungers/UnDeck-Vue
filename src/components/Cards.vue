<template>
    <main class="cards" v-if="cards?.length > 0">
        <Card v-for="card in cards" :key="card?.id" :card="card" />
    </main>
    <main class="no-cards" v-else-if="errorStore.cardsNotFound">
        <img src="no-cards.png" alt="no cards found">
        <span>No Cards Found!</span>
        <img src="no-cards.png" alt="no cards found">
    </main>
    <main class="no-deck" v-else-if="$route.name === 'Deck' && deckStore.count === 0">
        <span>No Cards in Deck!</span>
    </main>
    <main class="loading" v-else>
        <BreedingRhombusSpinner class="spinner" color="#3b165c" :size="300" />
    </main>
</template>

<script>
    import Card from "@/components/card/Card"
    import { BreedingRhombusSpinner } from "epic-spinners"
    import useErrorStore from "@/stores/error"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "Cards",
        components: { Card, BreedingRhombusSpinner },
        props: [ "cards" ],
        setup() {
            const errorStore = useErrorStore()
            const deckStore = useDeckStore()

            return { errorStore, deckStore }
        }
    }
</script>

<style scoped>
    main.cards {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: var(--gap);
    }

    main.loading, main.no-cards, main.no-deck {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main.loading > .spinner {
        margin-top: 100px;
    }

    main.no-cards > img {
        height: 30vh;
    }

    main.no-cards > span {
        font-size: 4em;
        padding: 1em;
        margin: 1em;
        border-radius: 0.25em;
        background-color: white;
    }

    main.no-deck > span {
        font-size: 3em;
        padding: 1em;
        margin: 1em;
        border-radius: 0.25em;
        background-color: white;
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
        main.cards {
            grid-template-columns: repeat(4, 1fr);
        }

        main.deck-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 768px) {
        main.cards {
            grid-template-columns: repeat(3, 1fr);
        }

        main.deck-cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 576px) {
        main.cards {
            grid-template-columns: repeat(2, 1fr);
        }

        main.deck-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>