<template>
    <router-link :to="{ name: 'Deck' }" :class="{ 'link-disabled': $route.name === 'Deck' }">
        <Button icon="format_list_bulleted" rounded="left" :disabled="$route.name === 'Deck'">
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
        margin-right: 1px;
    }
</style>