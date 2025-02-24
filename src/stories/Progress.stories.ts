import type { Meta, StoryObj } from '@storybook/vue3'
import { Progress } from '@/components/Progress'

export default {
  title: 'Progress',
  component: Progress,
} as Meta<typeof Progress>

export const DefaultProgress: StoryObj<typeof Progress> = {
  args: {
    modelValue: 20,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 500px;">
        <Progress v-bind="args" />
      </div>
    `,
  })
}