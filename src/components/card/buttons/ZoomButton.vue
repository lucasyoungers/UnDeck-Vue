<template>
    <Button icon="zoom_in" @click="modalStore.openModal('image', card)" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import useModalStore from "@/stores/modal"

    export default {
        name: "ZoomButton",
        components: { Button },
        props: [ "card" ],
        setup() {
            const modalStore = useModalStore()

            return { modalStore }
        }
    }
</script>