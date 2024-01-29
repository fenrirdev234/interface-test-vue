import type { Meta, StoryObj } from '@storybook/vue3'

import FooterSectionVue from './FooterSection.vue'

const Footer = {
  title: 'UI/Section/Footer',
  component: FooterSectionVue
} satisfies Meta<typeof FooterSectionVue>

export default Footer
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  render: () => ({
    components: { FooterSectionVue },
    template: '<FooterSectionVue />'
  })
}
