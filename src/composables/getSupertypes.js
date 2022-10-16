import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getSupertypes = () => {
    const supertypes = ref([])
    const error = ref(null)
    const loadSupertypes = async () => {
        try {
            const res = await fetch("http://localhost:3080/api/supertypes")
            await statusCheck(res)
            supertypes.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { supertypes, error, loadSupertypes }
}

export default getSupertypes