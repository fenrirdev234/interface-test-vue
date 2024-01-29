import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import SideMenuVue from './SideMenu.vue'

const SideMenu = {
  title: 'UI/Section/SideMenu',
  component: SideMenuVue
} satisfies Meta<typeof SideMenuVue>

export default SideMenu
type Story = StoryObj<typeof SideMenu>

export const Default: Story = {
  render: () => ({
    components: { SideMenuVue },
    template: '<SideMenuVue />'
  })
}
Default.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter()
]
