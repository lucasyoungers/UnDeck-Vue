<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="name" type="text" placeholder="Search by Card Name">
        <SearchButton :isDisabled="!searchStore.advancedMenuIsOpen && !name" />
        <AdvancedButton />
    </form>
</template>

<script>
    import SearchButton from "@/components/nav/buttons/SearchButton"
    import AdvancedButton from "@/components/nav/buttons/AdvancedButton"
    import useSearchStore from "@/stores/search"
    import { ref } from "vue"
    import { useRouter } from "vue-router"

    export default {
        name: "SearchBar",
        components: { SearchButton, AdvancedButton },
        setup() {
            const router = useRouter()

            const searchStore = useSearchStore()

            const name = ref("")

            const handleSubmit = async () => {
                const advancedMenu = document.getElementById("advanced")

                // don't allow an empty query
                // TODO: this is broken, because it allows the user to
                // do an empty search by opening the advanced menu
                // but not inputting any filters. leaving this for now
                // since it's harder to do accidentally.
                if (!searchStore.advancedMenuIsOpen && name.value === "") return

                let query = {}
                if (query.name !== "") {
                    query.name = name.value
                }
                name.value = ""

                if (searchStore.advancedMenuIsOpen) {
                    const selects = advancedMenu.querySelectorAll("select")
                    const q = [...selects].map(s => {
                        return `${s.name}:"${[...s.selectedOptions]
                            .map(o => o.value)
                            .join("|")}"`
                    }).filter(q => q.slice(q.length - 2) !== `""`).join(" ")
                    query.q = q

                    // This causes the advanced menu to close on search.
                    // searchStore.toggleAdvancedMenu()
                }

                router.push({ name: "Search", query })
            }

            return { name, searchStore, handleSubmit }
        }
    }
</script>

<style scoped>
    form {
        flex: 1;
        display: flex;
    }

    input {
        padding-left: 15px;
        border: none;
        border-radius: var(--radius) 0 0 var(--radius);
        flex: 1;
    }
</style>