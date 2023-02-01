<template>
    <Multiselect u_name="Supertypes" query="supertype" :options="supertypes" />
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getSupertypes from "@/composables/getSupertypes"

export default {
    name: "Supertypes",
    components: { Multiselect },
    setup() {
        const { supertypes, loadSupertypes } = getSupertypes()
        loadSupertypes()

        return { supertypes }
    }
}
</script>