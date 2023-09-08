import { ref } from "vue"
import { statusCheck } from "@/lib/utils"
import useErrorStore from "@/stores/error"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getSearchCards = query => {
    const errorStore = useErrorStore()

    const searchCards = ref([])
    const onLastPage = ref(false)
    const searchError = ref(null)

    let page = 1

    const loadSearchCards = async () => {
        try {
            errorStore.setCardsNotFound(false)

            let queryParams = new URLSearchParams(query)
            queryParams.append("pageSize", 50)
            queryParams.append("page", page)

            const res = await fetch(path + `/api/search?${queryParams.toString()}`)
            await statusCheck(res)
            const data = await res.json()

            if (data.page * data.pageSize >= data.totalCount) {
                onLastPage.value = true
            }

            if (data.count == 0) {
                errorStore.setCardsNotFound(true)
            }

            searchCards.value = searchCards.value.concat(data.data)
            page += 1
        } catch (err) {
            searchError.value = err.message
        }
    }

    return { searchCards, onLastPage, searchError, loadSearchCards }
}

export default getSearchCards