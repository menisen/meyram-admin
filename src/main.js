import { createApp } from 'vue'
import './style.css'
import './assets/css/dataTables.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'



import 'vue-toastification/dist/index.css'

const pinia = createPinia()

const options = {

}

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
app.use(Toast, options)
