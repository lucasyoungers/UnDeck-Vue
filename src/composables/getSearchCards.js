import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getSearchCards = query => {
    const searchCards = ref([])
    const searchError = ref(null)
    const loadSearchCards = async () => {
        searchCards.value = []
        try {
            const queryParams = new URLSearchParams(query)
            const res = await fetch(`http://localhost:3080/api/search?${queryParams.toString()}`)
            await statusCheck(res)
            searchCards.value = (await res.json()).data
        } catch (err) {
            searchError.value = err.message
        }
    }
    return { searchCards, searchError, loadSearchCards }
}

export default getSearchCards