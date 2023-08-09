<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="name" type="text" placeholder="Search by Card Name">
        <SearchButton :isDisabled="!searchStore.advancedMenuParams && !name" />
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
                if (searchStore.advancedMenuParams.length === 0 && name.value === "") return

                let query = {}

                if (query.name !== "") {
                    query.name = name.value
                    name.value = ""
                }

                if (searchStore.advancedMenuParams.length !== 0) {
                    query.q = searchStore.advancedMenuParams
                        .map(({ name, options }) => `${name}:"${options.join("|")}"`)
                        .filter(param => param.slice(param.length - 2) !== `""`)
                        .join(" ")
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