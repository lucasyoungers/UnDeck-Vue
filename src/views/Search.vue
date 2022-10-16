<template>
    <section class="search">
        <Cards :cards="searchCards" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"
    import getSearchCards from "@/composables/getSearchCards"
    import { useRoute } from "vue-router"

    export default {
        name: "Search",
        components: { Cards },
        setup() {
            const route = useRoute()

            const query = route.query

            const { searchCards, loadSearchCards } = getSearchCards(query)
            loadSearchCards()

            return { searchCards }
        }
    }
</script>

<style scoped>
    .search {
        margin: 0 var(--gap) var(--gap);
    }
</style>