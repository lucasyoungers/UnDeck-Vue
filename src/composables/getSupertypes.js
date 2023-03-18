import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSupertypes = () => {
    const supertypes = ref([])
    const error = ref(null)
    const loadSupertypes = async () => {
        try {
            const res = await fetch(path + "/api/supertypes")
            await statusCheck(res)
            supertypes.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { supertypes, error, loadSupertypes }
}

export default getSupertypes