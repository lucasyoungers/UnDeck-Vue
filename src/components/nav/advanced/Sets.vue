<template>
    <section>
        <label>Set</label>
        <select name="set.id" ref="set" multiple>
            <option
                v-for="set in sets"
                :key="set?.id"
                :value="set?.id"
            >{{ set?.name }}</option>
        </select>
    </section>
</template>

<script>
import Multiselect from "@/components/nav/advanced/Multiselect"
import getSets from "@/composables/getSets"

export default {
    name: "Sets",
    components: { Multiselect },
    setup() {
        const { sets, loadSets } = getSets()
        loadSets()

        return { sets }
    }
}
</script>