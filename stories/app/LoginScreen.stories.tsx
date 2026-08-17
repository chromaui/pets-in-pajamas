import type { Meta, StoryObj } from '@storybook/react-native';

import LoginScreen from '../../app/login';

const meta = {
  title: 'Screen/Login',
  component: LoginScreen,
} satisfies Meta<typeof LoginScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: 'Invalid email or password. Please try again.',
  },
};

