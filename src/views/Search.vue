<template>
    <section class="search">
        <Cards :cards="searchCards" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import getSearchCards from "@/composables/getSearchCards"
    import useErrorStore from "@/stores/error"
    import { onMounted, onUnmounted } from "vue"
    import { useRoute } from "vue-router"

    export default {
        name: "Search",
        components: { Cards },
        setup() {
            const { query } = useRoute()

            const { searchCards, loadSearchCards } = getSearchCards(query)
            loadSearchCards()

            const errorStore = useErrorStore()

            const loadMoreSearchCards = async () => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    window.removeEventListener("scroll", loadMoreSearchCards)
                    await loadSearchCards()
                    window.addEventListener("scroll", loadMoreSearchCards)

                    if (errorStore.cardsNotFound) {
                        window.removeEventListener("scroll", loadMoreSearchCards)
                    }
                }
            }
            onMounted(() => window.addEventListener("scroll", loadMoreSearchCards))
            onUnmounted(() => window.removeEventListener("scroll", loadMoreSearchCards))

            return { searchCards }
        }
    }
</script>

<style scoped>
    .search {
        margin: 0 var(--gap) var(--gap);
    }
</style>