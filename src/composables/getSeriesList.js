import { ref } from "vue"

const getSeriesList = () => {
    const seriesList = ref([
        "Base", "Gym", "Neo",
        "E-Card",
        "EX", "POP",
        "Diamond & Pearl", "Platinum",
        "Heart Gold & Soul Silver",
        "Black & White", "XY",
        "Sun & Moon",
        "Sword & Shield"
    ])
    return { seriesList }
}

export default getSeriesList