<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="name" type="text" placeholder="Search by Card Name">
        <SearchButton />
        <AdvancedButton />
    </form>
</template>

<script>
    import SearchButton from "@/components/nav/buttons/SearchButton"
    import AdvancedButton from "@/components/nav/buttons/AdvancedButton"
    import useSearchStore from "@/stores/search"
    import { statusCheck } from "@/lib/utils"
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
                let query = {}

                const advancedMenu = document.getElementById("advanced")

                if (!advancedMenu && name.value === "") return

                if (name.value !== "") query.name = name.value
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

            return { name, handleSubmit }
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