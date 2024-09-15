<template>
    <Button icon="search" type="input" :disabled="isDisabled" />
</template>

<script>
    import Button from "@/components/nav/buttons/Button"

    export default {
        name: "SearchButton",
        components: { Button },
        props: [ "isDisabled" ]
    }
</script>

<style scoped>
    button {
        margin-right: 1px;
    }
</style>