import { defineStore } from "pinia"

const useSearchStore = defineStore("search", {
    state() {
        return {
            advancedMenuIsOpen: false,
        }
    },
    actions: {
        toggleAdvancedMenu() {
            this.advancedMenuIsOpen ^= true
        }
    }
})

export default useSearchStore