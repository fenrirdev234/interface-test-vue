import { setup, type Preview } from '@storybook/vue3'
import '../src/assets/main.css'
import '@fontsource-variable/montserrat'
import '@fontsource/material-icons-round'
import '@fontsource/material-icons'
import { createPinia } from 'pinia'

import Toast, { type PluginOptions } from 'vue-toastification'

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

setup((app) => {
  //👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
  app.use(createPinia())
  app.use(Toast, options)
})
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
