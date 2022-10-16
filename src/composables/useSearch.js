import { ref } from "vue"

const useSearch = () => {
    const searchBar = ref(null)
    const advancedMenu = ref(null)

    return { searchBar, advancedMenu }
}

export default useSearch