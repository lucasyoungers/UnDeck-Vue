import { ref } from "vue"
import { statusCheck } from "@/lib/utils"
import useErrorStore from "@/stores/error"

const getSearchCards = query => {
    const errorStore = useErrorStore()
    const searchCards = ref([])
    const searchError = ref(null)
    const loadSearchCards = async () => {
        searchCards.value = []
        try {
            errorStore.setCardsNotFound(false)
            const queryParams = new URLSearchParams(query)
            const res = await fetch(`http://localhost:3080/api/search?${queryParams.toString()}`)
            await statusCheck(res)
            const data = await res.json()
            if (data.count == 0) {
                errorStore.setCardsNotFound(true)
            }
            searchCards.value = data.data
        } catch (err) {
            searchError.value = err.message
        }
    }
    return { searchCards, searchError, loadSearchCards }
}

export default getSearchCards