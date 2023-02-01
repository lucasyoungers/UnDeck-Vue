import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const getSeries = () => {
    let sets = []
    const series = ref([])
    const error = ref(null)
    const loadSeries = async () => {
        try {
            const res = await fetch("http://localhost:3080/api/sets")
            await statusCheck(res)
            sets = await res.json()
            series.value = [...new Set(sets.map(set => set.series))]
        } catch (err) {
            error.value = err.message
        }
    }
    return { series, error, loadSeries }
}

export default getSeries