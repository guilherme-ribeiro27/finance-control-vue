import './assets/index.css'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';

const app = createApp(App)

app.use(router)
app.use(Vue3Toasity,{
    autoClose: 3000,
} as ToastContainerOptions)
app.mount('#app')
