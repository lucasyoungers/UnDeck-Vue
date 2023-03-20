<template>
    <Button @click="removeCard(card.id)" icon="remove_circle_outline" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import useDeckStore from "@/stores/deck"
    import { useRouter } from 'vue-router'

    export default {
        name: "RemoveButton",
        components: { Button },
        props: [ "card" ],
        setup() {
            const deckStore = useDeckStore()
            const router = useRouter()

            const removeCard = id => {
                deckStore.remove(id)
                if (deckStore.deck.length === 0) {
                    router.push({ name: "Home" })
                }
            }

            return { deckStore, removeCard }
        }
    }
</script>