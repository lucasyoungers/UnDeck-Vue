import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSubtypes = () => {
    const subtypes = ref([])
    const error = ref(null)
    const loadSubtypes = async () => {
        try {
            const res = await fetch(path + "/api/subtypes")
            await statusCheck(res)
            subtypes.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { subtypes, error, loadSubtypes }
}

export default getSubtypes