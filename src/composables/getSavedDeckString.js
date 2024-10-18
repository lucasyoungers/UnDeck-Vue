import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSavedDeckString = (id) => {
    const deckStringRef = ref(null)
    const error = ref(null)
    const loadSavedDeckString = async () => {
        try {
            const res = await fetch(path + "/api/db/get/" + id)
            await statusCheck(res)
            const { deckString } = await res.json()
            deckStringRef.value = deckString
        } catch (err) {
            error.value = err.message
        }
    }
    return { deckStringRef, error, loadSavedDeckString }
}

export default getSavedDeckString