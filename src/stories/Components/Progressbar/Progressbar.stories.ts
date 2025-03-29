import type { Meta, StoryObj } from '@storybook/vue3'
import { Progressbar, ProgressbarProps } from '@/components/Progressbar'

export default {
  title: 'Components/Progressbar',
  component: Progressbar,
} as Meta<typeof Progressbar>

export const Base: StoryObj<typeof Progressbar> = {
  args: { modelValue: 0 },
  render: (args: ProgressbarProps) => ({
    components: { Progressbar },
    setup: () => ({ args }),
    template: `
      <div style="width: 500px;">
        <Progressbar v-bind="args" />
      </div>
    `,
  })
}

export const HalfLoaded: StoryObj<typeof Progressbar> = {
  ...Base,
  args: { ...Base.args, modelValue: 50 },
}

export const FullLoaded: StoryObj<typeof Progressbar> = {
  ...Base,
  args: { ...Base.args, modelValue: 100 },
}