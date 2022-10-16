<template>
    <Button @click="searchStore.toggleAdvancedMenu" icon="settings" rounded="right" />
</template>

<script>
    import Button from "@/components/nav/buttons/Button"
    import useSearchStore from "@/stores/search"

    export default {
        name: "AdvancedButton",
        components: { Button },
        setup() {
            const searchStore = useSearchStore()

            return { searchStore }
        }
    }
</script>