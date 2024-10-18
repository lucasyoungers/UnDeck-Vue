<template>
    <Nav @deleteDeck="deckStore.clear" />
    <router-view :key="$route.query" />
    <Modal v-if="modalStore.isOpen" />
</template>

<script>
    import Nav from "@/components/nav/Nav"
    import Modal from "@/components/modals/Modal"
    import useDeckStore from "@/stores/deck"
    import useModalStore from "@/stores/modal"

    export default {
        name: "App",
        components: { Nav, Modal },
        setup() {
            const deckStore = useDeckStore()
            if (localStorage.deck) {
                deckStore.load(localStorage.deck)
            }

            const modalStore = useModalStore()

            return { deckStore, modalStore }
        }
    }
</script>