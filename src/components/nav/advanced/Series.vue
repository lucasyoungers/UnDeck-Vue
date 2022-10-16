<template>
    <Multiselect u_name="Series" :options="seriesList" />
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getSeriesList from "@/composables/getSeriesList"

export default {
    name: "Series",
    components: { Multiselect },
    setup() {
        const { seriesList } = getSeriesList()

        return { seriesList }
    }
}
</script>