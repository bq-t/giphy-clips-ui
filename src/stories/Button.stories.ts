import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/Button/Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    prependIcon: {
      control: { type: 'select' },
      options: ['local-fire-department-outline', 'explore-outlined'],
      defaultValue: null,
    },
    appendIcon: {
      control: { type: 'select' },
      options: ['local-fire-department-outline', 'explore-outline'],
      defaultValue: null,
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
} as Meta<typeof Button>

export const DefaultButton: StoryObj<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Button</Button>',
})