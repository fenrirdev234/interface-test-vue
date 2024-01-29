import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import HomeViewVue from './HomeView.vue'

const Home = {
  title: 'UI/Pages/Home',
  component: HomeViewVue
} satisfies Meta<typeof HomeViewVue>

export default Home
type Story = StoryObj<typeof Home>

export const Default: Story = {
  render: () => ({
    components: { HomeViewVue },
    template: '<HomeViewVue />'
  })
}
Default.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter()
]
