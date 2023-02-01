<template>
    <Multiselect u_name="Series" query="set.series" :options="series" />
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getSeries from "@/composables/getSeries"

export default {
    name: "Series",
    components: { Multiselect },
    setup() {
        const { series, loadSeries } = getSeries()
        loadSeries()

        return { series }
    }
}
</script>