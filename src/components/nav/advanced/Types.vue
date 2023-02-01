<template>
    <Multiselect u_name="Types" query="types" :options="types" />
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getTypes from "@/composables/getTypes"

export default {
    name: "Types",
    components: { Multiselect },
    setup() {
        const { types, loadTypes } = getTypes()
        loadTypes()

        return { types }
    }
}
</script>