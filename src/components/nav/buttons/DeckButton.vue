<template>
    <router-link :to="{ name: 'Deck' }" :class="{ 'link-disabled': !deckStore.count }">
        <Button icon="format_list_bulleted" rounded="left" :disabled="$route.name === 'Deck' || !deckStore.count">
            Deck&nbsp;<span v-if="deckStore.count">({{ deckStore.count }})</span>
        </Button>
    </router-link>
</template>

<script>
    import Button from "@/components/nav/buttons/Button"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "DeckButton",
        components: { Button },
        setup() {
            const deckStore = useDeckStore()

            return { deckStore }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>