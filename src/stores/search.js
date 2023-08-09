import { defineStore } from "pinia"

const useSearchStore = defineStore("search", {
    state() {
        return {
            advancedMenuIsOpen: false,
            advancedMenuParams: []
        }
    },
    actions: {
        toggleAdvancedMenu() {
            this.advancedMenuIsOpen ^= true
        },
        setParam(name, options) {
            const param = this.advancedMenuParams.find(param => param.name === name)
            if (param) {
                if (options.length === 0) {
                    this.advancedMenuParams = this.advancedMenuParams.filter(param => param.name !== name)
                } else {
                    param.options = options
                }
            } else {
                if (options.length !== 0) {
                    this.advancedMenuParams = [{ name, options }, ...this.advancedMenuParams]
                }
            }
        }
    }
})

export default useSearchStore