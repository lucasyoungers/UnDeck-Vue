import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const postDeck = deckString => {
    const id = ref(null)
    const error = ref(null)
    const loadId = async () => {
        try {
            const res = await fetch(path + "/api/db/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.VUE_APP_DB_API_KEY
                },
                body: JSON.stringify({ deckString })
            })
            await statusCheck(res)
            const data = await res.json()
            id.value = data.id
        } catch (err) {
            error.value = err.message
        }
    }
    return { id, error, loadId }
}

export default postDeck