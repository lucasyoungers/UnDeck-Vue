<template>
    <form id="advanced" @submit.prevent>
        <section id="advanced-textboxes">
            <CardText />
            <!-- <input v-model="text" type="text" placeholder="Search by Card Text"> -->
        </section>
        <section id="advanced-multiselects">
            <Types />
            <Supertypes />
            <Subtypes />
            <Sets />
            <Series />
        </section>
    </form>
</template>

<script>
    import CardText from "@/components/nav/advanced/CardText"
    import Types from "@/components/nav/advanced/Types"
    import Supertypes from "@/components/nav/advanced/Supertypes"
    import Subtypes from "@/components/nav/advanced/Subtypes"
    import Sets from "@/components/nav/advanced/Sets"
    import Series from "@/components/nav/advanced/Series"
    // import { ref } from "vue"

    export default {
        name: "AdvancedMenu",
        components: { CardText, Types, Supertypes, Subtypes, Sets, Series },
        // setup() {
        //     const text = ref("")

        //     return { text }
        // }
    }
</script>

<style scoped>
    form > section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: var(--gap);
        background-color: rgba(255, 255, 255, 0.65);
        padding: var(--gap);
        border-radius: 0.5rem;
    }

    input {
        padding: 5px 10px;
        border: none;
        border-radius: var(--radius);
        flex: 1;
    }

    :deep(section) {
        display: flex;
        flex-direction: column;
        row-gap: 0.5em;
    }

    :deep(label) {
        font-size: 1.5rem !important;
    }

    :deep(select) {
        border: none;
        scrollbar-width: none;
        -ms-overflow-style: none;
        border-radius: 0.25em;
        height: 10rem;
    }

    :deep(select::-webkit-scrollbar) {
        width: 0;
        height: 0;
    }

    :deep(option) {
        padding: 0 0.25em;
    }
</style>