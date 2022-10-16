<template>
    <button>
        <i class="material-icons">{{ icon }}</i>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: [ "icon" ]
    }
</script>

<style scoped>
    button {
        flex: 1;
        height: 100%;
        border: none;
        background-color: var(--p-light-light-purple);
        transition: 0.1s;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--p-light-purple);
    }

    button:first-of-type {
        border-radius: 0 0 0 0.5em;
    }

    button:last-of-type {
        border-radius: 0 0 0.5em 0;
    }

    i.material-icons {
        font-size: 24px;
        display: block;
    }
</style>