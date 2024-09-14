<template>
    <section>
        <input type="text" placeholder="Card Text" name="abilities.name,abilities.text,attacks.name,attacks.text" @input="onChange">
    </section>
</template>

<script>
import useSearchStore from "@/stores/search"

export default {
    name: "CardText",
    setup() {
        const searchStore = useSearchStore()

        const onChange = change => {
            searchStore.setParam(
                change.target.name,
                [`*${change.target.value}*`],
                true
            )
        }

        return { onChange }
    }
}
</script>