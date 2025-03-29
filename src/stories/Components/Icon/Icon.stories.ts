import type { Meta, StoryObj } from '@storybook/vue3'
import { Icon, IconProps } from '@/components/Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta<typeof Icon>

export const Base: StoryObj<typeof Icon> = {
  args: { name: 'star' },
  render: (args: IconProps) => ({
    components: { Icon },
    setup: () => ({ args }),
    template: '<Icon v-bind="args" />',
  }),
}

export const Colors: StoryObj<typeof Icon> = {
  ...Base,
  render: (args: IconProps) => ({
    ...Base.render(args),
    template: `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Icon v-bind="args" color="black" />
        <Icon v-bind="args" color="white" />
        <Icon v-bind="args" color="primary" />
      </div>
    `,
  }),
}