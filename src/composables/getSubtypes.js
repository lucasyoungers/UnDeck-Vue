import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getSubtypes = () => {
    const subtypes = ref([])
    const error = ref(null)
    const loadSubtypes = async () => {
        try {
            const res = await fetch("http://localhost:3080/api/subtypes")
            await statusCheck(res)
            subtypes.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { subtypes, error, loadSubtypes }
}

export default getSubtypes