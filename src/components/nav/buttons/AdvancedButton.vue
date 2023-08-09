<template>
    <Button
        @click="searchStore.toggleAdvancedMenu"
        :class="{
            'advanced-button': true,
            'filter-dot': (searchStore.advancedMenuParams.length !== 0)
        }"
        icon="settings"
        rounded="right" />
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

<style scoped>
    .advanced-button {
        position: relative;
    }

    .filter-dot::before {
        content: "";
        position: absolute;
        top: -5px;
        right: -5px;
        width: 14px;
        height: 14px;
        border-radius: 9999px;
        background-color: rgb(232, 0, 0);
    }
</style>