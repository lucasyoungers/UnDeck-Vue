<template>
    <section>
        <label>Set</label>
        <select name="set.id" ref="set" @change="onChange" multiple>
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
import useSearchStore from "@/stores/search"

export default {
    name: "Sets",
    components: { Multiselect },
    setup() {
        const { sets, loadSets } = getSets()
        loadSets()

        const searchStore = useSearchStore()

        const onChange = change => {
            searchStore.setParam(
                change.target.name,
                [...change.target.selectedOptions].map(o => o.value)
            )
        }

        return { sets, onChange }
    }
}
</script>