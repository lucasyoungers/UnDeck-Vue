<template>
    <section>
        <label>{{ u_name }}</label>
        <select :name="query" :ref="query" @change="onChange" multiple>
            <option
                v-for="option in options"
                :value="option"
            >{{ option }}</option>
        </select>
    </section>
</template>

<script>
import useSearchStore from "@/stores/search"

export default {
    name: "Multiselect",
    props: [ "u_name", "query", "options" ],
    setup(props) {
        const l_name = props.u_name.toLowerCase()

        const searchStore = useSearchStore()

        const onChange = change => {
            searchStore.setParam(
                change.target.name,
                [...change.target.selectedOptions].map(o => o.value)
            )
        }

        return { l_name, onChange }
    }
}
</script>

<style scoped>
    select {
        /* overflow-x: hidden; */
    }
</style>