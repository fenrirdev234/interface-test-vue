import DropdownVue from '@/components/ui/Dropdown/DropdownVue.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'UI/Dropdown',
  component: DropdownVue,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: { primary: false } // default value
}
export default meta

export const Primary = {
  args: {
    data: [
      {
        name: 'Software  Engineering',
        id: '0398P'
      },
      {
        name: 'industrial Engineering',
        id: '1111'
      }
    ],
    'initial-value': {
      name: 'Software  Engineering',
      id: '0398P'
    }
  }
}
