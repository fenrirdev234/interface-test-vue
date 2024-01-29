import type { Meta, StoryObj } from '@storybook/vue3'
import HeaderSectionVue from './HeaderSection.vue'

const Header = {
  title: 'UI/Section/Header',
  component: HeaderSectionVue
} satisfies Meta<typeof HeaderSectionVue>

export default Header

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => ({
    components: { HeaderSectionVue },
    template: '<HeaderSectionVue />'
  })
}
