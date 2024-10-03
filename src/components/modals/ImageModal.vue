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
        height: 90vh;
        width: auto;
    }

    @media screen and (max-width: 1200px) {
        .modal-image {
            height: 90vh;
            width: auto;
        }
    }

    @media screen and (max-width: 992px) {
        .modal-image {
            height: 90vh;
            width: auto;
        }
    }

    @media screen and (max-width: 768px) {
        .modal-image {
            height: 90vh;
            width: auto;
        }
    }

    @media screen and (max-width: 576px) {
        .modal-image {
            height: auto;
            width: 90vw;
        }
    }

    @media screen and (max-width: 320px) {
        .modal-image {
            height: auto;
            width: 90vw;
        }
    }
</style>