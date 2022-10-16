<template>
    <article class="modal">
        <section class="modal-wrapper">
            <header class="modal-header">
                <section class="modal-header-top">
                    <h1 class="modal-name">{{ card.name }}</h1>
                    <img
                        v-for="type in card.types"
                        :src="`/type_icons/${type}.svg`"
                        :alt="type">
                </section>
                <section class="modal-subtypes">
                    <a
                        class="modal-subtype"
                        v-for="subtype in card.subtypes"
                        :href="makeSearchURL(subtype)"
                        :key="subtype"
                    >{{ subtype }}</a>
                </section>
            </header>
            <main class="modal-body">
                body
            </main>
            <footer class="modal-footer">
                footer
            </footer>
        </section>
    </article>
</template>

<script>
    import useModalStore from "@/stores/modal"

    export default {
        name: "InfoModal",
        props: [ "card" ],
        setup() {
            const { card } = useModalStore()

            const makeSearchURL = subtype => `/search?q=subtypes:"${subtype}"`

            return { card, makeSearchURL }
        }
    }
</script>

<style scoped>
    .modal-wrapper {
        width: 640px;
        height: 95vh;
        background-color: white;
        border-radius: 1rem;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .modal-wrapper > * {
        border-bottom: 1px solid black;
        padding: 1rem 0;
    }

    .modal-wrapper > :last-child {
        border-bottom: none;
    }

    .modal-header-top {
        display: flex;
    }

    .modal-name {
        font-size: 2em;
    }

    .modal-type {
        height: 100%;
    }

    .modal-subtypes {
        display: flex;
        column-gap: 5px;
    }

    .modal-subtype {
        text-decoration: none;
        color: white;
        background-color: var(--p-purple);
        padding: 0.25em 1em;
        border-radius: 9999px;
    }

    .modal-subtype:hover {
        background-color: var(--p-dark-purple);
    }
</style>