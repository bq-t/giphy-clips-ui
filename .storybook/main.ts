import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  staticDirs: ['./public'],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      docgen: 'vue-component-meta',
    },
  },
  features: {
    storyStoreV7: true,
  },
};
export default config;
