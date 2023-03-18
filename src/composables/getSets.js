import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSets = () => {
    const sets = ref([])
    const error = ref(null)
    const loadSets = async () => {
        try {
            const res = await fetch(path + "/api/sets")
            await statusCheck(res)
            sets.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { sets, error, loadSets }
}

export default getSets