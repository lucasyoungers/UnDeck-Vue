import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getCards = () => {
    const cards = ref([])
    const error = ref(null)
    const loadCards = async () => {
        try {
            const res = await fetch("http://localhost:3080/api/random?pageSize=50") // TODO: remove localhost url
            await statusCheck(res)
            const data = (await res.json()).data
            cards.value = data.sort(() => Math.random() - 0.5)
        } catch (err) {
            error.value = err.message
        }
    }
    return { cards, error, loadCards }
}

export default getCards