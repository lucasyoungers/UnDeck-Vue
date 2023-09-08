<template>
    <section>
        <AddButton :card="card" />
        <RemoveButton v-if="$route.name === 'Deck'" :card="card" />
        <DownloadButton :card="card" />
        <ZoomButton :card="card" />
    </section>
</template>

<script>
import AddButton from "@/components/card/buttons/AddButton"
import RemoveButton from "@/components/card/buttons/RemoveButton"
import DownloadButton from "@/components/card/buttons/DownloadButton"
import ZoomButton from "@/components/card/buttons/ZoomButton"

export default {
    name: "CardBottom",
    components: { AddButton, RemoveButton, DownloadButton, ZoomButton },
    props: ["card"]
}
</script>

<style scoped>
section {
    display: flex;
    height: 2.5em;
}

section>* {
    flex: 1;
    height: 100%;
}

section>*:first-child {
    border-radius: 0 0 0 0.5em;
}

section>*:last-child {
    border-radius: 0 0 0.5em 0;
}
</style>