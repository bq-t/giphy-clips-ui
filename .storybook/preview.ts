import type { Preview } from '@storybook/vue3'
import '@/styles/main.scss'

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    layout: 'centered',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '390px', height: '844px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '1024px', height: '1366px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1920px', height: '945px' },
        },
      },
    },
  },
};

export default preview;
