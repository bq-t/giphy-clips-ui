import type { Meta, StoryObj } from '@storybook/vue3'
import { Slider } from '@/components/Slider'

export default {
  title: 'Slider',
  component: Slider,
} as Meta<typeof Slider>

export const DefaultSlider: StoryObj<typeof Slider> = {
  args: {
    modelValue: 20,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 500px;">
        <Slider v-bind="args" />
      </div>
    `,
  }),
}