<template>
    <article class="modal">
        <section class="modal-wrapper">
            <header class="modal-header">
                <section class="modal-header-top">
                    <h1 class="modal-name">{{ card.name }}</h1>
                    <span class="modal-hp" v-if="card.hp">{{ card.hp }}HP</span>
                    <img
                        class="modal-type"
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
                <section class="modal-rules" v-if="card.rules?.length > 0">
                    <h2 class="modal-subheading">Rules:</h2>
                    <p class="modal-rule" v-for="rule in card.rules">{{ rule }}</p>
                </section>
                <section class="modal-abilities" v-if="card.abilities?.length > 0">
                    <section class="modal-ability" v-for="ability in card.abilities">
                        <section class="modal-ability-main">
                            <span class="modal-ability-type" :data-type="ability.type">[{{ ability.type }}]</span>
                            <span class="modal-ability-name">{{ ability.name }}</span>
                        </section>
                        <p class="modal-ability-effect">{{ ability.text }}</p>
                    </section>
                </section>
                <section class="modal-attacks" v-if="card.attacks?.length > 0">
                    <section class="modal-attack" v-for="attack in card.attacks">
                        <section class="modal-attack-main">
                            <img class="modal-attack-icon" v-if="attack.convertedEnergyCost == 0" src="/type_icons/None.png">
                            <img class="modal-attack-icon" v-else v-for="type in attack.cost" :src="`/type_icons/${type}.svg`">
                            <span class="modal-attack-name">{{ attack.name }}</span>
                            <span class="modal-damage">{{ attack.damage }}</span>
                        </section>
                        <p class="modal-attack-effect">{{ attack.text }}</p>
                    </section>
                </section>
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

            console.log(card);

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

    .modal-body > * {
        padding-bottom: 0.75rem;
    }

    .modal-body > :last-child {
        padding-bottom: 0;
    }

    .modal-header-top {
        --name-height: 2em;
        display: flex;
        align-items: center;
    }

    .modal-name {
        font-size: var(--name-height);
        flex-grow: 1;
    }

    .modal-hp {
        font-size: var(--name-height);
    }

    .modal-type {
        width: calc(1.5 * var(--name-height));
        height: calc(1.5 * var(--name-height));
        padding-left: calc(0.25 * var(--name-height));
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

    .modal-subheading {
        font-size: 1.25em;
    }

    .modal-ability-main, .modal-attack-main {
        display: flex;
        align-items: center;
        column-gap: 0.5em;
    }

    .modal-ability-type, .modal-ability-name, .modal-attack-name, .modal-damage {
        font-size: 1.75em;
    }

    .modal-ability-type {
        color: rgb(168, 16, 16);
    }

    .modal-attack-icon {
        height: 2.25em;
        width: 2.25em;
    }

    .modal-damage {
        flex-grow: 1;
        text-align: right;
    }
</style>