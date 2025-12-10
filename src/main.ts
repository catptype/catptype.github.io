import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router' // We will create this next
import './style.css'
import App from './App.vue'
import i18n from './i18n'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
