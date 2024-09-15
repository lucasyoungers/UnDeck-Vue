<template>
    <router-link :to="{ name: 'Home' }">
        UnDeck
    </router-link>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    @font-face {
        font-family: "Unown";
        src: url("@/assets/fonts/unown.ttf");
    }

    @keyframes logo-tada {
        from                { transform: scale3d(1, 1, 1) }
        10%, 20%            { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -2deg) }
        30%, 50%, 70%, 90%  { transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 2deg) }
        40%, 60%, 80%       { transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -2deg) }
        to                  { transform: scale3d(1, 1, 1) }
    }

    a {
        color: black !important;
        cursor: pointer;
        font-family: "Unown";
        font-weight: bold;
        max-width: fit-content;
        text-decoration: none;
        text-transform: uppercase;
        user-select: none;
    }
    
    a.logo-top {
        margin: 0 auto;
        font-size: calc(1*var(--nav-height)) !important;
    }

    a.logo-inline {
        font-size: var(--nav-height) !important;
    }

    a:hover {
        animation: logo-tada 1s;
    }
</style>