<template>
    <section class="deck-io">
        <section class="deck-io-row">
            <input type="text" v-model="newDeck">
            <input type="button" value="Set" @click="setNewDeck">
        </section>
        <section class="deck-io-row">
            <input type="text" v-model="currDeck" readonly>
            <input type="button" value="Get" @click="getCurrDeck">
        </section>
    </section>
</template>

<script>
import useDeckStore from "@/stores/deck"
import { ref } from "vue"

export default {
    name: "DeckIO",
    setup() {
        const deckStore = useDeckStore()

        const newDeck = ref()
        const currDeck = ref(window.localStorage.deck)

        const setNewDeck = () => {
            window.localStorage.deck = newDeck.value
            currDeck.value = newDeck.value
            newDeck.value = ""
            deckStore.load(currDeck.value)
        }
        const getCurrDeck = () => navigator.clipboard.writeText(window.localStorage.deck)

        return { newDeck, setNewDeck, currDeck, getCurrDeck }
    }
}
</script>