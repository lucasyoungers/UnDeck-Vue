import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "@/App"
import router from "@/router"
import "@/assets/global.css"

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app")