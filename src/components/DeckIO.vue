<template>
    <button v-if="$route.name === 'Deck'" @click="saveDeck">Save Deck</button>
    <button v-if="$route.name === 'Saved Deck'" @click="forkDeck">Fork Deck</button>
</template>

<script>
import useDeckStore from "@/stores/deck"
import getSavedDeckString from "@/composables/getSavedDeckString"
import postDeck from "@/composables/postDeck"
import { useRoute, useRouter } from "vue-router"

export default {
    name: "DeckIO",
    setup() {
        const route = useRoute()
        const router = useRouter()

        const deckStore = useDeckStore()

        const saveDeck = async () => {
            const { id, loadId } = postDeck(deckStore.deckString)
            await loadId()
            router.push({ name: "Saved Deck", params: { id: id.value } })
        }

        const forkDeck = async () => {
            const { deckStringRef, loadSavedDeckString } = getSavedDeckString(route.params.id)
            await loadSavedDeckString()
            const deckString = deckStringRef.value
            deckStore.load(deckString)
            window.localStorage.deck = deckString
            router.push({ name: "Deck" })
        }

        return { saveDeck, forkDeck }
    }
}
</script>

<style scoped>
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

    button:hover {
        background-color: var(--p-dark-purple);
    }
</style>