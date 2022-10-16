<template>
    <Button @click="deleteDeck" icon="delete" rounded="right" :disabled="!deckStore.count" />
</template>

<script>
    import Button from "@/components/nav/buttons/Button"
    import useDeckStore from "@/stores/deck"
import { useRouter } from 'vue-router'

    export default {
        name: "DeleteButton",
        components: { Button },
        setup() {
            const deckStore = useDeckStore()
            const router = useRouter()

            const deleteDeck = () => {
                deckStore.deleteDeck()
                router.push({ name: "Home" })
            }

            return { deckStore, deleteDeck }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>