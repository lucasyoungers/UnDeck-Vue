<template>
    <teleport to="#modals">
        <div class="overlay" @click.self="modalStore.closeModal">
            <ImageModal v-if="modalStore.type === 'image'" />
            <InfoModal v-if="modalStore.type === 'info'" />
        </div>
    </teleport>
</template>

<script>
    import ImageModal from "@/components/modals/ImageModal"
    import InfoModal from "@/components/modals/InfoModal"
    import useModalStore from "@/stores/modal"

    export default {
        name: "Modal",
        components: { ImageModal, InfoModal },
        setup() {
            const modalStore = useModalStore()

            return { modalStore }
        }
    }
</script>

<style scoped>
    .overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        inset: 0;
        z-index: 1;
        display: grid;
        place-content: center;
    }
</style>