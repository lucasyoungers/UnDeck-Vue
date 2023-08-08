<template>
    <section class="home">
        <Cards :cards="cards" />
        <CirclesToRhombusesSpinner v-if="loading" class="spinner" color="#3b165c" :circle-size="30" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import { CirclesToRhombusesSpinner } from "epic-spinners"
    import getCards from "@/composables/getCards"
    import { onMounted, onUnmounted, ref } from "vue"

    export default {
        name: "Home",
        components: { Cards, CirclesToRhombusesSpinner },
        setup() {
            const { cards, loadCards } = getCards()
            loadCards()

            const loading = ref(false)

            const loadMoreCards = async () => {
                // don't try to load more until first batch is loaded
                if (cards.value.length === 0) return

                // if the user has scrolled to the bottom, fetch more cards, assuming there are any
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    // don't allow loading more until this batch is loaded
                    window.removeEventListener("scroll", loadMoreCards)

                    loading.value = true

                    // hack to scroll to loading dots after they appear
                    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);

                    await loadCards()

                    // re-enable loading more cards
                    window.addEventListener("scroll", loadMoreCards)
                }
            }
            onMounted(() => window.addEventListener("scroll", loadMoreCards))
            onUnmounted(() => window.removeEventListener("scroll", loadMoreCards))

            return { cards, loading }
        }
    }
</script>

<style scoped>
    .home {
        margin: 0 var(--gap) var(--gap);
    }

    .spinner {
        margin: 2rem auto;
    }
</style>