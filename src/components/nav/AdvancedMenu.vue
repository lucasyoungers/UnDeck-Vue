<template>
    <form id="advanced" @submit.prevent>
        <Types />
        <Supertypes />
        <Subtypes />
        <Sets />
        <Series />
    </form>
</template>

<script>
    import Types from "@/components/nav/advanced/Types"
    import Supertypes from "@/components/nav/advanced/Supertypes"
    import Subtypes from "@/components/nav/advanced/Subtypes"
    import Sets from "@/components/nav/advanced/Sets"
    import Series from "@/components/nav/advanced/Series"

    export default {
        name: "AdvancedMenu",
        components: { Types, Supertypes, Subtypes, Sets, Series }
    }
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: var(--gap);
        row-gap: var(--gap);
        background-color: rgba(255, 255, 255, 0.65);
        padding: var(--gap);
        border-radius: 0.5rem;
    }

    @media screen and (max-width: 1200px) {
        form {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 992px) {
        form {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 768px) {
        form {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 576px) {
        form {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media screen and (max-width: 320px) {
        form {
            grid-template-columns: repeat(1, 1fr);
        }
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