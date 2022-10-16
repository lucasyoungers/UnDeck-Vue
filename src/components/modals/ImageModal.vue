<template>
    <article class="modal">
        <img class="modal-image" :src="modalStore.card.images.large" :alt="modalStore.card.name" />
    </article>
</template>

<script>
    import useModalStore from "@/stores/modal"

    export default {
        name: "ImageModal",
        props: [ "card" ],
        setup() {
            const modalStore = useModalStore()

            return { modalStore }
        }
    }
</script>

<style scoped>
    .modal-image {
        height: 95vh;
        width: auto;
    }
</style>