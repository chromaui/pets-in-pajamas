import type { Meta, StoryObj } from '@storybook/react-native';

import CreatePostScreen from '@/app/(tabs)/create-post';

const meta = {
  title: 'Screen/CreatePost',
  component: CreatePostScreen,
} satisfies Meta<typeof CreatePostScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCaption: Story = {
  args: {
    caption: 'Luna discovered pajamas and honestly... same 😴🐾',
  },
};
