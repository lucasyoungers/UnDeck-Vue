<template>
    <router-link :to="{ name: 'Blog' }">
        <h1>PikaPost</h1>
    </router-link>
</template>

<script>
export default {
    name: "BlogLogo"
}
</script>

<style scoped>
@font-face {
    font-family: "Pokémon";
    src: url("@/assets/fonts/pokemon.ttf");
}

@keyframes logo-tada {
    from {
        transform: scale3d(1, 1, 1)
    }

    10%,
    20% {
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -2deg)
    }

    30%,
    50%,
    70%,
    90% {
        transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 2deg)
    }

    40%,
    60%,
    80% {
        transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -2deg)
    }

    to {
        transform: scale3d(1, 1, 1)
    }
}

a {
    text-decoration: none;
    color: black !important;
}

h1 {
    font-size: var(--nav-height) !important;
    font-family: "Pokémon";
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;
}

h1:hover {
    animation: logo-tada 1s;
}
</style>