import type { Preview } from '@storybook/react-native-web-vite'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const preview: Preview = {
  decorators: [
    (Story) => (
      <SafeAreaProvider>
        <Story />
      </SafeAreaProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
