import type { Meta, StoryObj } from '@storybook/vue3'
import { List, ListItem, type ListProps } from '@/components/List'
import { vueRouter } from 'storybook-vue3-router'

export default {
  title: 'Components/List',
  component: List,
} as Meta<typeof List>

export const Base: StoryObj<typeof List> = {
  args: {
    items: [
      { title: 'First item', icon: 'star-outline' },
      { title: 'Second item', icon: 'local-fire-department-outline' },
      { title: 'Third item', icon: 'favorite-outline' },
    ],
  },
  decorators: [vueRouter()],
  render: (args: ListProps) => ({
    components: { List },
    setup: () => ({ args }),
    template: '<List v-bind="args" />',
  }),
}

export const Types: StoryObj<typeof List> = {
  ...Base,
  render: (args: ListProps) => ({
    ...Base.render(args),
    template: `
      <div style="display: flex; gap: 1.5rem;">
        <List v-bind="args" type="column" />
        <List v-bind="args" type="row" />
      </div>
    `,
  }),
}

export const WithSlot: StoryObj<typeof List> = {
  ...Base,
  render: (args: ListProps) => ({
    ...Base.render(args),
    components: {
      List,
      ListItem,
    },
    template: `
      <List v-bind="args">
        <template #item="{ props }">
          <ListItem
            :title="props.title"
            :icon="props.icon"
          />
        </template>
      </List>
    `,
  }),
}