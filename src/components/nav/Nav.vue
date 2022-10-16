<template>
    <nav>
        <main>
            <Logo />
            <SearchBar />
            <DeckControls />
        </main>
        <AdvancedMenu v-show="searchStore.advancedMenuIsOpen" />
    </nav>
</template>

<script>
    import Logo from "@/components/nav/Logo"
    import SearchBar from "@/components/nav/SearchBar"
    import DeckControls from "@/components/nav/DeckControls"
    import AdvancedMenu from "@/components/nav/AdvancedMenu"
    import useSearchStore from "@/stores/search"

    export default {
        name: "Nav",
        components: { Logo, SearchBar, DeckControls, AdvancedMenu },
        setup() {
            const searchStore = useSearchStore()

            return { searchStore }
        }
    }
</script>

<style scoped>
    nav {
        padding: 1.5% var(--gap);
        display: grid;
        row-gap: var(--gap);
    }

    nav :deep(*) {
        font-size: 18px;
    }

    main {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gap);
        justify-content: center;
        align-items: center;
    }

    main :deep(button) {
        margin-right: 1px;
    }

    main :deep(button:disabled) {
        pointer-events: none;
    }
</style>