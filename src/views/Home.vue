<template>
    <section class="home">
        <Cards :cards="cards" />
    </section>
</template>

<script>
    import Cards from "@/components/Cards"

    export default {
        name: "Home",
        components: { Cards },
        props: [ "cards" ]
    }
</script>

<style scoped>
    .home {
        margin: 0 var(--gap) var(--gap);
    }
</style>