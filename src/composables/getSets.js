import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getSets = () => {
    const sets = ref([])
    const error = ref(null)
    const loadSets = async () => {
        try {
            const res = await fetch("http://localhost:3080/api/sets")
            await statusCheck(res)
            sets.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { sets, error, loadSets }
}

export default getSets