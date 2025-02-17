import type { Meta, StoryObj } from '@storybook/vue3'
import { List, ListItem } from '@/components/List'

export default {
  title: 'ListItem',
  component: ListItem,
} as Meta<typeof ListItem>

export const DefaultListItem: StoryObj<typeof ListItem> = {
  args: {
    title: 'Editable item',
    icon: 'star-outline',
    active: false,
  },
  render: (args) => ({
    components: {
      List,
      ListItem,
    },
    setup() {
      return { args }
    },
    template: `
      <List>
        <ListItem v-bind="args" />
        <ListItem
          title="Example list item"
          icon="favorite-outline"
        />
        <ListItem
          title="Example active list item"
          icon="favorite-outline"
          :active="true"
        />
      </List>
    `,
  }),
}