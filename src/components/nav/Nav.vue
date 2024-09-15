<template>
    <nav>
        <Logo class="logo-top" />
        <main>
            <Logo class="logo-inline" />
            <SearchBar />
            <DeckControls class="dc-inline" />
        </main>
        <transition :css="false" @enter="enterTransition" @leave="leaveTransition">
            <AdvancedMenu v-show="searchStore.advancedMenuIsOpen" />
        </transition>
        <DeckControls class="dc-bottom" />

        <!-- <main style="margin-top: 18px;">
            <form>
                <input type="text">
                <button>S</button>
                <button>A</button>
            </form>
        </main> -->
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
        margin-bottom: var(--gap);
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }

    nav :deep(*) {
        font-size: 18px;
    }

    main {
        display: flex;
        gap: var(--gap);
        justify-content: center;
        align-items: center;
    }

    main :deep(button:disabled) {
        pointer-events: none;
    }

    .logo-top { display: none; }
    .logo-inline {  display: block; }
    .dc-inline { display: flex; }
    .dc-bottom { display: none; }

    @media screen and (max-width: 1200px) {
        .logo-top { display: none; }
        .logo-inline {  display: block; }
        .dc-inline { display: flex; }
        .dc-bottom { display: none; }
    }

    @media screen and (max-width: 992px) {
        .logo-top { display: none; }
        .logo-inline {  display: block; }
        .dc-inline { display: flex; }
        .dc-bottom { display: none; }
    }

    @media screen and (max-width: 768px) {
        .logo-top { display: block; }
        .logo-inline {  display: none; }
        .dc-inline { display: flex; }
        .dc-bottom { display: none; }
    }

    @media screen and (max-width: 576px) {
        .logo-top { display: block; }
        .logo-inline {  display: none; }
        .dc-inline { display: none; }
        .dc-bottom { display: flex; }
    }

    @media screen and (max-width: 320px) {
        .logo-top { display: block; }
        .logo-inline {  display: none; }
        .dc-inline { display: none; }
        .dc-bottom { display: flex; }
    }
</style>