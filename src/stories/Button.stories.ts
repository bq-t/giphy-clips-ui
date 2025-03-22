import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '@/components/Button'

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
    color: {
      control: { type: 'select' },
      options: ['primary', 'black'],
      defaultValue: 'black',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
} as Meta<typeof Button>

export const DefaultButton: StoryObj<typeof Button> = {
  args: {
    prependIcon: 'star-outline',
    color: 'black',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args">Button</Button>
        <Button v-bind="args" loading>Loading Button</Button>
        <Button v-bind="args" disabled>Disabled Button</Button>
      </div>
    `,
  }),
}

export const IconButton: StoryObj<typeof Button> = {
  args: {
    icon: 'star-outline',
    color: 'black',
    loading: false,
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" />
        <Button v-bind="args" loading />
        <Button v-bind="args" disabled />
      </div>
    `,
  }),
}