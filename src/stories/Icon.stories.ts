import type { Meta, StoryObj } from '@storybook/vue3'
import { Icon } from '@/components/Icon'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: {
      controls: { type: 'select' },
      options: ['black', 'white', 'primary'],
      defaultValue: 'black',
    },
    size: {
      controls: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
  },
} as Meta<typeof Icon>

export const DefaultIcon: StoryObj<typeof Icon> = {
  args: {
    name: 'star',
    color: 'black',
    size: 'lg',
    rounded: true,
  },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: `
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="star" color="black" size="md" />
        <Icon name="star" color="black" size="sm" />
      </div>
    `,
  }),
}

export const PrimaryIcon: StoryObj<typeof Icon> = {
  args: {
    name: 'local-fire-department-outline',
    color: 'primary',
    size: 'lg',
    rounded: true,
  },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: `
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <Icon v-bind="args" />
        <Icon name="local-fire-department-outline" color="primary" size="md" />
        <Icon name="local-fire-department-outline" color="primary" size="sm" />
      </div>
    `,
  }),
}