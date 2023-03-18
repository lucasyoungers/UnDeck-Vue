import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getTypes = () => {
    const types = ref([])
    const error = ref(null)
    const loadTypes = async () => {
        try {
            const res = await fetch(path + "/api/types")
            await statusCheck(res)
            types.value = await res.json()
        } catch (err) {
            error.value = err.message
        }
    }
    return { types, error, loadTypes }
}

export default getTypes