import type { Preview } from '@storybook/vue3'
import '../src/assets/main.css'
import '@fontsource-variable/montserrat'
import '@fontsource/material-icons-round'
import '@fontsource/material-icons'

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
