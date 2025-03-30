import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge, type BadgeProps } from '@/components/Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>

export const Base: StoryObj<typeof Badge> = {
  args: {
    color: 'black',
    size: 'md',
  },
  render: (args: BadgeProps) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
}

export const Colors: StoryObj<typeof Badge> = {
  ...Base,
  render: (args: BadgeProps) => ({
    ...Base.render(args),
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" color="primary">Primary</Badge>
        <Badge v-bind="args" color="black">Black</Badge>
      </div>
    `,
  }),
}

export const Sizes: StoryObj<typeof Badge> = {
  ...Base,
  render: (args: BadgeProps) => ({
    ...Base.render(args),
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Badge v-bind="args" size="sm">Small</Badge>
        <Badge v-bind="args" size="md">Medium</Badge>
        <Badge v-bind="args" size="lg">Large</Badge>
      </div>
    `,
  }),
}