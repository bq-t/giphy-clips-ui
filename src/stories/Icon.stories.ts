import type { Meta, StoryObj } from '@storybook/vue3'
import { Icon } from '@/components/Icon'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      controls: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
} as Meta<typeof Icon>

export const DefaultIcon: StoryObj<typeof Icon> = (args) => ({
  components: { Icon },
  args: {
    name: 'star',
  },
  setup() {
    return { args }
  },
  template: '<Icon v-bind="args" />',
})