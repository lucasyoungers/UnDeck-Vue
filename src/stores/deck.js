import { defineStore } from "pinia"
import { statusCheck, clone, updateLocalDeck } from "@/lib/utils"

const useDeckStore = defineStore("deck", {
    state() {
        return {
            deck: []
        }
    },
    getters: {
        count() {
            return this.deck.reduce((total, card) => total + card.count, 0)
        },
        supertypes() {
            const supertypes = {
                "Pokémon": 0,
                "Trainer": 0,
                "Energy":  0
            }
            this.deck.forEach(card => supertypes[card.supertype] += card.count || 1)
            return supertypes
        }
    },
    actions: {
        async loadDeck(deck) {
            fetch(`http://localhost:3080/api/deck/${deck}`) // TODO: remove localhost url
                .then(statusCheck)
                .then(res => res.json())
                .then(deck => this.deck = deck)
        },
        deleteDeck() {
            this.deck = []
            updateLocalDeck(this.deck)
        },
        addCard(newCard) {
            localStorage.deck = newCard.id
            newCard = clone(newCard)
            const deckCard = this.deck.find(card => card.id === newCard.id)
            if (deckCard) {
                deckCard.count++
            } else {
                newCard.count = 1
                this.deck.push(newCard)
            }
            updateLocalDeck(this.deck)
        },
        removeCard(id) {
            const deckCard = this.deck.find(card => card.id === id)
            if (deckCard) {
                deckCard.count--
                if (deckCard.count === 0) {
                    this.deck = this.deck.filter(card => card.id !== id)
                }
            }
            updateLocalDeck(this.deck)
        }
    }
})

export default useDeckStore