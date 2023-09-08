<template>
    <button :onClick="doShine" :class="{ shine }">
        <i class="material-icons">{{ icon }}</i>
    </button>
</template>

<script>
import { ref } from "vue"

export default {
    name: "Button",
    props: ["icon"],
    setup() {
        const shine = ref(false)

        const doShine = () => {
            shine.value = true
            setTimeout(() => {
                shine.value = false
            }, 250)
        }

        return { shine, doShine }
    }
}
</script>

<style scoped>
@keyframes shine {
    from {
        transform: translateX(-100%)
    }

    to {
        transform: translateX(100%)
    }
}

.shine {
    position: relative;
    z-index: 0;
    overflow: hidden;
}

.shine::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: shine 0.25s forwards;
    background: linear-gradient(to top right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(128, 186, 232, 0) 99%,
            rgba(125, 185, 232, 0) 100%);
}

button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--p-light-light-purple);
    transition: 0.1s;
    cursor: pointer;
}

button:hover {
    background-color: var(--p-light-purple);
}

i.material-icons {
    font-size: 24px;
    display: block;
}
</style>