<template>
    <Button icon="zoom_in" @click="openModal" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import useModalStore from "@/stores/modal"

    export default {
        name: "ZoomButton",
        components: { Button },
        props: [ "card" ],
        setup(props) {
            const modalStore = useModalStore()

            const openModal = () => modalStore.openModal("image", props.card)

            return { openModal }
        }
    }
</script>