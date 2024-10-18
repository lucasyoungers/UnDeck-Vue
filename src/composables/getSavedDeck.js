import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSavedDeck = (id) => {
    const cards = ref([])
    const error = ref(null)
    const loadSavedDeck = async () => {
        try {
            const dbRes = await fetch(path + "/api/db/get/" + id)
            await statusCheck(dbRes)
            const { deckString } = await dbRes.json()

            const deckRes = await fetch(path + "/api/deck/" + deckString)
            await statusCheck(deckRes)
            const data = await deckRes.json()

            cards.value = data
        } catch (err) {
            error.value = err.message
        }
    }
    return { cards, error, loadSavedDeck }
}

export default getSavedDeck