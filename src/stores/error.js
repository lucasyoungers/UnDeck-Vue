import { defineStore } from "pinia"

const useErrorStore = defineStore("error", {
    state() {
        return {
            cardsNotFound: false,
        }
    },
    actions: {
        setCardsNotFound(b) {
            this.cardsNotFound = b
        }
    }
})

export default useErrorStore