<template>
    <Multiselect u_name="Subtypes" query="subtypes" :options="subtypes" />
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getSubtypes from "@/composables/getSubtypes"

export default {
    name: "Subtypes",
    components: { Multiselect },
    setup() {
        const { subtypes, loadSubtypes } = getSubtypes()
        loadSubtypes()

        return { subtypes }
    }
}
</script>