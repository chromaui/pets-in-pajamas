import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  framework: '@storybook/react-native',
  stories: ['../stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [],
};

export default main;
