<template>
    <button :class="{ 'rounded-left': rl, 'rounded-right': rr }" type="button">
        <i class="material-icons">{{ icon }}</i>
        <slot />
    </button>
</template>

<script>
    import { computed } from "vue"
    export default {
        name: "Button",
        props: [ "icon", "rounded" ],
        setup(props) {
            const rl = computed(() => props.rounded === "left")
            const rr = computed(() => props.rounded === "right")
            return { rl, rr }
        }
    }
</script>

<style scoped>
    button {
        --icon-size: 24px;
        border: none;
        background-color: var(--p-purple);
        color: white;
        padding: 12px;
        height: var(--icon-size);
        box-sizing: content-box;
        display: flex;
        user-select: none;
    }

    button:not(:disabled) {
        cursor: pointer;
    }

    button:not(:disabled):hover {
        background-color: var(--p-dark-purple);
    }

    button:not(:disabled):hover i.material-icons {
        animation: bounce ease-in-out 0.5s;
    }

    button:disabled {
        color: var(--p-light-purple);
    }

    button.rounded-left {
        border-radius: var(--radius) 0 0 var(--radius);
    }

    button.rounded-right {
        border-radius: 0 var(--radius) var(--radius) 0;
    }

    i.material-icons {
        font-size: var(--icon-size);
        display: block;
    }
</style>