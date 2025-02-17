import type { Meta, StoryObj } from '@storybook/vue3'
import { List, ListItem } from '@/components/List'

export default {
  title: 'List',
  component: List,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['column', 'row'],
      defaultValue: 'column',
    },
  },
} as Meta<typeof List>

const defaultItems = [
  {
    title: 'First item',
    icon: 'star-outline',
  },
  {
    title: 'Second item',
    icon: 'local-fire-department-outline',
  },
  {
    title: 'Third item',
    icon: 'favorite-outline',
  },
]

export const DefaultList: StoryObj<typeof List> = {
  args: {
    items: defaultItems,
    type: 'column',
  },
  render: (args) => ({
    components: { List },
    setup() {
      return { args }
    },
    template: '<List v-bind="args" />',
  }),
}

export const ColumnList: StoryObj<typeof List> = {
  args: {
    items: defaultItems,
    type: 'column',
  },
  render: (args) => ({
    components: { List, ListItem },
    setup() {
      return { args }
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

export const RowList: StoryObj<typeof List> = {
  args: {
    items: defaultItems,
    type: 'row',
  },
  render: (args) => ({
    components: { List, ListItem },
    setup() {
      return { args }
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