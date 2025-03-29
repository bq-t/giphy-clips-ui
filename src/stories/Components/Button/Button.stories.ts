import type { Meta, StoryObj } from '@storybook/vue3'
import { Button, type ButtonProps } from '@/components/Button'
import { vueRouter } from 'storybook-vue3-router'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    prependIcon: {
      control: 'select',
      options: ['local-fire-department-outline', 'explore-outline'],
    },
    appendIcon: {
      control: 'select',
      options: ['local-fire-department-outline', 'explore-outline'],
    },
  },
} as Meta<typeof Button>

export const Base: StoryObj<typeof Button> = {
  decorators: [vueRouter()],
  render: (args: ButtonProps) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Colors: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" color="primary">Primary</Button>
        <Button v-bind="args" color="black">Black</Button>
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
        <Button v-bind="args" size="sm">Small</Button>
        <Button v-bind="args" size="md">Medium</Button>
        <Button v-bind="args" size="lg">Large</Button>
      </div>
    `,
  }),
}

export const WithIcons: StoryObj<typeof Button> = {
  ...Base,
  render: (args: ButtonProps) => ({
    ...Base.render(args),
    template: `
      <div :style="{ display: 'flex', alignItems: 'center', gap: '1rem' }">
        <Button v-bind="args" prepend-icon="add">Add to cart</Button>
        <Button v-bind="args" append-icon="open-in-new">Explore</Button>
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
        <Button v-bind="args" color="primary" loading>Primary</Button>
        <Button v-bind="args" color="black" loading>Black</Button>
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
        <Button v-bind="args" color="primary" disabled>Primary</Button>
        <Button v-bind="args" color="black" disabled>Black</Button>
      </div>
    `,
  }),
}