import './assets/main.css'
import 'vue-toastification/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast, { type PluginOptions } from 'vue-toastification'
import App from './App.vue'
import router from './router'

const options: PluginOptions = {
  // You can set your default options here
  transition: 'Vue-Toastification__bounce',
  maxToasts: 5,
  newestOnTop: true,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  closeButton: 'button',
  icon: 'fas fa-rocket',
  rtl: false
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Toast, options)

app.mount('#app')
