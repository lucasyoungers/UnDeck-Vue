import { defineStore } from "pinia"

const useModalStore = defineStore("modal", {
    state() {
        return {
            isOpen: false,
            type: "",
            card: null
        }
    },
    getters: {}, // basically computed, methods must accept "state" as a parameter
    actions: {
        openModal(type, card) {
            this.isOpen = true
            this.type = type
            this.card = card
            document.body.classList.add("noscroll")
        },
        closeModal() {
            this.isOpen = false
            this.type = ""
            this.card = null
            document.body.classList.remove("noscroll")
        }
    }
})

export default useModalStore