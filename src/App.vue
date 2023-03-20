<template>
    <Nav @deleteDeck="deckStore.clear" />
    <router-view v-if="$route.name === 'Search'" :key="$route.query" />
    <router-view v-else :cards="$route.name === 'Home' ? cards : deckStore.deck" />
    <Modal v-if="modalStore.isOpen" />
</template>

<script>
    import Nav from "@/components/nav/Nav"
    import Modal from "@/components/modals/Modal"
    import getCards from "@/composables/getCards"
    import useDeckStore from "@/stores/deck"
    import useModalStore from "@/stores/modal"
    import { onMounted } from "vue"

    export default {
        name: "App",
        components: { Nav, Modal },
        setup() {
            const { cards, error, loadCards } = getCards() // TODO: error handling
            loadCards()

            const deckStore = useDeckStore()
            if (localStorage.deck) deckStore.load(localStorage.deck)

            const modalStore = useModalStore()

            return { cards, error, deckStore, modalStore }
        }
    }
</script>