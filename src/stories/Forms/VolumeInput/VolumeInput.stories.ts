import type { Meta, StoryObj } from '@storybook/vue3'
import { VolumeInput, type VolumeInputProps } from '@/components/VolumeInput'

export default {
  title: 'Forms/VolumeInput',
  component: VolumeInput,
} as Meta<typeof VolumeInput>

export const Base: StoryObj<typeof VolumeInput> = {
  args: { modelValue: 0 },
  render: (args: VolumeInputProps) => ({
    components: { VolumeInput },
    setup: () => ({ args }),
    template: `
      <div style="width: 130px;">
        <VolumeInput v-bind="args" />
      </div>
    `,
  }),
}

export const Expanded: StoryObj<typeof VolumeInput> = {
  ...Base,
  render: (args: VolumeInputProps) => ({
    ...Base.render(args),
    template: '<VolumeInput v-bind="args" expanded />',
  }),
}