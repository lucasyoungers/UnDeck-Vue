import { defineStore } from "pinia"
import { statusCheck, clone } from "@/lib/utils"
import { cardCompareFn } from "@/lib/deckUtils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

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
            return this.deck.reduce((acc, card) => Object.assign(acc, {
                [card.supertype]: acc[card.supertype] + card.count
            }), {
                "Pokémon": 0,
                "Trainer": 0,
                "Energy": 0
            })
        },
        deckString() {
            return this.deck.map(card => `${card.id}~${card.count}`).join("|")
        }
    },
    actions: {
        async load(deck) {
            fetch(path + `/api/deck/${deck}`)
                .then(statusCheck)
                .then(res => res.json())
                .then(deck => this.deck = deck)
        },
        clear() {
            this.deck = []
            window.localStorage.deck = this.deckString
        },
        add(newCard) {
            const deckCard = this.deck.find(card => card.id === newCard.id)
            if (deckCard) {
                deckCard.count++
            } else {
                let newCardCopy = clone(newCard)
                newCardCopy.count = 1
                this.deck.push(newCardCopy)
                this.deck.sort(cardCompareFn)
            }
            window.localStorage.deck = this.deckString
        },
        remove(id) {
            const deckCard = this.deck.find(card => card.id === id)
            if (deckCard) {
                deckCard.count--
                if (deckCard.count === 0) {
                    this.deck = this.deck.filter(card => card.id !== id)
                }
            }
            window.localStorage.deck = this.deckString
        },
        sort() {
            this.deck.sort(cardCompareFn)
        }
    }
})

export default useDeckStore