<template>
    <section class="deck-io">
        <h3>Import/Export Deck</h3>
        <section class="deck-io-row">
            <input type="text" :value="currDeck" readonly>
            <input type="button" value="Export" @click="getCurrDeck">
        </section>
        <section class="deck-io-row">
            <input type="text" v-model="newDeck">
            <input type="button" value="Import" @click="setNewDeck">
        </section>
    </section>
</template>

<script>
import useDeckStore from "@/stores/deck"
import { computed, ref } from "vue"

export default {
    name: "DeckIO",
    setup() {
        const deckStore = useDeckStore()
        const currDeck = computed({
            get() {
                return deckStore.deckString
            },
            set(deckString) {
                deckStore.load(deckString)
                window.localStorage.deck = deckString
            }
        })
        const newDeck = ref()

        const getCurrDeck = () => {
            navigator.clipboard.writeText(currDeck.value)
        }

        const setNewDeck = () => {
            currDeck.value = newDeck.value
            newDeck.value = ""
        }

        return { currDeck, getCurrDeck, newDeck, setNewDeck }
    }
}
</script>

<style scoped>
    .deck-io > * {
        margin-bottom: 5px;
    }

    .deck-io:last-child {
        margin-bottom: 0;
    }

    .deck-io-row {
        display: flex;
    }

    .deck-io-row > input[type="text"] {
        flex: 1;
        padding-left: 15px;
        border: none;
        border-radius: var(--radius) 0 0 var(--radius);
        background-color: var(--p-light-light-purple);
    }

    .deck-io-row > input[type="button"] {
        width: 6em;
        padding: 1em;
        border: none;
        border-radius: 0 var(--radius) var(--radius) 0;
        background-color: var(--p-purple);
        color: white;
        cursor: pointer;
    }

    .deck-io-row > input[type="button"]:hover {
        background-color: var(--p-dark-purple);
    }
</style>