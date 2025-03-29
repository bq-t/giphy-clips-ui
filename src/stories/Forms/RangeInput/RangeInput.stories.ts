import type { Meta, StoryObj } from '@storybook/vue3'
import { RangeInput, type RangeInputProps } from '@/components/RangeInput'

export default {
  title: 'Forms/RangeInput',
  component: RangeInput,
} as Meta<typeof RangeInput>

export const Base: StoryObj<typeof RangeInput> = {
  args: { modelValue: 0 },
  render: (args: RangeInputProps) => ({
    components: { RangeInput },
    setup: () => ({ args }),
    template: `
      <div style="width: 500px;">
        <RangeInput v-bind="args" />
      </div>
    `,
  }),
}