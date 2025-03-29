import type { Meta, StoryObj } from '@storybook/vue3'
import { ListItem, type ListItemProps } from '@/components/List'
import { vueRouter } from 'storybook-vue3-router'

export default {
  title: 'Components/List/ListItem',
  component: ListItem,
} as Meta<typeof ListItem>

export const Base: StoryObj<typeof ListItem> = {
  args: {
    title: 'Dashboard',
    icon: 'dashboard-outline',
  },
  decorators: [vueRouter()],
  render: (args: ListItemProps) => ({
    components: { ListItem },
    setup: () => ({ args }),
    template: '<ListItem v-bind="args" />',
  }),
}

export const Active: StoryObj<typeof ListItem> = {
  ...Base,
  render: (args: ListItemProps) => ({
    ...Base.render(args),
    template: '<ListItem v-bind="args" active />'
  }),
}