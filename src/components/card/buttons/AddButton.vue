<template>
    <div :class="{ ping }">
        <Button @click="addCard" icon="add_circle_outline" />
    </div>
</template>

<script>
import Button from "@/components/card/buttons/Button"
import useDeckStore from "@/stores/deck"
import { ref } from "vue"

export default {
    name: "AddButton",
    props: ["card"],
    components: { Button },
    setup(props) {
        const deckStore = useDeckStore()

        const ping = ref(false)

        const doPing = () => {
            ping.value = true
            setTimeout(() => {
                ping.value = false
            }, 250)
        }

        const addCard = () => {
            deckStore.add(props.card)
            doPing();
        }

        return { ping, addCard }
    }
}
</script>

<style scoped>
@keyframes ping {
    from {
        transform: translateY(0)
    }

    to {
        transform: translateY(-100%)
    }
}

.ping {
    position: relative;
    z-index: 0;
}

.ping::after {
    content: "+1";
    color: var(--p-dark-purple);
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 0 0 5px white, 0 0 5px white, 0 0 5px white;
    top: -0.5rem;
    left: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: ping 0.25s ease-out forwards;
}

button {
    border-radius: inherit;
}
</style>