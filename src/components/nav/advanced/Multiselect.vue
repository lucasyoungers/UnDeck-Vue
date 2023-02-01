<template>
    <section>
        <label>{{ u_name }}</label>
        <select :name="query" :ref="query" multiple>
            <option
                v-for="option in options"
                :value="option"
            >{{ option }}</option>
        </select>
    </section>
</template>

<script>
export default {
    name: "Multiselect",
    props: [ "u_name", "query", "options" ],
    setup(props) {
        const l_name = props.u_name.toLowerCase()

        return { l_name }
    }
}
</script>