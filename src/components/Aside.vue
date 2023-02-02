<template>
    <aside>
        <h2>Deck Details</h2>
        <Chart />
        <DeckIO />
        <button @click="downloadDeck">
            <i class="material-icons">download</i>
            <span>Download Deck</span>
        </button>
    </aside>
</template>

<script>
    import Chart from "@/components/Chart"
    import DeckIO from "@/components/DeckIO"
    import useDeckStore from "@/stores/deck"
    import { openDeckPDF } from "@/lib/utils"

    export default {
        name: "Aside",
        components: { Chart, DeckIO },
        setup() {
            const deckStore = useDeckStore()

            const downloadDeck = () => openDeckPDF(window.localStorage.deck)

            return { deckStore, downloadDeck }
        }
    }
</script>

<style scoped>
    aside {
        background-color: white;
        padding: var(--gap);
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
        row-gap: var(--gap);
        position: sticky;
        top: var(--gap);
        height: min-content;
    }

    button {
        width: 100%;
        height: 2.5em;
        font-size: 18px;
        border: none;
        background-color: var(--p-purple);
        color: white;
        border-radius: var(--radius);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
</style>