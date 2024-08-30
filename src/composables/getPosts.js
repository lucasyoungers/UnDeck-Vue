import { ref } from "vue"
import { statusCheck } from "@/lib/utils"

const path = process.env.NODE_ENV === "development" ? "http://localhost:3080" : "";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    const loadPosts = async () => {
        try {
            const res = await fetch(path + "/api/blog/posts?pageSize=6")
            await statusCheck(res)
            const data = await res.json()
            posts.value = data
        } catch (err) {
            error.value = err.message
        }
    }
    return { posts, error, loadPosts }
}

export default getPosts