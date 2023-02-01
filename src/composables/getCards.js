import { ref } from "vue"
import { statusCheck } from "@/lib/utils"
import useErrorStore from "@/stores/error"

const getCards = () => {
    const errorStore = useErrorStore()
    const cards = ref([])
    const error = ref(null)
    const loadCards = async () => {
        try {
            errorStore.setCardsNotFound(false)
            const res = await fetch("http://localhost:3080/api/random?pageSize=50") // TODO: remove localhost url
            await statusCheck(res)
            const data = await res.json()
            if (data.count == 0) {
                errorStore.setCardsNotFound(true)
            }
            cards.value = data.data.sort(() => Math.random() - 0.5)
        } catch (err) {
            error.value = err.message
        }
    }
    return { cards, error, loadCards }
}

export default getCards