<template>
    <section class="home">
        <Cards :cards="cards" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import getCards from "@/composables/getCards"
    import { onMounted, onUnmounted } from "vue"

    export default {
        name: "Home",
        components: { Cards },
        setup() {
            const { cards, loadCards } = getCards()
            loadCards()

            const loadMoreCards = async () => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    window.removeEventListener("scroll", loadMoreCards)
                    await loadCards()
                    window.addEventListener("scroll", loadMoreCards)
                }
            }
            onMounted(() => window.addEventListener("scroll", loadMoreCards))
            onUnmounted(() => window.removeEventListener("scroll", loadMoreCards))

            return { cards }
        }
    }
</script>

<style scoped>
    .home {
        margin: 0 var(--gap) var(--gap);
    }
</style>