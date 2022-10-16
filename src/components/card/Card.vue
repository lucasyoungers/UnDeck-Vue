<template>
    <article>
        <div v-if="card.count" class="count">{{ card.count }}×</div>
        <img @click="openModal" :src="card.images.small" :alt="card.name">
        <CardBottom :card="card" />
    </article>
</template>

<script>
    import CardBottom from "@/components/card/CardBottom"
    import useModalStore from "@/stores/modal"

    export default {
        name: "Card",
        components: { CardBottom },
        props: [ "card" ],
        setup(props) {
            const modalStore = useModalStore()

            const openModal = () => modalStore.openModal("image", props.card)

            return { openModal }
        }
    }
</script>

<style scoped>
    article {
        background-color: white;
        padding: 0.3em;
        border-radius: 0.6em;
        box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.5);
        position: relative;
        height: max-content;
    }

    img {
        width: 100%;
        aspect-ratio: 245 / 342;
        height: auto;
        border-radius: 0.7em;
        cursor: pointer;
    }

    div.count {
        background-color: white;
        filter: drop-shadow(2px 2px 4px var(--p-dark-purple));
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, 50%);
        display: grid;
        place-items: center;
        line-height: 1;
        font-size: 0.85em;
    }
</style>