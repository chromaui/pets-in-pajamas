import type { Preview } from '@storybook/react-native';
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
        date: /Date$/,
      },
    },
  },
};

export default preview;
