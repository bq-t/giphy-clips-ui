import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, type ButtonProps } from '@/components/Button'
import { vueRouter } from 'storybook-vue3-router'

export default {
  title: 'Components/Button/IconButton',
  component: Button,
  argTypes: {
    icon: {
      control: 'select',
      options: ['local-fire-department-outline', 'explore-outline'],
    },
  },
} as Meta<typeof Button>

export const Base: StoryObj<typeof Button> = {
  args: { icon: 'add' },
  decorators: [vueRouter()],
  render: (args: ButtonProps) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args" />',
  }),
}

export const Colors: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" />
        <Button v-bind="args" color="black" />
      </div>
    `,
  }),
}

export const Sizes: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" size="sm" />
        <Button v-bind="args" size="md" />
        <Button v-bind="args" size="lg" />
      </div>
    `,
  }),
}

export const Loading: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" loading />
        <Button v-bind="args" color="black" loading />
      </div>
    `,
  }),
}

export const Disabled: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary" disabled />
        <Button v-bind="args" color="black" disabled />
      </div>
    `,
  }),
}