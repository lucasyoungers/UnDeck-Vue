<template>
    <nav>
        <main>
            <Logo />
            <SearchBar />
            <DeckControls />
        </main>
        <transition :css="false" @enter="enterTransition" @leave="leaveTransition">
            <AdvancedMenu v-show="searchStore.advancedMenuIsOpen" />
        </transition>
    </nav>
</template>

<script>
    import Logo from "@/components/nav/Logo"
    import SearchBar from "@/components/nav/SearchBar"
    import DeckControls from "@/components/nav/DeckControls"
    import AdvancedMenu from "@/components/nav/AdvancedMenu"
    import useSearchStore from "@/stores/search"
    import { enterTransition, leaveTransition } from "@/lib/animations"

    export default {
        name: "Nav",
        components: { Logo, SearchBar, DeckControls, AdvancedMenu },
        setup() {
            const searchStore = useSearchStore()

            return { searchStore, enterTransition, leaveTransition }
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

    /* .advanced-menu-slide-enter-from,
    .advanced-menu-slide-leave-to {
        opacity: 0;
    }

    .advanced-menu-slide-enter-active,
    .advanced-menu-slide-leave-active {
        transition: opacity 0.5s;
    }

    .advanced-menu-slide-enter-to,
    .advanced-menu-sliide-leave-from {
        opacity: 1;
    } */
</style>