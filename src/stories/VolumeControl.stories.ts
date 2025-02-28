import type { Meta, StoryObj } from '@storybook/vue3'
import { VolumeControl } from '@/components/VolumeControl'

export default {
  title: 'VolumeControl',
  component: VolumeControl,
} as Meta<typeof VolumeControl>

export const DefaultVolumeControl: StoryObj<typeof VolumeControl> = {
  args: {
    modelValue: 20,
  },
  render: (args) => ({
    components: { VolumeControl },
    setup() {
      return { args }
    },
    template: '<VolumeControl v-bind="args" />',
  }),
}