<template>
    <section class="search">
        <Cards :cards="searchCards" />
        <CirclesToRhombusesSpinner v-if="searching" class="spinner" color="#3b165c" :circle-size="30" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import { CirclesToRhombusesSpinner } from "epic-spinners"
    import getSearchCards from "@/composables/getSearchCards"
    import { onMounted, onUnmounted, ref } from "vue"
    import { useRoute } from "vue-router"

    export default {
        name: "Search",
        components: { Cards, CirclesToRhombusesSpinner },
        setup() {
            const { query } = useRoute()

            const { searchCards, onLastPage, loadSearchCards } = getSearchCards(query)

            const searching = ref(false)

            const loadMoreSearchCards = async () => {
                // don't try to load more until first batch is loaded
                if (searchCards.value.length === 0) return

                // if the user has scrolled to the bottom, fetch more cards, assuming there are any
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
                    // don't allow loading more until this batch is loaded
                    window.removeEventListener("scroll", loadMoreSearchCards)

                    searching.value = true

                    // hack to scroll to loading dots after they appear
                    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);

                    await loadSearchCards()

                    searching.value = false

                    // only re-enable getting more cards if there are any left
                    if (!onLastPage.value) {
                        window.addEventListener("scroll", loadMoreSearchCards)
                    }
                }
            }

            onMounted(async () => {
                await loadSearchCards()
                if (!onLastPage.value) {
                    window.addEventListener("scroll", loadMoreSearchCards)
                }
            })

            onUnmounted(() => {
                if (!onLastPage.value) {
                    window.removeEventListener("scroll", loadMoreSearchCards)
                }
            })

            return { searchCards, searching }
        }
    }
</script>

<style scoped>
    .search {
        /* margin: 0 var(--gap) var(--gap); */
    }

    .spinner {
        margin: 2rem auto;
    }
</style>