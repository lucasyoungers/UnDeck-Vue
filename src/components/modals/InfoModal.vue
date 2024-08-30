<template>
    <article class="modal">
        <section class="modal-wrapper">
            <header class="modal-header">
                <section class="modal-header-top">
                    <h1 class="modal-name">{{ card.name }}</h1>
                    <span class="modal-hp" v-if="card.hp">{{ card.hp }}HP</span>
                    <a v-for="_type in card.types"
                            :href="makeSearchURL(`types`, _type)"
                            :key="_type">
                        <img class="modal-type" :src="`/type_icons/${_type}.svg`" :alt="_type">
                    </a>
                </section>
                <section class="modal-subtypes">
                    <a class="modal-subtype"
                            v-for="subtype in card.subtypes"
                            :href="makeSearchURL(`subtypes`, subtype)"
                            :key="subtype">
                        {{ subtype }}
                    </a>
                </section>
            </header>
            <main class="modal-body" v-if="card.rules || card.abilities || card.attacks">
                <section class="modal-rules" v-if="card.rules">
                    <h2 class="modal-subheading">Rules:</h2>
                    <p class="modal-rule" v-for="rule in card.rules">{{ rule }}</p>
                </section>
                <section class="modal-abilities" v-if="card.abilities">
                    <section class="modal-ability" v-for="ability in card.abilities">
                        <section class="modal-ability-main">
                            <span class="modal-ability-type" :data-type="ability.type">[{{ ability.type }}]</span>
                            <span class="modal-ability-name">{{ ability.name }}</span>
                        </section>
                        <p class="modal-ability-effect">{{ ability.text }}</p>
                    </section>
                </section>
                <section class="modal-attacks" v-if="card.attacks">
                    <section class="modal-attack" v-for="attack in card.attacks">
                        <section class="modal-attack-main">
                            <section class="modal-attack-cost">
                                <img class="modal-attack-icon" v-if="attack.convertedEnergyCost == 0" src="/type_icons/None.png" alt="None">
                                <img class="modal-attack-icon" v-else v-for="_type in attack.cost" :src="`/type_icons/${_type}.svg`" :alt="_type">
                            </section>
                            <span class="modal-attack-name">{{ attack.name }}</span>
                            <span class="modal-damage">{{ attack.damage }}</span>
                        </section>
                        <p class="modal-attack-effect">{{ attack.text }}</p>
                    </section>
                </section>
            </main>
            <footer class="modal-footer">
                <section class="modal-wrrc" v-if="card.weaknesses || card.resistances || card.retreatCost">
                    <section class="modal-weakness">
                        <label>Weakness:</label>
                        <img class="modal-wrrc-type" v-if="card.weaknesses" v-for="{ type } in card.weaknesses" :src="`/type_icons/${type}.svg`" :alt="type">
                    </section>
                    <section class="modal-resistance">
                        <label>Resistance:</label>
                        <img class="modal-wrrc-type" v-if="card.resistances" v-for="{ type } in card.resistances" :src="`/type_icons/${type}.svg`" :alt="type">
                    </section>
                    <section class="modal-retreat-cost">
                        <label>Retreat Cost:</label>
                        <img class="modal-wrrc-type" v-if="card.retreatCost" v-for="_type in card.retreatCost" :src="`/type_icons/${_type}.svg`" :alt="_type">
                    </section>
                </section>
                <section class="modal-subtypes">
                    <a
                        class="modal-subtype"
                        :href="makeSearchURL(`set.id`, card.set.id)"
                        :key="card.set.id"
                    >{{ card.set.name }}</a>
                    <a
                        class="modal-subtype"
                        v-if="card.rarity !== undefined"
                        :href="makeSearchURL(`rarity`, card.rarity)"
                        :key="card.rarity"
                    >{{ card.rarity }}</a>
                </section>
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

            const makeSearchURL = (query, subtype) => `/search?q=${query}:"${subtype}"`

            return { card, makeSearchURL }
        }
    }
</script>

<style scoped>
    .modal-wrapper {
        width: 640px;
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

    .modal-body > *, .modal-abilities > *, .modal-attacks > * {
        padding-bottom: 0.75rem;
    }

    .modal-body > :last-child,
    .modal-abilities > :last-child,
    .modal-attacks > :last-child {
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
        column-gap: 0.5rem;
    }

    .modal-attack-cost {
        display: flex;
        column-gap: 0.1rem;
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

    .modal-footer {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
    }

    .modal-wrrc {
        font-size: 1.25em;
        display: flex;
        justify-content: space-between;
    }

    .modal-wrrc > * {
        display: flex;
        align-items: center;
    }

    .modal-wrrc-type {
        height: 1.5em;
        width: 1.5em;
        padding-left: 0.125em;
    }
</style>