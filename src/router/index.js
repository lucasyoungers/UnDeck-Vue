import { createRouter, createWebHistory } from "vue-router"

const lazyLoad = view => (() => import(/* webpackChunkName: "lazy-view-[request]" */ `@/views/${view}.vue`))

const routes = [
    {
        path: "/",
        name: "Home",
        component: lazyLoad("Home")
    },
    {
        path: "/search",
        name: "Search",
        component: lazyLoad("Search"),
    },
    {
        path: "/deck",
        name: "Deck",
        component: lazyLoad("Deck")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.afterEach((to, from) => {
    document.title = `UnDeck - ${to.name}`
})

export default router